import React from 'react';
import { Slider, Step } from '@alifd/next';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import './index.scss';

const steps = ['准备就绪', '发送数据', '计算并发布结果'];

export default class SmcStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      isSponsor: false,
      encryptedSum: null,
      decryptedSum: null,
    };
  }

  handleIsSponsor = (isSponsor) => {
    if (isSponsor) {
      this.setState({ isSponsor });
    }
  }

  handleEncryptedSum = (encryptedSum) => {
    this.setState({ encryptedSum });
  }

  handleStepChange = (step) => {
    if (step > this.state.step) {
      this.setState({ step });
    }
  }

  renderStep = (step) => {

  }

  render() {
    const {
      step, isSponsor, encryptedSum, decryptedSum,
    } = this.state;
    return (
      <div className="smc">
        <Slider activeIndex={step} arrows={false} dots={false}>
          <div key={0} className="smc-step">
            <StepOne
              onIsSponsor={this.handleIsSponsor}
              onStepChange={this.handleStepChange}
            />
          </div>
          <div key={1} className="smc-step">
            <StepTwo
              onStepChange={this.handleStepChange}
              onGetEncryptedSum={this.handleEncryptedSum}
            />
          </div>
          <div key={2} className="smc-step">
            <StepThree
              isSponsor={isSponsor}
              encryptedSum={encryptedSum}
              decryptedSum={decryptedSum}
            />
          </div>
        </Slider>
        <Step current={step} className="steps">
          { steps.map((item, index) => <Step.Item key={index} title={item} />)}
        </Step>
      </div>
    );
  }
}
