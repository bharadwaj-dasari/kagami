import { BrowserRouter,Routes,Route } from "react-router-dom";
import {ReactLenis} from "lenis/react";
import Landing from "./pages/landing";

export default function App(){
  return(
    <BrowserRouter>
      <ReactLenis root options={{lerp:0.1, duration:1.5, smoothWheel:true}}>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </ReactLenis>
    </BrowserRouter>
  )
}