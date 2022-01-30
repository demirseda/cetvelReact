import React, {useEffect, useState } from "react";

export const MenuItem = (props) => {

    const {name,to} = props;
    const [activate, setActive] = useState(false);
    
    return(
            <li onClick={()=> setActive(!activate)} > <a  className={`sideMenu ${!activate ? "inActive" : ""}`} href={`${to}`}> {name} </a> </li>
    );
}
export default MenuItem;
