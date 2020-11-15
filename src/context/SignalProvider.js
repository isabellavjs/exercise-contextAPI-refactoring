import React, { Component } from 'react';
import SignalContext from './SignalContext';

class SignalProvider extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
    }
    this.handleSignal = this.handleSignal.bind(this);
  }

  handleSignal(signalColor) {
    this.setState({
      ...this.state,
      color: signalColor,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      changeSignal: this.handleSignal,
    }
    const { children } = this.props;
    return(
      <SignalContext.Provider value={contextValue}>
        {children}
      </SignalContext.Provider>
    );
  }
}

export default SignalProvider;
