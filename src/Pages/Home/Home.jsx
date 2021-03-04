import React from 'react';
import Header from '../../components/Header/Header';
import Pages from '../../Pages/About/AboutUs';
import Order from '../../Pages/Order/Order';
import Footer from '../../components/Footer/Footer';
import MenuList from '../Admin/MenuList/MenuList';

const Home = () => {
    return (
        <div>
            <Header />
            <Pages />
            <Order />
            <MenuList />
            <Footer />
        </div>
    );
};

export default Home;