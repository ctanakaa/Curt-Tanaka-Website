import Header from "./components/Header";
import Summary from "./components/Summary";
import AboutSection from "./components/Background";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import ResumeButton from "./components/ResumeButton";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import TechnologiesPage from "./components/TechnologiesPage";
import Background from "./components/Background";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen transition-colors">
        <Header />
        <main className="pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Summary />
                  <Technologies />
                  <Projects />
                  <section id="resume" className="flex justify-center py-16">
                    <ResumeButton />
                  </section>
                </>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
