import woman from '../images/woman.jpeg'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init()
      })
    
  return (
    <div className=''>
            
        <div className='bg-warning'>
                <p className='h1 text-center p-3'>Who We Are</p>

            <div className='d-flex mt-3 p-5' >
                <div className='mx-5' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                    <img src={woman} alt="" style={{height: '70vh'}}/>
                </div>
                
                <div className='p-4'>
                    <h4>Music and Talent</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequuntur in, esse non ipsum eum velit ducimus facere, molestias rerum aspernatur neque eligendi eaque nam voluptatibus ipsa nemo quam a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit enim et animi ipsum impedit sint laudantium fuga, veritatis dignissimos voluptas expedita aliquid soluta repudiandae corporis harum perspiciatis, consequuntur dolorem.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequuntur in, esse non ipsum eum velit ducimus facere, molestias rerum aspernatur neque eligendi eaque nam voluptatibus ipsa nemo quam a!non ipsum eum velit ducimus facere, molestias rerum aspernatur neque eligendi eaque nam voluptatibus ipsa nemo quam a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit enim et animi ipsum impedit sint laudantium fuga, veritatis dignissimos voluptas expedita aliquid soluta repudiandae corporis harum perspiciatis, consequuntur dolorem</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequuntur in, esse non ipsum eum velit ducimus facere, molestias rerum aspernatur neque eligendi eaque nam voluptatibus ipsa nemo quam a!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About