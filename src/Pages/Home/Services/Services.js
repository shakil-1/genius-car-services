import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [servises, setServises] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServises(data))
    }, [])
    return (
        <div id='services' className='container'>
            <h1 className='servises-title mx-5'>Our Services</h1>
            <div className="servises-container">
                {
                    servises.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;