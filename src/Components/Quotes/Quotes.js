import React, { Component } from 'react';
import axios from 'axios';

export default class Quotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            Quotes:[]
        }
    }
    componentDidMount(){
        axios.get("https://breakingbadapi.com/api/quotes")
        .then(res=>{
            this.setState({Quotes:res.data})
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Quotes</h1>
                <div className="row">
                {this.state.Quotes.map(quote =>
                    <div className="col-md-3">
                        <h4>Quote : {quote.quote}</h4>
                        <p>Author : {quote.author}</p>
                        <p>Series : {quote.series}</p>
                    </div>
                    
                )}
                </div>
            </div>
        )
    }
}
