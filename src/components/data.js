import img1  from "../images/tour-1.jpeg";
import img2  from "../images/tour-2.jpeg";
import img3  from "../images/tour-3.jpeg";
import img4  from "../images/tour-4.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" }
]

export const socialLinks = [
  { id: 1, href: "www.twitter.com", icon: 'fab fa-facebook' },
  { id: 2, href: "www.twitter.com", icon: 'fab fa-facebook' },
  { id: 3, href: "www.twitter.com", icon: 'fab fa-facebook' }
]

export const AboutUsText =
  {
    p1: "At Backroads, we're more than just a travel company. We're a passionate team of explorers dedicated to creating unforgettable experiences.",
    p2: "With a commitment to sustainable travel and a deep respect for the places we visit, we're here to connect you with the heart and soul of every destination."
  };



export const ServicesData = [
  {id:1,
   title: "Saving Money",
   icon: "fas fa-wallet fa-fw",
   text: `Are you a savvy traveler looking to 
   maximize your budget? Our "Saving Money"
    service is designed with you in mind. We 
    provide cost-effective travel solutions without 
    compromising on quality. Enjoy remarkable adventures,
     comfortable accommodations, and memorable experiences,
      all while keeping your wallet in check.`
  },
  { 
    id:2,
    title: "Endless Hiking",
    icon: "fas fa-tree fa-fw",
    text: `For the nature enthusiast and hiking aficionado, our 
    "Endless Hiking" service beckons you to explore the
     world's most captivating trails. Embark 
     on a journey of discovery as you 
     trek through breathtaking landscapes, from lush 
     forests to rugged mountains. Our experienced
      guides will lead you on epic hiking adventures that 
      will leave you in awe of the great outdoors.`
      },
      { 
        id:3,
        title: "Amazing Comfort",
        icon: "fas fa-socks fa-fw",
        text: `Indulge in the lap of luxury with our 
        "Amazing Comfort" service. We understand that travel 
        should be a pampering experience, and we spare
         no effort in ensuring your utmost comfort. From plush
          accommodations to gourmet dining, we provide
           the ultimate in relaxation and rejuvenation. Revel 
           in the finer things in life as you explore the world's
            wonders.`
      }    
]
export const Tours = [
  {
    id: 1,
    image: img1,
    title: 'Tibet Adventure',
    text: 'Explore the mystical lands of Tibet on this extraordinary 6-day journey. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: 'august 26th, 2020',
    country: 'China',
    price: 'From $2100',
    stay: '6 days'
  },
  {
    id: 2,
    image: img2,
    title: 'Best Of Java',
    text: 'Immerse yourself in the enchanting beauty of Java during this 11-day expedition. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: 'october 1th, 2020',
    country: 'Indonesia',
    price: 'From $1400',
    stay: '11 days'
  },
  {
    id: 3,
    image: img3,
    title: 'Explore Hong Kong',
    text: 'Uncover the vibrant culture and stunning sights of Hong Kong on this 8-day adventure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: 'september 15th, 2020',
    country: 'Hong Kong',
    price: 'From $5000',
    stay: '8 days'
  },
  {
    id: 4,
    image: img4,
    title: 'Kenya Highlights',
    text: 'Embark on a grand 20-day expedition to Kenya, where you\'ll encounter awe-inspiring landscapes and magnificent wildlife. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: 'december 5th, 2019',
    country: 'Kenya',
    price: 'From $3300',
    stay: '20 days'
  },
];