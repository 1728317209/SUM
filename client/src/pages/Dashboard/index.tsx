import React, { Component } from 'react';
import Title from '../../components/Title';
import SmcStep from '../../components/SmcStep';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Title name="Secure multiparty summation" />
        <SmcStep />
      </div>
    );
  }
}
