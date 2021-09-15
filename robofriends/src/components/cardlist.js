import React from 'react';
import Card from './card';

const Cardlist = ({robots})=>{
    return(
        <div>
              { robots.map(robot => (
                        <Card key={robot.id} robot={robot}/>
                    ))
                }
            
        </div>
    )
}
export default Cardlist;