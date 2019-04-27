import React from 'react';
import { Button, Progress } from '@alifd/next';
import './index.scss';

const HOW_LONG = 3000;

export default class StepOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			t: HOW_LONG,
      ready: false,
    };
	}
	
	componentDidMount() {
		setInterval(() => {
			const { t, ready } = this.state;
			if (t <= 0) {
				clearInterval()
				if (ready) {
					this.props.onStepChange(1);
				}
			} else {
				console.log('t - 1000', t - 1000)
				this.setState({
					t: t - 1000
				});
			}
		}, 1000, HOW_LONG);
	}

	handleReady() {
		this.setState({
			ready: true
		});
	}

	render() {
		const { ready, t } = this.state;
		console.log('t', t, t / HOW_LONG)
		return (
			<div key={0} className="smc-step">
				<div className="ready">
					<div>如果准备就绪，请点击【就绪】按钮 </div>
					<Button type="primary" disabled={ready || t <= 0} size="large" onClick={() => this.handleReady()}>就绪</Button>
				</div>
				<div>
					<div>倒计时：</div>
					<Progress percent={t / HOW_LONG * 100} shape="circle" size="small" />
				</div>
			</div>
		);
	}
}
