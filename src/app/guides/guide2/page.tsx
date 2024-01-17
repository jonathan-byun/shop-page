import { FC } from 'react'
import Guideformat from '../Guideformat'

interface pageProps {

}

const pageDetails = {
    title: "Sonic Innovations: Pioneering the Future of Sound Technology",
    paragraph1Heading: "Beyond Boundaries: Charting New Horizons in Sonic Innovation",
    paragraph1: `Embarking on a journey that transcends conventional limits, we find ourselves at the forefront of sonic exploration, driven by an unwavering commitment to chart new horizons in sonic innovation.
        In this audacious pursuit, we break free from the constraints of the familiar, venturing into uncharted realms where creativity knows no bounds. The convergence of cutting-edge technology and boundless imagination becomes our compass, guiding us through unexplored sonic landscapes.
        As we navigate this uncharted territory, we are fueled by the relentless passion to redefine what's possible in the realm of sound technology. "Beyond Boundaries" encapsulates our quest to push the limits, break barriers, and usher in a new era of sonic experiences that defy expectations and resonate with the spirit of innovation.`,
    paragraph2Heading: "Sonic Frontiers: Trailblazing the Future of Audio Advancements",
    paragraph2: `In the relentless pursuit of audio excellence, we stand at the forefront of Sonic Frontiers, passionately trailblazing the future of audio advancements. This odyssey takes us beyond the conventional boundaries, where innovation becomes the compass guiding our exploration. With cutting-edge technologies as our tools and boundless creativity as our fuel, we embark on a journey that redefines the very essence of sonic experiences.

        As pioneers in this uncharted territory, we navigate the intricacies of audio advancements with precision and imagination. Sonic Frontiers encapsulates our commitment to pushing beyond existing limits, carving new pathways in the sonic landscape, and shaping a future where audio transcends expectations. Join us on this audacious expedition, where each step resonates with the spirit of discovery and the promise of a new era in audio excellence.`,
    imageSrc: '/guides/guide2.png'
}

const page: FC<pageProps> = ({ }) => {
    return <Guideformat pageDetails={pageDetails} />
}

export default page