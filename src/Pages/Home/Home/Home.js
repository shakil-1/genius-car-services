import React from 'react';

import Services from '../../Home/Services/Services';
import Hader from '../../Shared/Header/Hader';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';


const Home = () => {
    return (
        <div>
          <Hader></Hader>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;