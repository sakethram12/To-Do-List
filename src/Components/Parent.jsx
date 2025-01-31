import React from "react";
import Child from "./Child";

function Parent(){
    const parentName = "Dhoni";
    const childName = "Ziva";
    return(
        <>
            <div>Parent Name</div>
            <hr />
            <div><Child data={parentName} data1={childName}></Child></div>
        </>
         
    );
}

export default Parent;