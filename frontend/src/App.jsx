import {useState,useEffect} from 'react';
import './App.css';

function App(){
  const [text,setText] = useState("checking Connection ..........");
  useEffect(()=>{
      const checkBackend = async()=>{
        try{
          const res = await fetch(`${import.meta.env.VITE_API_URL}/health`);
        if(!res.ok){
          throw new Error("fetched response is not ok");
        }
        const data = await res.json();
      (data.status === "good")?setText("Backend Working"): setText("Backend is giving response but status is not good");
        }catch(err){
          console.error("Something went wrong with fetching status of backend health:",err);
          setText("Something went wrong with fetching status of backend health");
        }
      }
      checkBackend();
  },[]);
  return(
    <div>
        <h1>Kagami</h1>
        <p>{text}</p>
    </div>
  );
}

export default App;