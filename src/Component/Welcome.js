import React, { Component } from 'react';

class Welcome extends Component {
    constructor () {
      super();
      this.state = {
        count: 0
      }
    }

    // add count + 1
    incrementCount() {
      this.setState({
        count: this.state.count+1
      });
    }

    // remove count - 1
    decrementCount() {
      this.setState({
        count: this.state.count-1
      });
    }

    render() {
        return (
          <div>
            <button id="btn-click" onClick={ () => this.incrementCount() }>Click up: { this.props.name }</button>
            <button id="btn-click" onClick={ this.decrementCount.bind(this) }>Click down: { this.props.name }</button>
            <pre> Valeur de count: { this.state.count }</pre>
          </div>
          );
      }
}

export default Welcome;