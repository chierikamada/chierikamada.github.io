import headshot from '@/assets/headshot.png'
import lines from '@/assets/lines.png'

export default function Intro() {
    return (
        <div className="w-[68rem] h-[40rem] mt-12 px-4 relative">
            <img src={lines} alt="lines" className="absolute w-sm right-0 top-0"/>
            <div className="pt-30">
                <img src={headshot} alt="chieri's headshot" className="w-2xl object-cover"/>
                <div className="absolute top-[30%] left-[42%]">
                    <div className="font-serif text-6xl tracking-normal">Hi there, <br/>I'm Chieri!</div>
                    <div className="mt-4 font-serif" >Full-Stack Engineer | Flight Test & Telemetry | Code, Craft, Create</div>
                </div>
            </div>    
        </div>
    )
}