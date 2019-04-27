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
    console.log('e', e)
  }

  handleEncrypt = (text) => {
    this.props.onStepChange(2);
  };

  render() {
    const { ciphertext } = this.state;
    return (
      <div key={1} className="container">
        <div className="item">
          <div>请输入自己的数据，并点击加密：</div>
          <NumberPicker className="input" defaultValue={0} onChange={this.handleChange}/>
          <Button type="primary" onClick={this.handleEncrypt} >加密&发送</Button>
        </div>
        <Input.TextArea className="item" placeholder={ciphertext || '密文...'} autoHeight={{ minRows: 3, maxRows: 5 }} />
      </div>
    );
  }
}
