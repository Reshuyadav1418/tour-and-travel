import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import SearchBAr from "../shared/SearchBAr";
import experienceImg from '../assets/images/experience.png'
import ServiceList from "../services/ServicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";
const Home = () => {
  return (
    <>
      {/*=======herosection start========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt=" " />
                </div>
                <h1>
                  Travelling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                  tenetur qui aut, quis perspiciatis nulla, eveniet in dolorum
                  corrupti modi ipsam non reiciendis doloremque. Aliquid ex
                  corporis, id totam ullam, dolorum neque repellat veniam
                  incidunt nobis saepe eos voluptates minus nesciunt quisquam
                  repellendus quod voluptatem.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBAr />
          </Row>
        </Container>
      </section>

      {/*=======herosection start========*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>

              <h2 className="services__title">We offer our best service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

        {/* ==================== featured tour section start =================== */}
        <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
           
          </Row>
        </Container>
      </section>
      {/* ==================== featured tour section end =================== */}

      {/* ==================== experience section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>

                <h2>With our all experience <br /> we will serve you</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Suscipit maxime, facilis atque vero qui cupiditate.</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div> 
             </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />


              </div>  
            </Col>
          </Row>
        </Container>
      </section>


            {/* ==================== experience section start =================== */}

              {/* ==================== gallery section section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
              <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
         
            </Col>
           </Row>
        </Container>
      </section>
                    {/* ==================== gallery section section end =================== */}


  {/* ==================== testimonial section start =================== */}
  <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================== testimonial section end =================== */}

<NewsLetter/>
    </>
  );
};
export default Home;
