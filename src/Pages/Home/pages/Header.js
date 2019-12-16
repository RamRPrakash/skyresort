import React , {Component} from 'react'
import Paper from "@material-ui/core/Paper";

class Header extends Component{
  render(){
    return(
      <div>
<Paper style={{height : "40px" , backgroundColor : "orange"}}>
<div>
  <div style={{float :"right" , marginRight : "2%" , lineHeight : "40px"}}>
  Room
  </div>
  <div style={{float :"right" , marginRight : '10%' , lineHeight :'40px' }}>
  Home
  </div>
  
  </div>
</Paper>
        
      </div>
    )
  }
}
export default Header