import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'jquery-nice-select/css/nice-select.css';
import './css/style.css'; // Import your custom styles
import heroBg from './images/hero-bg.jpg';
import s1 from './images/s1.png';
import s4 from './images/s4.png';
import s6 from './images/s6.png';
import aboutImg from './images/about-img.jpg';
import t1 from './images/t1.jpg';
import t2 from './images/t2.jpg';
import t3 from './images/t3.jpg';
import clientImg from './images/client.jpg';
class App extends React.Component {
  
  render() {
    return (
      <div id="mechjsbody">
        {/* <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Finter</title>
          <link rel="shortcut icon" href="images/fevicon.png" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha256-mLBIhmBvigTFWPSCtvdu6a76T+3Xyt+K571hupeFLg4=" crossorigin="anonymous" />
          <link href="css/font-awesome.min.css" rel="stylesheet" />
          <link href="./css/style.css" rel="stylesheet" />
          <link href="css/responsive.css" rel="stylesheet" />
        </head> */}


          <div className="hero_area">
            <div className="hero_bg_box">
              <img src={heroBg} alt="" />

            </div>

            <section className="slider_section ">
              <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container ">
                      <div className="row">
                        <div className="col-lg-10 col-md-11 mx-auto">
                          <div className="detail-box">
                            <h1>
                              We Provide <br />
                              Welding Servicess
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet conysectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container ">
                      <div className="row">
                        <div className="col-lg-10 col-md-11 mx-auto">
                          <div className="detail-box">
                            <h1>
                              We Provide2 <br />
                              Welding Services
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional carousel items */}
                </div>
                <div className="carousel_btn-box">
                  <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section className="service_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Our Services</h2>
                <p className="col-lg-8 px-0">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                </p>
              </div>
              <div className="service_container">
                <div className="carousel-wrap">
                  <div className="service_owl-carousel owl-carousel">
                    <div className="item">
                      <div className="box">
                        <div className="img-box">
                          <img src={s1} alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Home Welding</h5>
                          <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional service items */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about_section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box pr-md-2">
                    <div className="heading_container">
                      <h2>About Us</h2>
                    </div>
                    <p className="detail_p_mt">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                    </p>
                  </div>
                </div>
                <div className="col-md-6 px-0">
                  <div className="img-box">
                    <img src={aboutImg} className="box_img" alt="about img" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="team_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
                </p>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src={t1} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Martin Anderson</h5>
                      <h6>supervisor</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src={t2} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Martin Anderson</h5>
                      <h6>supervisor</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src={t3} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Martin Anderson</h5>
                      <h6>supervisor</h6>
                    </div>
                  </div>
                </div>
                {/* Additional team members */}
              </div>
            </div>
          </section>

          <section className="client_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Testimonial</h2>
                <hr />
              </div>
              <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-7 col-md-9 mx-auto">
                        <div className="client_container">
                          <div className="img-box">
                            <img src={clientImg} alt="" />
                          </div>
                          <div className="detail-box">
                            <h5>Jone Mark</h5>
                            <p>
                              Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                            </p>
                            <span><i className="fa fa-quote-left" aria-hidden="true"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Additional testimonial items */}
                </div>
                <div className="carousel_btn-box">
                  <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                    <span><i className="fa fa-arrow-left" aria-hidden="true"></i></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                    <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer content */}
          {/* ... */}

          {/* Scripts */}
          <script src="js/jquery-3.4.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="js/bootstrap.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" integrity="sha256-Zr3vByTlMGQhvMfgkQ5BtWRSKBGa2QlspKYJnkjZTmo=" crossorigin="anonymous"></script>
          <script src="js/custom.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
       
      </div>
    );
  }
}

export default App;
