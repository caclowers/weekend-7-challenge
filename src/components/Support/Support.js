import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            support: ''
        };
    }

    handleSupportChange = (event) => {
        console.log(event);
        this.setState({
            support: event.target.value
        });
        console.log(this.state);
    }
    
    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_SUPPORT_TO_STORE',
            payload: this.state.support
        });
        this.props.history.push('/4')
    }
    

    render() {
        return (
            <div>
                <Header />
                <p>Page 3 of 4</p>
                <div>
                    <form onSubmit={this.handleClick}>
                    <h2>How Supported did you feel today?</h2>
                    <input onChange={this.handleSupportChange} type="number" placeholder="1-5"/>
                    <button type="submit">click</button>
                    </form>    
                </div>
            </div>
        )
    }
}


export default connect()(Support);