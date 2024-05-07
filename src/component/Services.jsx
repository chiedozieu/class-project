import React from 'react'
import { Link } from 'react-router-dom'

const Services = (props) => {
  return (
    <>
        <h2 className='display-4 text-center my-3'>{props.heading}</h2>
        <div className='d-md-flex mx-5'>
            <div className="card mx-3 my-3">
                <div className="card-body">
                    <h5 className="card-title">{props.titleOne}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card mx-3 my-3">
                <div className="card-body">
                    <h5 className="card-title">{props.titleTwo}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
            <div className="card mx-3 my-3">
                <div className="card-body">
                    <h5 className="card-title">{props.titleThree}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>

        
        
        
        
    </>
  )
}

export default Services