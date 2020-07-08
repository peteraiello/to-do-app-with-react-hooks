import React from 'react';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const listInput = (props) => {

    const icon = <FontAwesomeIcon icon={ faPlusSquare } />;



    return(
        <div className="listInput">
            <form onSubmit={props.submit}>
                <label>
                    <input className="text" type="text" placeholder="add some fruit..." value={props.inputValue} onChange={props.change}></input>
                    <button className="button" type="submit" value="add">{icon}</button> 
                </label>
            </form>
        </div>
    )
}

export default listInput;