import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Workspace from "./Workspace";
import Workspacelv1 from "./levels/workspacelv1.js";
import Workspacelv2 from "./levels/workspacelv2.js";
import Workspacelv3 from "./levels/workspacelv3.js";
import Workspacelv4 from "./levels/workspacelv4.js";
// workspace example lv 1
import Workspacelv1_1 from "./levels/workspacelv1_1.js";
import Workspacelv1_2 from "./levels/workspacelv1_2.js";
import Workspacelv1_3 from "./levels/workspacelv1_3.js";

// workspace example lv 2
import Workspacelv2_1 from "./levels/workspacelv2_1.js";
import Workspacelv2_2 from "./levels/workspacelv2_2.js";
import Workspacelv2_3 from "./levels/workspacelv2_3.js";

// workspace example lv 3
import Workspacelv3_1 from "./levels/workspacelv3_1.js";
import Workspacelv3_2 from "./levels/workspacelv3_2.js";
import Workspacelv3_3 from "./levels/workspacelv3_3.js";

// workspace example lv 4
import Workspacelv4_1 from "./levels/workspacelv4_1.js";
import Workspacelv4_2 from "./levels/workspacelv4_2.js";
 
// import Homepage from "./Homepage";
import Pubsub from "./testRabbit/Pubsub.js";

// Halaman Contoh
import Contoh1 from "./contoh/contohlv1.js";
import Contoh2 from "./contoh/contohlv2.js";
import Contoh3 from "./contoh/contohlv3.js";
import Contoh4 from "./contoh/contohlv4.js";

// Halaman Tantangan
import Tantangan from "./tantangan/tantangan.js";

// documentationpage import
import Index from "./Documentation/index";
import Start from "./Documentation/start";
import VariasiBlock from "./Documentation/varBlock";
import Introduction from "./Documentation/introduction";
import OpLogika from "./Documentation/operasiLogikaBlockly";

// konfigurasi page
// import Konfigurasi from "./conf/indexConf";
import VideoCar from "./Documentation/VideoCarousell";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/workspace1' element={<Workspacelv1 />} />
          <Route path='/workspace2' element={<Workspacelv2 />} />
          <Route path='/workspace3' element={<Workspacelv3 />} />
          <Route path='/workspace4' element={<Workspacelv4 />} />
          <Route path='/workspace1_1' element={<Workspacelv1_1 />} />
          <Route path='/workspace1_2' element={<Workspacelv1_2 />} />
          <Route path='/workspace1_3' element={<Workspacelv1_3 />} />
          <Route path='/workspace2_1' element={<Workspacelv2_1 />} />
          <Route path='/workspace2_2' element={<Workspacelv2_2 />} />
          <Route path='/workspace2_3' element={<Workspacelv2_3 />} />
          <Route path='/workspace3_1' element={<Workspacelv3_1 />} />
          <Route path='/workspace3_2' element={<Workspacelv3_2 />} />
          <Route path='/workspace3_3' element={<Workspacelv3_3 />} />
          <Route path='/workspace4_1' element={<Workspacelv4_1 />} />
          <Route path='/workspace4_2' element={<Workspacelv4_2 />} />
          <Route path='/contoh1' element={<Contoh1 />} />
          <Route path='/contoh2' element={<Contoh2 />} />
          <Route path='/contoh3' element={<Contoh3 />} />
          <Route path='/contoh4' element={<Contoh4 />} />
          <Route path='/tantangan' element={<Tantangan />} />
          <Route path='/index' element={<Index />} />
          <Route path='/start' element={<Start />} />
          <Route path='/variasiblok' element={<VariasiBlock />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/operasilogika' element={<OpLogika />} />
          {/* <Route path='/config' element={<Konfigurasi />} /> */}
          <Route path='/vid' element={<VideoCar />} />

          {/* <Route path='/homepage' element={<Homepage />} /> */}
          <Route path='/pubsub' element={<Pubsub />} />

          <Route path='*' element={<Navigate to='/index' replace />} />

          {/* <Route path='/homepage' element={<Homepage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
