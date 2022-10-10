import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//HANDLE EVENT
function Clicker() {
  function handleClick(e) {
    alert('Berhasil Terklik!')
    e.preventDefault()
  }

  return (
      <a href="#" onClick={handleClick}>Click Here</a>
  )

}


//METODE MENGGUNAKAN CLASS (lebih baik/recommended)
class App extends Component{
  render() {
    return (

      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <Clicker />
          </header>

      </div>
    );
  }

}


export default App;
