import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
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
    console.log(action);
    switch (action.type) {
        case 'ADD_FEELINGS_TO_STORE':
            return {
                ...state.feedback,
                feelings: action.payload
            };
        case 'ADD_COMMENTS_TO_STORE':
            return {
                ...state,
                ...state.feedback,
                comments: action.payload
            };
        case 'ADD_SUPPORT_TO_STORE':
            return {
                ...state,
                ...state.feedback,
                support: action.payload
            };
        case 'ADD_UNDERSTANDING_TO_STORE':
            return {
                ...state,
                ...state.feedback,
                understanding: action.payload
            };
        case 'ADD_FEEDBACK_TO_ADMIN':
            return state;
        default:
            return state;
    }
};

const storeInstance = createStore(
    combineReducers({
        feedBackReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();