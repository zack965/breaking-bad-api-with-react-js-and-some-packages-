import React, { Component } from 'react';
import axios from 'axios';

export default class Episodes extends Component {
    constructor(props){
        super(props);
        this.state = {
            Episodes:[]
        }
    }
    componentDidMount(){
        axios.get("https://breakingbadapi.com/api/episodes")
        .then(res =>{
            console.log(res.data);
            this.setState({Episodes:res.data})
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Episodes</h1>
                <div className="row">
                    {this.state.Episodes.map(Episode =>
                        <div className="col-md-3">
                            <h4>Title : {Episode.title}</h4>
                            <p>Date : {Episode.air_date}</p>
                            <p>Season : {Episode.season}</p>
                            <p>Characters : {Episode.characters}</p>
                            <p>Number Episode : {Episode.episode}</p>
                        </div>
                        
                    )}
                </div>
            </div>
        )
    }
}
