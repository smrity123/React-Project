import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component } from 'react';
import '../css/index.css'
class VideoListItem extends Component {
    render() { 
        const {src,title}= this.props;
        return (
            <li className="list-group-item media video-list"style={{display:'flex',cursor:'pointer'}}>
                <img className='mr-3' height='auto' width='40%' src={src}/>
                <div className='media-body' style={{marginLeft:'20px'}}>
                {title}
                </div>
            </li>
        );
    }
}
 
export default VideoListItem;