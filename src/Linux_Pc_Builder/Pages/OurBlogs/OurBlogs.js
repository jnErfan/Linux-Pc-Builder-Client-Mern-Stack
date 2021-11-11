import React from "react";
import { Carousel } from "react-bootstrap";
import "./OurBlogs.css";

const OurBlogs = () => {
  return (
    <div>
      <div className="blogContainer" />
      <div className="container containerMarginMinus">
        <div className="text-center">
          <h1 className="borderUnderlineBlog">Our Blogs</h1>
        </div>
        <div>
          <div className="exploreContainer shadow-lg p-4 mt-5">
            <div className="title py-5 text-center">
              <h1 className="mb-5 text-black">
                EXPLORE SOME OUR CREATED GAMING DESKTOP SETUP
              </h1>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <div className="row row-cols-3 g-4">
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://www.dolphin.com.bd/pub/media/rokanthemes/blog/images/v/i/video_editing_pc.png"
                        className="d-block w-100 carouselImage"
                        alt="..."
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://i.pinimg.com/originals/84/ea/5c/84ea5ca32d587b80d064f452111b9f88.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://pbs.twimg.com/media/DiNnoMeXUAAAql6.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://www.teahub.io/photos/full/110-1103541_led-gaming-setup.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://i.pinimg.com/originals/4b/95/9e/4b959e8443eb137ea8b076a4d40f18eb.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <div className="row row-cols-3 g-4">
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://i.pinimg.com/originals/cc/51/d8/cc51d8516385239c695d679b893fe0ae.jpg"
                        className="d-block w-100 carouselImage"
                        alt="..."
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://i.pinimg.com/originals/be/da/dd/bedadd93f92d1726f7ba4959cd9eacc6.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://pbs.twimg.com/media/EF4ZV44WwAUT3BW.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://data.whicdn.com/images/347841213/original.jpg"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjMcUFtudysbYfGHgq_YgsaX2HVcWvPxtkASPP5il8630XFOxz9UEL9uJA4gSM6fVegs&usqp=CAU"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                    <div className="col col-12 col-md-6 col-lg-4">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1581577202523-FE8D0GA5DJ4CY39M58WL/game+room+ambient+lights"
                        className="d-block w-100 carouselImage"
                        alt=""
                      />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h1 className="mb-5 title">OUR CUSTOMER SETUP BLOGS </h1>
            <div className="row row-cols-2">
              <div className="col col-12 col-md-12 col-lg-6 ">
                <iframe
                  className="videos"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/uYrG2bo0ZsY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col col-12 col-md-12 col-lg-6 ">
                <iframe
                  className="videos"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/aRgqQe-8zYk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col col-12 col-md-12 col-lg-6 ">
                <iframe
                  className="videos"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/Py3rux4l1kQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col col-12 col-md-12 col-lg-6 ">
                <iframe
                  className="videos"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/ydFPu2mVccc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col col-12 col-md-12 col-lg-6 ">
                <iframe
                  className="videos"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/Bm04w1kGCVc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col col-12 col-md-12 col-lg-6 ">
                <iframe
                  className="videos"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/J-8mHBnmLcM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
