import React from 'react';
import useServices from '../Hooks/useServices';

const ManageServices = () => {
    const [servises, setServises] = useServices();
    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = servises.filter(service => service._id !== id);
                    setServises(remaining);

                })
        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services!!</h2>
            {
                servises.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handelDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;