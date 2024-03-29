import { Titles } from "./Titles";
import { ServicesData } from "./data";


export default function Services() {
  
    return(
<section className="section services" id="services">
<Titles title={"Our"} subtitle={"Services"} />
<div className="section-center services-center">
{ServicesData.map((dataPiece)=>{
  const {title,id,text,icon} = dataPiece;
return(

  <article className="service" key={id}>
    <span className="service-icon"><i className={icon}></i></span>
    <div className="service-info">
      <h4 className="service-title">{title}</h4>
      <p className="service-text">
        {text}
      </p>
    </div>
  </article>)
 
 })}
 </div>

</section>
);
}