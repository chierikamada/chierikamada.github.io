import ProjectTile, { type ProjectTileProps }  from '@/components/ProjectTile'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


interface ProjectViewProps {
    projects: ProjectTileProps[];
}

export default function ProjectView({projects}: ProjectViewProps) {
    return (
        <div className="w-[60rem]">
            <div className="text-3xl mx-4 my-2 font-serif">Projects</div>
            <hr className="border-t-2"/>
            <Carousel className="ml-14 mt-4">
                <CarouselContent>
                    {projects.map((project, index) => 
                    <CarouselItem key={index}>
                        <ProjectTile {...project}></ProjectTile>
                    </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}