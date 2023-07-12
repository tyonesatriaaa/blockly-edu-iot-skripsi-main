import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import MyVideo from "../videos/vid.mp4";
import img1 from "../videos/IoT Smart Board-01.jpg";
import img2 from "../videos/IoT Smart Board-02.jpg";
// import ReactPlayer from 'react-player';

function VideoCarousell() {
    return (
        <>
            <div className='p-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                            width="50%"
                            height="50%"
                        />
                        <Carousel.Caption>
                            <h3>First Slider Image Title</h3>
                            <p>First Slide decription.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            width="50%"
                            height="50%"
                        />
                        <Carousel.Caption>
                            <h3>Second slide Image </h3>
                            <p>Second slide description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <video controls autoPlay src={MyVideo} type="video/mp4" width="50%" height="50%" /> */}
                        <Carousel.Caption>
                            <h3>Second slide Image </h3>
                            <p>Second slide description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}
export default VideoCarousell;  


    


