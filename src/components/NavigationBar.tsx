import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
//   import { Button } from '@/components/ui/button'
//   import { Moon, Sun } from 'lucide-react'

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
                            ? "underline underline-offset-4 decoration-2 decoration-(--secondary) text-(--foreground)"
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

        <div className="fixed top-3 right-4 flex items-center gap-3">
            <div className="h-[25px] w-[25px]">
                <a href="https://www.linkedin.com/in/chieri-richling/" target="_blank">
                <svg className="h-[25px] w-[25px]" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="var(--muted)"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="var(--muted-foreground)"/></g>
                </svg>
                </a>
            </div>

            <div className="h-[25px] w-[25px]">
                <a href="https://github.com/chierikamada" target="_blank">
                    <svg className="h-[25px] w-[25px] fill-(--muted)" width="98" height="96" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_730_27126)">
                        <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_730_27126">
                        <rect width="98" height="96" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>

        </div>

        {/* <Button className="h-[30px] w-[30px] p-[1px] fixed top-2 right-4 bg-(--muted)" onClick={toggleDark}>
            {dark ? <Sun className="flex-1" size={30}/> : <Moon className="flex-1" size={30}/>}
        </Button> */}
        
    </div>
    )
}