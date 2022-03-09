import braed from '../img/Decorations/bread.png'
import milk from '../img/Decorations/milk.png'
import fish from '../img/Decorations/fish.png'
import vegetables from '../img/Decorations/vegetables.png'
import garnish from '../img/Decorations/garnish.png'
import water from '../img/Decorations/water.png'
import snacks from '../img/Decorations/snacks.png'
import meat from '../img/Decorations/meat.png'
import cashier from '../img/Decorations/cashier.png'

export const shopObjects = [
    {
        id: 1,
        name: 'хлеб',
        styles: {
            width: 200,
            height: 200,
            top: 420,
            left: 200,
            backgroundImage: `url(${braed})`,
            zIndex: 5,
        },
        collider: {
            top: 600,
            left: 200,
            width: 200,
            height: 100,
        },
        contactCollider: {
            top: 550,
            left: 200,
            width: 200,
            height: 50,
        }
    },
    {
        id: 2,
        name: 'моллочные продукты',
        styles: {
            width: 100,
            height: 300,
            top: 120,
            left: 0,
            backgroundImage: `url(${milk})`,
            zIndex: 5,
        },
        collider: {
            top: 500,
            left: 0,
            width: 100,
            height: 200,
        },
        contactCollider: {
            top: 500,
            left: 100,
            width: 50,
            height: 200,
        }
    },
    {
        id: 3,
        name: 'рыбный отдел',
        styles: {
            width: 100,
            height: 300,
            top: -480,
            left: 0,
            backgroundImage: `url(${fish})`,
            zIndex: 3,
        },
        collider: {
            top: 200,
            left: 0,
            width: 100,
            height: 200,
        },
        contactCollider: {
            top: 200,
            left: 100,
            width: 50,
            height: 200,
        }
    },
    {
        id: 4,
        name: 'овощной отдел',
        styles: {
            width: 200,
            height: 150,
            top: -600,
            left: 400,
            backgroundImage: `url(${vegetables})`,
            zIndex: 3,
        },
        collider: {
            top: 330,
            left: 400,
            width: 200,
            height: 100,
        },
        contactCollider: {
            top: 430,
            left: 400,
            width: 200,
            height: 50,
        }
    },
    {
        id: 5,
        name: 'гарниры',
        styles: {
            width: 200,
            height: 200,
            top: -1030,
            left: 200,
            backgroundImage: `url(${garnish})`,
            zIndex: 1,
        },
        collider: {
            top: 100,
            left: 200,
            width: 200,
            height: 100,
        },
        contactCollider: {
            top: 200,
            left: 200,
            width: 200,
            height: 50,
        }
    },
    {
        id: 6,
        name: 'вода',
        styles: {
            width: 200,
            height: 200,
            top: -1230,
            left: 500,
            backgroundImage: `url(${water})`,
            zIndex: 1,
        },
        collider: {
            top: 100,
            left: 500,
            width: 200,
            height: 100,
        },
        contactCollider: {
            top: 200,
            left: 500,
            width: 200,
            height: 50,
        }
    },
    {
        id: 7,
        name: 'снеки',
        styles: {
            width: 200,
            height: 200,
            top: -1430,
            left: 800,
            backgroundImage: `url(${snacks})`,
            zIndex: 1,
        },
        collider: {
            top: 100,
            left: 800,
            width: 200,
            height: 100,
        },
        contactCollider: {
            top: 200,
            left: 800,
            width: 200,
            height: 50,
        }
    },
    {
        id: 8,
        name: 'мясной отдел',
        styles: {
            width: 100,
            height: 300,
            top: -1430,
            left: 1000,
            backgroundImage: `url(${meat})`,
            zIndex: 3,
        },
        collider: {
            top: 300,
            left: 1000,
            width: 100,
            height: 200,
        },
        contactCollider: {
            top: 300,
            left: 950,
            width: 50,
            height: 200,
        }
    },
    {
        id: 9,
        name: 'касса',
        styles: {
            width: 200,
            height: 150,
            top: -1380,
            left: 700,
            backgroundImage: `url(${cashier})`,
            zIndex: 5,
        },
        collider: {
            top: 600,
            left: 700,
            width: 200,
            height: 100,
        },
        contactCollider: {
            top: 550,
            left: 700,
            width: 200,
            height: 50,
        }
    },
]