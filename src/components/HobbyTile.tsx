import {
    Card,
    CardDescription,
} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

export interface HobbyTileProps {
    imageSrc: any; 
    description: string; 
    tags: string[]; 
}

export default function HobbyTile({imageSrc, description, tags}: HobbyTileProps) {
    return (
        <Card className="w-55 bg-[#EFECEC] rounded-xs gap-4">
            <img src={imageSrc} alt={description} className="m-6 mb-0 rounded-none! h-45"/>
            <CardDescription className="mr-6 text-[#0C2D57] text-right">{description}</CardDescription>
            <div className="mx-6 flex flex-row-reverse gap-1">
                {tags.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
            </div>
        </Card>
    )
}