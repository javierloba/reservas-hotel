import indoorpool from "./img/marvin-meyer-unsplash.jpg";
import bar from "./img/marvin-meyer-unsplash.jpg";
import standard from "./img/marvin-meyer-unsplash.jpg";
import outdoorpool from "./img/marvin-meyer-unsplash.jpg";
import executive from "./img/marvin-meyer-unsplash.jpg";
import withbalcony from "./img/marvin-meyer-unsplash.jpg";
import juniorsuite from "./img/marvin-meyer-unsplash.jpg";
import suite from "./img/marvin-meyer-unsplash.jpg";

const mockData = [
    {
        src: indoorpool,
        title: "Our indoor pool",
        description: "25m long indoor pool with hammocks and sauna"
    },
    {
        src: bar,
        title: "Cocktail bar",
        description: "Esplendid classic cocktail bar with live music"
    },
    {
        src: standard,
        title: "Standard room",
        description: "20 sqm rooms with full amenities",
        cat: "room",
        price: 140,
        stock: 12,
        notAvailableStart: new Date(2021, 7, 10).getTime(),
        notAvailableEnd: new Date(2021, 7, 10).getTime(),
    },
    {
        src: outdoorpool,
        title: "Outdoor pool",
        description: "Infinity pool with breath taking Ocean views"
    },
    {
        src: executive,
        title: "Executive room",
        description: "Our business rooms with lounge access",
        cat: "room",
        price: 170,
        stock: 9,
        notAvailableStart: new Date(2021, 7, 10).getTime(),
        notAvailableEnd: new Date(2021, 7, 10).getTime(),
    },
    {
        src: withbalcony,
        title: "Rooms with balcony",
        description: "Rooms with amazing sea views",
        cat: "room",
        price: 175,
        stock: 15,
        notAvailableStart: new Date(2021, 7, 10).getTime(),
        notAvailableEnd: new Date(2021, 7, 10).getTime(),
    },
    {
        src: juniorsuite,
        title: "Junior Suite with kitchenette",
        description: "Our Junior Suites are perfect for families",
        cat: "room",
        price: 225,
        stock: 10,
        notAvailableStart: new Date(2021, 7, 10).getTime(),
        notAvailableEnd: new Date(2021, 7, 10).getTime(),
    },
    {
        src: suite,
        title: "Our Corner Suite",
        description: "Discrete and luxurious with butler service",
        cat: "room",
        price: 350,
        stock: 4,
        notAvailableStart: new Date(2021, 7, 20).getTime(),
        notAvailableEnd: new Date(2021, 7, 25).getTime(),
    },
];

export const chips = [
    { key: 0, label: "Cancellation Flexibility" },
    { key: 1, label: "Standard rooms" },
    { key: 2, label: "Executive rooms" },
    { key: 3, label: "Acces to lounge" },
    { key: 4, label: "more filters" },
];

export default mockData;