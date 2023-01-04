import React, { Component } from 'react';

class Onlyletters extends Component
{   
    constructor() 
    {
        super();
        this.state={ value:''};
    }

    charallow(e)
    {
        this.setState({inputtxt:e.target.value.replace(/[^a-zA-Z]/ig,'')});
    }
    render()
    {
        return(
            
             <input type="text" value={this.state.inputtxt} onChange={this.charallow.bind(this)} placeholder='Enter your city' />
        );
    }
} 

export default Onlyletters;