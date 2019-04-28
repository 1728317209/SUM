import React from 'react';
import { NumberPicker, Input, Button } from '@alifd/next';
import './index.scss';

export default class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      ciphertext: '',
    };
  }

  handleChange = (e) => {
    console.log('e', e);
  }

  handleEncrypt = (text) => {
    this.props.onStepChange(2);
  };

  render() {
    const { ciphertext } = this.state;
    return (
      <div className="step-two">
        <Input
          className="item"
          placeholder="输入自己的隐私数据"
          size="medium"
          addonAfter={<Button type="primary" size="medium">加密</Button>}
        />
        <Input
          className="item"
          placeholder="点击加密得到的密文"
          size="medium"
          readOnly
          addonAfter={<Button type="primary" size="medium">发送</Button>}
        />
      </div>
    );
  }
}
