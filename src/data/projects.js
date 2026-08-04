  import cinemaImg from "../assets/images/pamir-cinema.png"
import larkhaodImg from "../assets/images/larkoad.png"
import invoiceImg from "../assets/images/invoiceFlow.png"
import pollyglotImg from "../assets/images/pollyglot.png"
  const PROJECTS = [
    {
      id:1,
      name: "Pamir Cinema",
      img: cinemaImg,
      description: "A movie streaming website built with HTML and Css",
      link: "https://nooriaahsani216.github.io/movie-theater-page/",
      techStack: ["HTML", "CSS"],
      featured: false,
       progress:95,
        github:"#",
        liveDemo:"#",
        status: "Completed"
    },
    {id:2,
      name: "Larkhoad School",
      img: larkhaodImg,
      description: "An online school website",
      link: "https://nooriaahsani216.github.io/school-portal-project/",
      techStack: ["HTML", "CSS", "Javascript"],
      featured: true,
      progress:90,
      github:"#",
       liveDemo:"#",
      status: "Completed",
    },
    {id:3,
      name: "InvoiceFlow",
      img: invoiceImg,
      description: "An online invoice and client management system",
      link: "#",
      techStack: ["HTML", "CSS", "Javascript"],
      featured: true,
       progress:80,
        github:"#",
         liveDemo:"#",
        status: "in progress"
    },
      {id:4,
      name: "Pollyglot App",
      img: pollyglotImg,
      description: "An AI modern translator ",
      link: "#",
      techStack: ["React", "Tailwindcss"],
      featured: true,
       progress:70,
       github:"#",
       liveDemo:"#",
       status: "in progress"
    }
  ]
  export default PROJECTS;