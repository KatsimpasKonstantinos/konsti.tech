import Artist1 from '../assets/images/backgrounds/Artist1.jpg';

import ArtistLaser1 from '../assets/images/backgrounds/ArtistLaser1.jpg';
import ArtistLaser2 from '../assets/images/backgrounds/ArtistLaser2.jpg';

import ArtistTouchdesigner1 from '../assets/images/backgrounds/ArtistTouchdesigner1.jpg';

import DataAlchemist1 from '../assets/images/backgrounds/DataAlchemist1.jpg';

import Hacker1 from '../assets/images/backgrounds/Hacker1.jpg';
import Hacker2 from '../assets/images/backgrounds/Hacker2.jpg';
import Hacker3 from '../assets/images/backgrounds/Hacker3.jpg';

import MultimediaEngineer1 from '../assets/images/backgrounds/MultimediaEngineer1.jpg';
import MultimediaEngineer2 from '../assets/images/backgrounds/MultimediaEngineer2.jpg';
import MultimediaEngineer3 from '../assets/images/backgrounds/MultimediaEngineer3.jpg';

import Programmer1 from '../assets/images/backgrounds/Programmer1.jpg';
import Programmer2 from '../assets/images/backgrounds/Programmer2.jpg';

import DJ1 from '../assets/images/backgrounds/DJ1.jpg';
import DJ2 from '../assets/images/backgrounds/DJ2.jpg';
import DJ3 from '../assets/images/backgrounds/DJ3.jpg';
import DJ4 from '../assets/images/backgrounds/DJ4.jpg';

import VJ1 from '../assets/images/backgrounds/VJ1.jpg';
import VJ2 from '../assets/images/backgrounds/VJ2.jpg';

const Artist = { images: [Artist1], name: "Artist" };
const ArtistLaser = { images: [ArtistLaser1, ArtistLaser2], name: "ArtistLaser" };
const ArtistTouchdesigner = { images: [ArtistTouchdesigner1], name: "ArtistTouchdesigner" };
const DataAlchemist = { images: [DataAlchemist1], name: "DataAlchemist" };
const Hacker = { images: [Hacker1, Hacker2, Hacker3], name: "Hacker" };
const MultimediaEngineer = { images: [MultimediaEngineer1, MultimediaEngineer2, MultimediaEngineer3], name: "MultimediaEngineer" };
const Programmer = { images: [Programmer1, Programmer2], name: "Programmer" };
const DJ = { images: [DJ1, DJ2, DJ3, DJ4], name: "DJ" };
const VJ = { images: [VJ1, VJ2], name: "VJ" };

export const jobImages = {
    Artist,
    ArtistLaser,
    ArtistTouchdesigner,
    DataAlchemist,
    Hacker,
    MultimediaEngineer,
    Programmer,
    DJ,
    VJ,
};

class BackgroundSwapper {
    private body: HTMLElement;

    constructor() {
        this.body = document.body;
    }

    swap(name: string) {
        const job = Object.values(jobImages).find(job => job.name === name);
        if (!job) {
            console.error(`Job with name "${name}" not found.`);
            return;
        }

        const images: string[] = job.images;
        if (images.length === 0) {
            console.error(`No images found for job "${name}".`);
            return;
        }

        const image = images[Math.floor(Math.random() * images.length)];
        this.body.style.backgroundImage = `url(${image})`;
    }

    preload() {
        Object.values(jobImages).forEach(job => {
            job.images.forEach(image => {
                const img = new Image();
                img.src = image;
            });
        });
    }
}



export default BackgroundSwapper;