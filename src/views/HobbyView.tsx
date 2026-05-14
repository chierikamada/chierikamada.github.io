import HobbyTile, { type HobbyTileProps }  from '@/components/HobbyTile'
import oril from '@/assets/oril.jpg'
import lake from '@/assets/lake.jpg'
import gopher from '@/assets/gopher.jpg'
import coffee from '@/assets/coffee.jpg'
import princess from '@/assets/princess.jpg'
import pitviper from '@/assets/pitviper.jpg'


const hobbies: HobbyTileProps[] = [
    {
        imageSrc: gopher,
        description: "Gopher and Ferris",
        tags: ["crochet"],
    },
    {
        imageSrc: oril,
        description: "\"Oril\" sticker",
        tags: ["sticker"],
    },
    {
        imageSrc: pitviper,
        description: "The Aftershock Original 2.0",
        tags: ["pit viper"],
    },
    
    {
        imageSrc: princess,
        description: "princess",
        tags: ["sticker"],
    },
    {
        imageSrc: coffee,
        description: "coffee mug",
        tags: ["crochet"],
    },
    {
        imageSrc: lake,
        description: "Lake Granby",
        tags: ["travel"],
    },
]

export default function HobbyView() {
    return (
        <div className="w-[60rem]">
            <div className="text-3xl mx-4 my-2 font-serif">Hobbies</div>
            <hr className="border-t-2 border-(--primary)"/>
            <div className="text-sm mx-4 my-2">A few of my favorite things</div>
            <div className="mt-6 grid grid-cols-[auto_auto_auto] gap-8 justify-center">
                {hobbies.map((hobby) => <HobbyTile {...hobby}></HobbyTile>)}
            </div>
        </div>

    )
}