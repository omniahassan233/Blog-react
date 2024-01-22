//this is custom hook, all hooks must strat with the word use or it will not work

import { useState , useEffect } from "react";

const useFetch = (url)=>{

    const [data,setData]=useState(null);
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
   
    useEffect(()=>
    {

        const abortCont = new AbortController();

       // using time out too just simulate loading messages
       setTimeout(()=>{
         // console.log("kdkc"),[name]
         fetch(url,{signal: abortCont.signal})
         .then(res => {
            console.log(res);
            if(!res.ok){
                throw Error("Could not fetch the data for that resource")
            }
             return res.json();
         })
         .then((data)=>{
             setData(data)
             setIsPending(false)
             setError(null)
         })
         .catch(err =>{
            if(err.name === "AbortError"){
                console.log("fetch aborted");
            }else{
                console.log(err.message);
                setError(err.message);
                setIsPending(false)
            }
         })
       },1000);
       return ()=> abortCont.abort();
    }
    ,[url]);

    return {data,isPending,error}
}

export default useFetch;