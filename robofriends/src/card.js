import React from 'react';

const Card =({robot})=>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${robot.id}?size=200x200`} alt=""></img>
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    );
}
export default Card;
