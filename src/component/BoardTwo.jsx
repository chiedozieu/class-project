import React, { useEffect } from 'react'
import b4 from '../images/b4.jpeg';
import b5 from '../images/b5.jpeg';
import b6 from '../images/b6.jpeg';
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const BoardTwo = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  })



  return (
    <div className='container'>
      <div className='text-center mt-5'>
       
        <div className='row justify-content-center' >
          <div className='col-md-4'>
            <div className="card" data-aos="fade-up-right">
              <img src={b4} className="card-img-top" alt="Director 1" />
              <div className="card-body">
                <h5 className="card-title">Director4</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" data-aos="fade-up">
              <img src={b5} className="card-img-top" alt="Director 2" />
              <div className="card-body">
                <h5 className="card-title">Director5</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" data-aos="fade-up-left">
              <img src={b6} className="card-img-top" alt="Director 3" />
              <div className="card-body">
                <h5 className="card-title">Director6</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardTwo;
