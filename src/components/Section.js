import React from 'react';
import List from './List'
const Section = ({name, bio, img}) => (
    <div className=""> 
      <p>{bio}</p>
      <img src={img} alt={name} />
      <h2>Mis hobbies</h2>
      <List />
   </div>
)

export default Section;