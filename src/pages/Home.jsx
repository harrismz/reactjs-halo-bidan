import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Walink from '../components/Walink'

import parse from 'html-react-parser'
import '../styles/Home.css'

import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CoursesSection'
import { tutorsSection,tutorsList } from '../data/TutorsSection'
import { partnersSection, partnersList } from '../data/PartnersSection'
import { contactSection } from '../data/ContactSection'

function Home() {
  return (
   <>
    <Navbar/>
    <div className="wrapper">
        {/* home */}
        <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>

        {/* online course */}
        <section id="courses">
            <div className="kolom">
            {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>

        {/* Tutor */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorsList={tutorsList}/>
            </div>
        </section>

        {/* partner */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnersList}/>
            </div>
        </section>

        {/* walink */}
        <section>
            <div className="tengah">
                <Walink />
            </div>
        </section>

    </div>

    {/* contact */}
    <Contact contactSection={contactSection}/>
    
    <Footer/>
   </>
  )
}

export default Home
