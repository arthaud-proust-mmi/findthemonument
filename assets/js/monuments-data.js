const MONUMENTS = [
    {
        id: '207392',
        title: 'Pont de Pierre',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.838618056859936,
            lon: -0.5625922731657745,
        }
    },
    {
        id: '384738',
        title: 'Église sainte-croix de Bordeaux',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83110983879435,
            lon: -0.561269443643365,
        }
    },
    {
        id: '390749',
        title: 'Place de la Bourse',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.8416314824207,
            lon: -0.5699723903657387,
        }
    },
    {
        id: '479309',
        title: 'Fontaine Saint-Projet',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83869134950357,
            lon: -0.5741717207525383,
        }
    },
    {
        id: '498274',
        title: 'Place des quinconces',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.84550536739063,
            lon: -0.5733683673473884,
        }
    },
    {
        id: '583982',
        title: 'Couvent des Annonciades',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83312138404313,
            lon: -0.5762691699427337,
        }
    },
    {
        id: '832844',
        title: 'Caserne des pompiers de la Benauge ',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.839719178746755,
            lon: -0.5589437661654331,
        }
    },
    {
        id: '846243',
        title: 'Bourse du travail de Bordeaux',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83218595428502,
            lon: -0.5774269087179117,
        }
    },
    {
        id: '944639',
        title: "Bâtiment de la Caisse d'épargne",
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83924235954748,
            lon: -0.5823799227524185,
        }
    },
    {
        id: '945872',
        title: 'Magasin des vivres de la marine',
        description: "Le pont de pierre est un pont à voûtes en maçonnerie franchissant la Garonne à Bordeaux. Il permet de relier le centre-ville au quartier de La Bastide, sur la rive droite. Construit sur l’ordre de Napoléon Ier au début du XIXème siècle, ce pont été construit en pierre et en brique.",
        enigma: "Je relie les deux rives et je compte 17 arches.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.86464286597821,
            lon: -0.5496710884662275,
        }
    },
]    