import './index.scss'
import { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/images/header-img.svg'
import TrackVisibility from 'react-on-screen'
import Loader from 'react-loaders'
import { useNavigate } from 'react-router-dom';
import 'animate.css'


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['Web Developer', 'Web Designer']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])
    
  const navigate = useNavigate();
 
  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center row" >
          <Col xs={12} md={6} xl={7} className="col1">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounce' : ''
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1 className='intro'>
                    {`Hi I'm Kunal`}
                    <br/>
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                  Front End Developer / Python Expert /C++ Expert / JavaScript Expert .{' '}
                  </p>
                  <button onClick={() => navigate('/contact')}>
                    Contact Me <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="col2">
            <img src={headerImg} alt="Headder img" />
          </Col>
        </Row>
      </Container>
      <Loader type="pacman" />

    </section>
    
  )
}

export default Banner
