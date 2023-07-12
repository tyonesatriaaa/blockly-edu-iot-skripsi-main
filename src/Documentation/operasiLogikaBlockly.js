import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export default class operasiLogikaBlockly extends Component {
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
                                <li class="breadcrumb-item active">Operasi Logika Blockly</li>
                            </ol>
                            {/* <div class="top-search-box">
                                <form class="form-inline search-form justify-content-center" action="" method="get">
                                    <input type="text" placeholder="Search..." name="search" class="form-control search-input"></input>
                                    <button type="submit" class="btn search-btn" value="Search"><FontAwesomeIcon icon={faSearch} /></button>
                                </form>
                            </div> */}
                        </div>
                    </header>
                    <div class="doc-wrapper">
                        <div class="container">
                            <div id="doc-header" class="doc-header text-center">
                                <h1 class="doc-title"><FontAwesomeIcon icon={faPuzzlePiece} class="icon fa" /> Operasi Logika Blockly</h1>
                                <div class="meta"><i class="far fa-clock"></i> Last updated: June 13th, 2022</div>
                            </div>
                            <div class="doc-body row">
                                <div class="doc-content col-md-9 col-12 order-1">
                                    <div class="content-inner">
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
                                                    <img src="/blok/percabangan-if.png" width={200} alt="..." />
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
                                                    <img src="/blok/if.png" width={200} alt="..." />
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

                                                <div id="percabanganifelseifelse" class="code-block">
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
                                            <div id="variabelfunction" class="section-block">
                                                <h3 class="block-title">Variabel & Function</h3>
                                                <p>
                                                    Variabel adalah lokasi penyimpanan simbolis yang berisi berapa kuantitas yang
                                                    diketahui atau tidak diketahui. Fungsi dari blok ini adalah seperti itu. Sedangkan 
                                                    Disini function adalah sub modal/sub program yang digunakan untuk
                                                    menyelesaikan hal tertent dan dipanggil berulang kali.
                                                </p>
                                                <h5 id="menggunakan-variabel" class="block-title">Menggunakan Variabel</h5>
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
                                                <h5 class="block-title">Menggunakan Function</h5>
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
                                                <a class="nav-link scrollto" href="#operasilogikablockly">Operasi Logika Blockly</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link scrollto" href="#percabangan">Percabangan</a>
                                            </li>
                                            <nav class="nav doc-sub-menu nav flex-column">
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#percabanganif">Percabangan If</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#percabanganifelse">Percabangan If Else</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#percabanganifelseifelse">Percabangan If ElseIf Else</a>
                                                </li>
                                            </nav>
                                            <li class="nav-item">
                                                <a class="nav-link scrollto" href="#perulangan">Perulangan</a>
                                            </li>
                                            <nav class="nav doc-sub-menu nav flex-column">
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#perulanganfor">Perulangan For</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#perulanganwhile">Perulangan While</a>
                                                </li>
                                                
                                            </nav>
                                            <li class="nav-item">
                                                <a class="nav-link scrollto" href="#variabelfunction">Variabel & Function</a>
                                            </li>
                                            <nav class="nav doc-sub-menu nav flex-column">
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#menggunakan-variabel">Menggunakan Variabel</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link scrollto" href="#menggunakan-function">Menggunakan Function</a>
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
