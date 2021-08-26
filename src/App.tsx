import React from 'react';
import './App.css';
import {MyButton} from "./MyButton";
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Login} from "./Login";

function App() {
    return (
        <div className="App">
            <Login/>
        </div>
    );
}

function test() {
    console.log('test');
}

export default App;
