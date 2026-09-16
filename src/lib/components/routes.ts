import { resolve } from "$app/paths";
import contactImage from "$lib/assets/contact.jpg"
import workImage from "$lib/assets/work.jpg"
import volunteeringImage from "$lib/assets/volunteering.jpg"
import skillsImage from "$lib/assets/skills2.jpg"
import portfolioImage from "$lib/assets/portfolio.jpg"


export type Route = {
    link: string, 
    name: string,
    mainColor: string,
    image?: string
}

export const routes: Record<string, Route> = {
    home: {
        link: resolve('/'), 
        name: 'Home', 
        mainColor: 'purple-400', 
    }, 
    skills: {
        link: resolve('/skills'), 
        name: 'Skills', 
        mainColor: 'orange-300', 
        image: skillsImage
    },
    portfolio: { 
        link: resolve('/portfolio'), 
        name: 'Portfolio', 
        mainColor: 'cyan-600', 
        image: portfolioImage
    },
    volunteering: { 
        link: resolve('/volunteering'), 
        name: 'Volunteering', 
        mainColor: 'red-500', 
        image: volunteeringImage
    },
    work: { 
        link: resolve('/work'), 
        name: 'Work', 
        mainColor: 'amber-50', 
        image: workImage
    },
    contact: { 
        link: resolve('/contact'), 
        name: 'Contact', 
        mainColor: 'yellow-600', 
        image: contactImage
    }
}