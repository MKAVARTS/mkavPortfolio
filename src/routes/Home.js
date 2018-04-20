import React, { Component } from 'react';
import profilePic from '../images/MKAV.jpg';


class Home extends Component {
    render() {
      return (

        <div id="homeContainer" className = "container">
            <div className = "row">
                <div id = "profile" className = "col">
                    <img src={profilePic} alt= "image of Mike Kluge (MKAV) of Nashville, TN"/>
                </div>
                <div id= "bio" className = "col">
                    <h6><span id='hi'>Hi.</span></h6>

                    <p className='pr-5' id="description"> My name is Mike Kluge. MKAV is my work moniker. Its short for Mike Kluge Audio Visual. I know, so clever.I live in Nashville, TN, but work from wherever. What I mean by work can be found here (web design) and here (audio/visual projects). I love meeting people so please, if you like what you see, or just want to say hi, drop a line. </p> 

                    <p className='pr-5'></p>               
                </div>
            </div>
        </div>


      );
    }
  }


export default Home