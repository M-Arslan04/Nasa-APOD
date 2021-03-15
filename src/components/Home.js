import React from 'react';
import {Link } from 'react-router-dom'

const Home = () => {
    return ( 
        <div  
        style={{fontFamily:"fantasy", fontSize:50 , display:'flex',
         justifyContent:'center', alignContent:'center',
          alignItems:'center', 
        //   marginTop:'200px',
          backgroundImage: `url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80')`,
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          height:window.innerHeight,
          width:window.innerWidth

          }}>
            
            <Link style={{borderColor:'Highlight' , color:'whitesmoke',  backgroundColor:"#516395",fontFamily:'cursive' }} to="/nasaphoto">Have A Look At The Picture Of The Day!</Link>

        </div>
     );
}
 
export default Home;