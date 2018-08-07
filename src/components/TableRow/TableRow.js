import React, {Component} from 'react';
import { connect } from 'react-redux';


class TableRow extends Component {
    

    handleDelete = () => {
        // a message to let admin user they are about to delete
        alert('you are about to delete something')
        
        // delete function
    }
    
    render(){
        return (
            <tr>
                <td>{this.props.row.feeling}</td>
                <td>{this.props.row.understanding}</td>
                <td>{this.props.row.support}</td>
                <td>{this.props.row.comments}</td>
                <td><button onClick={this.handleDelete}>DELETE</button></td>
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