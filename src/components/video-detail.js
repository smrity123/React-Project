import React, { Component } from 'react'
class VideoDetails extends Component {
    render() { 
           const {videoId,title,description}=this.props;
            <div className='col-md-8'>
               <div className='embed-responsive embed-responsive-16by9'>
                 <iframe className='embed-responsive-item' width="100%" height="400" src={`https://www.youtube.com/embed/${videoId}`} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='details' style={{marginTop:'30px'}}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <hr/>
                </div>
           </div>
    }
}
 
export default VideoDetails;
