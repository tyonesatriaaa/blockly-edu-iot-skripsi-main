import React, { Component } from 'react'

export default class start extends Component {
    render() {
        return (
            <div>
                <body class="body-blue">
                    <div class="page-wrapper">
                        <header id="header" class="header">
                            <div class="container">
                                <div class="branding">
                                    <h1 class="logo">
                                        <a href="index.html">
                                            <span aria-hidden="true" class="icon_documents_alt icon"></span>
                                            <span class="text-highlight">Blockly</span><span class="text-bold">Edu-IoT</span>
                                        </a>
                                    </h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/workspace2">Kembali</a></li>
                                    <li class="breadcrumb-item active">Challanges</li>
                                </ol>
                            </div>
                        </header>
                        <div class="doc-wrapper">
                            <div class="container">
                                <div class="doc-body row">
                                <div class="doc-content col-md-9 col-12 order-1">
                                        <div class="content-inner">
                                            <section id="installation-section" class="doc-section">
                                            <h1 class="section-title" align="center"> CHALLENGES  </h1>
                                                
                                                <div id="1" class="section-block">
                                                    <h2 class="block-title" >1. If Challenge</h2>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan2.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p><b>Judul :</b><br></br>
                                                        Menyalakan LED dengan data sensor cahaya
                                                        </p>
                                                        <p><b>Level :</b><br></br>
                                                        Blocly Edu-Iot level <b>2 Keatas</b>
                                                        </p>
                                                        <p><b>Ketentuan :</b><br></br>
                                                        Cara mengambil data sensor Cahaya harus menggunakan variabel yang anda buat 
                                                        sendiri dan nilainya jika 40  sensor Cahaya maka LED akan menyala dengan value 
                                                        “8” jika nilai 40  sensor Cahaya maka akan melakukan print Text “Cukup Terang”
                                                        dan LED tidak menyala.
                                                        </p>
                                                    </div>
                                                        <div class="cta-container">
                                                            <a class="btn btn-primary btn-cta" href="/workspace2" ><i class="fas fa-book"></i>Mengerjakan</a>
                                                                {' '}
                                                            <a class="btn btn-primary btn-cta" href="/tantangan/if_challenge.pdf" target="_blank" ><i class="fas fa-book"></i>Download PDF</a>
                                                        </div>
                                                    </div>

                                                <div id="2" class="section-block">
                                                    <h2 class="block-title" >2. Looping Challenge</h2>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan3.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p><b>Judul :</b><br></br>
                                                        Menghitung Mundur data sensor Jarak
                                                        </p>
                                                        <p><b>Level :</b><br></br>
                                                        Blocly Edu-Iot level <b> 3 Keatas</b>
                                                        </p>
                                                        <p><b>Ketentuan :</b><br></br>
                                                        Membuat variabel baru dengan value data sensor Jarak lalu melakukan perulangan while, 
                                                        hasilnya akan melakukan hitungan mundur dimulai dari value data sensor jarak tersebut 
                                                        dan jika sudah habis akan melakukan print text "Jarak Habis"
                                                        </p>
                                                    </div>
                                                        <div class="cta-container">
                                                            <a class="btn btn-primary btn-cta" href="/workspace3" ><i class="fas fa-book"></i>Mengerjakan</a>
                                                                {' '}
                                                            <a class="btn btn-primary btn-cta" href="/tantangan/Looping_Challenge.pdf" target="_blank" ><i class="fas fa-book"></i>Download PDF</a>
                                                        </div>
                                                    </div>

                                                <div id="3" class="section-block">
                                                    <h2 class="block-title" >3. Function Challenge</h2>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan4.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p><b>Judul :</b><br></br>
                                                        Cek Kualifikasi umur pendaftaran SIM
                                                        </p>
                                                        <p><b>Level :</b><br></br>
                                                        Blocly Edu-Iot level <b> 4 </b>
                                                        </p>
                                                        <p><b>Ketentuan :</b><br></br>
                                                        Membuat variabel untuk melakukan print umur, jika value input diatas 18 akan melakukan print “Anda dapat Membuat Sim”
                                                        jika dibawah 18 akan melaukukan print “Anda Belum Cukup Umur”
                                                        </p>
                                                    </div>
                                                        <div class="cta-container">
                                                            <a class="btn btn-primary btn-cta" href="/workspace4" ><i class="fas fa-book"></i>Mengerjakan</a>
                                                                {' '}
                                                            <a class="btn btn-primary btn-cta" href="/tantangan/function_Challenge.pdf" target="_blank" ><i class="fas fa-book"></i>Download PDF</a>
                                                        </div>
                                                    </div>

                                            </section>
                                        </div>
                                    </div>

                                    {/* siidebar */}
                                    <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                        <div id="doc-nav" class="doc-nav">
                                            <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#download-section">CHALLENGES</a>
                                                </li>
                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#1">1. If Challenge</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#2">2. Looping Challenge</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#3">3. Function Challenge</a>
                                                    </li>
                                                </nav>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}
