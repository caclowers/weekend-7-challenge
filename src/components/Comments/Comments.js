import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        };
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }
    
    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_COMMENTS_TO_STORE',
            payload: this.state.comments
        });
        this.props.history.push('/5')
    }

    render() {
        return (
            <div>
                <Header />
                <p>Page 4 of 4</p>
                <div>
                    <form onSubmit={this.handleClick}>
                    <h2>Do you have any other Comments about today?</h2>
                    <input onChange={this.handleCommentsChange} type="text" placeholder="Comments Here..."/>
                    <button type="submit">click</button>
                    </form>    
                </div>
            </div>
        )
    }
}


export default connect()(Comments);