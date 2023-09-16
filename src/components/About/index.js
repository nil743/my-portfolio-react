import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return()=>{ setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, )
  }}, [])

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
          <p>
            I'm a very ambitious full-stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I am interested in
            new-age technologies like web3, block-chain, AI.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic,
            music enthusiast, and tech-obsessed!!!
          </p>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

