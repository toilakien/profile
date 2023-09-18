import Footer from "~/components/layouts/Footer";
import Header from "~/components/layouts/Header";
import About from "~/components/pages/About";
import Home from "~/components/pages/Home";
import Service from "~/components/pages/Service";
export default function App() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between relative ">
      <div id="home" className="w-full h-screen max-sm:h-[665px] z-[100] home ">
        <Header />
        <Home />
      </div>
      <div id="about" className="w-full h-content ">
        <About />
      </div>
      <div id="service" className="w-full h-content ">
        <Service />
      </div>
      <div id="skill" className="w-full h-content ">
        skill
      </div>
      <div className="w-full h-content">
        <Footer />
      </div>
    </main>
  );
}
