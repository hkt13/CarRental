import '../style/Footer.css'

const Footer=()=>{
    return(
       <footer id='contact'>
        <div className="container">
            <div className="footer-content">
                <ul className="footer-content-list list1">
                    <li><span>CAR</span> Rental</li>
                    <li>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
                    <li><a href=""><i class="fa-solid fa-phone"></i>&nbsp; 91-6254-3210</a></li>
                    <li><a href=""><i class="fa-solid fa-envelope"></i>&nbsp; rentalcar@gmail.com</a></li>
                    <li style={{"fontSize": '14px'}}> <a href=""> Design by XpeedStudio</a></li>
               
                </ul>
                <ul className="footer-content-list list2">
                    <li>Company</li>
                <li><a href="">Delhi</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">How we work</a></li></ul>
                <ul className="footer-content-list list2">
                    <li>WORKING HOURS</li>
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li></ul>
                <ul className="footer-content-list list2">
                    <li>SUBSCRIPTION</li>
                    <li><p>Subscribe your Email address for latest news & updates.</p></li>
                    <li><input type="email" placeholder="Enter Email Address" /></li>
                    <li><button class="submit-email">Submit</button></li>
                </ul>
            </div>
        </div>
       </footer>
    )
}

export default Footer;