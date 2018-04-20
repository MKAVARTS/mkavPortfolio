import React, {Component} from 'react';
import workStyle from './work.css';


class Work extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
      return (
        <div id="masterWorkContainer">
            <div id="workContainer" className = "container-fluid">
            <div id= "workRow"  className = 'row'>
            <div id="firstColumn" className = 'col-3'>
                    <h3 id="goBack"> go back </h3>
                    <p>Here are some examples of my web and audio/visual projects. You can also check out more of my work at my Vimeo page or Instagram.</p>
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
                <div id="secondColumn" className = ' col-9'>
                    <video src='' controls autoPlay={true} />
                </div>
                </div>
            </div>  
        </div>
      );
    }
  }

  export default Work