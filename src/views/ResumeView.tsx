import ResumeTile, { type ResumeTileProps }  from '@/components/ResumeTile'

interface ResumeViewProps {
    title: string;
    resumes: ResumeTileProps[];
}

export default function ResumeView({ title, resumes } : ResumeViewProps) {
    return (
        <>
        <div className="w-4xl">
            <div className="text-xl mx-4 my-2 font-serif">{title}</div>
            <hr className="border-(--accent) border-t-2"/>
            <div className="mx-4">
                {resumes.map((resume) => <ResumeTile {...resume}></ResumeTile>)}
            </div>
        </div>

        </>
    )
}
