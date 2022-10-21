import React, { Component } from 'react'
class SearchBar extends Component {
    render(){
       const {handler,searchTerm} = this.props;
       return(
        <div style={{width:'100%',textAlign:'center',marginTop:'30px',marginBottom:'40px'}}>
          <input style={{width:'40%', paddingTop:'10px',paddingBottom:'10px'}} onChange={handler}/>
          <br/>
          <span>{searchTerm}</span>
        </div> 
       )
        
    }
}
 
export default SearchBar;