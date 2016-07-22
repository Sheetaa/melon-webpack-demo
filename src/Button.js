/**
 * @file button demo
 * @author Sheeta(wuhayao@gmail.com)
 */

import React from 'react';
import Title from 'melon/Title';
import Button from 'melon/Button';

class View extends React.Component {

    render() {
        return (
            <div>
                <Title level={3}>按钮</Title>
                <Button hasRipple variants={['raised']}>default</Button>
                <Button hasRipple variants={['raised', 'primary']}>primary</Button>
                <Button hasRipple variants={['raised', 'secondery']}>secondery</Button>
                <Button hasRipple variants={['raised', 'success']}>success</Button>
                <Button hasRipple variants={['raised', 'info']}>info</Button>
                <Button hasRipple variants={['raised', 'warning']}>warning</Button>
                <Button hasRipple variants={['raised', 'danger']}>danger</Button>
            </div>
        );
    }
}

module.exports = View;
