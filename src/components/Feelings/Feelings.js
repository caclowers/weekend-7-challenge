import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';


class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feelings: ''
        };
    }


   handleFeelingsChange = (event) => {
        this.setState({
            feelings: event.target.value
        });
        console.log(this.state);
    }


    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_FEELINGS_TO_STORE',
            payload: this.state.feelings
        });
        this.props.history.push('/2')
        console.log(this.state);
        
    }

 

    render() {
        console.log();
        
        return (
            <div>
                <Header />
                <p>Page 1 of 4</p>
                <div>
                    <form onSubmit={this.handleClick}>
                        <h2>How are you feeling today?</h2>
                        <input onChange={this.handleFeelingsChange} type="number" placeholder="1-5" />
                        <button type="submit">click</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default connect()(Feelings);