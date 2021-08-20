import React, { Component } from 'react';

const asyncComponet = (importComponent) => {
    return class extends Component {
        state ={
            component: null
        }

        componentWillMount () {
            importComponent()
            //return Promise
            .then(cmp => {
                this.setState({component : cmp.default});
            });
        }

        render () {
            const C =  this.state.component;

            return C ? < C {...this.props} /> : null;
        }
    }
}

export default asyncComponet;