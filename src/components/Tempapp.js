import React,{useState,useEffect} from 'react';
import "./css/style.css";
const Tempapp=()=>{
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a125876b3d1d31b0163a2c679b51c568`
            const response=await fetch(url);
            // console.log(response);
            const resJson=await response.json();
            setCity(resJson.main);
        } 
        fetchApi();
    },[search])
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event)=>{setSearch(event.target.value)}}></input>
                </div>
        {!city ? (
            <p>No Data Found</p>
        ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fa fa-street-view" aria-hidden="true"></i> {search}
            </h2>
            <h1 className="temp">
                {city.temp}
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min} | Max : {city.temp_max}</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        )}
            </div>
        </>
    )
}
export default Tempapp