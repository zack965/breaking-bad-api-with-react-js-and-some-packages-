import React, { Component } from 'react';
import axios from 'axios';
import './Deaths.css';

export default class Deaths extends Component {
    constructor(props){
        super(props);
        this.state = {
            Deaths:[]
        }
    }
    componentDidMount(){
        axios.get("https://breakingbadapi.com/api/deaths")
        .then(res => {
            console.log(res.data);
            this.setState({Deaths:res.data});
        })
        //console.log(this.state.Deaths)
    }
    
    render() {
        return (
            <div className="container">
                <h1>Deaths</h1>
                <div className="row">    
                    {this.state.Deaths.map(Death =>
                        <div className="col-md-3 cont">
                            <h4>{Death.death}</h4>
                            <p>Cause : {Death.cause}</p>
                            <p>Responsible : {Death.responsible}</p>
                            <p>Last Words : "{Death.last_words}"</p>
                            <p>Season : {Death.season}</p>
                            <p>Episodes : {Death.episode}</p>
                            <p>Number Of Deaths : {Death.number_of_deaths}</p>
                        </div>
                        
                    )}
                   
                </div>
            </div>
        )
    }
}
