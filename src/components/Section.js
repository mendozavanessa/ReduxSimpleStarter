import React, {Component} from 'react';

class Section extends Component {
 render(){
  const {name, bio, img} = this.props
  return (
    <div className="music-card"> 
      <p>{bio}</p>
      <img src={img} alt={name} />
       <ul>
        <li>Bailar</li>
        <li>Programar</li>
        <li>dibujar</li>
      </ul>
   </div>
)
 }
}

export default Section;