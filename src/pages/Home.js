import React from 'react'
import Logo from './Color logo with background.png';
import './styles.css'

function Home() {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Welcome to Milantis</h2>
        <p style={{textAlign: "center"}}>
        Home to all your IT cost-management solutions.
        </p>
        <div class="center-image">
          <img src={Logo} alt="Home"/>
        </div>
    </div>
  )
}

export default Home
