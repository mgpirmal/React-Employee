
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Datatable from "./components/Datatable";


// used to give all browsers the ablility to do fetches
// require("es6-promise").polyfill();
// require("isomorphic-fetch")




function App() {



  return (
    <div>
      <Navbar />
      <Wrapper>
      <Datatable />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;