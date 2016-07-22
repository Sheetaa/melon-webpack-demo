/**
 * @file button demo
 * @author Sheeta(wuhayao@gmail.com)
 */

import React from 'react';
import Title from 'melon/Title';
import Progress from 'melon/Progress';

class View extends React.Component {

    render() {
        return (
            <div>
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
}

module.exports = View;
