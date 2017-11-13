import React from 'react';
import Link from 'next/link';
import Head from './shared/Head';

export default class extends React.Component{
    render(){
        return(
            <main>
                <link rel = 'stylesheet' href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
                {/*<Head />*/}
                <nav className = 'navbar navbar-default' >
                    <div className = 'navbar-header' >
                        <a className = 'navbar-commerse' href = '#' >
                            <img src = '../static/images/logo.png' alt = 'E-Commerse' height = '100px' />
                        </a>
                    </div>
                
                    <form className ="navbar-form navbar-left" role = "search" style = {Styles.form}>
                        <div className = "form-group">
                            <input type = "text" className = "form-control" placeholder="Search"/>
                        </div>
                        <button type = "submit" className = "btn btn-default">Submit</button>
                    </form>
                    <div className = 'collapse navbar-collapse' style = {Styles.nav}>
                        <ul className = "nav nav-pills navbar-right" >
                          <li ><Link href = '/'><a>Home</a></Link></li>
                          <li className = 'active'><Link href = '/login'><a>Login</a></Link></li>
                          <li><Link href = '/admin'><a>Admin</a></Link></li>
                          <li><Link href = '/signup'><a>Sign Up</a></Link></li>
                          <li><Link href = '#'><a>Contact</a></Link></li>
                          
                          
                        </ul>
                    </div>
                </nav>
            </main>
        );
    }
}
//Custom CSS for Navigation 
var Styles = {
    form :{
        marginTop : "35px",
        align : "center",
    },
    nav :{
        marginTop : "30px",
    }
}