import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header";
import Home from "./components/home";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import CookieKitWrapper from "./components/cookie_kit";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    {/* Add a background color and large text to the whole page */}
                    <div className="w3-sand w3-grayscale w3-large">
                        <Route exact path="/" component={Home} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/privacy" component={Privacy} />
                    </div>
                    {/* Footer */}
                    <footer className="w3-center w3-light-grey w3-padding-48 w3-large">
                        <p>sample template</p>
                    </footer>
                    {/* Cookie Kit Container */}
                    <CookieKitWrapper />
                </Fragment>
            </Router>
        );
    }
}

export default App;