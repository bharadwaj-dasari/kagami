import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import Philosophy from "./Philosophy";
import Systems from "./Systems";
import Footer from "../../components/layout/Footer";
import Preview from "./Preview";
import About from "./About";
import Reveal from "../../utils/Reveal";

export default function Landing() {
    return(
        <div className="bg-kagami-bg min-h-screen">
            <Navbar/>
            <main>
                <Reveal>
                    <Hero/>
                </Reveal>
                <Reveal>
                    <Philosophy/>
                </Reveal>
                <Reveal>
                    <Systems/>
                </Reveal>
                <Reveal>
                    <Preview/>
                </Reveal>
                <Reveal>
                    <About/>
                </Reveal>
                <Reveal>
                    <Footer/>
                </Reveal>
            </main>
            
        </div>
    )
}