import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class TableRow extends Component {


    render(){
        return (
            <tr>
                <td>{this.props.row.feelings}</td>
                <td>{this.props.row.understanding}</td>
                <td>{this.props.row.support}</td>
                <td>{this.props.row.comments}</td>
                <td><button>DELETE</button></td>
            </tr>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        feelings: state.feelings,
        understanding: state.understanding,
        support: state.support,
        comments: state.comments,

    };
};

export default connect(mapStateToProps)(TableRow);