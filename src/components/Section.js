import React from 'react';
const hobies = ['bailar', 'programar', 'dibujar'];
const Section = ({name, bio, img}) => (
    <div className=""> 
      <p>{bio}</p>
      <img src={img} alt={name} />
      <h2>Mis hobbies</h2>
       <ul>
        {hobies.map((element,index)=>{
       return <li key={index}>{element}</li>
   })}
      </ul>
   </div>
)

export default Section;