import { Titles } from "./Titles"
import { Tours } from "./data"


export default function Tour() {
  return(
    <section className="section" id="tours">
      <Titles title={"featured"} subtitle={"tours"} />
   <div className="section-center featured-center">
    {Tours.map(tour =>{
      const {id,image,title,text,icon,date,country,price,stay} = tour;
      
      return(<article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>
          {text}
        </p>
        <div className="tour-footer">
          <p>
            <span><i className={icon}></i></span> {country}
          </p>
          <p>{stay}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
      )
    })}
    
    
     
   </div>
 </section>
 )
}

