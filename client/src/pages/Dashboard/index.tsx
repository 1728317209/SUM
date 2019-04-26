import React, { Component } from 'react';
import Title from '../../components/Title';
import SmcStep from '../../components/SmcStep';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }

  changeHandler = (e) => {
    this.setState({
        step: parseInt(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.changeHandler} type="range" min={0} max={3} />
        <Title name="Secure multiparty summation" />
        <SmcStep
          step={this.state.step}
        />
      </div>
    );
  }
}
