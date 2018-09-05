import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <Search />
      </MuiThemeProvider>
    )
  }
}

export default App;
