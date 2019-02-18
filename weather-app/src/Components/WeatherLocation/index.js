import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css' 


const WeatherLocaltion = () => (
    <div className='weatherLocationCont'>
        <Location city={'Wilde - Buenos Aires'}></Location>
        <WeatherData></WeatherData>
    </div>
    );

export default WeatherLocaltion;