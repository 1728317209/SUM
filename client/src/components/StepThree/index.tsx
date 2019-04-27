import React from 'react';
import { Loading, Input, Button } from '@alifd/next';
import './index.scss';

export default class StepThree extends React.Component {

  handleDecrypt = (encryptedSum) => {

  }

  renderSponsor = () => {
    const { encryptedSum } = this.props;
    if (encryptedSum) {
      return (
        <div key={2} className="smc-step">
          <Input.TextArea className="item" placeholder={encryptedSum || '密文...'} autoHeight={{ minRows: 3, maxRows: 5 }} />
          <Button type="primary" onClick={this.handleDecrypt} >解密&发布</Button>
        </div>
      );
    }
    return <Loading style={{width: "300px"}} tip="正在计算..." />;
  }

  renderUnSponsor = () => {
    const { decryptedSum } = this.props;
    if (decryptedSum) {
      return (
        <Input addonTextBefore="最终结果" />
      );
    }
    return <Loading style={{width: "300px"}} tip="正在计算..." />;
  }

  render() {
    const { isSponsor } = this.props;
    if (isSponsor) {
      return this.renderSponsor();
    } else {
      return this.renderUnSponsor();
    }
  }
}
