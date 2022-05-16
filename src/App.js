import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Questions from "./pages/Questions";
import Resources from "./pages/Resources";
import ResourcesAgeOneTwo from "./pages/ResourcesAgeOneTwo";
import ResourcesAgeTwoThree from "./pages/ResourcesAgeTwoThree";
import ResourcesAgeThreeFour from "./pages/ResourcesAgeThreeFour";
import ResourcesAgeFourFive from "./pages/ResourcesAgeFourFive";
import ResourcesBuildingBlocks from "./pages/ResourcesBuildingBlocks";
import ResourcesExpressVocab from "./pages/ResourcesExpressVocab";
import ResourcesSpeechSoundsEnglish from "./pages/ResourcesSpeechSoundsEnglish";
import ResourcesSpeechSoundsSpanish from "./pages/ResourcesSpeechSoundsSpanish";
import ResourcesSyntaxMean from "./pages/ResourcesSyntaxMean";
import NotFound from "./pages/NotFound"
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <Banner />
        <Header />
        <Routes className="content">
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/faq" element={<Questions />}/>
          <Route path="/resources" element={<Resources />}/>
          <Route path="/age-one-two" element={<ResourcesAgeOneTwo />} />
          <Route path="/age-two-three" element={<ResourcesAgeTwoThree />} />
          <Route path="/age-three-four" element={<ResourcesAgeThreeFour />} />
          <Route path="/age-four-five" element={<ResourcesAgeFourFive />} />
          <Route path="/building-blocks" element={<ResourcesBuildingBlocks />} />
          <Route path="/expressive-vocabulary" element={<ResourcesExpressVocab />} />
          <Route path="/speech-sounds-english" element={<ResourcesSpeechSoundsEnglish />} />
          <Route path="/speech-sounds-spanish" element={<ResourcesSpeechSoundsSpanish />} />
          <Route path="/syntax-mean-length" element={<ResourcesSyntaxMean />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
