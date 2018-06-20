import React, {Component} from 'react';
import './workNew.css'
import workInfo from './workInfo';
import Content from './Content';

class WorkNew extends Component{

    constructor(props){
        super(props);
        this.state={
            showInfo: false,
            title: null,
            description: null,
            work1: null,
            work2: null,
            work3: null,
            link: null,
            pic : null,

        };
    }

    showDetail = (e) => {
        console.log('show detail : event target id', e.target.id);
        for(var i = 0; i < workInfo.length; i++){
            if(e.target.id === workInfo[i].id){
                var index = workInfo[i];
                console.log('index', index);
                this.setState({
                    title: index.title,
                    description: index.description,
                    work1: index.work1,
                    work2: index.work2,
                    work3: index.work3,
                    link1: index.link1,
                    linkDescription1: index.linkDescription1,
                    link2: index.link,
                    linkDescription2: index.linkDescription2,
                    link3: index.link,
                    linkDescription3: index.linkDescription3,
                    pic: index.pic,
                    showInfo: true
                })
            }
        }
    }

    reRenderWork = () => {
        this.setState({showInfo: false});
    }

    // showInfo = () => {
    //     this.setState({showInfo: true});
    // }

    render(){

        const workCards = workInfo.map((item,index) => {
            return(
                <div key={index} className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col'>
                        <div style={{backgroundColor: 'black'}} className='card'>
                            <h2 id={item.id} onClick={this.showDetail} className='card-title mb-0 py-1'>{item.title}  / <span className={item.type}>{item.type}</span></h2>
                            <img id={item.id} onClick={this.showDetail} style={{backgroundColor: 'black'}} className='card-img-top pt-0' src={item.pic} />
                        </div>
                        </div>
                    </div>
                </div>
            )
        });
    
if(this.state.showInfo === false){
    return(
    <div>
        <div className='container'>
            <div className='row align-items-center justify-content-center text-center'>
                <h1 id="header" className="text-center mb-2">Work</h1>
            </div>
            <div className = 'row my-4'>
                <h2>Below are examples of my work by type. <span className='live'>Live</span> projects refer to video content I created for live musical performances. <span className='web'>Web</span> refers to websites, & browser-based experiences, and <span className='install'>Install</span> refers to art installations</h2>
            </div>
        </div>
        <div className='card-columns'>
            {workCards} 
        </div>
    </div>   
    )}else if(this.state.showInfo){
        return(
        <Content 
        title={this.state.title} 
        description={this.state.description} 
        work1={this.state.work1} 
        work2={this.state.work2}
        work3={this.state.work3} 
        link1={this.state.link1}
        linkDescription1={this.state.linkDescription1}
        link2={this.state.link1}
        linkDescription3={this.state.linkDescription2}
        link3={this.state.link3}
        linkDescription3={this.state.linkDescription3}
        pic={this.state.pic}
        reRenderWork={this.reRenderWork}/>
        )
    }
}
}

export default WorkNew