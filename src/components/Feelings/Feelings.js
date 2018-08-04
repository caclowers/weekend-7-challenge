import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';


class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: []
        };
    }
    
    
    
    handleClick = () => {
        console.log('clicked');
        this.props.history.push('/2')
    }
    

    render() {
        return (
            <div>
                <Header />
                <p>Page 1 of 4</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default connect()(Feelings);