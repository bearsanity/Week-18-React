 import ProjectCard from '../components/ProjectCard.jsx'


 const projects = [
    {
        title: 'Pokemon Go Trading Hub',
        image: '/PoGoTradingHub.png',
        deployedLink: 'https://pogo-trading.onrender.com/',
        githubLink: 'https://github.com/bearsanity/PoGo-Trading',
    },
    {
        title: 'Weather Dashboard',
        image: '/WeatherDashboard.png',
        deployedLink:'https://bearsanity.github.io/Weather-App/',
        githubLink: 'https://github.com/bearsanity/Weather-App',
    },
    {
        title: 'Pokemon Go Event Calendar',
        image: '/PoGoEventCalendar.png',
        deployedLink: 'https://bearsanity.github.io/Pokemon-Go-Event-Calendar/',
        githubLink: 'https://github.com/bearsanity/Pokemon-Go-Event-Calendar',
    },
    {
        title: 'Dev Link',
        image: '/devlink.png',
        deployedLink: '/MongoVideo.mp4',
        githubLink: 'https://github.com/bearsanity/Week-17-mongo'
    },
    {
        title: 'HTML Generator',
        image:'/htmlgen.png',
        deployedLink:'/readme.mp4',
        githubLink: 'https://github.com/bearsanity/Week-9-Project---ReadMe-Generator'
    },
 ]

 function Portfolio() {
  return (
    <div>
        {projects.map(project => (
            <ProjectCard 
                title={project.title}
                image={project.image}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink} 
                key={project.title}
            />
        ))}
    </div>)
 }

export default Portfolio;