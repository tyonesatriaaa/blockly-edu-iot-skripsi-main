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
                                    <li class="breadcrumb-item"><a href="/workspace1">Kembali</a></li>
                                    <li class="breadcrumb-item active">Example 1</li>
                                </ol>
                            </div>
                        </header>
                        <div class="doc-wrapper">
                            <div class="container">
                                <div class="doc-body row">
                                    <div class="doc-content col-md-9 col-12 order-1">
                                        <div class="content-inner">
                                            <section id="installation-section" class="doc-section">
                                                <h2 class="section-title">Example Level 1</h2>
                                                <div id="1" class="section-block">
                                                    <h3 class="block-title">1. Menyalakan LED dan FAN</h3>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan1.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p>Menyalakan 2 kompnen dengan menggabungkan blok LED 1 dan Fan kecepatan 20  
                                                           dalam Blok Edu-IoT Board atau IoT Development Board.</p>
                                                        <img src="/example/level1_1.png" width={180} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Klik untuk melihat hasilnya</p>
                                                            <div class="cta-container">
                                                                <a class="btn btn-primary btn-cta" href="/workspace1_1" ><i class="fas fa-book"></i>Hasil</a>
                                                            </div>
                                                    </div>
                                                    </div>
                                                    <div id="2" class="section-block">
                                                    <h3 class="block-title">2. Menampilkan tulisan dilayar</h3>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan1.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p>Menampilkan tulisan di layar menggunakan text Print</p>
                                                        <img src="/example/level1_2.png" width={300} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Klik untuk melihat hasilnya</p>
                                                            <div class="cta-container">
                                                                <a class="btn btn-primary btn-cta" href="/workspace1_2" ><i class="fas fa-book"></i>Hasil</a>
                                                            </div>
                                                    </div>
                                                    </div>
                                                    <div id="3" class="section-block">
                                                    <h3 class="block-title">3. Menyalakan 8 LED secara berurutan</h3>
                                                    <a>Kesulitan</a>   <img src="/example/kesulitan1.png" width={60}  alt="..." />
                                                    <div class="code-block">
                                                        <p>Menyalakan 8 LED dan menyala berurutan setiap 1 detik</p>
                                                        <img src="/example/level1_3.png" width={300} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Klik untuk melihat hasilnya</p>
                                                            <div class="cta-container">
                                                                <a class="btn btn-primary btn-cta" href="/workspace1_3"><i class="fas fa-book"></i>Hasil</a>
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
                                                    <a class="nav-link scrollto" href="#download-section">Example 1</a>
                                                </li>
                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#1">1. Menyalakan LED dan FAN</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#2">2. Menampilkan tulisan dilayar</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#3">3. Menyalakan 8 LED secara berurutan</a>
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
