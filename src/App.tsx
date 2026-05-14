import './App.css'
import Intro from '@/views/Intro'
import About from '@/views/About'
import ProjectView from '@/views/ProjectView'
import HobbyView from '@/views/HobbyView'
import NavigationBar from '@/components/NavigationBar'
import ResumeView from '@/views/ResumeView'

import website from '@/assets/personal_website.webp'
import testSynergy from '@/assets/testsynergy.webp'

import resumeData from '@/assets/resume.json'


function App() {

  return (
    <div>
        <NavigationBar />
        
        <div className="flex flex-col items-center gap-10 mb-10">
          <section id="home">
            <Intro />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="resume">
            <ResumeView 
              title="Professional Experience"
              resumes={resumeData}
            />
            <ResumeView
              title="Education"
              resumes={[
                {
                  title: "Bachelor of Science, Aerospace Engineering",
                  company: "University of Colorado Boulder",
                  start: "August 2019",
                  end: "May 2023",
                  bullets: [],
                  skills: [],
                },
              ]}
            />
          </section>

          <section id="projects">
            <ProjectView
              projects={[
                {
                  title:"TestSYNERGY" ,
                  imageSrc:testSynergy, 
                  description:"TestSYNERGY was a project I worked on during Boom's one-week internal innovation sprint! When you're reviewing a flight test event, you have to piece together what happened by cross-referencing test cards, radio recordings, video footage, and sensor data that all live in different places. I wanted to build a tool that brings all of that into one unified interface, with synchronized playback so you can jump to any timestamp, event, or line in the transcription and have everything update together. I used AssemblyAI to transcribe and diarize audio recordings, and the Claude API to automatically extract a timeline of key events from the transcription with contextual data like test cards and normal procedures. At the end of the week I containerized the whole thing with Docker and deployed it to an internal company server so the broader team could actually use it!",
                  skills:["Python", "React", "Docker"],
                },
                {
                  title:"Personal Website", 
                  imageSrc:website, 
                  description:"You are looking at it right now! After seeing colleagues at work building with React and Tailwind, I decided to take the plunge and try it myself. I used the shadcn/ui component library for its flexibility and clean defaults, and paired it with Tailwind for styling. I'll admit I was skeptical of Tailwind at first, but it won me over quickly — being able to style everything inline without context-switching to a CSS file is something I don't think I can give up now... Beyond the code, I also designed everything from scratch: the layout, color palette, and graphics, which was just as fun as building it!",
                  skills:["React", "TailwindCSS", "TypeScript", "Vite"],
                  link:"https://github.com/chierikamada/personal-website"
                }
              ]}
            />
          </section>

          <section id="hobbies">
            <HobbyView/>
          </section>
        </div>
    </div>
  )
}

export default App
