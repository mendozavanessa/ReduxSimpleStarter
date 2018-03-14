import React, {Component} from 'react';

class Header extends Component {
 render(){
  const {name} = this.props
  return (
    <div className="music-card"> 
       <h1>{name}</h1>
   </div>
)
 }
}

export default Header;