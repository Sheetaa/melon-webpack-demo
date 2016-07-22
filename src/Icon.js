/**
 * @file icon demo
 * @author Sheeta(wuhayao@gmail.com)
 */

import React from 'react';
import Title from 'melon/Title';
import Icon from 'melon/Icon';

class View extends React.Component {

    render() {

        const iconStyle = {
            fontSize: 64,
            display: 'inline-block'
        };

        return (
            <div>
                <Title level={3}>图标</Title>
                <Icon icon={'refresh'} title={'refresh'} style={iconStyle}/>
                <Icon icon={'watch'} title={'watch'} style={iconStyle}/>
                <Icon icon={'train'} title={'train'} style={iconStyle}/>
                <Icon icon={'update'} title={'update'} style={iconStyle}/>
            </div>
        );
    }
}

module.exports = View;
