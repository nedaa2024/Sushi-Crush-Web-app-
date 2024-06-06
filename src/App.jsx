import Offers from "./components/Offers";
import Image from "./components/Image";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Tabels from "./components/Tabels";
import ContactFooter from "./components/ContactFooter";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div id="home">
        <Image />
      </div>
      <Offers />
      <div id="menu">
        <Menu />
      </div>
      <div id="tables">
        {" "}
        <Tabels />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <ContactFooter />
    </>
  );
}

export default App;
