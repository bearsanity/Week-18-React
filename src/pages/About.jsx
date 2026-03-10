import myPhoto from '../assets/IMG_1838.jpg'

function About() {
    return (
        <div className="about-container">
            <div className="about-text">
                <h2>Hey there, I'm <span>James</span>.</h2><p>I'm a full stack web developer aspiring to turn my passion into a career.
                    After a decade in landscaping, I decided to bring my problem-solving and creativity into the digital world
                </p>
            </div>
            <img src={myPhoto} alt='Headshot of James with his cat' />
        </div>)
}

export default About;