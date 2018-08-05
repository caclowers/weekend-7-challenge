import React, {Component} from 'react';
import { connect } from 'react-redux';

class TableRow extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.feelings}</td>
                <td>{this.props.understanding}</td>
                <td>{this.props.support}</td>
                <td>{this.props.comments}</td>
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