import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Sidebar from '../components/shared/side-bar';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:[]}
    }

    componentDidMount(){
        axios.get('/getuser').then((response)=>{
            this.setState({user:response.data})
        })
        var currentdate = new Date();
        console.log();
        this.hours = currentdate.getUTCHours();
         this.minutes = currentdate.getUTCMinutes();
    }

    render(){
        return(
            <main>
                <h1>Wellcome to E-commerse site</h1>
                <b>Welcome</b><p>Username: {this.state.user.username}</p>
                <p>Click here to <Link href = '/logout' ><a>Logout</a></Link></p>
            </main>
        );
    }
}