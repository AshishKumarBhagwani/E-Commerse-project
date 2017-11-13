import React from 'react';
import Link from 'next/link';

export default class extends React.Component{
    render(){
        return(
            <main>
                <form method = 'post' action = '/addProducts' >
                    <input type = 'text' name = 'pname' placeholder = 'Enter Product Name' />
                    <input type = 'text' name = 'brand' placeholder = 'Enter Product Brand' />
                    <button type = 'submit' >Add Products</button>
                </form>
                <p>Click here to <Link href = '/logout' ><a>Logout</a></Link></p>
            </main>
        );
    }
}