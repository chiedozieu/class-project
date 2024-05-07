import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
        <h2 className='display-4 text-center my-3'>Our Top Services</h2>
        <div className='d-md-flex mx-5'>
            <div className="card mx-3">
                <div className="card-body">
                    <h5 className="card-title">Artist Recording</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card mx-3">
                <div className="card-body">
                    <h5 className="card-title">Musical Instruments</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card mx-3">
                <div className="card-body">
                    <h5 className="card-title">Trainings and Vocals</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>

        
        <div className='d-md-flex mx-5 my-5'>
            <div className="card mx-3">
                <div className="card-body">
                    <h5 className="card-title">Music Shows</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card mx-3">
                <div className="card-body">
                    <h5 className="card-title">Record Label</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card mx-3">
                <div className="card-body">
                    <h5 className="card-title">Buy Tickets</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
        
        
        
    </>
  )
}

export default Services