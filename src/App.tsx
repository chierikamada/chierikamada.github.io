import './App.css'
import { useState, useEffect } from 'react'
import Intro from '@/views/Intro'
import About from '@/views/About'
import ProjectView from '@/views/ProjectView'
import HobbyView from '@/views/HobbyView'
import NavigationBar from '@/components/NavigationBar'
import ResumeView from '@/views/ResumeView'

import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import cat from '@/assets/cat.jpeg'


function App() {

  return (
    <div>
        <NavigationBar />
        
        <div className="flex flex-col items-center gap-10">
          <section id="home">
            <Intro />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="resume">
            <ResumeView 
              title="Professional Experience"
              resumes={[
                {
                  title:"Chief Executive Intern",
                  company:"ABC Inc.",
                  start:"May 2023",
                  end:"May 2026",
                  bullets:["Increased company's productivity by 50%", "Fired all of the AI bots improving employee satisfaction by 6 points", "Rescued 36 stray cats"],
                  skills:["React", "TypeScript", "Vite"]
                },
                {
                  title:"Staff Data Monkey",
                  company:"ABC Inc.",
                  start:"May 2023",
                  end:"May 2026",
                  bullets:["Increased company's productivity by 50%", "Fired all of the AI bots improving employee satisfaction by 6 points", "Rescued 36 stray cats"],
                  skills:["C++"]
                } 
              ]}
            />
          </section>

          <section id="projects">
            <ProjectView
              projects={[
                {
                  title:"Cool project", 
                  imageSrc:reactLogo, 
                  description:"Look at this super cool project! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  skills:["React", "TypeScript", "Vite"],
                  link:"coolproject.com"
                },
                {
                  title:"Another cool project" ,
                  imageSrc:viteLogo, 
                  description:"This one is also cool... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  skills:["Vite"],
                  link:"coolproject2.com"
                }
              ]}
            />
          </section>

          <section id="hobbies">
            <HobbyView 
              hobbies={[
                {
                  imageSrc:cat,
                  description:"Very interesting hobby",
                  tags:["crochet", "sewing"]
                },
                {
                  imageSrc:reactLogo,
                  description:"another hobby",
                  tags:["sticker"]
                },
                {
                  imageSrc:reactLogo,
                  description:"another hobby",
                  tags:["sticker"]
                },
                {
                  imageSrc:reactLogo,
                  description:"another hobby",
                  tags:["sticker"]
                },
                {
                  imageSrc:reactLogo,
                  description:"another hobby",
                  tags:["sticker"]
                }
              ]}
            />
          </section>
        </div>
    </div>
  )
}

export default App
