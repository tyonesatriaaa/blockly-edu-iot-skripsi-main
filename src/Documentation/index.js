import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import "../style/styles.css";
// import image & video
import img1 from "../videos/IoT Smart Board-01.jpg";
import img2 from "../videos/IoT Smart Board-02.jpg";
// import MyVideo from "../videos/vid.mp4";
import iotdev from "../videos/iot.png";
// import MyVideo from "../VidAlat/vid.mp4";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.css';
// import 'swiper/swiper-bundle.css';

import "../style/swiper-bundle.css";



export default class index extends Component {
  render() {
    return (
      <div>
        <body class="landing-page">
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=994736563909741&autoLogAppEvents=1"></script>
          <div class="page-wrapper">
            <header class="header text-center">
              <div class="container">
                <div class="branding">
                  <h1 class="logo">
                    <span aria-hidden="true" class="icon_documents_alt icon"></span>
                    <span class="text-highlight">BLOCKLY</span><span class="text-bold">EDU-IOT</span>
                  </h1>
                </div>
                {/* <div class="tagline">
                  <p>Ekosistem pembelajaran IoT yang disertai dengan board secara khusus dirancang
                    untuk memudahkan pembelajaran IoT
                  </p>
                </div> */}
              </div>
            </header>
            <div class="container">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                      <div className="col-lg-7 mt-5">
                      <h2 class="title"><strong>Aplikasi Pembelajaran Logika
                        Pemrograman Dasar Pada Edu-IoT Board</strong>
                        </h2>
                        <div class="code-block">
                          <p class="text-normal">Website ini adalah sebuah aplikasi pembelajaran
                            logika pemrograman dasar menggunakan visual programming
                            yaitu Blockly.Anda bisa dengan mudah drag & drop block
                            yang dibutuhkan ketika ingin menyusun sebuah logika.
                            Aplikasi ini disusun dengan tujuan untuk mempermudah
                            belajar logika pemrograman kepada mahasiswa.
                          </p>
                        <div class="cta-container">
                          <a class="btn btn-primary btn-cta" href="/start" ><i class="fas fa-book"></i>Lihat Semua Dokumentasi</a>
                          <a class="btn btn-primary btn-cta ml-1" href="/workspace1"><i class="fas fa-book"></i>Mulai Pembelajaran</a>
                        </div>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src="/edu-iot-board.png" alt="..." />
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                      <div className="col-lg-7 mt-5">
                      <h2 class="title"><strong>Features</strong>
                      </h2>
                        <div class="code-block">
                          <p class="text-normal">
                            1. Creative learning berbasis puzzle game
                          </p>
                          <p class="text-normal">
                            2. Plug and play
                          </p>
                          <p class="text-normal">
                            3. Problem Solving dan Computational Thinking
                          </p>
                          <p class="text-normal">
                            4. Terintegrasi dengan Edu-IoT Board
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={img1} alt="..." />
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                      <div className="col-lg-7 mt-5">
                      <h2 class="title"><strong>Tujuan</strong>
                      </h2>
                        <div class="code-block">
                          <p class="text-normal">
                            Sistem ini ditujukan untuk mempromosikan dan membantu pembelajaran
                            computatational thinking dan problem solving sebagai literasi baru yang utama dan 
                            penting bagi anak anak di masa ini. Dengan model pembelajaran komponen visual yang simpel 
                            sistem ini bisa mempermudah anak-anak, atau siswa, bahkan mahasiswa untuk mempelajari.
                             Sistem ini bisa menjadi salah satu penerapan creative teaching yang diberikan terhadap siswa.
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={img2} alt="..." />
                      </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="row gx-4 gx-lg-5 align-items-center my-5">
                      <div className="col-lg-7 mt-5">
                      <h2 class="title"><strong>Video Preview</strong>
                      </h2>
                        <h3 class="text-normal">Penggunaan Aplikasi Blockly Edu-IoT</h3>
                        <div class="code-block">
                        </div>
                      </div>
                      <div class="col-lg-5">
                        
                        <video controls src={MyVideo} type="video/mp4" width="100%" height="100%" class="rounded mb-4 mb-lg-0" />
                      </div>
                    </div>
                </SwiperSlide> */}
              </Swiper>
   
                  
                  {/* <div class="intro">
                    <p class="text-normal">
                      Website ini adalah sebuah aplikasi pembelajaran logika pemrograman
                      dasar menggunakan visual programming yaitu Blockly.Anda bisa dengan
                      mudah drag & drop block yang dibutuhkan ketika ingin menyusun sebuah
                      logika. Aplikasi ini disusun dengan tujuan untuk mempermudah belajar
                      logika pemrograman kepada mahasiswa.
                    </p>
                    <div class="cta-container">
                      <a class="btn btn-primary btn-cta" href="/start" target="_blank"><i class="fas fa-book"></i>Lihat Semua Dokumentasi</a>
                      <a class="btn btn-primary btn-cta ml-1" href="/workspace1" target="_blank"><i class="fas fa-book"></i>Mulai Pembelajaran</a>
                    </div>
                  </div> */}
                  

            </div>
            
            <footer class="footer text-center">
              <div class="container">
                <small class="copyright">Designed by JTI Polinema</small>
              </div>
            </footer>
          </div>
        </body>
      </div>
    )
  }
}
