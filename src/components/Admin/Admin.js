import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow.js';


class Admin extends Component {

componentDidMount(){
    axios.get('/').then((results) => {
        this.props.
    })
}

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">ADMIN VIEW</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow />
                        
                        
                        </tbody>
                </table>
            </div>
        )
    }
}

export default Admin;