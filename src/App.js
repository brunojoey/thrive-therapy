import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Banner from "./components/Banner";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Questions from "./pages/Questions";
// import Resources from "./pages/Resources";
import ComingSoon from "./pages/ComingSoon";
// import NotFound from "./pages/NotFound"
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        {/* <Banner />
        <Header /> */}
        <Routes className="content">
          {/* <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/faq" element={<Questions />}/>
          <Route path="/resources" element={<Resources />}/> */}
          <Route path="/" element={<ComingSoon />}/>
          {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
