/**
 * @file index
 * @author leon <lupengyu@baidu.com>
 */

import React from 'react';
import {render} from 'react-dom';
import Button from 'melon/Button';
import Icon from 'melon/Icon';
import Dialog from 'melon/Dialog';

import './index.styl';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            dialog1: false
        };
    }

    render() {

        const iconStyle = {
            fontSize: 64,
            display: 'block'
        };

        const icon = 'refresh';

        return (
            <div>
                <Button label='default' />
                <Icon icon={icon} title={icon} style={iconStyle}/>
                <Button onClick={this.onShow.bind(this, 1)}>弹出窗口</Button>
                <Dialog open={this.state.dialog1} onHide={this.onHide.bind(this, 1)}>Hello</Dialog>
            </div>
        );
    }

    onShow(i) {
        this.setState({
            [`dialog${i}`]: true
        });
    }

    onHide(i) {
        this.setState({
            [`dialog${i}`]: false
        });
    }
}

render(
    <Home />,
    document.getElementById('app')
);
