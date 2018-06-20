import React, { Component } from 'react';
import './Home.css';
import profilePic from '../images/profile.jpg';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Work from './Work';

class Home extends Component {

render() {
    return (
    <div>
     <div id="homeContainer" className = "container">
        <div className = "row col-lg align-self-center">
      
                <img id="profilePic" src={profilePic} alt= "image of Mike Kluge (MKAV) of Nashville, TN"/>
     
            <div id= "bio" className = "col-xl mt-0 pt-0">
                <h6><span id='hi'>Hi.</span></h6>

                <p className='pr-5 mt-5' id="description"> My name is Mike Kluge. MKAV is my work moniker. Its short for Mike Kluge Audio Visual. <br /><br />I live in Nashville, TN and create works that combine sound, video, space, and the web, with analog and digital tools. You can find examples of my work<br /><Link to ="/work"><span id="here">here</span></Link> <br />  Feel free to reach out at  <span id='email'>mkavarts@gmail.com</span> </p> 
            
            </div>
        </div>
     </div>
    </div>
      );
    }
}


export default Home