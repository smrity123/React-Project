import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
class App extends Component {
    state = { 
      searchTerm: '',
      data: {},
      videoId:'',
      title:'',
      description:''
   } 
   handler= ({target:{value:searchTerm}}) => this.setState({ ...this.state,searchTerm});

   handleSelect(videoId,title,description){this.setState({...this.state, videoId, title, description});}

   componentDidUpdate(prevProps,prevState){

  
  const getYoutubeVideos=()=>{
  const baseUrl='https://www.googleapis.com/youtube/v3/search';
  const key='AIzaSyCIWf_lWyFH3j3CLyu9n_8jSH-1Lg5GTzk';
  const type='video';
  const part='snippet';
  const q=this.state.searchTerm;
  const url=`${baseUrl}?type=${type}&part=${part}&key=${key}&q=${q}`;

  axios.get(url)
         .then((response)=>{ this.setState({...this.state,data: response.data}); })
         .catch((error)=>{console.log(error);});

  }
  if(prevState.searchTerm!==this.state.searchTerm){
    getYoutubeVideos();
  }
}
  render() { 
    const items= this.state.data.items || []
    return (
      <div className='container'>
        <SearchBar handler={this.handler} searchTerm={this.state.searchTerm}/>
        
        <div className='row'>
          <div className='col-md-8'>
               <div className='embed-responsive embed-responsive-16by9'>
                 <iframe className='embed-responsive-item' width="100%" height="400" src={`https://www.youtube.com/embed/${this.state.videoId}`} title="Dokhino Hawa | Coke Studio Bangla | Season One | Tahsan X Madhubanti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='details' style={{marginTop:'30px'}}>
                    <h4>{this.state.title}</h4>
                    <p>{this.state.description}</p>
                    <hr/>
                </div>
           </div>
          <div className='col-md-4'>
           <ul className="list-group col-md-4" style={{width:'100%'}}>
            {
              items.map(item=>{
               const imgUrl= item.snippet.thumbnails.high.url;
               const title=item.snippet.title;
               const videoId=item.id.videoId;
               const description=item.snippet.thumbnails.description;

              return (
                <li className="list-group-item media video-list"style={{display:'flex' ,width:'100%'}} onClick= {(event)=>{this.handleSelect(videoId,title,description);}}>
                  <img className='mr-3' height="150" width="200"  src={imgUrl} alt="im"/>
                  <div className='media-body' style={{marginLeft:'20px'}}>
                  {title}
                  </div>
               </li>
              )
              
              } )
            }
                
           </ul>
          </div>
        </div>  
      </div>
      
    );
  }
}
export default App;

/*class App extends Component {
  
 render() { 
    return (
      <div className='container'>
         <SearchBar/>
      <div className='row'>
          <VideoDetails/>  
          <VideoList/>
      </div>
      </div>
    );
  }
}
 
export default App;
*/