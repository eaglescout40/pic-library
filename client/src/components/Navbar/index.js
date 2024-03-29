import React from 'react';
import "./style.css";

function Navbar(props) {

    // console.log("navbar props.isAth: ", props.isAuth)

    if (props.isAuth) {

        return (

            <nav className="navbar navbar-expand-lg navbar-custom bg-alert">

                <div className="navbar-brand" href="/">
                    {/* TODO: remove hard codded require for img */}
                    <img
                        alt=""
                        // src={require('../../assets/pixpectivetoo.png')}
                        src={require('../../assets/pixpective_trans.PNG')}
                        width="150"
                        height="50"
                        padding="0"
                        margin="0"
                        className="d-inline-block align-top"
                    />
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            {/* TODO: add state to change the "current" per page */}
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/eventsearch">Events</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/createevent">Create Event</a>
                        </li>

                    </ul>

                    {props.children}

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            {/* Possible profile image? */}
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>

                    </ul>

                </div>

            </nav>
        )
    } else {
        return (

            <nav className="navbar navbar-expand-lg navbar-custom">

                <div className="navbar-brand" href="/">
                    {/* TODO: remove hard codded require for img */}
                    <img
                        alt=""
                        src={require('../../assets/pixpectivetoo.png')}
                        width="150"
                        height="50"
                        padding="0"
                        margin="0"
                        className="d-inline-block align-top"
                    />
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav">

                        {props.children}

                    </ul>

                </div>

            </nav>

        )
    }

};

export default Navbar;