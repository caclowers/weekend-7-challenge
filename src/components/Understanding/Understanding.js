import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class Understanding extends Component {
    handleClick = () => {
        console.log('clicked');
        this.props.history.push('/3')
    }
    

    render() {
        return (
            <div>
                <Header />
                <p>Page 2 of 4</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}


export default connect()(Understanding);