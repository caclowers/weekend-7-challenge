import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class Confirmation extends Component {
    handleClick = () => {
        console.log('clicked');
        this.props.history.push('/')
    }
    

    render() {
        return (
            <div>
                <Header />
                <p>Page Confirmation</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}


export default connect()(Confirmation);