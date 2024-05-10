import React, { useEffect } from 'react'
import b1 from '../images/b1.jpeg';
import b2 from '../images/b2.jpeg';
import b3 from '../images/b3.jpeg';

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const Board = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  })



  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <h1 className='mb-4'>Board Of Directors</h1>
        <div className='row justify-content-center' >
          <div className='col-md-4'>
            <div className="card" data-aos="fade-down-right">
              <img src={b1} className="card-img-top" alt="Director 1" />
              <div className="card-body">
                <h5 className="card-title">Director1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" data-aos="fade-down">
              <img src={b2} className="card-img-top" alt="Director 2" />
              <div className="card-body">
                <h5 className="card-title">Director2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" data-aos="fade-down-left">
              <img src={b3} className="card-img-top" alt="Director 3" />
              <div className="card-body">
                <h5 className="card-title">Director3</h5>
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

export default Board;

