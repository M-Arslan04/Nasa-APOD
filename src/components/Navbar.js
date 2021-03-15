import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div  
        className="container"
        style={{
            fontSize:30}}>
            <Link style={{borderColor:'Highlight' , color:'blue', fontFamily:'cursive'}} to='/'>Back to Home!</Link>
        
        </div>
     );
}
 
export default NavBar;