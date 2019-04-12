import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import trasformWeather from './../../services/trasformWeather'
import {api_weather} from './../../Constant/api_url';
import './styles.css' ;





class WeatherLocaltion  extends Component {
    
    constructor(){
        super();
        this.state = {
            city : "Brazil",
            data : null,
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
            {data ? 
                <WeatherData data={data}></WeatherData> :
                "Cargando ..." }
            </div>
        );
    };
    
};

export default WeatherLocaltion;