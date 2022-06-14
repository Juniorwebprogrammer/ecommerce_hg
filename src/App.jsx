import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Product from './components/product/product';
import Contact from './components/contact/contact';
import ('./App.scss');


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Product/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
