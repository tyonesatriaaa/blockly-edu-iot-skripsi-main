import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
export default class indexConf extends Component {
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
                            <div class="tagline">
                                <p>Aplikasi Sederhana Untuk Belajar Logika Pemrograman Dasar Pada Edu-IoT Board</p>
                                {/* <p>Aplikasi Pembelajaran Logika Pemrograman Dasar Pada Edu-IoT Board</p> */}
                            </div>
                            <div class="social-container">
                            </div>
                        </div>
                    </header>
                    <section class="cards-section">
                        <h2 class="text-center b1">Konfigurasi</h2>
                            <div class="container">
                                <div class="intro">
                                    <form clas="">
                                        <div class="form-group margin-1">
                                        <label class="config-style" for="exampleInputEmail1">Host</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Host ex:mosquitto.test"></input>
                                        </div>
                                        <div class="form-group margin-1">
                                            <label class="config-style" for="exampleInputEmail1">ClientID</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ClientID ex:idpnx2022"></input>
                                        </div>
                                        <div class="form-group margin-1">
                                            <label class="config-style" for="exampleInputEmail1">Port</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Port ex:8000"></input>
                                        </div>
                                        <div class="form-group margin-1">
                                            <label class="config-style" for="exampleInputEmail1">Username</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username ex:guest"></input>
                                        </div>
                                        <div class="form-group margin-1">
                                            <label class="config-style" for="exampleInputEmail1">Password</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password ex:guest"></input>
                                        </div>
                                    </form>
                                    <div class="cta-container">
                                        <a class="btn btn-primary btn-cta" href="/start" target="_blank"><i class="fas fa-book"></i>Submit</a>
                                    </div>
                                </div>
                            </div>
                    </section>
                    
                    
                    <footer class="footer text-center">
                        <div class="container">
                            <small class="copyright">Designed with by JTI Polinema</small>
                        </div>
                    </footer>
                </div>
            </body>
      </div>
    )
  }
}
