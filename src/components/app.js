import React, { Component } from 'react';
import moment from "moment"; 



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Ashton Washburn's Portfolio</h1>
        <PortfolioContainer />
        <PortfolioContainer />
        <PortfolioContainer />
        <h2>An Introduction to Introspection</h2>
        <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      </div>
    );
  }
}
