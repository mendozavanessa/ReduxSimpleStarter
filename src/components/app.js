import React from 'react';
import Header from './Header'
import Section from './Section'

const App = () => (
  <div className="">  
       <Header 
        name = 'Vanessa Mendoza Inoñan'
       />
       <Section 
        bio = 'Soy front-end developer. Me considero una persona responsable, puntual y empeñosa; me fascina viajar así como aprender cosas nuevas. En un futuro quiero aprender mas sobre inteligencia artificial y robótica ; de esa manera poder ayudar a mi sociedad.'
        img = 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/23754830_423298234752005_1962239462349631058_n.jpg?_nc_eui2=v1%3AAeE3iCAQ3-z-5kgHYUuT80rhGwCKLB8wdK8Cvl84mf30OpkeCy3LwUUHOEIcaKjDOq6bI5tCyYnnkFW152h92Kqpv5l5boJbr6cTa1WMI1GfOA&oh=f26e24cec2573d47a6d78605bc3ecd30&oe=5B483AA3'
       />
   </div>
)

export default App
