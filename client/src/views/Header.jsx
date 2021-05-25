import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <h1 className="navbar-brand">NBA Player Rating</h1>
            </div>
            <div>
                <h1 className="navbar-brand"> Online: </h1>
            </div>
            <div>
                <a className="navbar-brand" href="#">Home</a>
                <select name="" id="">
                    <option value=""> <a href="">Top 10</a> </option>
                    <option value=""> <a href="">Top 25</a> </option>
                </select>
            </div>

        </nav>
);
};


export default Header;