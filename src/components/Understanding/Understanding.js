import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class Understanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understanding: ''
        };
    }

    handleUnderstandingChange = (event) => {
        console.log(event);
        this.setState({
            understanding: event.target.value
        });
        console.log(this.state);
    }
    
    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING_TO_STORE',
            payload: this.state.understanding
        });
        this.props.history.push('/3')
    }


    render() {
        return (
            <div>
                <Header />
                <p>Page 2 of 4</p>
                <div>
                    <form onSubmit={this.handleClick}>
                    <h2>How Well did you <span><b>understand</b></span> today's material?</h2>
                    <input onChange={this.handleUnderstandingChange} type="number" placeholder="1-5"/>
                    <button type="submit">click</button>
                    </form>    
                </div>
                
            </div>
        )
    }
}


export default connect()(Understanding);