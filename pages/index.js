import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Styles from '../styles/Style';
import Navigation from '../components/navigation';


export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {user : []}
    }
    componentDidMount(){
        // axios.get('/getuser').then((response)=>{
        //     this.setState({user : response.data})
        // })
    }
    render(){
        return(
            <main style = {Styles.body}>
                <Navigation />
                <div>

                </div>
            </main>
        );
    }
}
