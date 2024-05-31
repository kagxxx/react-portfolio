import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='about'>
          I am a B.Tech graduate in Computer Science Engineering from Guru Gobind Singh Indraprastha University, with a strong foundation in programming and software development. I have gained hands-on experience through internships and projects, focusing on web development, data analysis, and machine learning. I am proficient in multiple programming languages and frameworks, and I have a passion for solving complex problems and optimizing applications.
          </p>
          <p align="LEFT">
          Throughout my academic and professional journey, I have demonstrated leadership by mentoring teams and successfully executing projects that led to significant improvements in productivity and performance. My technical skills are complemented by my ability to quickly adapt to new technologies and methodologies, making me a versatile and valuable team player.
          </p>
          <p>
          I am seeking opportunities that allow me to leverage my technical expertise, problem-solving skills, and leadership abilities to contribute to innovative projects and drive organizational success.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About