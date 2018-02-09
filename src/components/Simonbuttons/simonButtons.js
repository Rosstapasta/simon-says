import React, { Component } from 'react';
import './simonbuttons.css';

export default class SimonButtons extends Component {
    render(){
        return(
            
                <div class="simonBoard">
                    <div id="red" class="gameButton"></div>
                    <div id="green" class="gameButton"></div>
                    <div id="yellow" class="gameButton"></div>
                    <div id="blue" class="gameButton"></div> 
                </div>

              
        );
    }
}