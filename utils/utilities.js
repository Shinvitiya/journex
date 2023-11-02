import Lenis from '@studio-freight/lenis';

import gallery1 from "../public/gallery/gallery1.webp"
import gallery2 from "../public/gallery/gallery2.webp"
import gallery3 from "../public/gallery/gallery3.webp"
import gallery4 from "../public/gallery/gallery4.webp"
import gallery5 from "../public/gallery/gallery5.webp"
import gallery6 from "../public/gallery/gallery6.webp"
import gallery7 from "../public/gallery/gallery7.webp"
import gallery8 from "../public/gallery/gallery8.webp"
import gallery9 from "../public/gallery/gallery9.webp"
import gallery10 from "../public/gallery/gallery10.webp"
import gallery11 from "../public/gallery/gallery11.webp"
import gallery12 from "../public/gallery/gallery12.webp"
import gallery13 from "../public/gallery/gallery13.webp"
import gallery14 from "../public/gallery/gallery14.webp"
import gallery15 from "../public/gallery/gallery15.webp"
import gallery16 from "../public/gallery/gallery16.webp"
import gallery17 from "../public/gallery/gallery17.webp"
import gallery18 from "../public/gallery/gallery18.webp"


export const navbarItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About",
        link: "/about",
    }
];

export const navbarAnimations = {
    initial : {
        opacity: 0,
        x:-100,
        scale: 0.6
    },
    animate : (index) =>({
        opacity: 1,
        transition: {
            delay : 0.08 * index,
        },
        x:[-100, 0],
        scale: 1 
    }),
};



export const gallery =  [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export const galleries = [
    [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    [gallery7, gallery8, gallery9, gallery10, gallery11, gallery12],
    [gallery13, gallery14, gallery15, gallery16, gallery17, gallery18]
]