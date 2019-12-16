import React ,{Component} from 'react'
import Header from '../pages/Header'
import ViewRoom from '../pages/ViewRoom'


class Home extends Component{
  render(){
    return(
      <div>
          <Header />
          <ViewRoom/>
        </div>
    )
  }
}
export default Home;