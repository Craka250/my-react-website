import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";
import Card from "./Card.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Services from "./Services.tsx";


function App() {

  return (

	<div> {/* Used for fragment-like wrapper */}
	  <Home />
    <Header />
    <About />
    <Card />
    <Services />
    <Contact />
    <Food />
    <Footer />
	</div>

  );

}

export default App
