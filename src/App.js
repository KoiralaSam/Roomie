import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/navigation-component";
import LandingPage from "./Routes/LandingPage/landing-page.component";
import Home from "./Routes/Home/home-component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="home" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
