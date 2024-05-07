
import About from '../component/About'
import Board from '../component/Board'
import Carousel from '../component/Carousel'
import Services from '../component/Services'
import b1 from '../images/b1.jpeg';
import b2 from '../images/b2.jpeg';
import b3 from '../images/b3.jpeg';
import b4 from '../images/b4.jpeg';
import b5 from '../images/b5.jpeg';
import b6 from '../images/b6.jpeg';

const Home = () => {
  return (
    <div>
    
    <Carousel />
    <Services heading= 'Our Top Services' titleOne='Artist Recording' titleTwo='Musical Instruments' titleThree='Trainings and Vocals'/>
    <Services titleOne='Record Label' titleTwo='Book Artist' titleThree='Buy Tickets' />
    <About />
    <Board title={"Board Of Directors"} header1={'Director1'} header2={'Director2'} header3={'Director3'} image1={b1} image2={b2} image3={b3}/>
    <Board header1={'Director4'} header2={'Director5'} header3={'Director6'} image1={b4} image2={b5} image3={b6}/>
    {/* <Footer /> */}
    </div>
  )
}

export default Home