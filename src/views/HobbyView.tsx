import HobbyTile, { type HobbyTileProps }  from '@/components/HobbyTile'

export interface HobbyViewProps {
    hobbies: HobbyTileProps[];
}

export default function HobbyView({hobbies}: HobbyTileProps) {
    return (
        <div className="w-[60rem]">
            <div className="text-3xl mx-4 my-2 font-serif">The Fun Stuff</div>
            <hr className="border-t-2"/>
            <div className="text-sm mx-4 my-2">Here are some of the things I enjoy doing in my free time...</div>
            <div className="grid grid-cols-[auto_auto_auto] gap-8 justify-center">
                {hobbies.map((hobby) => <HobbyTile {...hobby}></HobbyTile>)}
            </div>
        </div>

    )
}