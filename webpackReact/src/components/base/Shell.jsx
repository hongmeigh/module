import React from 'react';
import MenuComponent from './MenuComponent';
import 'babel-polyfill';
import '@style/common/common.less';

export default class Shell extends MenuComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="app-body">{this.props.children}</div>;
    }
}