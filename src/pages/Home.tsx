import SocialMediaBtn from '../components/buttons/SocialMediaBtn'
import HomeBackground from '../components/HomeBackground'
import Section from '../components/Section'
function Home() {
  return (
    <div>
      <Section header="">
        <HomeBackground>
        <h1 className='name text-9xl'>Warna Deshan</h1>
        <p className='short-dis'>I specialize in software development using Java as my primary language, with experience in creating robust desktop, web, and mobile applications.</p>
        <div className="social-btn-area">
        <SocialMediaBtn btnName="Linkedin" />
        <SocialMediaBtn btnName="Github" />
        </div>
        </HomeBackground>
      </Section>
    </div>
  )
}

export default Home
