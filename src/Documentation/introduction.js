import React, { Component } from 'react'
import "../style/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class introduction extends Component {
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
                                <li class="breadcrumb-item"><a href="/index">Home</a></li>
                                <li class="breadcrumb-item active">Introduction</li>
                            </ol>
                            {/* <div class="top-search-box">
                                <form class="form-inline search-form justify-content-center" action="" method="get">
                                    <input type="text" id="introSearch" onkeyup="myFunction()" placeholder="Search..." name="search" class="form-control search-input"></input>
                                    <button type="submit" class="btn search-btn" value="Search">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </form>
                            </div> */}
                        </div>
                    </header>
                    <div class="doc-wrapper">
                        <div class="container">
                            <div id="doc-header" class="doc-header text-center">
                                <h1 class="doc-title"><FontAwesomeIcon icon={faPuzzlePiece} />Introduction</h1>
                                <div class="meta"><i class="far fa-clock"></i> Last updated: June 13th, 2022</div>
                            </div>
                            <div class="doc-body row">
                                <div class="doc-content col-md-9 col-12 order-1">
                                    <div class="content-inner">
                                        <section id="download-section" class="doc-section">
                                            <h2 class="section-title">Introduction</h2>
                                            <div class="section-block">
                                                <p>Aplikasi ini adalah sebuah modul pembelajaran
                                                    logika pemrograman dasar IoT menggunakan visual programming
                                                    yaitu Blockly.Anda bisa dengan mudah drag & drop block
                                                    yang dibutuhkan ketika ingin menyusun sebuah logika. Blok yang ada pada aplikasi
                                                    ini juga sangat bervariatif mulai dari percabangan, perulangan dan blok untuk mengontrol aktuator
                                                    Aplikasi ini disusun dengan tujuan untuk mempermudah
                                                    belajar logika pemrograman kepada mahasiswa.
                                                </p>
                                            </div>
                                        </section>

                                        <section id="getting-started" class="doc-section">
                                            <h2 class="section-title">Getting Started</h2>
                                            <div class="section-block">
                                                <p>
                                                    Pada bagian ini akan menjelaskan bagaimana menggunakan aplikasi dan setup
                                                    alat-alat yang di perlukan.
                                                </p>
                                                <div class="code-block">
                                                    <h4>1. Persiapkan IoT Development Board</h4>
                                                    <div class="code-block">
                                                        <img src="/foto-board/persiapan.png" width={400} alt="..." />
                                                    </div>
                                                    <p>
                                                        Sebelum melakukan aktifitas didalam Aplikasi Pembelaran ini yang harus yang harus 
                                                        dipersiapkan oleh user adalah Perangkat IoT Development Board. 
                                                    </p>
                                                </div>
                                                <div class="code-block">
                                                    <h4>2. Setup IoT Development Board</h4>
                                                    <div class="code-block">
                                                        <img src="/foto-board/a2.jfif" width={400} alt="..." />
                                                        <img src="/foto-board/a1.jfif" width={400} alt="..." />
                                                        <img src="/foto-board/2.png" width={400} alt="..." />
                                                    </div>
                                                    <p>
                                                        Langkah selanjutnya adalah dengan menyambungkan adapter dengan manancapkan 
                                                        kabel ke input yang tersedia pada IoT Development Board. Lalu sambungkan juga adapter ke listrik
                                                    </p>
                                                    <div class="code-block">
                                                        <p>
                                                            Apabila sudah maka tekan tombol merah pada gambar dibawah
                                                        </p>
                                                        <div class="code-block">
                                                            <img src="/foto-board/3.png" width={400} alt="..." />
                                                        </div>
                                                        <p>
                                                            Tombol tersebut berfungsi unutuk menyalakan atau menghidupkan perangkat IoT Development Board yang kita miliki.
                                                        </p>
                                                        <div class="code-block">
                                                            <p>
                                                                Apabila sudah dinyalakan IoT Development Board akan seperti pada gambar dibawah ini
                                                            </p>
                                                        </div>
                                                        <div class="code-block">
                                                            <img src="/foto-board/4.png" width={400} alt="..." />
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="code-block">
                                                    <h4>3. Konfigurasi</h4>
                                                    <div class="code-block">
                                                        <p>Langkah pertama adalah sambungkan komputer anda pada Acces Point IoT Devlopment Board</p>
                                                        <img src="/dok/sam.png" width={400} alt="..." />
                                                        <div class="code-block">
                                                            <p>Nama Acces Point nya adalah Edu-IoT Board 01.</p>
                                                            <p>Setelah menyambungkan masuk ke browser lalu kunjungi http://192.168.4.1/ .Maka tampilan akan seperti gambar dibawah</p>
                                                        </div>
                                                        <img src="/dok/koneksi.png" width={400} alt="..." />
                                                        <div class="code-block">
                                                            <p>Pada bagian ini kalian harus memasukkan Acces Point/Wifi yang tersedia dan WiFI tersebut
                                                                mempunyai koneksi internet.
                                                            </p>
                                                        </div>
                                                        <img src="/dok/con2.png" width={400} alt="..." />
                                                        <div class="code-block">
                                                            <p>Setelah selesai klik simpan lalu tunggu beberapa saat. Lihat pada bagian LCD IoT Development Board.
                                                                Apabila LCD telah menampilkan Monitoring dari (Light, Temperature, Humidity, Distance) maka Konfigurasi berhasil.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Langkah Selanjutnya adalah dengan membuka web blok jangan lupa laptop harus terkoneksi dengan internet.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/dok/web.png" width={400} alt="..." />
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </section>

                                        <section id="Fitur" class="doc-section">
                                            <h2 class="section-title">Fitur</h2>
                                            <div class="code-block">
                                                <p>
                                                    Aplikasi ini mencakup beberapa fitur yaitu workspace, monitoring,
                                                     kontrol aktuator, operasi logika, dan generate code.
                                                </p>
                                            </div>
                                            <div id="Workspace" class="section-block">
                                                <h3 class="block-title">Workspace</h3>
                                                <div class="code-block">
                                                    <img src="/intro/workspace.png" width={400} alt="..." />
                                                </div>
                                                <p>
                                                    Workspace adalah sebuah lembar penyusunan blok-blok yang ada pada aplikasi.
                                                    Workspace pada aplikasi ini dibagi menjadi 4 yaitu Workspace level 1, level 2, 
                                                    level 3, dan level 4
                                                </p>
                                                <div class="code-block">
                                                    <h3 class="block-title">Workspace Level 1</h3>
                                                    <img src="/intro/w1.png" width={300} alt="..." />
                                                    <img src="/intro/w1a.png" width={180} alt="..." />
                                                </div>
                                                <div class="code-block">
                                                    <p>
                                                        Pada level pembelajaran 1 akan berisi fitur kontrol aktuator. 
                                                        Kontrol aktuator adalah fitur yang berfungsi untuk mengontroll 
                                                        aktuator pada Edu – IoT Board seperti menyalakan dan mematikan 
                                                        fan, led, relay dan buzzer. Selain itu pada fitur ini juga terdapat 
                                                        timer atau delay dan teks print. Timer berfungsi sebagai waktu jeda 
                                                        pada aktuator yang akan di eksekusi. Sedangkan teks print berfungsi 
                                                        unutk menampilkan pesan yang di isikan didalam blok teks print 
                                                        tersebut.
                                                    </p>
                                                </div>
                                                <div class="code-block">
                                                    <h3 class="block-title">Workspace Level 2</h3>
                                                    <img src="/intro/w2.png" width={300} alt="..." />
                                                    <img src="/intro/w2a.png" width={180} alt="..." />
                                                </div>
                                                <div class="code-block">
                                                    <p>
                                                        Fitur ini berisi lembar-lembar blok pembelajaran level 2. 
                                                        Pada level pembelajaran 2 akan berisi fitur penyusunan 
                                                        logika if else, kontrol aktuator, dan pembuatan variabel 
                                                        yang akan bisa mengontroll aktuator pada Edu – IoT Board 
                                                        melalui penyusunan logika if else dan pembuatan variabel.
                                                    </p>
                                                </div>
                                                <div class="code-block">
                                                    <h3 class="block-title">Workspace Level 3</h3>
                                                    <img src="/intro/w3.png" width={300} alt="..." />
                                                    <img src="/intro/w3a.png" width={180} alt="..." />
                                                </div>
                                                <div class="code-block">
                                                    <p>
                                                        Fitur ini berisi lembar-lembar blok pembelajaran level 3. Pada level pembelajaran 3 akan berisi fitur penyusunan logika if else, kontrol aktuator, pembuatan variabel dan looping yang akan bisa mengontroll aktuator pada Edu – IoT Board melalui penyusunan logika if else, pembuatan variabel serta looping.
                                                    </p>
                                                </div>
                                                <div class="code-block">
                                                    <h3 class="block-title">Workspace Level 4</h3>
                                                    <img src="/intro/w4.png" width={300} alt="..." />
                                                    <img src="/intro/w4a.png" width={180} alt="..." />
                                                </div>
                                                <div class="code-block">
                                                    <p>
                                                        Fitur ini berisi lembar-lembar blok pembelajaran level 4. Pada level pembelajaran 4 akan berisi fitur penyusunan logika if else, kontrol aktuator, pembuatan variabel, looping dan pembuatan function yang akan bisa mengontroll aktuator pada Edu – IoT Board melalui penyusunan logika if else, looping, pembuatan variabel, serta pembuatan function.
                                                    </p>
                                                </div>
                                            </div>
                                            <div id="Monitoring" class="section-block">
                                                <h3 class="block-title">Monitoring</h3>
                                                <div class="code-block">
                                                    <img src="/intro/monitoring.png" width={150} alt="..." />
                                                </div>
                                                <p>
                                                    Fitur monitoring berisi tampilan monitoring yang bertujuan sebagai monitor dari sensor pada perangkat Edu – IoT Board. Fitur monitoring ini terdiri dari monitoring suhu, kelembapan, jarak dan cahaya.
                                                </p>
                                            </div>
                                            <div id="Kontrol-Aktuator" class="section-block">
                                                <h3 class="block-title">Kontrol Aktuator</h3>
                                                <p>
                                                    Fitur ini berisi sebuah lembar – lembar block yang nantinya di gunakan untuk mengontrol aktuator pada perangkat Edu – IoT Board (contoh: LED, FAN, RELAY, PIEZO/BUZZER).
                                                </p>
                                                <div class="code-block">
                                                    <h5>Kontrol LED</h5>
                                                    <img src="/intro/kled.png" width={150} alt="..." />
                                                </div>
                                                <div class="code-block">
                                                    <h5>Kontrol FAN</h5>
                                                    <img src="/intro/kfan.png" width={150} alt="..." />
                                                </div>
                                                <div class="code-block">
                                                    <h5>Kontrol BUZZER</h5>
                                                    <img src="/intro/kbuz.png" width={150} alt="..." />
                                                </div>
                                            </div>
                                            
                                            <div id="Operasi-Logika" class="section-block">
                                                <h3 class="block-title">Operasi Logika</h3>
                                                <div class="code-block">
                                                    
                                                    <div class="code-block">
                                                        <p>
                                                            Fitur ini berguna sebagai controlling ketika user ingin melakukan operasi logika looping dan logic seperti contoh logika if bersarang, perulangan for, perulangan dowhile.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="code-block">
                                                    <h5>Operasi Logika Percabangan</h5>
                                                    <p>
                                                        Operasi logika percabangan mencakup percabangan if, percabangan if else,
                                                        dan percabangan if else if
                                                    </p>
                                                    <div class="code-block">
                                                        <h6>Operasi Logika Percabangan If</h6>
                                                        <img src="/blok/logicifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Operasi Logika Percabangan If Else</h6>
                                                        <img src="/blok/blokifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Operasi Logika Percabangan If ElseIf Else</h6>
                                                        <img src="/blok/blokifelseifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Operasi Logika Kondisi</h6>
                                                        <p>Blok Kondisi memuat logika seperti lebih dari, kurang dari, dan sama dengan</p>
                                                        <img src="/blok/logicgerbang.png" width={150} alt="..." />
                                                    </div>
                                                    <h5>Operasi Logika Perulangan</h5>
                                                    <p>Blok Perulangan/Looping merupakan pernyataan atau instruksi yang diberikan kepada komputer agar ia mau melakukan sesuatu entah itu memproses data, menampilkan data, atau yang lainnya secara berulang.
                                                        looping dalam aplikasi ini antara lain perulangan for dan perulangan while
                                                    </p>
                                                    <div class="code-block">
                                                        <h6>Perulangan For</h6>
                                                        <img src="/blok/forloop.png" width={300} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Perulangan While</h6>
                                                        <img src="/blok/whileloop.png" width={200} alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="Generate-Code" class="section-block">
                                                <h3 class="block-title">Generate Code</h3>
                                                <p>
                                                    Fitur generate code berfungsi untuk menampilkan hasil kode yang berasal dari penyusunan blok-blok yang telah dilakukan oleh user.
                                                </p>
                                                <img src="/intro/generate.png" width={400} alt="..." />
                                            </div>
                                        </section>
                                        
                                    </div>
                                </div>

                                {/* siidebar */}
                                <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                    <div id="doc-nav" class="doc-nav">
                                        <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                            <li class="nav-item">
                                                <a class="nav-link scrollto" href="#download-section">Introduction</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scrollto" href="#getting-started">Getting Started</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scrollto" href="#Fitur">Fitur</a>
                                            </li>
                                            <nav class="nav doc-sub-menu nav flex-column">
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#Workspace">Workspace</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#Monitoring">Monitoring</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#Kontrol-Aktuator">Kontrol Aktuator</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#Operasi-Logika">Operasi Logika</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#Generate-Code">Generate code</a>
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
