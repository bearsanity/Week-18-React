
// Used to render the project cards inside portfolio
function ProjectCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
            <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
        </div>
    )
}

export default ProjectCard;