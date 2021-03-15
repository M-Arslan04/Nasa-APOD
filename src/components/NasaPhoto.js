import React, { useEffect, useState } from 'react';

import NavBar from './Navbar'
const apikey = process.env.REACT_APP_NASA_KEY;
const NasaPhoto = () => {
    const [photodata, setPhotoData] = useState(null)
    const Credits = "APOD: Astronomy Picture of the Day"
    const Credits2 = "By Malik Arslan! "

    useEffect(() =>{

        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
            );
            const data = await res.json();
            setPhotoData(data);

        }
    }, [])

if(!photodata) return <div/>

    return ( 
        <React.Fragment>

            <NavBar/>
        <div className="container">
            <div className="row">


            {photodata.media_type==='image' ? (
                <div className="col-sm-4  view-first d-block">
            <img
            className="img-fluid"
            style={{ height:window.innerHeight/2,
                padding:"20px",// width:window.innerWidth/2
            maxWidth:window.innerWidth/1.25, maxHeight:'auto'
            }}
            src = {photodata.url}
            alt = {photodata.title}
            />
            </div> ) : (
                <div className="col-sm-4  view-first d-block">
            <iframe
            title="space-video"
            width="350px"
            height="350px"
            src={photodata.url}
            frameBorder='0'
            allow="encrypted-media"
            allowFullScreen
            className="photo"
            style={{padding:"20px"}}
            />
            </div>
            ) 
            }
            <div className="col-sm-2">
<div></div>
            </div>
            <div 
            style={{
                flex:1, flexDirection:'column',
                alignSelf:'flex-end', 
            // marginLeft:150,
             float:'right',
             
            width:window.innerWidth/2, 
            // float:'inline-end'
                    }} 
                    // className="col-7 col-xs-7 col-sm-7 col-md-7 col-lg-7 view-first card"
                    className="col-sm-6 view-first"
                    
            >
                <h1>{photodata.title}</h1>
                <h4>Dated : {photodata.date}</h4>
                <p>{photodata.explanation}</p>
                <p style={{borderColor:'Highlight' , color:'blue', fontFamily:'DinPro', fontSize:'20'}} >{Credits}</p>
                <p style={{borderColor:'Highlight' , color:'blue', fontFamily:'DinPro', fontSize:'20'}} >{Credits2}</p>
            </div>
            </div>

        </div >
        </React.Fragment>

     );
}
 
export default NasaPhoto;