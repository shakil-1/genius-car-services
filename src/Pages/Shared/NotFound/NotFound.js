import React from 'react';
import sleeping from '../../../images/4of4.jpg'

const NotFound = () => {
    return (
        <div className='container-fluid'>
            <h2 className='text-center text-primary'>Product is not found!!</h2>
            <img className='w-100'  src={sleeping} alt="" />
            
        </div>
    );
};

export default NotFound;