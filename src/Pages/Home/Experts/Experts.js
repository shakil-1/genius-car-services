import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert'

const experts = [
    { id: 1, name: 'Rana Sorkar', img: expart1 },
    { id: 2, name: 'Rana taloktar', img: expart2 },
    { id: 3, name: 'Rana torofdar', img: expart3 },
    { id: 4, name: 'Rana Sorkar', img: expart4 },
    { id: 5, name: 'Rana Sorkar', img: expart5 },
    { id: 6, name: 'Rana Sorkar', img: expart6 },
]
const Experts = () => {
    return (
        <div id="exparts" className='container'>
            <h2 className='text-primary text-center mt-5'>Our Expart</h2>
            <div className="row">
                {
                    experts.map(expart => <Expert key={expart.id} expart={expart}></Expert>)

                }
            </div>
        </div>
    );
};

export default Experts;