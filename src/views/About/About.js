import "./About.css"
import bg1 from "./bg1.jpg"
import nailPaints from "./about-image-2.jpg"
import fruit from "./fruit.png"
import floral from "./floral.png"
import ocean from "./ocean.png"
import { theme } from "../../configData"
import { cosmetic_sold,happy_client,countries,employee } from "./AboutData"
import TeamCard from "../../component/TeamCard/TeamCard"
import RJ from "./RJ.jpeg"
import TD from "./TD.jpeg"


function About() {
  return (
    <>
        <div>
            <div className="section1">
                <div>
                    <img src={bg1} className="title-bg" alt="background" />
                </div>
                <div className="text-on-image">
                    <h3 style={{color: theme.primaryColor}} className="subHeadingFont">Organic Cosmetic</h3>
                    <h1 style={{color: theme.Heading}} className="headingFont">About US</h1>
                </div>
            </div>
            <div className="cosmetic-types-data">
                <div className="cosmetic-types-data-1">
                    <img src={nailPaints} alt="nailpaint" className="cosmetic-types-data-1-img"/>
                </div>
                <div className="cosmetic-types-data-2">
                    <div className="cosmetic-types-data-2-text">
                        <h1 style={{color: theme.Heading}} className="headingFont"> Use of NATURAL ORGANIC COSMETICS</h1>
                        <p style={{color: theme.description}} className="descriptionFont">Using natural organic cosmetics offers numerous advantages for both your skin and the environment. These products are formulated without harmful chemicals, synthetic additives, or artificial fragrances, making them gentler and safer for your skin, particularly if you have sensitivities or allergies. Rich in natural vitamins, minerals, and antioxidants, organic cosmetics nourish and rejuvenate your skin, promoting a healthy and radiant complexion. Environmentally, organic farming practices used to produce these ingredients are more sustainable and eco-friendly, reducing pollution and conserving resources. </p>
                    </div>
                    <div className="types-images">
                        <div>
                            <img src={fruit} className="type-img" alt="fresh type"/>
                            <p className="img-text" style={{color: theme.Heading}} >Fresh Types</p>
                        </div>
                        <div>
                            <img src={floral} className="type-img" alt="floral type"/>
                            <p className="img-text" style={{color: theme.Heading}}  >Floral Types</p>
                        </div>
                        <div>
                            <img src={ocean} className="type-img" alt="ocean type"/>
                            <p className="img-text" style={{color: theme.Heading}} >Oceanic Types</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="section3-sub">
                    <h1 style={{color: theme.Heading}} className="headingFont">Our Achievements</h1>
                    <p style={{color: theme.description}} className="section3-description descriptionFont">Highlighting our achievements showcases our commitment to excellence, innovation, and sustainability. </p>
                </div>
                <div className="section3-sub2">
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{cosmetic_sold}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">COSMETICS SOLD</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{happy_client}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">HAPPY CLIENTS</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{countries}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">COUNTRIES</p>
                    </div>
                    <div className="section3-sub2-div" style={{backgroundColor:theme.secondaryColor}}>
                        <h1 className="Datatext">{employee}</h1>
                        <p style={{color: theme.description}}  className="descriptionFont">EMPLOYEES</p>
                    </div>
                </div>
            </div>
            <div className="section4">
                <iframe width="1000" height="480" src="https://www.youtube-nocookie.com/embed/NbVAgoJUb04?si=D3wTI4mTYFKqSw9H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="section5">
                <h1 style={{color: theme.Heading}} className="headingFont">Our Team</h1>
                <div className="section5-1">
                    <div style={{color: theme.description, width:'700px'}}  className="descriptionFont">
                    Our team is the heart and soul of our company, bringing together a diverse group of dedicated professionals who are passionate about natural organic cosmetics. Each member of our team plays a vital role in our mission to create high-quality, sustainable products that enhance beauty and well-being.
                    </div>
                    <div style={{marginLeft:'10px'}}>
                        <button>View More</button>
                    </div>
                </div>
                <div className="team-img-div">
                        <TeamCard 
                            TeamName="Bushra Pathan" 
                            TeamImage={RJ} 
                            TeamPosition="CEO"
                        />
                        <TeamCard 
                            TeamName="Rutuja Jadhav" 
                            TeamImage={RJ}
                            TeamPosition="Devloper"
                        />
                        <TeamCard 
                            TeamName="Shashikant Surve" 
                            TeamImage={RJ}
                            TeamPosition="Designer"
                        />
                    </div>
                    <div className="team-img-div">
                         <TeamCard 
                            TeamName="Tejas Dongare" 
                            TeamImage={TD}
                            TeamPosition="Product Manager"
                        />
                         <TeamCard 
                            TeamName="Shubhangi Pawar" 
                            TeamImage={RJ}
                            TeamPosition="Service Manager"
                        />
                         <TeamCard 
                            TeamName="Pranay Dandekar" 
                            TeamImage={RJ}
                            TeamPosition="Office Head"
                        />
                 
                </div>
            </div>
        </div>
    </>
  )
}

export default About