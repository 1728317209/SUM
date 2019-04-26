import React from 'react';
import { Slider, Step } from '@alifd/next';
import './index.scss';

export interface Props {
  step: number;
}

const steps = ['就绪阶段', '发送数据阶段', '计算阶段', '公布结果阶段'];

const renderStepOne = () => (
  <div key={0} className="smc-step">
    就绪阶段
  </div>
);

const renderStepTwo = () => (
  <div key={1} className="smc-step">
    发送数据阶段
  </div>
);

const renderStepThree = () => (
  <div key={2} className="smc-step">
    计算阶段
  </div>
);

const renderStepFour = () => (
  <div key={3} className="smc-step">
    公布结果阶段
  </div>
);

const SmcStep = (Props) => {
  console.error('Props', Props)
  const { step } = Props;
  return (
    <div className="smc">
      <Slider activeIndex={step} arrows={false} dots={false}>
        { renderStepOne() }
        { renderStepTwo() }
        { renderStepThree() }
        { renderStepFour() }
      </Slider>
      <Step current={step} className="steps">
        { steps.map((item, index) => <Step.Item key={index} title={item} />)}
      </Step>
    </div>
  );
};

export default SmcStep;
