import React, {Component} from "react";
import WeatherLocation from './Components/WeatherLocation'
import "./App.css";

class App extends Component {
  render() {
    return ( 
      <div className='App'>
          WeatherApp - prueba de error
          <WeatherLocation></WeatherLocation>
      </div>
    )
  }
}

export default App;