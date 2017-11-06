import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Styles from '../styles/Style';
//import Background from '../static/images/background_image.jpg';


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
           <html>
               <body style = {Styles.body}>
                <div><Link href='/login'><a>Login with user</a></Link></div>
                <p>Click here to <Link href = '/signup'><a>Signup</a></Link></p>
                {/*<img src = '../static/images/background_image.jpg' alt = "Image could not be loaded" ></img>*/}
               </body>
           </html>
        );
    }
}