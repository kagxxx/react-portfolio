import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ContactImg from '../../assets/images/contact-img.svg'
import 'animate.css'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 3000)
  //   }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    // const serviceId = 'service_atmcjiu'
    // const templateId = 'template_jvbqpy9'
    // const publicKey = 'u1IJvHByaYgXdk8C4'

    emailjs
      .sendForm('service_atmcjiu', 'template_v2g9wyf', form.current, 'LYUhAuOIetYQUiDKI')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again')
          console.log(error);
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required

                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div> */}

        <img className="contact-image" src={ContactImg} />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
