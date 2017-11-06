import React from 'react';
import Head from './Head';

export default class extends React.Component{
    render(){
        return (
            <main>
                <Head />
                <div className='col-md-2 side-bar'>
                    <div className='sidebar-container'>
                        {/* ITEMS OF SIDEBAR */}
                        <a >
                            <div className='item'>
                                <h4><i className='glyphicon glyphicon-home'></i> Home</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}
