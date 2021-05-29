import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { MenuGrid } from '../Components/MenuGrid/MenuGrid';
import { Navbar } from '../Components/Navbar/Navbar'

export const MenuPage = () => {
    return (
        <div>
            <Navbar />
            <MenuGrid categories={["Streamers", "Porn Stars", "Model"]}/>
            <Footer />
        </div>
        
    )
}