import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const SendMessage = () => {
  return (
    <div>
      <Container fluid>
        <hr />
          <div className="px-5" style={{marginTop:"50px", marginLeft:"60px", fontSize:"25px"}}>
          <h2>
            Send Us a <span className=" text-warning"> Message</span>
          </h2>
          <p> We'd Love to Hear From You </p>
          </div>
          <Row className="ms-3 py-2">
          <Col className="p-4 ms-3 px-3" style={{backgroundColor:"#FAF9F6", borderRadius:"5px"}}>
            <form style={{  marginLeft:"30px", backgroundColor:"#FAF9F6",}}>
              <div className="row g-2 ">
                <div className="col-sm-6">
                  <input
                    type="text"
                    placeholder="Name"
                    style={{ width: "250px", height: "45px" }}
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    placeholder="Email"
                    style={{ width: "240px", height: "45px" }}
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Subject"
                    style={{ width: "500px", height: "45px" }}
                  />
                  <br></br>
                </div>
                <div className="">
                  <textarea
                    type="text"
                    placeholder="Message"
                    style={{ width: "500px", height: "155px" }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-yellow w-100 py-3 rounded-pill d-flex gap-2 bg-warning text-center"
                  >
                    Send Message <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </form>
          </Col>
          <Col>
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.337090353503!2d7.460832539550774!3d9.082692000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b00161ba005%3A0x2302708c59569c93!2sCalabar%20Aroma%20Abuja%20Restaurant!5e0!3m2!1sen!2sng!4v1792278666895!5m2!1sen!2sng"
              width={600}
              height={350}
              style={{ border: 0, marginRight:"30px",marginTop:"-7px" }}
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SendMessage;
