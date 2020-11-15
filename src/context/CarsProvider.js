import React, { Component } from 'react';
import CarsContext from './CarsContext';

class CarsProvider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.handleCar = this.handleCar.bind(this);
  }

  handleCar(car, side) {
    this.setState({
      ...this.state,
      [car]: side,
    })
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.handleCar,
    }
    const {children} = this.props;
    return(
      <CarsContext.Provider value={{ ...contextValue }}>
        {children}
      </CarsContext.Provider>
    )
  }
}

export default CarsProvider;
