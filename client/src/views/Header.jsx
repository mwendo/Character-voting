import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">NBA Player Rating</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Top 50</a>
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-md-0">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </form>
                
            </div>
            </div>
            </nav>
        </div>
);
};


export default Header;