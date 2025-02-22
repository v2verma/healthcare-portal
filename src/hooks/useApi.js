import { useEffect, useState } from "react";


export const useApi = (url, options) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios(url, options);
            setData(response.data);
        }catch(error){
            setError(error)
        }

        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return {
        isLoading,
        data,
        error
    }
}
