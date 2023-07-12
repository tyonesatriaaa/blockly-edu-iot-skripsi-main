import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                                    <li class="breadcrumb-item"><a href="/index">Home</a></li>
                                    <li class="breadcrumb-item active">Documentation</li>
                                </ol>
                                {/* <div class="top-search-box">
                                    <form class="form-inline search-form justify-content-center" action="" method="get">
                                        <input type="text" placeholder="Search..." name="search" class="form-control search-input"></input>
                                        <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
                                    </form>
                                </div> */}
                                {/* <div class="top-search-box">
                                    <form class="form-inline search-form justify-content-center" action="#" method="">
                                        <input type="text" placeholder="Search..." name="search" class="form-control search-input" id="searchBar"></input>
                                        <button type="submit" class="btn search-btn" value="Search">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>
                                </div>
                                <script src="searchBar.js"></script> */}
                            </div>
                        </header>
                        <div class="doc-wrapper">
                            <div class="container">
                                <div id="doc-header" class="doc-header text-center">
                                    <h1 class="doc-title"><FontAwesomeIcon icon={faPuzzlePiece} class="icon fa" /> Documentation</h1>
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
                                                    {/* <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/prettydocs-free-bootstrap-theme-for-developers-and-startups/" class="btn btn-green" target="_blank"><i class="fas fa-download"></i> Download PrettyDocs</a> */}
                                                </div>
                                            </section>
                                            <section id="installation-section" class="doc-section">
                                                <h2 class="section-title">Variasi Blok</h2>
                                                <div id="blokeduiotboard" class="section-block">
                                                    <h3 class="block-title">Blok Edu-IoT Board</h3>
                                                    <p>IoT Development Board atau Edu – IoT Board adalah board yang merupakan sebuah produk 
                                                        pembelajaran Internet of Things yang diproduksi oleh TEFA (Teaching Factory) Polinema 
                                                        berguna untuk perangkat pembelajaran praktikum untuk anggota TEFA (Teaching Factory). 
                                                        Edu IoT Board ini memiliki komponen sensor dan actuator agar bisa dikontrol oleh pengguna, 
                                                        macam macam sensor yang berada di IoT Development Board terdiri dari sensor jarak, sensor suhu, 
                                                        sensor cahaya, sensor kelembapan. Selain itu juga terdiri macam macam actuator, yang berfungsi 
                                                        untuk pembelajaran controlling, actuator terdiri dari relay, led, buzzer dan fan. Aktuator bisa 
                                                        dikontrol melalui program yang sudah dibuat untuk Edu – IoT Board.
                                                    </p>
                                                    <div class="code-block">   
                                                        <img src="/blok/eduiotboard.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Selain itu Blok Edu-IoT Board atau IoT Development Board merupakan blok induk yang harus dipasang atau
                                                            dimasukkan ketika melakukan sebuah penyusunan blok sebagai contoh adalah menyalakan LED
                                                            dan menyalakan Buzzer seperti gambar dibawah
                                                        </p>
                                                        <img src="/blok/menyalakanled.png" width={180} alt="..." />
                                                        <img src="/blok/menyalakanbuzzer.png" width={180} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <p>Selain itu blok Edu-IoT Board ini juga harus dimasukkan ketika seorang user ingin melakukan
                                                            penyusunan logika pencabangan maupun perulangan maupun operasi logika yang lain.
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                                <div id="blokkontrolled" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol LED</h3>
                                                    <p>Blok kontrol LED berguna untuk mengontrol LED yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan LED yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/led.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada LED</h5>
                                                        <p>Blok LED mempunyai value 0-8 berguna untuk menyalakan berapa LED yang ingin dinyalakan. LED yang
                                                            dimaksud adalah LED yang ada di perangkat Edu-IoT Board. Cara memunculkan angka 1-8 adalah tinggal
                                                            klik pada tombol segitiga terbalik
                                                            seperti contoh adalah gambar dibawah:</p>
                                                    </div>
                                                    <img src="/blok/led1.png" width={150} alt="..." />
                                                    <div class="code-block">
                                                        Apabila kita menginginkan menyalakan 3 LED maka blok yang disusun seperti contoh pada gambar
                                                        dibawah:
                                                    </div>
                                                    <img src="/blok/led3.png" width={150} alt="..." />
                                                </div>
                                                <div id="blokkontrolfan" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol FAN</h3>
                                                    <p>Blok kontrol FAN berguna untuk mengontrol aktuator FAN dan yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan FAN yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/fan.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada FAN</h5>
                                                        <p>Blok FAN mempunyai value 0-40 berguna untuk menyalakan FAN. Semakin banyak angka yang dimasukkan oleh user
                                                            maka FAN yang berputar akan semakin cepat, Semakin kecil angka yang dimasukkan oleh user maka Fan yang berputarpun
                                                            akan semakin pelan. FAN yang
                                                            dimaksud adalah FAN yang ada di perangkat Edu-IoT Board. Cara mamasukkan angkanya adalah tinggal
                                                            memasukkan angka yang diinginkan oleh pengguna seperti contoh pada gambar dibawah</p>
                                                    </div>
                                                    <div class="code-block">
                                                        <img src="/blok/fan3-.png" width={150} alt="..." />
                                                        <p>
                                                        Gambar diatas menunjukkan bahwa value pada fan di set pada angka 30 dimana FAN akan berputar secara kencang
                                                        pada perangkat Edu-IoT Board.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div id="blokkontrolbuzzer" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol Buzzer</h3>
                                                    <p>Blok kontrol BUZZER berguna untuk mengontrol aktuator BUZZER dan yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan buzzer yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <h5>Value pada BUZZER</h5>
                                                        <p>
                                                            Blok buzzer memiliki 2 value yaitu (BUZZER = ON) dan (BUZZER OFF) ketika user ingin menghidupkan buzzer, blok buzzer
                                                            yang disusun harus BUZZER ON. Ketika user ingin mematikan buzzer, maka blok buzzer yang disusun harus BUZZER OFF. Untuk lebih
                                                            jelasnya tertera pada gambar dibawah.
                                                        </p>
                                                    </div>
                                                    <div class="code-block">
                                                        <img src="/blok/buzon.png" width={150} alt="..." />
                                                        <img src="/blok/buzof.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="blokkontrolrelay" class="section-block">
                                                    <h3 class="block-title">Blok Kontrol Relay</h3>
                                                    <p>Blok kontrol Relay berguna untuk mengontrol aktuator Relay dan yang ada pada IoT Development Board.
                                                        Maksud dari mengontrol tersebut adalah menyalakan dan mematikan relay yang ada pada IoT Development Board.
                                                    </p>
                                                    <div class="code-block">
                                                        <h5>Value pada Relay</h5>
                                                        <p>
                                                            Blok buzzer memiliki 2 value yaitu (Relay = ON) dan (Relay OFF) ketika user ingin menghidupkan Relay, blok Relay
                                                            yang disusun harus Relay ON. Ketika user ingin mematikan Relay, maka blok Relay yang disusun harus Relay OFF. Untuk lebih
                                                            jelasnya tertera pada gambar dibawah.
                                                        </p>
                                                    </div>
                                                    <div class="code-block">
                                                        <img src="/blok/relay.png" width={400} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="bloktimer" class="section-block">
                                                    <h3 class="block-title">Blok LED With Timer</h3>
                                                    <p>
                                                        Block LED with timer berguna untuk mengontrol lama nyala LED pada IoT Development Board. 
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/led timer.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada Blok LED With Timer</h5>
                                                        <p>
                                                            Blok LED with Timer mempunyai value 1 detik, 3 detik, dan 5 detik.
                                                        </p>
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Timer 1 Detik</h5>
                                                        <div class="code-block">
                                                            <img src="/blok/valuetimer/1d.png" width={200} alt="..." />
                                                            <div class="code-block">
                                                                <p>
                                                                    Value 1 detik mempunyai 0-8 value. Maksud dari value tersebut adalah
                                                                    misal kita ingin menyalakan LED 1-3 secara bergantian kita harus memasukkan value 3 pada blok
                                                                    LED with Timer 1 detik.
                                                                </p>
                                                                <p>
                                                                    Ouput dari inputan tersebut berupa LED 1-3 pada IoT Development Board 
                                                                    dalam 1 detik akan menyala secara bergantian lalu mati. 
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <h5>Timer 3 Detik</h5>
                                                        <div class="code-block">
                                                            <img src="/blok/valuetimer/3d.png" width={200} alt="..." />
                                                            <div class="code-block">
                                                                <p>
                                                                    Value 3 detik mempunyai 0-8 value. Maksud dari value tersebut adalah
                                                                    misal kita ingin menyalakan LED 1-8 secara bergantian kita harus memasukkan value 8 pada blok
                                                                    LED with Timer 3 detik.
                                                                </p>
                                                                <p>
                                                                    Ouput dari inputan tersebut berupa LED 1-8 pada IoT Development Board
                                                                    dalam 3 detik akan menyala secara bergantian lalu mati.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <h5>Timer 5 Detik</h5>
                                                        <div class="code-block">
                                                            <img src="/blok/valuetimer/3d.png" width={200} alt="..." />
                                                            <div class="code-block">
                                                                <p>
                                                                    Value 5 detik mempunyai 0-8 value. Maksud dari value tersebut adalah
                                                                    misal kita ingin menyalakan LED 1-2 secara bergantian kita harus memasukkan value 8 pada blok
                                                                    LED with Timer 5 detik.
                                                                </p>
                                                                <p>
                                                                    Ouput dari inputan tersebut berupa LED 1-2 pada IoT Development Board
                                                                    dalam 5 detik akan menyala secara bergantian lalu mati.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="blokteksprint" class="section-block">
                                                    <h3 class="block-title">Blok Teks Print</h3>
                                                    <p>Blok teks print bertujuan unutuk memberikan pesan teks.
                                                    </p>
                                                    <div class="code-block">
                                                        <img src="/blok/print.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h5>Value pada Text Print</h5>
                                                        <p>
                                                            Blok timer memiliki value sesui inputan dari user. Sebagai contoh bisa dilihat dari gambar dibawah.
                                                        </p>
                                                        <div class="code-block">
                                                            <img src="/blok/1.png" width={200} alt="..." />
                                                        </div>
                                                        <div class="code-blok">
                                                            <p>Output dari block ini akan berupa sebuah pesan yang akan di inputkan oleh user. Seperti contoh pada
                                                                gambar dibawah :
                                                            </p>
                                                            <img src="/blok/printoutput.png" width={400} alt="..." />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div id="blokoperasilogika" class="section-block">
                                                    <h3 class="block-title">Blok Operasi Logika</h3>
                                                    <p>Blok operasi logika berfungsi sebagai blok perancangan logika yang akan dikirimkan ke perangkat Edu-IoT Board.
                                                        Logika yang akan di terapkan atara lain pencabangan if, percabangan if else dan percabangan if else if else. 
                                                        Di sini juga terdapat kondisi logika seperti contoh lebih dari, kurang dari, dan sama dengan. 
                                                    </p>
                                                    <div class="code-block">
                                                        <h6>Blok Logika If</h6>
                                                        <img src="/blok/logicifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Blok Logika If Else</h6>
                                                        <img src="/blok/blokifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Blok Logika If ElseIf Else</h6>
                                                        <img src="/blok/blokifelseifelse.png" width={150} alt="..." />
                                                    </div>
                                                    <div class="code-block">
                                                        <h6>Blok Kondisi</h6>
                                                        <p>Blok Kondisi memuat logika seperti lebih dari, kurang dari, dan sama dengan</p>
                                                        <img src="/blok/logicgerbang.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="blokvariabel" class="section-block">
                                                    <h3 class="block-title">Blok Variabel</h3>
                                                    <p>Variabel adalah lokasi penyimpanan simbolis yang berisi berapa kuantitas yang
                                                        diketahui atau tidak diketahui. Fungsi dari blok ini adalah seperti itu
                                                    </p>
                                                    <div class="code-block">
                                                        <h6></h6>
                                                        <img src="/blok/variabel.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="blokperulangan" class="section-block">
                                                    <h3 class="block-title">Blok Perulangan</h3>
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
                                                <div id="blokfunction" class="section-block">
                                                    <h3 class="block-title">Blok Function</h3>
                                                    <p>Blok Fungsi (function) adalah sub modul atau sub program yang dibuat 
                                                        untuk menyelesaikan hal tertentu. Fungsi memiliki nama dan dalam ANSI/C, 
                                                        diimplementasi untuk hal-hal yang khusus dan dapat dipanggil berkali-kali 
                                                        (berulang) dalam program.
                                                    </p>
                                                    <div class="code-block">
                                                        <h6></h6>
                                                        <img src="/blok/fungsi.png" width={150} alt="..." />
                                                    </div>
                                                </div>
                                            </section>
                                            <section id="operasilogikablockly" class="doc-section">
                                                <h2 class="section-title">Operasi Logika Blockly</h2>
                                                <div class="section-block">
                                                    <p>
                                                        Pada bagian ini mencakup beberapa operasi logika diantaranya Pencabangan,
                                                        Perulangan, Bagaimana menggunakan variabel, dan bagaimana menggunakan function
                                                    </p>
                                                </div>
                                                <div id="percabangan" class="section-block">
                                                    <h3 class="block-title">Percabangan</h3>
                                                    <p> Operasi logika percabangan pada website ini mencakup percabangan if, dan bercabangan
                                                        if bersarang.
                                                    </p>
                                                    <div id="percabanganif" class="code-block">
                                                        <h5>1. Percabangan If</h5>
                                                        <p>
                                                            Percabangan if memuat susunan blok seperti pada contoh gambar dibawah
                                                        </p>
                                                        <img src="/blok/percabangan-if.png" width={300} alt="..." />
                                                        <div class="code-block">
                                                            <p>
                                                                Pada logika diatas memuat 3 blok yaitu <strong>blok logika if, blok kondisi logika lebih dari
                                                                yang melibatkan value JARAK, dan blok kontrol LED</strong> Maksud dari penyusunan
                                                                blok diatas adalah :
                                                            </p>
                                                            <p>
                                                                Jika <strong>JARAK lebih dari 20 </strong>maka 1 LED akan hidup.
                                                            </p>
                                                            <p>
                                                                Setelah blok selesai di susun maka hal yang selanjutnya dilakukan adalah menekan tombol
                                                                RUN CODE yang ada pada bagian pojok atas. Jangan lupa di sambungkan blok logika yang telah disusun
                                                                dengan blok IoT Development Board.
                                                            </p>
                                                            <img src="/blok/RUN22.png" width={300} />
                                                            <div class="code-block">
                                                                <p>
                                                                    Output dari run code tersebut adalah Edu-IoT Board akan merespon perintah penyusunan blok
                                                                    yang disusun oleh user. Dan akan menghidupkan 1 LED apabila kondisi yang dimasukkan benar.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="percabanganifelse" class="code-block">
                                                        <h5>2. Percabangan If Else</h5>
                                                        <p>
                                                            Percabangan if memuat susunan blok seperti pada contoh gambar dibawah
                                                        </p>
                                                        <img src="/blok/if.png" width={300} alt="..." />
                                                        <div class="code-block">
                                                            <p>
                                                                Pada logika diatas memuat 3 blok yaitu <strong>blok logika if else, blok kondisi logika
                                                                    yang melibatkan value suhu, dan blok kontrol LED</strong> Maksud dari penyusunan
                                                                blok diatas adalah :
                                                            </p>
                                                            <p>
                                                                Jika <strong>SUHU lebih dari 20 </strong>maka 1 LED akan hidup. Sedangkan
                                                                jika <strong>SUHU kurang dari 20</strong> maka LED akan mati.
                                                            </p>
                                                            <p>
                                                                Setelah blok selesai di susun maka hal yang selanjutnya dilakukan adalah menekan tombol
                                                                RUN CODE yang ada pada bagian pojok atas. Jangan lupa di sambungkan blok logika yang telah disusun
                                                                dengan blok IoT Development Board.
                                                            </p>
                                                            <img src="/blok/run.png" width={300} />
                                                            <div class="code-block">
                                                                <p>
                                                                    Output dari run code tersebut adalah Edu-IoT Board akan merespon perintah penyusunan blok
                                                                    yang disusun oleh user. Dan akan menghidupkan 1 LED
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="percabanganifelseif" class="code-block">
                                                        <h5>3. Percabangan If ElseIf Else</h5>
                                                        <p>
                                                            Percabangan if bersarang memuat susunan blok seperti pada contoh gambar dibawah
                                                        </p>
                                                        <img src="/blok/ifelseif.png" width={300} alt="..." />
                                                        <div class="code-block">
                                                            <p>
                                                                Pada logika diatas memuat 3 blok yaitu <strong>blok logika if else, blok kondisi logika
                                                                yang melibatkan value suhu dan kelembapan, blok kontrol LED, serta blok kontrol BUZZER</strong> Maksud dari penyusunan
                                                                blok diatas adalah jika satu kondisi terpenuhi maka kondisi yang lain tidak akan di eksekusi untuk penjabarannya :
                                                            </p>
                                                            <p>
                                                                1. Jika <strong>SUHU kurang lebih dari 20.</strong> di sini sistem akan melihat apakah kondisi ini sudah benar.
                                                                Jika memang belum benar maka akan lanjut ke kondisi berikutnya
                                                            </p>
                                                            <p>
                                                                2. Jika <strong>KELEMBAPAN kurang lebih dari 120.</strong> di sini sistem akan melihat apakah kondisi ini sudah benar.
                                                                Jika memang belum benar maka akan lanjut ke kondisi berikutnya yaitu else
                                                            </p>
                                                            <p>
                                                                3. Jika memang 2 kondisi tersebut tidak terpenuhi maka akan lanjut ke bagian else akan dieksekusi
                                                            </p>
                                                            <p>
                                                                Jika Kondisi pertama benar maka 1 LED akan menyala pada perangkat Edu-IoT Board. Sedangkan jika
                                                                kondisi ke 2 benar maka 2 LED pada perangkat Edu-IoT Board akan hidup. Jika kedua kondisi salah maka
                                                                BUZZER pada perangkat Edu-IoT Board akan menyala.
                                                            </p>
                                                            <p>
                                                                Setelah blok selesai di susun maka hal yang selanjutnya dilakukan adalah menekan tombol
                                                                RUN CODE yang ada pada bagian pojok atas. Jangan lupa di kaitkan dengan blok IoT Development Board.
                                                            </p>
                                                            <img src="/blok/run2.png" width={300} />

                                                        </div>
                                                    </div>
                                                    
                                                </div>

                                                <div id="perulangan" class="section-block">
                                                    <h3 class="block-title">Perulangan</h3>
                                                    <p>
                                                        Operasi logika perulangan pada website ini mencakup perulangan While, dan Perulangan While.
                                                    </p>
                                                    <div id="perulanganfor" class="code-block">
                                                        <h5>Perulangan For</h5>
                                                        <p>
                                                            Percabangan for memuat logika seperti pada contoh gambar dibawah
                                                        </p>
                                                        <img src="/blok/forlooping.png" width={400} alt="..." />
                                                        <img src="/blok/monitor.png" width={150} alt="..." />
                                                        <div class="code-block">
                                                            <p>
                                                                Pada logika diatas memuat 4 blok dan 1 halaman yaitu
                                                                <p>1. Blok Variabel (i) yang berguna unutuk menampung nilai(blok) dari monitoring cahaya</p>
                                                                <p>2. Blok Variabel J yang berguna untuk menampung nilai yang akan di eksekusi disini bernilai 0</p>
                                                                <p>3. Blok Nilai/Value cahaya</p>
                                                                <p>4. Blok Perulangan For</p>
                                                                <p>5. Tampilan monitor Sensor pada perangkat Edu-IoT Board</p>
                                                                <p><strong>Maksud dari penyusunan blok diatas adalah :</strong></p>
                                                                <p>Disitu nilai dari cahaya pada Tampilan monitoring adalah 14, disitu juga terdapat variabel j yang bernilai = 0
                                                                lalu pada penyusunannya apakah disini kondisi (j) kurang dari (i) yang bernilai sensor cahaya. Jika kondisi benar maka terdapat j++,
                                                                yang berarti indeks dari j yang awalnya 0 akan ditambah 1 sehingga menghasilkan looping selama 15x.
                                                                </p>
                                                                <p>Output yang dihasilkan dari penyusunan blok diatas adalah akan tampil alert selama 15x yang berisikan
                                                                    nilai dari variabel j+1 seperti 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14.
                                                                </p>
                                                            </p>
                                                        </div>               
                                                    </div>
                                                    <div id="perulanganwhile" class="code-block">
                                                        <h5>Perulangan While</h5>
                                                        <p>
                                                            Percabangan while memuat logika seperti pada contoh gambar dibawah
                                                        </p>
                                                        <img src="/blok/whileloopex.png" width={300} alt="..." />
                                                        <img src="/blok/monitor.png" width={200} alt="..." />
                                                        <div class="code-block">
                                                            <p>Pada blok logika tersebut memuat 5 blok</p>
                                                            <p>
                                                            1. Blok Variabel i yang menampung value CAHAYA.
                                                            </p>
                                                            <p>
                                                            2. Blok perulangan while yang merupakan logika yang akan kita bahas.
                                                            </p>
                                                            <p>
                                                            3. Blok matematika yang memiliki nilai 20 yang akan digunakan sebagai perbandingan
                                                            kondisi logika.
                                                            </p>
                                                            <p>
                                                            4. Blok teks print yang memilili value hallo
                                                            </p>
                                                            <p>
                                                            5. Blok variabel i yang nilainya (nilai cahaya) akan ditambahkan 1.
                                                            </p>
                                                            <p><strong>Maksud dari penyusunan blok diatas adalah :</strong></p>
                                                            <p>
                                                                Pada tampilan monitoring disitu terlihat nilai cahaya adalah
                                                                14. Sedangkan disini variabel i berfungsi menampung nilai dari cahaya berarti
                                                                bisa disimpulkan nilai variabel i adalah = 14. Pada bagian blok perulangan while memuat kondisi yang
                                                                berarti ketika variabel i=14 kurang dari 20. Di situ terdapat blok teks print hallo. yang berarti
                                                                ketika kondisi yang dimaksud terpenuhi maka sistem akan melakukan perulangan selama 7x. nilai 7x berasal dari
                                                                nilai variabel i yang merupakan nilai dari cahaya ditambah 1.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menggunakan-variabel" class="section-block">
                                                    <h3 class="block-title">Menggunakan Variabel</h3>
                                                    <p>
                                                        Variabel adalah lokasi penyimpanan simbolis yang berisi berapa kuantitas yang 
                                                        diketahui atau tidak diketahui. Fungsi dari blok ini adalah seperti itu.
                                                    </p>
                                                    <p>
                                                        Varibel yang digunakan pada penyusunan Blockly disini adalah sebagai berikut :
                                                    </p>
                                                    <img src="/blok/variabel_a.png" width={300} alt="..." />
                                                    <img src="/blok/monitor.png" width={200} alt="..." />
                                                    <div class="code-block">
                                                        <p>Pada penyusunan blok diatas terdapt 2 blok yaitu :</p>
                                                        <p>1. Blok variabel_a yang disini menampung nilai dari blok monitoring SUHU</p>
                                                        <p>2. Blok print yang akan menampilkan value dari variabel_a</p>
                                                    </div>
                                                    <div class="code-block">
                                                        <p><strong>Maksud dari penyusunan blok diatas adalah :</strong></p>
                                                        <p>Di sini variabel_a sesuai fungsi yaitu menampung blok blok monitoring SUHU.
                                                            Pada selanjutnya terdapat blok print yang akan menampilkan variabel_a yang bernilai 30.
                                                        </p>
                                                        <img src="/blok/ouput.png" width={600} alt="..." />
                                                    </div>
                                                </div>
                                                <div id="menggunakan-function" class="section-block">
                                                    <h3 class="block-title">Menggunakan Function</h3>
                                                    <p>
                                                        Operasi logika function memuat block sebagai berikut :
                                                        <div class="code-block">
                                                            <img src="/blok/function_example.png" width={300} alt="..." />
                                                            <div class="code-block">
                                                                <p>Pada penyusunan blok tersebut memuat 4 blok yaitu :</p>
                                                                <p>1. Blok Dasar IoT Development Board</p>
                                                                <p>2. Blok Function </p>
                                                                <p>3. Block kontrol untuk menghidupkan LED</p>
                                                                <p>4. Blok Pemanggilan function nyalakan LED</p>
                                                                <p><strong>Maksud dari penyusunan blok diatas adalah :</strong></p>
                                                                <p>
                                                                    Disini function adalah sub modal/sub program yang digunakan untuk
                                                                    menyelesaikan hal tertent dan dipanggil berulang kali. Di situ terdapat blok function 
                                                                    yang berfungsi sebagai menampung blok kontrol LED.

                                                                    Pada blok IoT Development Board terdapat Pemanggilan function nyalakan_LED yang
                                                                    berguna untuk memanggil function yang telah dibuat.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </p>
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
                                                    <a class="nav-link scrollto" href="#installation-section">Variasi Blok</a>
                                                </li>
                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokeduiotboard">Blok Edu-IoT Board</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolled">Blok Kontrol LED</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolfan">Blok Kontrol FAN</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolbuzzer">Blok Kontrol Buzzer</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokkontrolrelay">Blok Kontrol Relay</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#bloktimer">Blok LED With Timer</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokteksprint">Blok Teks Print</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokoperasilogika">Blok Operasi Logika</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokvariabel">Blok Variabel</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokperulangan">Blok Perulangan</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#blokfunction">Blok Function</a>
                                                    </li>
                                                </nav>
                                                {/* <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#operasilogikablockly">Operasi Logika Blockly</a>
                                                </li> */}

                                                <nav class="nav doc-sub-menu nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#percabangan">Blok Percabangan</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#percabanganif">Blok Percabangan If</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#percabanganifelse">Blok Percabangan If Else</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#percabanganifelseif">Blok Percabangan If ElseIf Else</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#perulangan">Blok Perulangan</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#perulanganfor">Blok Perulangan For</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#perulanganwhile">Blok Perulangan While</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#menggunakan-variabel">Blok Menggunakan Variabel</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link scrollto" href="#menggunakan-function">Blok Menggunakan Function</a>
                                                    </li>
                                                </nav>
                                                {/* <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#callouts-section">Callouts</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#tables-section">Tables</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#buttons-section">Buttons</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#video-section">Video</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#icons-section">Icons</a>
                                                </li> */}
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
