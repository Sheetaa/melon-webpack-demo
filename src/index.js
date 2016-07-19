/**
 * @file index
 * @author leon <lupengyu@baidu.com>
 */

import React from 'react';
import {render} from 'react-dom';
import Title from 'melon/Title';
import Button from 'melon/Button';
import Icon from 'melon/Icon';
import Dialog from 'melon/Dialog';
import Progress from 'melon/Progress';

import './index.styl';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            dialog: false
        };
    }

    render() {

        const iconStyle = {
            fontSize: 64,
            display: 'inline-block'
        };

        return (
            <div>
                <Title level={3}>按钮</Title>
                <Button variants={['raised']}>default</Button>
                <Button variants={['raised', 'primary']}>primary</Button>
                <Button variants={['raised', 'secondery']}>secondery</Button>
                <Button variants={['raised', 'success']}>success</Button>
                <Button variants={['raised', 'info']}>info</Button>
                <Button variants={['raised', 'warning']}>warning</Button>
                <Button variants={['raised', 'danger']}>danger</Button>

                <Title level={3}>图标</Title>
                <Icon icon={'refresh'} title={'refresh'} style={iconStyle}/>
                <Icon icon={'watch'} title={'watch'} style={iconStyle}/>
                <Icon icon={'train'} title={'train'} style={iconStyle}/>
                <Icon icon={'update'} title={'update'} style={iconStyle}/>

                <Title level={3}>弹窗</Title>
                <Button variants={['raised', 'primary']} onClick={this.onShow.bind(this)}>弹出窗口</Button>
                <Dialog open={this.state.dialog} onClick={this.onHide.bind(this)}>Hello</Dialog>

                <Title level={3}>Progress</Title>
                <div className="row">
                    <Title level={4}>Linear</Title>
                    <Progress mode="indeterminate" />
                </div>

                <div className="row">
                    <Title level={4}>Circle</Title>
                    <Progress mode="indeterminate" shape="circle" size="xxl" />
                </div>
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

    onBeforeChange({selectedIndex}) {
        console.log('你选择了' + selectedIndex);
    }
}

render(
    <Home />,
    document.getElementById('app')
);
