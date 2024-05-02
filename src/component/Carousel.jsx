import girl1 from '../images/girl-1.jpeg'
import girl2 from '../images/girl2.jpeg'
import girl3 from '../images/girl3.jpeg'

const Carousel = () => {
  return (
    <div><div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={girl1} className="d-block w-100" alt="music"style={{height: '91vh'}}/>
      </div>
      <div className="carousel-item">
        <img src={girl2} className="d-block w-100" alt="music"style={{height: '91vh'}}/>
      </div>
      <div className="carousel-item">
        <img src={girl3} className="d-block w-100" alt="music"style={{height: '91vh'}}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Carousel