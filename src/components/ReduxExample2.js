import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ReduxExample2 extends PureComponent {
    render() {
        // console.log(this.props)
        return (
            <div>
                <button className="btn btn-primary" onClick={this.props.onClick}>delete</button>
                <p>{this.props.value}</p>
            </div>
        );
    }
}


export default ReduxExample2;