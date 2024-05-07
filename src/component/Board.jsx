import React from 'react';

const Board = ({title, image1, image2, image3, header1, header2, header3}) => {
  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <h1 className='mb-4'>{title}</h1>
        <div className='row justify-content-center' >
          <div className='col-md-4'>
            <div className="card">
              <img src={image1} className="card-img-top" alt="Director 1" />
              <div className="card-body">
                <h5 className="card-title">{header1}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card">
              <img src={image2} className="card-img-top" alt="Director 2" />
              <div className="card-body">
                <h5 className="card-title">{header2}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card">
              <img src={image3} className="card-img-top" alt="Director 3" />
              <div className="card-body">
                <h5 className="card-title">{header3}</h5>
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

