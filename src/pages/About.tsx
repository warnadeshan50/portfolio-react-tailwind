import Section from '../components/Section'
import Pic from '../assets/img/warnadeshan.jpg'
function About() {
  return (
    <div>
      <Section header="About">
          <img src={Pic} alt="Warna Deshan" className='about-pic' />
          <p className="about-dis">I am an undergraduate student pursuing Software Engineering at the Institute of Java Software Engineering. Born in 2000, I completed my schooling at Kalutara Vidyalaya. I specialize in developing desktop, web, and mobile applications, with a focus on using Java as my primary language. My passion for software development drives me to continuously improve my skills and build innovative solutions across multiple platforms.</p>
          <h1 className="skills-tit">Use Languages ,Frameworks,Libraries</h1>
          <ul className="flex skills">
            <li>Java</li>
            <li>Dart</li>
            <li>Mysql</li>
            <li>MongoDB</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Boostrap</li>
            <li>Tailwind</li>
            <li>Fluter</li>
          </ul>
      </Section>
    </div>
  )
}

export default About
