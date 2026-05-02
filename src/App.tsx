import './App.css'
import { useState } from 'react'
import ProjectTile from './components/ProjectTile'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

function App() {

  // Load dark/light from saved local storage or get system preference
  const [dark, setDark] = useState<boolean>(() => localStorage.getItem("theme") === "dark"
  || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches));

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <>
         <Button className="h-[30px] w-[30px] px-0 gap-0" onClick={toggleDark}>
          {dark ? <Sun className="flex-1" size={30}/> : <Moon className="flex-1" size={30}/>}
         </Button>
         <ProjectTile 
          title="Cool project" 
          imageSrc={reactLogo} 
          description="Look at this super cool project! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          skills={["React", "TypeScript", "Vite"]}
          link="coolproject.com"
         />

         <ProjectTile 
          title="Another cool project" 
          imageSrc={viteLogo} 
          description="This one is also cool... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          skills={["Vite"]}
          link="coolproject2.com"
         />
    </>
  )
}

export default App
