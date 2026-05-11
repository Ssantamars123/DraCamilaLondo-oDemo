import { Navbar }       from "@/components/Navbar";
import { Hero }         from "@/components/Hero";
import { Marquee }      from "@/components/Marquee";
import { Stats }        from "@/components/Stats";
import { About }        from "@/components/About";
import { Services }     from "@/components/Services";
import { Results }      from "@/components/Results";
import { Testimonials }  from "@/components/Testimonials";
import { PatientStory } from "@/components/PatientStory";
import { Contact }      from "@/components/Contact";
import { Footer }       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Results />
        <Testimonials />
        <PatientStory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
