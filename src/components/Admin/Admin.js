import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow.js';
import axios from 'axios';


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedBackList: []
        }
    }

    componentDidMount() {
        axios.get('/api/admin').then((results) => {
            console.log(results.data);
            this.setState({
                feedBackList: results.data
            })
        })
    }




    render() {



        let tableRowArray = this.state.feedBackList.map((row, index) => {
            return <TableRow row={row} key={index} />
        });


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
                        {tableRowArray}


                    </tbody>
                </table>
            </div>
        )
    }
}

export default Admin;