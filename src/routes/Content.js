import React, {Component} from 'react';
import paramore from '../images/paramore.jpg';


class Content extends Component{

    render(){

    return(
    <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        {/* <a className='contentLink' href={this.props.link}>{this.props.link}</a> */}
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
        <div className ='row text-center'>
            <img id="picture" className='img-fluid' src={this.props.pic} />
        </div>
    </div>   
    )}
}

export default Content