import React from 'react'
import '../styles/Projects.scss'
import WeatherAppImage from '../WeatherAppImage.png'
import KatalogPtasichMelodii from '../KatalogPtasichMelodii.png'
import GradientGeneratorImage from '../GradientGeneratorImage.png'

const Projects = () => (
  <main className='Projects'>
    <h1>My last projects</h1>
    <div className='ProjectsItem'>
      <a href='http://weatherapp.kamilsmolen.ski/?'>
        <p>Weather App in React JS</p>

        <img src={WeatherAppImage} alt='AppWeatherIcon' />

        <div />
      </a>
    </div>
    <div className='ProjectsItem'>
      <a href='https://kamilsmolenski.github.io/PtasieMelodie/'>
        <p>Sounds of bird [PL] - Vanilla JS</p>
        <img src={KatalogPtasichMelodii} alt='Sounds of birds app image' />
      </a>
    </div>
    <div className='ProjectsItem'>
      <a href='https://kamilsmolenski.github.io/GradientGenerator/'>
        <p>Simply CSS background gradient generator</p>
        <img src={GradientGeneratorImage} alt='Gradient Generator Image' />
      </a>
    </div>
  </main>
)

export default Projects
