import { resolve } from "$app/paths";

export type Route = {
    link: string, 
    name: string,
    mainColor: string,
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
        mainColor: 'red-400', 
    },
    portfolio: { 
        link: resolve('/portfolio'), 
        name: 'Portfolio', 
        mainColor: 'orange-400', 
    },
    volunteering: { 
        link: resolve('/volunteering'), 
        name: 'Volunteering', 
        mainColor: 'yellow-400', 
    },
    work: { 
        link: resolve('/work'), 
        name: 'Work', 
        mainColor: 'green-400', 
    },
    contact: { 
        link: resolve('/contact'), 
        name: 'Contact', 
        mainColor: 'blue-400', 
    }
}