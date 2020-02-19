import React from "react"
import NavBarG from "../Pages/NavBarG";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "react-bootstrap/Image"
const Pricing=()=>{
    return(
        <div>
            <NavBarG></NavBarG>
            
            
            
            
            
            
            <div className="container" style={{justifyContent:"center"}}>
            
            
            <h1 style={{fontFamily:"lucida grande",margin:"7.5px",textAlign:"center"}}>Pricing</h1>
            <div className="col-sm-6" style={{margin:"auto"}}>
            <p style={{fontSize:"x-large",textAlign:"center"}}>Our Pricing various for the various reservations made on number of customers that makes reservation </p>
            </div>

            <div className="row justify-content-center" style={{textAlign:"center",marginTop:"65px"}}>
                <div className="col-sm-4">
                <Card >
              <Card.Img variant="top" alt="img2" src="https://ssl.c.photoshelter.com/img-get/I0000_t2RSGBl7vw/s/1200/I0000_t2RSGBl7vw.jpg" />
              <Card.Body>
                <Card.Title>More Than 20 People</Card.Title>
                <Card.Text>
                  Make a booking and deposit of 300$
                </Card.Text>
                <Button variant="primary">Pay</Button>
              </Card.Body>
            </Card>
                </div>
                <div className="col-sm-4" style={{marginTop:"-50px"}}>
                <Card >
              <Card.Img variant="top" alt="img2" src="https://media.istockphoto.com/photos/assorted-indian-recipes-food-various-picture-id922783734?k=6&m=922783734&s=612x612&w=0&h=hljWwPRzq8Cc_PHbx693FPnQ_39yNqD4BUjtMbgASlM=" />
              <Card.Body>
                <Card.Title>More Than 10 People</Card.Title>
                <Card.Text>
                  Make a booking and deposit of 100$
                </Card.Text>
                <Button variant="primary">Pay</Button>
              </Card.Body>
            </Card>

                    </div>
                    <div className="col-sm-4">
                    <Card >
              <Card.Img variant="top" alt="img2" src="https://media.istockphoto.com/photos/table-filled-with-freshly-made-indian-food-picture-id162244500?k=6&m=162244500&s=612x612&w=0&h=meee-CxYXU978-jcELBvmXwCk5K0Q726n4R_3b8_dRs=" />
              <Card.Body>
                <Card.Title>More Than 10 People</Card.Title>
                <Card.Text>
                  Make a booking and deposit of 100$
                </Card.Text>
                <Button variant="primary">Pay</Button>
              </Card.Body>
            </Card>
                    </div>

            </div>


                {/* <div className="col-sm4" style={{}}>
                <h3>For More than 20 People</h3>
                <h3>For More than 15 People</h3>
                <h3>For More than 10 People</h3>
                <h3>For More than 5 People</h3>
                </div>  
                <div className="col-sm4" style={{fontFamily:"lucida grande",marginLeft:"10px"}}>
                <h3>Need to deposit 300$</h3>
                <h3>Need to deposit 200$</h3>
                <h3>Need to deposit 100$</h3>
                <h6>No Need to deposit but make a phone call to reserve the place </h6>

                </div>                 */}
                
            </div>
        </div>
    )
}
export default Pricing