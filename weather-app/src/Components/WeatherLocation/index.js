import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import {
    SUN,
} from './../../Constant/weathers';
import './styles.css' 

const data = {
    temperature : 5,
    weatherState : SUN,
    humidity : 10 ,
    wind : '10 m/s '
}
class WeatherLocaltion  extends Component {
    render(){
        return (
            <div className='weatherLocationCont'>
            <Location city={'Wilde - Buenos Aires'}></Location>
            <WeatherData data={data}></WeatherData>
            </div>
        );
    };
    
};

export default WeatherLocaltion;