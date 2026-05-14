import {
    Card,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {SquareArrowOutUpRight} from "lucide-react"

export interface ProjectTileProps {
    title: string; 
    imageSrc: any; 
    description: string;
    skills: string[]; 
    link?: string;
}


export default function ProjectTile({title, imageSrc, description, skills, link}: ProjectTileProps) {
    return (
        <Card className="w-4xl">
            <CardTitle className="px-4 text-xl">{title}</CardTitle> 
            <CardContent className="flex flex-row gap-6">
                <img src={imageSrc} alt={title} loading="lazy" className="flex-2 min-w-0 w-0 object-contain self-start"/>
                <div className="flex-3 flex flex-col gap-4">
                    <div className="">
                        <p>{description}</p>
                    </div>
                    <div className="flex flex-row gap-1">
                        {skills.map((skill: string) => <Badge variant="secondary" className="rounded-sm" key={skill}>{skill}</Badge>)}
                    </div>
                    {link && <Button asChild className="w-[60px] bg-(--muted)">
                        <a href={link} target="_blank">
                            Link <SquareArrowOutUpRight />
                        </a>
                    </Button>}
                </div>
            </CardContent>
        </Card>
    )
}