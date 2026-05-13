import ResumeTile, { type ResumeTileProps }  from '@/components/ResumeTile'

interface ResumeViewProps {
    title: string;
    resumes: ResumeTileProps[];
}

export default function ResumeView({ title, resumes } : ResumeViewProps) {
    return (
        <>
        <div className="w-[60rem]">
            <div className="text-3xl mx-4 my-2 font-serif">{title}</div>
            <hr className="border-t-2 border-(--primary)"/>
            <div className="mx-[3rem]">
                {resumes.map((resume, index) => {
                    return (
                    <>
                        <ResumeTile {...resume}></ResumeTile>
                        {(index !== resumes.length-1) && <hr className="border-t-1 my-2"/>}
                    </>
                    )
                })}
            </div>
        </div>

        </>
    )
}
