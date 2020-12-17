import React, {useEffect, useState} from 'react'
import college_02 from '../images/college_02.jpg';
import Information from '../Information/Information';
import Ranking from '../Ranking/Ranking';
import Rating from '../Rating/Rating';
import Tabs from '../Tabs/Tabs';
import './Card.css';
import Ribbon from '../Ribbon/Ribbon';
import InfiniteScroll from 'react-infinite-scroll-component';


function Card() {
   const [clg, setClg] = useState([]);
   const [initial] =useState(0);
   const [next, setNext] = useState(10)
   

    
    

   


    useEffect(() =>{
        const getData =()=>{
            fetch('colleges.json')
              .then(response => response.json())
              .then(result => setClg(result.slice(initial,next)))
            }
        getData();
        
    },[initial,next]);

    console.log(clg);

    const scroll = () => {
        if(next<=40){
            console.log("scrolling");
            setNext(next=>next+10);
        }
    }
    

    
    return (
        <InfiniteScroll 
            dataLength={clg.length} 
            next={scroll}
            hasMore={true}
        >
             <div className="container" >
                <div className="grid">
                {
                    clg.map((data) =>{
                        return(
                            <div className="card">
                                <div className="image-header">
                                    <img src={college_02} alt="Avatar"/>                            
                                    <Rating 
                                        rating={data.rating} 
                                        text={data.rating_remarks} 

                                    />
                                        <Tabs 
                                            award={data.tags[0]} 
                                            distance={data.tags[1]} 

                                        />
                                    <Ranking ranking={data.ranking}/>
                                    <Ribbon ribbon={data.promoted}/>
                                </div>
                                <Information 
                                    name={data.college_name} 
                                    place={data.nearest_place[0]} 
                                    distance={data.nearest_place[1]} 
                                    famous_place={data.famous_nearest_places}
                                    offer={data.offertext}
                                    og_fees={data.original_fees}
                                    dis_fees={data.discounted_fees}
                                    fee_cycle={data.fees_cycle}
                                    amenities={data.amenties}
                                    discount={data.discount}
                                />
                            </div>
                        )
                    })
                    

                }
                    
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default Card
