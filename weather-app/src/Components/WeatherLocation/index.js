import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import trasformWeather from './../../services/trasformWeather'
import {api_weather} from './../../Constant/api_url';
import './styles.css' ;



const data = {
    temperature : 5,
    //weatherState : SUN,
    humidity : 10 ,
    wind : '10 m/s '
};

class WeatherLocaltion  extends Component {
    
    constructor(){
        super();
        this.state = {
            city : "Brazil",
            data : data,
        }
    }

    
    handleUpdateClick = () => {

        fetch(api_weather).then(resolve => {
            console.log(resolve);
            debugger;
            return resolve.json();
        }).then(data =>{
            const newWeather = trasformWeather(data);
            console.log(newWeather);
             this.setState({
                  
                  data: newWeather,      
            });
             console.log(data);
             debugger;
        });
    
    }
    render(){
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick = {this.handleUpdateClick}  >Actulizar</button>
            </div>
        );
    };
    
};

export default WeatherLocaltion;