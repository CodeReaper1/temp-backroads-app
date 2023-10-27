import img from "../images/about.jpeg"
import { Titles } from "./Titles";
import { AboutUsText } from "./data";

export default function AboutUs(){
  const {p1,p2} = AboutUsText
    return(
      
        <section className="section about-us" id="about">
        <Titles title={"About"} subtitle={"Us"}/>
     
        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={img}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            
            <h3>explore and find the difference</h3>
            <p>
              {p1}
            </p>
            <p>
              {p2}
            </p>
            <a href="#about" className="btn">read more</a>
          </article>
        </div>
      </section>
    );
    
    }
