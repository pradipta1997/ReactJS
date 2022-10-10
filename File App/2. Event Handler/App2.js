import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//HANDLE EVENT

//Menggunakan Function
// function Clicker() {
//   function handleClick(e) {
//     alert('Berhasil Terklik!')
//     e.preventDefault()
//   }
//
//   return (
//       <a href="#" onClick={handleClick}>Click Here</a>
//   )
//
// }

//Menggunakan Class
class Toggle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            toggleStatus: true
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState(state => ({
            toggleStatus: !state.toggleStatus
        }))
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.toggleStatus ? 'ON' : 'OFF'}
                <p>Kondisi Sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
            </button>
        )
    }

}


//METODE MENGGUNAKAN CLASS (lebih baik/recommended)
class App extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <Toggle />
                </header>

            </div>
        );
    }

}


export default App;
