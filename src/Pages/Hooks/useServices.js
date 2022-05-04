import { useEffect, useState } from "react";


const useServices = () => {
    const [servises, setServises] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServises(data))
    }, [])

    return [servises, setServises];
};

export default useServices;