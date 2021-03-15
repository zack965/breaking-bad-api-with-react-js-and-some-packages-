import React, { Component } from 'react';
import './Nav.css';
import {BrowserRouter,Route,Link,NavLink} from 'react-router-dom';
import Charachters from '../Charachters/Charachters';
import Deaths from '../Deaths/Deaths';
import Episodes from '../Episodes/Episodes';
import Quotes from '../Quotes/Quotes';
export default class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Characters</Link></li>
                            <li><Link to="/Episodes">Episodes</Link></li>
                            <li><Link to="/Quotes">Quotes</Link></li>
                            <li><Link to="/Deaths">Deaths</Link></li>
                        </ul>
                    </nav>
                    <br/>
                    <br/>
                    <br/>
                    <Route exact path="/" component={Charachters}/>
                    <Route exact path="/Episodes" component={Episodes}/>
                    <Route exact path="/Quotes" component={Quotes}/>
                    <Route exact path="/Deaths" component={Deaths}/>
                </div>
            </BrowserRouter>
        )
    }
}
