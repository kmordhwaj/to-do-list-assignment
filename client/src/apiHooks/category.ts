import { useEffect, useState } from "react"

const fetchCategory = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(false); 
    
    useEffect(()=>{
       
    }, [url]);
}