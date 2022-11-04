const DISHES = [
    {
        id: "1",
        name: "Caramel cake with beries",
        price: "6.95",
        quantity: 0,
        image: require("../images/dishes/01.jpg"),
    },
    {
        id: "2",
        name: "Cheesecake with chocolate",
        price: "6.95",
        quantity: 3,
        image: require("../images/dishes/02.jpg"),
    },
    {
        id: "3",
        name: "Chocolate Cake with Coffee",
        price: "6.95",
        quantity: 0,
        image: require("../images/dishes/03.jpg"),
    },
    {
        id: "4",
        name: "Christmas Panforte Cake",
        price: "6.95",
        quantity: 0,
        image: require("../images/dishes/09.jpg"),
    },
    {
        id: "5",
        name: "vegan cake with strawberries",
        price: "6.95",
        quantity: 0,
        image: require("../images/dishes/10.jpg"),
    },
];

const SLIDE = [
    { id: "1", image: require("../images/slide/14.jpg") },
    { id: "2", image: require("../images/slide/15.jpg") },
    { id: "3", image: require("../images/slide/16.jpg") },
];

const OFFERS = [
    {
        id: "1",
        image: require("../images/background/home-bg.png"),
        description: "Make your first order here",
        descriptionColor: "#fff",
        discountColor: "#FFD205",
        discount: "50%  off",
        hotOffer: true,
    },
    {
        id: "2",
        image: require("../images/offers/offer_2.jpg"),
        description: "Make your first order here",
        descriptionColor: "#222222",
        discountColor: "#E83939",
        discount: "25%  off",
        hotOffer: true,
    },
    {
        id: "3",
        image: require("../images/offers/offer_3.jpg"),
        description: "Make your first order here",
        descriptionColor: "#fff",
        discountColor: "#FFD205",
        discount: "35%  off",
        hotOffer: true,
    },
    {
        id: "4",
        image: require("../images/offers/offer_4.jpg"),
        description: "Make your first order here",
        descriptionColor: "#222222",
        discountColor: "#E83939",
        discount: "50%  off",
        hotOffer: true,
    },
    {
        id: "5",
        image: require("../images/offers/offer_5.jpg"),
        description: "Make your first order here",
        descriptionColor: "#fff",
        discountColor: "#FFD205",
        discount: "20%  off",
        hotOffer: true,
    },
    {
        id: "6",
        image: require("../images/offers/offer_6.jpg"),
        description: "Make your first order here",
        descriptionColor: "#222222",
        discountColor: "#E83939",
        discount: "30%  off",
        hotOffer: true,
    },
];

export { DISHES, SLIDE, OFFERS };
