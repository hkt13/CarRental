import '../style/Pricing.css'
import data from '../data/pricing.json'
const Pricing=()=>{
    return(
        <>
   <section className="pricing-section" id='prices'>
    <div className="pricing-container">
<div className="pricing-container-title">
    <h3>Vehicle Models</h3>
    <h2>Our rental fleet</h2>
    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
</div>
<div className="pricing-container-car">
<div className="car-container">
    {data.map((item,index)=>{
        const {car_name, rate_per_day, image} = item;
      return  car_name==='Mahindra Thar'? (
           <div className='article' key={index}>
              
                <div className="article-info item1">
                <h4><span>₹{rate_per_day}/</span>rate per day</h4>
                <p>{car_name}</p>
                <a className="book-btn">Book Now &nbsp;&nbsp;<i class="fa-solid fa-phone"></i></a>
                </div>

                <div className="image item2">
                    
                    <img src={image} alt="" />
                    </div>

            </div>
        ) : (
            <div className='article' key={index}>
            <div className="image">
                
            <img src={image} alt="" />
            </div>
            <div className="article-info">
            <h4><span>₹{rate_per_day}/</span>rate per day</h4>
            <p>{car_name}</p>
            <a className="book-btn">Book Now &nbsp;&nbsp;<i class="fa-solid fa-phone"></i></a>
            </div>

        </div>
        )
    })}
</div>
</div>
    </div>
   </section>

   <section className="banner" id='info'>
   <div className="banner-container">
    <h2>Save big with our cheap car rental!</h2>
<p>Top Airports. Local Suppliers. <span>24/7</span> Support.</p>
   </div>
   </section>
   </>
    )
}

export default Pricing;