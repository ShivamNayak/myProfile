import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";

import About from "./components/pages/about/About";
import ProjectList from "./components/pages/projects/ProjectList";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </div>
  );
}

export default App;
