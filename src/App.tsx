import './App.css'
import ProjectTile from './components/ProjectTile'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {

  return (
    <>
         <ProjectTile 
          title="cool project" 
          imageSrc={reactLogo} 
          description="Look at this super cool project!"
          skills={["React", "TypeScript", "Vite"]}
          link="coolproject.com"
         />

         <ProjectTile 
          title="Another cool project" 
          imageSrc={viteLogo} 
          description="This one is also cool"
          skills={["Vite"]}
          link="coolproject2.com"
         />
    </>
  )
}

export default App
