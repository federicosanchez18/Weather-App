import React from  'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../Constant/weathers';

const icons = {
    [CLOUD] : 'cloud',
    [CLOUDY] : 'cloudy',
    [SUN] : 'sun',
    [RAIN] : 'rain',
    [SNOW] : 'snow',
    [WINDY] : 'windy'

}
const getWeatherIcon = (weatherState) => {
        const icon = icons[weatherState];
        if(icon)
            return <WeatherIcons name = {icon} size = '2x'> </WeatherIcons>
        else 
            return <WeatherIcons name = {'day-sunny'} size = '2x'> </WeatherIcons>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C° ` }</span>
    </div>
);

WeatherTemperature.propTypes ={
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired

};

export default WeatherTemperature;