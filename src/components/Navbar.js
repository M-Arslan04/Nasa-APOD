import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div  
        className="container"
        style={{

            // alignSelf:'center',
            fontSize:30}}>
            <Link style={{borderColor:'Highlight' , color:'blue', fontFamily:'cursive'}} to='/'>Take Me to Home!</Link>
        
        </div>
     );
}
 
export default NavBar;