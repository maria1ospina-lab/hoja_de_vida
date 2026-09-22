import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="cv">

      <Sidebar />

      <main className="content">

        <Header />

        <About />

        <Education />

        <Experience />

        <Courses />

      </main>

    </div>
  );
}

export default App;