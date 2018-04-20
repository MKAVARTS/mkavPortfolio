import React, {Component} from 'react';
import workStyle from './work.css';
import Home from './Home';
import {Link} from 'react-router-dom';

var action;

const videoUrls =
    {
        action: 'https://firebasestorage.googleapis.com/v0/b/portfoliovids-fb07e.appspot.com/o/action.webm?alt=media&token=33ee1272-561e-4f02-87cc-1eca71ad77a3'
    }

class Work extends Component {

    constructor(props){
        super(props);
        this.state = {
            video: videoUrls
        };
    }

    render() {

    const{video, renderHome} = this.state;
      return (
        <div id="masterContainer">
            <div id="workContainer" className = "container-fluid">
                <div id= "workRow"  className = 'row'>
                <div id="firstColumn" className = 'col-3'>
                       <Link to = "/home"><h3 id="goBack"> go back </h3></Link>
                        <h2 className="workHeading">Web</h2>             
                            <ul>
                                <li>DrawLoop</li>
                                <li>State of the Nation</li>
                                <li>Thera-3D</li>
                            </ul> 
                        <h2 className="workHeading">Live</h2>           
                            <ul>
                                <li>Paramore</li>
                                <li>Facemajik</li>
                                <li>Soren Bryce</li>
                                <li>Basecamp</li>
                            </ul> 
                        <h2 className="workHeading">Install</h2>        
                            <ul>
                                <li>Consonance and Chaos</li>
                                <li>Your Face Here</li>
                                <li>Action!</li>
                            </ul> 
                    </div>
                    <div id="secondColumn" className = 'col-9'>
                        <video   src= {this.state.video.action} controls autoPlay={true} />
                    </div>
                    </div>
            </div>
        </div>
      );
  }
}

  export default Work