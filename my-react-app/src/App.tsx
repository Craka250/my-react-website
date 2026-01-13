import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";
import Card from "./Card.tsx";


function App() {

  return (

	<div> {/* Used for fragment-like wrapper */}
	  <Header />
    <Food />
    <Card />
    <Footer />
	</div>

  );

}

export default App
