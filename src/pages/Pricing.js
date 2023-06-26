import React from 'react'
import Category from './PyFiles/category_table.png';
import Final from './PyFiles/final_table.png';
import Forecast from './PyFiles/forecast_table.png';
import Plot from './PyFiles/plot.png';
import './styles.css'

function Pricing() {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Welcome to your cost breakdown</h2>
        <p style={{textAlign: "center"}}>
        Here is your category based breakdown.
        </p>
        <div class="center-image">
          <img src={Category}/>
        </div>
        <p style={{textAlign: "center"}}>
        Here are your most expensive expenditures.
        </p>
        <div class="center-image">
          <img src={Final}/>
        </div>
        <p style={{textAlign: "center"}}>
        Here is your forecast for the next year.
        </p>
        <div class="center-image">
          <img src={Forecast}/>
        </div>
        <p style={{textAlign: "center"}}>
        Here is your breakdown by percentage.
        </p>
        <div class="center-image">
          <img src={Plot}/>
        </div>
    </div>
  )
}

export default Pricing
