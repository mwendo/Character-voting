import React from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="header">
                <a className="navbar-brand" href="#">NFL Player Rating</a>
                <h5 className="nav-link" href="#">Online:</h5>
                <a className="nav-link" href="#"><Link to='/'>Home</Link></a>
                <a className="nav-link" href="#"><Link to='/add'>Add Player</Link></a>
                <a className="nav-link" href="#">Top 50</a>
                <form className="form-inline my-2 my-md-0">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
            </nav>
        </div>
);
};


export default Header;