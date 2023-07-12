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
                                    <li class="breadcrumb-item active">Example 2</li>
                                </ol>
                            </div>
                        </header>
                        <div class="doc-wrapper">
                            <div class="container">
                                <div class="doc-body row">
                                    <div class="doc-content col-md-9 col-12 order-1">
                                        <div class="content-inner">
                                            <section id="installation-section" class="doc-section">
                                                <h2 class="section-title">Example Level 2</h2>
                                                <div id="1" class="section-block">
                                                    <h3 class="block-title">1. Menyalakan Fan dengan Logika If</h3>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan2.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p>Membuat logika If dengan mengambil data dari sensor suhu jika value == 27 maka Fan akan menyala dengan kecepatan 500.</p>
                                                        <img src="/example/level2_1.png" width={300} alt="..." />
                                                        <p>Klik untuk melihat hasilnya</p>
                                                            <div class="cta-container">
                                                                <a class="btn btn-primary btn-cta" href="/workspace2_1"><i class="fas fa-book"></i>Hasil</a>
                                                            </div>
                                                    </div>
                                                </div> 

                                                <div id="2" class="section-block">
                                                    <h3 class="block-title">2. Print Text dengan Logika If Else</h3>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan2.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p>Membuat Logika If Else dengan mengambil data dari sensor cahaya jika value kurang dari 10 maka akan muncul Text Redup jika tidak maka muncul text Terang .</p>
                                                        <img src="/example/level2_2.png" width={300} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Klik untuk melihat hasilnya</p>
                                                            <div class="cta-container">
                                                                <a class="btn btn-primary btn-cta" href="/workspace2_2"><i class="fas fa-book"></i>Hasil</a>
                                                            </div>
                                                    </div>
                                                </div>                                                     
                                                <div id="3" class="section-block">
                                                    <h3 class="block-title">3. Membuat Logika if else dengan menambahkan variabel baru</h3>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan2.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p>Membuat variabel a dan b dan di implementasikan ke logika if else. Variabel a adalah sensor suhu dan variabel b adalah sensor Kelembapan jika Variabel b lebih dari a maka akan melakukan print "Dingin Kering" jika tidak maka akan melakukan print "Dingin Kering" .</p>
                                                        <img src="/example/level2_3.png" width={300} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Klik untuk melihat hasilnya</p>
                                                            <div class="cta-container">
                                                                <a class="btn btn-primary btn-cta" href="/workspace2_3"><i class="fas fa-book"></i>Hasil</a>
                                                            </div>
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
                                                    <a class="nav-link scrollto" href="#download-section">Example 2</a>
                                                </li>
                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#1">1. Menyalakan Fan Dengan Logika If</a>
                                                        <a class="nav-link scrollto" href="#2">2. Print Text dengan Logika If Else</a>
                                                        <a class="nav-link scrollto" href="#3">3. Logika if else dan variabel baru</a>
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
