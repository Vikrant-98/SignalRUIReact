import React, { Component } from 'react';
import {HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


export class Layout extends Component {
    constructor(props) {
        super(props);
    this.state={
        signal:"",
        hubconnection:null
    };
}

componentDidMount = async () => {
    debugger;
    const hubconnection = new HubConnectionBuilder()
    .withUrl("https://localhost:5001/chathub")
    .configureLogging(LogLevel.Information)
    .build();
    debugger;
    // this.state({hubconnection},()=>{
    //     this.state.hubconnection.start().then(()=>{
            
    //         debugger;
    //         console.log("SignalR started")})
    //     .catch((err)=>{
    //         debugger;
    //         console.log("Error" + err);});
    // });

    await hubconnection.start();


    hubconnection.on('ReceiveMessage',(message)=>{
        debugger;
        const signal = message
        debugger;
        this.setState({signal})
    });

}

render(){
    return(
        <div >
            <h1>
                here is the message : 
            </h1>
            <div>
                {this.state.signal}
            </div>
        </div>
    )
}

}

export default Layout;