import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';


const initialState = {
    
    feedback: {
        feelings: '',
        comments: '',
        understanding: '',
        support: ''
    }
};




const feedBackReducer = (state = initialState, action) => {
    console.log(state);
    
    switch (action.type) {
        case 'ADD_FEEDBACK_TO_DATABASE':
            return state;
    
        default:
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        feedBackReducer
    }),
    applyMiddleware(logger)
)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
