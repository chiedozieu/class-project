
import About from '../component/About'
import Board from '../component/Board'
import BoardTwo from '../component/BoardTwo';
import Carousel from '../component/Carousel'
import Services from '../component/Services'



const Home = () => {
  return (
    <div>
    
    <Carousel />
    <Services heading= 'Our Top Services' titleOne='Artist Recording' titleTwo='Musical Instruments' titleThree='Trainings and Vocals'/>
    <Services titleOne='Record Label' titleTwo='Book Artist' titleThree='Buy Tickets' />
    <About />
    <Board />
    {/* <Board header1={'Director4'} header2={'Director5'} header3={'Director6'} image1={b4} image2={b5} image3={b6}/> */}
    <BoardTwo />
    </div>
  )
}

export default Home