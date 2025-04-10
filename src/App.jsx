import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project1 from "./components/Project1"
import Project2 from "./components/Project2"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className='w-full flex flex-col h-screen bg-[#d7d5d3]'>
      <Header/>
      <Skills/>
      <h1 className="font-bold bg-[#d7d5d3] text-center text-4xl">Project</h1>
      <Project1/>
      <Project2/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App