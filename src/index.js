/**
 * @file index
 * @author leon <lupengyu@baidu.com>
 */

import React from 'react';
import {render} from 'react-dom';
import config from './config';
import Button from './Button';
import Icon from './Icon';
import Dialog from './Dialog';
import Progress from './Progress';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.styl';

class Home extends React.Component {

    render() {

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear={true}
                    transitionAppearTimeout={3000}>
                    <Button key='1' />
                </ReactCSSTransitionGroup>
            </div>
        );
    }

}

render(
    <Home />,
    document.getElementById('app')
);
