import React, {Component} from 'react';
import paramore from '../images/paramore.jpg';
import './workNew.css'


class Content extends Component{

    constructor(props){
        super(props);

        this.state={
            reRenderWork: false,
            hideWork1: 'initial',
            hideWork2: 'inital',
            hideWork3 : 'initial'
        };
    }

    componentDidMount(){
        console.log('this.props.work2', this.props.work2);
        console.log('this.props.work3', this.props.work3);
        console.log('content component mounted');
        if(this.props.work1 === null && this.props.work2 === null && this.props.work3 === null){
            this.setState({hideWork1: 'none', hideWork2: 'none', hideWork3: 'none'});
        }else if(this.props.work2 === null && this.props.work3 === null){
            this.setState({hideWork2: 'none', hideWork3: 'none'});
        }else if(this.props.work3 === null){
            this.setState({hideWork3: 'none'});
        }
    }

    reRenderWork = () => {
        this.props.reRenderWork();
    }

    render(){

    return(
    <div id="contentContainer" className="container">
        <div className = 'row mb-1'>
            <p onClick={this.reRenderWork} >back</p>
        </div>
        <div className='row mt-1'>
            <h2 id="header">{this.props.title}</h2>
            <p>{this.props.description}</p>
        </div>
        <div className = 'row'>
            <h3>LINKS</h3>
        </div>
        <div className='row'>
            <a className='contentLink' target='blank' href={this.props.link1}> {this.props.linkDescription1}</a>
            <a className='contentLink' target='blank' href={this.props.link2}> {this.props.linkDescription2}</a>
            <a  className='contentLink' target='blank' href={this.props.link3}> {this.props.linkDescription3}</a>
        </div>
        <div id="picture" className='row text-center'>
            <div className = 'col'>
                <img  className='img-fluid text-center'  src={this.props.pic} />
            </div>
        </div>
        <div style={{display: this.state.hideWork1}} className = 'row'>
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title={"work1"} className="embed-responsive-item" src={this.props.work1} frameBorder={0} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div>
        <div style={{display: this.state.hideWork2}}>
            <div  className="embed-responsive embed-responsive-16by9">
            <iframe  className="embed-responsive-item" src={this.props.work2} frameBorder={0} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div>
        <div style={{display: this.state.hideWork3}}>
            <div  className="embed-responsive embed-responsive-16by9">
            <iframe  className="embed-responsive-item" src={this.props.work3} frameBorder={0} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div>
    </div>   
    )}
}

export default Content