import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import axios from 'axios';
class Confirmation extends Component {
   
    handleClick = (event) => {
        console.log('clicked');
        console.log(this.props.feedback);
        event.preventDefault();
        //this.state is null
        axios.post('/api/feedBack', this.props.feedback).then((results) => {
            console.log(results);
            this.props.dispatch({
            type: 'ADD_FEEDBACK_TO_ADMIN',
            payload: this.props.feedback
        });
        this.props.history.push('/')
        }).catch((error) => {
            console.log('error in Confirmation handleClick', error);
            console.log('this.state', this.state);
            console.log('this.props', this.props);
        })
    }

    render() {
        console.log(this.props.feedback);
        return (
            <div>
                <Header />
                <p>Page Confirmation</p>
                <div>
                    <form onSubmit={this.handleClick}>
                    <h2>Thank You for Your Feedback</h2>
                    <button type="submit">click</button>
                    </form>    
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
       feedback: state.feedBackReducer
    }
};

export default connect(mapStateToProps)(Confirmation);