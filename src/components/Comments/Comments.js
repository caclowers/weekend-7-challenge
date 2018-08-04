import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class Comments extends Component {
    
    handleClick = () => {
        console.log('clicked');
        this.props.history.push('/5')
    }
    

    render() {
        return (
            <div>
                <Header />
                <p>Page 4 of 4</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}


export default connect()(Comments);