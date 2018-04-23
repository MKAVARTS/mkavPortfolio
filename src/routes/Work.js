import React, {Component} from 'react';
import workStyle from './work.css';
import workInfo from './workInfo';
import Home from './Home';
import Content from './Content';
import {Link} from 'react-router-dom';
import {Collapse} from 'reactstrap';
import paramore from '../images/paramore.jpg';



var paramorePic = paramore;
var methane = "https://www.youtube.com/embed/ENRJi2Y2gRw" ;
var basecamp = "https://player.vimeo.com/video/205113973";
var facemajik = "https://player.vimeo.com/video/235986358";
var face = "https://player.vimeo.com/video/265695194";
var action = "https://player.vimeo.com/video/265768860";
var chaos = "https://player.vimeo.com/video/189278914";


class Work extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'My work',
            description: 'Click the links above to get see some examples in the related category. "Web" are are browser-based projects that I created recently during a 6-month web development program at Nashville Software School. "Live" are examples of video content I have created for various music based projects. And finally "Install" are installation projects, that are a culmination of my background in audio and video, in a physical space, which people can interact with.',
            work1: '',
            work2: '',
            work3: '',
            link: 'https://www.instagram.com/m.k.a.v/',
            pic : '',
            webCollapse: false,
            liveCollapse: false,
            installCollapse: false
        };

        this.selectVid = this.selectVid.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e){
        if(e.target.id === "heading1"){
        console.log('clicked web heading');
        this.setState({
            webCollapse: !this.state.webCollapse,
            liveCollapse: false,
            installCollapse: false,
        })
        }else if(e.target.id === "heading2"){
        console.log('clicked live heading');
        this.setState({
            webCollapse: false,
            liveCollapse: !this.state.liveCollapse,
            installCollapse: false,
        })
        }else if(e.target.id === "heading3"){
        console.log('clicked install heading');
        this.setState({
            webCollapse: false,
            liveCollapse: false,
            installCollapse: !this.state.installCollapse
        })
        }
    }

    selectVid(e){
    for(var i = 0; i < workInfo.length; i++){
        if(e.target.id === workInfo[i].id){
            var index = workInfo[i];
            this.setState({
                title: index.title,
                description: index.description,
                work1: index.work1,
                work2: index.work2,
                work3: index.work3,
                link: index.link,
                pic: index.pic,
            })
        }
    }
}

    render() {


    const{title, description, work1,work2,work3, pic, link,} = this.state;

    return (
        <div id="masterContainer">
            <Link to = "/home"><h3 id="goBack"> back </h3></Link>

            <div id="workContainer" className = "container">
                <div id= "workRow"  className = 'row'>

                    <div id="web" className = "workColumn col-lg">
                        <h2 className="workHeading" onClick={this.toggle} id="heading1">Web</h2>  
                        <Collapse isOpen={this.state.webCollapse}>   
                        <div className='workColumn'>        
                        <ul >
                            <li className='workItem' onClick = {this.selectVid} id="drawloop">DrawLoop</li>
                            <li className='workItem' onClick = {this.selectVid} id="nation" >State of the Nation</li>
                            <li className='workItem' onClick = {this.selectVid} id="thera" >Thera-3D</li>
                        </ul>
                        </div>
                    </Collapse>

                    </div>
                        <div id="live" className=" col-lg workColumn">
                        <h2 className="workHeading" onClick={this.toggle} id="heading2">Live</h2>
                        <Collapse isOpen={this.state.liveCollapse} >
                        <div className="col">        
                            <ul className="text-center">
                                <li  onClick = {this.selectVid} id='paramore' className='workItem' >Paramore</li>
                                <li  onClick = {this.selectVid} id='facemajik' className='workItem' >Facemajik</li>
                                <li  onClick = {this.selectVid} id='soren' className='workItem' >Soren Bryce</li>
                                <li  onClick = {this.selectVid} id='basecamp' className='workItem' >Basecamp</li>
                            </ul> 
                        </div>
                        </Collapse>
                        </div>
                        
                        <div id="install" className="col-lg workColumn">
                        <h2 className="workHeading"  onClick={this.toggle} id="heading3">Install</h2>   
                        <Collapse isOpen={this.state.installCollapse}> 
                        <div className="workColumn">    
                            <ul className="text-right">
                                <li  onClick ={this.selectVid} id='chaos' className='vid' className='workItem'>Consonance and Chaos</li>
                                <li  onClick={this.selectVid} id='face' className='vid' className='workItem'>Your Face Here</li>
                                <li  onClick = {this.selectVid} id='action' className='vid' className='workItem'>Action!</li>
                            </ul> 
                        </div>
                        </Collapse>
                        </div>
                </div>
            </div>
                <div  className="container">
                <Content 
                title={this.state.title} 
                description={this.state.description} 
                work1={this.state.work1} 
                work2={this.state.work2}
                work3={this.state.work3} 
                pic={this.state.pic}
                link={this.state.link}/>
                </div>
      </div>
      );
    }
}

  export default Work