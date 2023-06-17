import React from 'react'
import Nav from '../Nav/Nav'
import CardReact from './CardReact'
import CardNode from './CardNode'
import CardGit from './CardGit'
import CardTrello from './CardTrello'
import CardCss from './CardCss'
const About = () => {
  return (
    <div className='App-PageAbout'>
        <Nav/>
        <div className='content-about'>
            <div className='about-one'>
                <CardNode></CardNode>
                <CardReact></CardReact>
                <CardGit></CardGit>
            </div>
            <div className='about-two'>
              <CardTrello></CardTrello>
              <CardCss></CardCss>
            </div>
        </div>
    
    
    </div>
  )
}

export default About