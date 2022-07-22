import { Component } from 'react';
import MainComponent from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{
  
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <MainComponent />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;