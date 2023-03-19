import React, { useEffect, useState } from 'react';

function App() {
    const[data,setData]=useState()

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=> setData(data))
    },[])
    return (
        <div>
            {data?<img src={data.message} alt="A Random Dog"/>:<p>Loading...</p>}
        </div>
    );
}

export default App;