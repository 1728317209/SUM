import React from 'react';
import { Button } from '@alifd/next';
import './index.scss';

export default class StepOne extends React.Component <{
  onStepChange: Function
}, {
  isReady: Boolean,
  readyNum: any,
  unReadyNum: any,
}> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      readyNum: 1,
      unReadyNum: 3,
    };
  }

  handleReady() {
    this.setState({
      isReady: true,
      readyNum: this.state.readyNum + 1,
    });
    this.props.onStepChange(1);
  }

  render = () => {
    console.log('this.state', this, this.state);
    const { isReady, readyNum, unReadyNum } = this.state;
    return (
      <div key={0} className="step-one">
        <div className="item">
          <span>如果准备就绪，请点击:</span>
          <Button type="primary" disabled={!!isReady} onClick={() => this.handleReady()}>就绪</Button>
        </div>
        <div className="item">
          <div>当前就绪人数 / 总人数:</div>
          {
            readyNum && unReadyNum
              ? <Button type="primary">{`${readyNum} / ${unReadyNum}`}</Button>
              : <Button type="primary">······</Button>
          }
        </div>
      </div>
    );
  }
}
