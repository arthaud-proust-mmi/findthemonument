const MONUMENTS = [
    {
        id: '384738',
        title: 'Église sainte-croix de Bordeaux',
        enigma: "Je suis un site religieux catholique situé proche de la gare, mon nom est lié au symbole de ma religion.",
        description: "Ancienne abbatiale d’un monastère fondé au XVIIème siècle, l’église Sainte-Croix est aujourd’hui une trace des siècles passés puisqu'elle se compose de trois structures distinctes réalisées à des époques différentes. On retrouve ainsi de chaque côté du porche qui lui, date du XXIe siècle, deux clochers construits aux XII et XIXèmes siècles.",
        funfact: "En 1730, les moines de Sainte-Croix dotent l’église d’un nouvel orgue. Cet orgue est fondé par dom François Bedos de Celles quinze années plus tard. Ce moine bénédictin, théoricien et facteur d’orgues résidant à l’abbatiale Sainte-Croix en sa qualité de secrétaire, construit un des plus grands orgues classiques français. Cet orgue de seize pieds est réalisé en trois ans et se compose de 45 jeux répartis sur cinq claviers et un pédalier.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83110983879435,
            lon: -0.561269443643365,
        }
    },
    {
        id: '207392',
        title: 'Pont de Pierre',
        enigma: "Reliant les deux rives, je me constitue de 17 arches",
        description: "Permettant de relier les deux rives, le Pont de pierre est le premier pont construit à Bordeaux. Sa construction, réalisée de 1810 à 1822, a été ordonnée par Napoléon Bonaparte. Si Claude Deschamps, l’ingénieur à la tête du projet, avait d’abord en tête la construction d’un pont en bois, il a finalement opté pour une conception de briques et de pierres. C’est en 2002 que le Pont de pierre est classé comme monument historique.",
        funfact: "Le Pont de pierre est composé de 17 arches, s’agissant du nombre exact de lettres dans le nom de Napoléon Bonaparte. Si la coïncidence peut faire sourire, il est cependant à noter qu’elle n’a aucune valeur historique.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.838618056859936,
            lon: -0.5625922731657745,
        }
    },
    {
        id: '832844',
        title: 'Caserne des pompiers de la Benauge ',
        enigma: "De bleu, de blanc et de rouge, je sers à abriter les derniers remparts aux feux.",
        description: "La caserne des pompiers de la Benauge a été construite par les architectes Claude Ferret, Yves Salier et Adrien Courtois en 1954. En 2008, l'édifice a été labellisé  Patrimoine du XXe siècle. Son organisation fait référence à l'école du Bauhaus et à la théorie de Le Corbusier donc le but et de chercher constamment la lisibilité des volumes et le fonctionnalisme à travers des espaces simples",
        funfact: "La caserne a un bel avenir devant lui car est prévue une rénovation en grand hôtel pour y aménagés des logements privés et des logements sociaux, cela avec une belle touche familiale car les prochain architecte seront les descendants de son concepteur !",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.839719178746755,
            lon: -0.5589437661654331,
        }
    },
    {
        id: '583982',
        title: 'Couvent des Annonciades',
        enigma: "Les religieux y habitaient, j'œuvre maintenant à l’organisation de la culture.",
        description: "L'ancien couvent des Annonciades construit en 1520 pour des religieuses du couvent d'Albi, est un des seuls cloîtres de la Renaissance encore conservés en Aquitaine. La chapelle du couvent, le portail d'entrée, le cloître ainsi que divers murs ont été classée au titre des monuments historiques .Aujourd’hui le batiment est réutilisez par les services de la Direction régionale des Affaires culturelles d'Aquitaine.",
        funfact: "En 1808 le bâtiment est racheté par la communauté de la Miséricorde, qui accueillait les « pécheresses repentantes » c'est-à-dire d'anciennes prostituées ou « filles-mères ».",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83312138404313,
            lon: -0.5762691699427337,
        }
    },
    {
        id: '846243',
        title: 'Bourse du travail de Bordeaux',
        enigma: "Mon bas relief me caractérise ainsi que d'être un lieu de rassemblement d’association qui a pour but la défense d'intérêts communs.",
        description: "La bourse du travail de Bordeaux, située dans le quartier de la Victoire a été réalisée par Jacques D'Welles l’ancienne architecte en chef de la ville de Bordeaux. Les interventions des diférents artistes comme Jean Dupas et Alfred Janniot font de cet équipement un remarquable exemple de l'architecture Art déco bordelaise.",
        funfact: "Dans les années 1920, les syndicats demandent la réalisation d'une Bourse du Travail plus grande. C'est le maire de Bordeaux Adrien Marquet qui propose que la nouvelle Bourse soit aussi « un palais pour le peuple... qui a bien le droit de profiter de l'art et des richesses qu'il contribue à édifier... ». Il s'agissait d'offrir aux syndicats un bâtiment de qualité par ses proportions et la richesse de sa décoration mais aussi fonctionnel avec des salles de réunions, des bureaux, des salles de cours et de conférences.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83218595428502,
            lon: -0.5774269087179117,
        }
    },
    {
        id: '390749',
        title: 'Place de la Bourse',
        enigma: "Je suis une place visible dans un reflet.",
        description: "Place emblématique de la ville de Bordeaux, la Place de la Bourse a été construite en plus de vingt d’années, entre 1730 et 1755. C’est cependant seulement en 1869 qu’est construite la Fontaine des trois grâces que l’on retrouve au centre de l’espace. Cette place royale est aujourd’hui accompagnée du miroir d’eau, dont la fonction principale est de refléter la complexité et la beauté architecturale de la Place de la Bourse.",
        funfact: "Comparée à la place Vendôme par Victor Hugo, la place de la Bourse est inaugurée en 1749 dans un but précis : servir de cadre pour arborer la statue équestre du roi Louis XV. La statue équestre, symbole de la monarchie, est abattue lors de la Révolution et remplacée par un symbole révolutionnaire : l’arbre de la liberté. C’est ici que s’élève majestueusement la fontaine des Trois Grâces, qui représente les filles de Zeus.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.8416314824207,
            lon: -0.5699723903657387,
        }
    },
    {
        id: '479309',
        title: 'Fontaine Saint-Projet',
        enigma: "Sur la plus grande avenue de bordeaux, je suis un abreuvoir à trois sources.",
        description: "Cette Fontaine construite en 1715 tient son nom d'un ancien évêque auvergnat. elle fut conçue par Michiel van der Voort, sculpteur des Pays-Bas. La fontaine est imbriquée dans le mur offre de l'eau potable par ses trois robinets. Mais ce qui l’as différencie réelement est la présence des caractéristiques propres à la ville de Bordeaux : les trois croissants imbriqués (logo actuel de la ville) encadrés par des fleurs et des fruits, des coquilles Saint-Jacques, et les rivières Peugue et Devèze symbolisées par les statues d'une femme et d'un homme dominant l'œuvre, venant faire écho au confluent de ces deux rivières que la ville de Bordeaux fut créée.",
        funfact: "Il fut également utilisée pour fournir un point d'eau potable en quantité suffisante aux nombreux habitants du quartier",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83869134950357,
            lon: -0.5741717207525383,
        }
    },
    {
        id: '944639',
        title: "Bâtiment de la Caisse d'épargne",
        enigma: "Je donne sur les quais, je suis un bâtiment financier.",
        description: "Le bâtiment de la Caisse d'épargne de bordeaux est un bâtiment d'architecture conçu en 1974 et achevé en 1977 par Edmond Lay ayant servi de siège régional pour la Caisse d'épargne jusqu'en 2017.Il a été inscrit au titre des monuments historiques comme « témoignage de l’architecture-sculpture de la 2e moitié du 20e siècle », car il est surtout caractérisé par ça touche moderne qui lui a été donner par ses architectes. Après le départ de la Caisse d'épargne, le bâtiment est restructuré pour accueillir des lofts grands formats dans les étages supérieurs, quelques commerces et un centre culturel consacré à tous les arts autour de l’amphithéâtre de 300 places en sous-sol.",
        funfact: "",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.83924235954748,
            lon: -0.5823799227524185,
        }
    },
    {
        id: '498274',
        title: 'Place des quinconces',
        enigma: "Je suis la plus grande place de France, possédant une œuvre dédiée aux anciens girondins.",
        description: "La place des Quinconces est créée au début du xixe siècle sur l'emplacement du château Trompette, elle est composée d'une esplanade vers la Garonne encadrée au nord et au sud de plantations d'arbres. Le monument principal de la place est le monument aux Girondins élevé entre 1894 et 1902 à la mémoire des députés Girondins victimes de la Terreur et célébrant la République.",
        funfact: "La place des Quinconces est la plus grande place de France et l'une des plus vastes d'Europe, sa superficie est de 12 hectares.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.84550536739063,
            lon: -0.5733683673473884,
        }
    },
    {
        id: '945872',
        title: 'Magasin des vivres de la marine',
        enigma: "Si ma fonction était autrefois militaire, je suis aujourd’hui un acteur de culture. ",
        description: "Le bâtiment a été commandé par la marine militaire royale en 1785 et fut construit proche du port de Bordeaux qui était à cette époque à son apogée avec ses exportations de vin et de blé, ses importations de denrées exotiques notamment antillaises, mais également avec sa participation au commerce triangulaire. Il permettait à stocker les vivres de la marine grâce à plusieurs bâtiments destinés à cela,mais il fut aussi utilisé à la transformation et à l'acheminement de denrées ou vivres pour les équipages de la marine. Il y avait entre autres des abattoirs sur place.",
        funfact: "De nos jours, il a été débuté une restauration et une reconversion en lieu de culture et de création artistique contemporaine appelé « les vivres de l'ari les composent » dont le thème changeant pour varier les œuvres qui les composent.",
        picture: 'une-url-ça-on-remplira-pas-besoin-d-y-toucher',
        position: {
            lat: 44.86464286597821,
            lon: -0.5496710884662275,
        }
    },
]    