import React, {Component} from 'react';
import paramore from '../images/paramore.jpg';
import work from './work.css'


class Content extends Component{

    render(){

    return(
    <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <a className='contentLink' href={this.props.link}>{this.props.link}</a>
        <div id="picture" className='row text-center'>
            <div className = 'col'>
                <img  className='img-fluid text-center'  src={this.props.pic} />
            </div>
        </div>
        <div className = 'row'>
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title={"work1"} className="embed-responsive-item" src={this.props.work1} frameBorder={0} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div>
        <div className = 'row'>
            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={this.props.work2} frameBorder={0} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div>
        {/* <div className = 'row'>
            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={this.props.work3} frameBorder={0} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div> */}
    </div>   
    )}
}

export default Content