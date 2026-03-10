
// Used to render the project cards inside portfolio
function ProjectCard(props) {
    return (
        <div className="project-card">
            <div className="project-card-content">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} />
                <div className="project-card-links">
                    <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                    <a href={props.githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;