import '../style/Home.css'

const Home=()=>{
    return(
        <section id="home" className="hero-section">
            <div className="hero-container">
            <img class="bg-shape" src="https://car-rental-ten.vercel.app/static/media/hero-bg.3b5f7a2502f0f81d1490.png" alt="bg-shape" />
            <div className="hero-content">
                <div className="hero-content-text">

                    <h4>Plan your trip now</h4>
                    <h1>Save <span>big</span> with our car rental</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className="hero-content-text-btns">
                        <a href="" className='book-ride-btn'>Book Ride &nbsp;&nbsp;
                        <i class="fa-solid fa-circle-check"></i>
                        </a>
                        <a href="" className="learn-more-btn">Learn More &nbsp;&nbsp;
                        <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <img src="https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png" alt="" className="hero-content-car" />
            </div>
            </div>
        </section>
    )
}

export default Home;