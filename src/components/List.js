import React from 'react';
const hobies = ['bailar', 'programar', 'dibujar'];
const List  = ({name}) =>(
  <ul>
    {hobies.map((element,index)=>{
    return <li key={index}>{element}</li>
  })}
  </ul>
)

export default List;