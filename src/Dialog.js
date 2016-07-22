/**
 * @file dialog demo
 * @author Sheeta(wuhayao@gmail.com)
 */

import React from 'react';
import Title from 'melon/Title';
import Button from 'melon/Button';
import Dialog from 'melon/Dialog';

class View extends React.Component {

    constructor() {
        super();
        this.state = {
            dialog: false
        };
    }

    render() {
        return (
            <div>
                <Title level={3}>弹窗</Title>
                <Button variants={['raised', 'primary']} onClick={this.onShow.bind(this)}>弹出窗口</Button>
                <Dialog open={this.state.dialog} onClick={this.onHide.bind(this)}>Hello</Dialog>
            </div>
        );
    }

    onShow() {
        this.setState({
            dialog: true
        });
    }

    onHide(i) {
        this.setState({
            dialog: false
        });
    }
}

module.exports = View;
