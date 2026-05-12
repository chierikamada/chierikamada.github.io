import {
    Item,
    ItemContent
} from "@/components/ui/item"
import {Badge} from "@/components/ui/badge"

export interface ResumeTileProps {
    title: string;
    company?: string;
    start: string;
    end: string;
    bullets: string[];
    skills: string[];
}

export default function ResumeTile({title, company, start, end, bullets, skills}: ResumeTileProps) {
    return (
        <Item className="w-[52rem]">
            <ItemContent className="">
                <div className="flex flex-row justify-between">
                    <div className="text-lg">{title}</div> 
                    <div className="text-xs">{start} - {end}</div>
                </div>
                <div className="text-sm opacity-75">{company}</div>
                <ul className="list-disc mx-4">
                    {bullets.map((bullet: string) => <li>{bullet}</li>)}
                </ul>
                <div className="flex flex-row gap-1 mt-2">
                    {skills.map((skill, index) => <Badge variant="secondary" className="rounded-sm font-bold" key={index}>{skill}</Badge>)}
                </div>    
            </ItemContent>
        </Item>
    )
}