import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import { Button } from '@/components/ui/button'
  import { Moon, Sun } from 'lucide-react'
  import github from '@/assets/GitHub_Invertocat_White.png'

  const navItems = [
      {label: "Home", href: "home"},
      {label: "About Me", href: "about"},
      {label: "Resume", href: "resume"},
      {label: "Projects", href: "projects"},
      {label: "Hobbies", href: "hobbies"},
  ];

export default function NavigationBar() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [dark, setDark] = useState<boolean>(true);
    useEffect(() => {
      document.documentElement.classList.toggle("dark", true);
    }, []);
  
    const toggleDark = () => {
      const next = !dark;
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
    }

    useEffect(() => {
        // Set up IntersectionObserver for each section
        const observers: IntersectionObserver[] = [];
        navItems.forEach(({href}) => {
            const el = document.getElementById(href);
            if (!el) return;

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) setActiveSection(href);
            }, {threshold: 0.3});

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    });

    const handleClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
    <div className="fixed top-0 left-0 w-full z-50 bg-(--background)">
        <NavigationMenu className="max-w-none px-2 py-3 justify-start">
            <NavigationMenuList>    
                {navItems.map(({label, href}) => (
                    <NavigationMenuItem key={href}>
                    <a
                        href={`#${href}`}
                        onClick={(e) => handleClick(e, href)}
                        className={`
                            px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                            ${activeSection === href
                            ? "underline underline-offset-4 decoration-2 decoration-(--accent) text-(--accent-foreground)"
                            : "text-slate-400 hover:text-(--accent-foreground)"
                            }
                        `}
                    >    
                        {label}
                    </a>    
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>

        <div className="fixed top-2 right-20 flex items-center gap-3">
            <div className="h-[25px] w-[25px]">
                <a href=""><img src={github} alt="github"/></a>
            </div>

        </div>

         <Button variant="secondary" className="h-[30px] w-[30px] p-[2px] fixed top-2 right-4" onClick={toggleDark}>
            {dark ? <Sun className="flex-1" size={30}/> : <Moon className="flex-1" size={30}/>}
            </Button>
        
    </div>
    )
}