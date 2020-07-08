import React from 'react';
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const listOutput = (props) => {

    const icon = <FontAwesomeIcon icon={ faMinusSquare } />;

    const listFruits = props.items.map((fruit, index) => {
        return <li key={index}>{fruit} <span onClick={() => props.delete(index)} className="icon">
        { icon }
        </span></li>
    })

   return(
    <div className="listOutput">
       <ul>
           { listFruits } 
       </ul>
    </div>
   )
}

export default listOutput;