import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import NavBar from "./common/NavBar";
import RecentMovies from "./movieList/RecentMovies";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<RecentMovies />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
