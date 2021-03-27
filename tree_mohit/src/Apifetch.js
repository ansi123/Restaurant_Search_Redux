import React from 'react'
import res from './restaurants.json';

const Apifetch = () => {
    return (
        <div>
        {res.map(data=>{
            return(
                <div key={data.data[0].id}>
                <h4>{data.data[0].distance}</h4>
                </div>
            )
        })}
        </div>
    )
}

export default Apifetch
