import cat from '@/assets/cat.jpeg'

export default function Intro() {
    return (
        <div className="w-4xl mt-14 px-4 flex flex-row items-center">
            <div className="flex-3">
                <div className="font-serif text-5xl tracking-normal">Hi there, I'm Chieri!</div>
                <div>Scroll down to learn more about me...</div>
            </div>
            <img src={cat} alt="cat" className="flex-2 min-w-0 w-0 object-cover"/>
        </div>
    )
}