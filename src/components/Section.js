import React from 'react';

const Section = ({name, bio, img}) => (
    <div className=""> 
      <p>{bio}</p>
      <img src={img} alt={name} />
      <h2>Mis hobbies</h2>
       <ul>
        <li>Bailar</li>
        <li>Programar</li>
        <li>dibujar</li>
      </ul>
   </div>
)

export default Section;