interface ProjectTileProps {
    title: string; 
    imageSrc: any; 
    description: string;
    skills: string[]; 
    link?: string;
}


export default function ProjectTile({title, imageSrc, description, skills, link}: ProjectTileProps) {
    return (
        <>
            <h2>{title}</h2>
            <img src={imageSrc} alt={title} style={{width: "100px"}}/>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="skills">
                <p>Skills: {skills.join(" ")}</p>
            </div>
            
            {link && <a className="link" href={link}>Link</a>}
        </>
    )
}