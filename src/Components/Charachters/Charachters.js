import React, { Component } from 'react'
import axios from 'axios';

export default class Charachters extends Component {
    constructor(props){
        super(props);
        this.state = {
            Charachters:[]
        }
    }
    componentDidMount() {
        axios.get("https://breakingbadapi.com/api/characters")
        .then(res =>{
            console.log(res.data);
            this.setState({Charachters:res.data})
        })
    }
 
    render() {
        return (
            <div className="container">
                <h1>Characters</h1>
                <div className="row">        
                    {this.state.Charachters.map(Charachter =>
                        //style="width: 18rem;"
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={Charachter.img} />
                                <div className="card-body">
                                    <h5 className="card-title">{Charachter.name}</h5>
                                    <h6 className="card-subtitle">Birth day {Charachter.birthday}</h6>
                                    <p className="card-text">{Charachter.occupation}</p>
                                    <p className="card-text">status : {Charachter.status}</p>
                                    <p className="card-text">NickName : {Charachter.nickname}</p>
                                    <p className="card-text">Real Name : {Charachter.portrayed}</p>
                                </div>
                            </div>
                    
                        </div>
                    )}
                        
                </div>
            </div>
        )
    }
}
