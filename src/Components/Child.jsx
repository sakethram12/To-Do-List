import React from "react";

function Child(props){
    return(
        <>
          <div>Parent name is  {props.data}</div>
          <div>Child name is  {props.data1}</div>
        </>
    );
}

export default Child