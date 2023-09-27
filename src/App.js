import React from 'react';

import './App.css';
import Header from "./Atoms/header";
import Footer from "./Atoms/footer";
import Avatar from "./Atoms/avatar";
import Card from "./Atoms/card";
import Badge from "./Atoms/badge";
import Counter from './Atoms/counter';

import atardecer from './atardecer.webp'

function App() {
    return (
        <div className="App">
                {/* Header */}
                <Header title="Colombian Beaches" />
            <div className="container">
                {/* Avatar */}
                <Avatar 
                imageSrc={atardecer}
                description= "Peace and quiet on the beach"/>

                {/* Card */}
                <Card title="Tayrona Park" content="Location: Santa Marta - Colombia"/>
                <Card title="Baru Beach" content="Location: Cartagena - Colombia"/>
                <Card title="Rosario Island" content="Location: Cartagena - Colombia"/>
                <Counter/>

                {/* Badge */}
                <Badge label="New!"/>
            </div>

                {/* Footer */}
                <Footer content="Created with ❤️ by Pau"/>
        </div>
    );
}

export default App;