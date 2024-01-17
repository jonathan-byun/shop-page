import { FC } from 'react'
import Pageformat from '../Pageformat'

interface pageProps {

}

const pageDetails = {
    title: "AudioHorizon: Redefining Sound Experiences",
    mainDescription: `AudioHorizon is on a mission to redefine sound experiences for all, transcending the ordinary and delivering audio innovations that resonate with simplicity and excellence. Our commitment is to empower individuals through immersive, high-quality audio, making every sonic journey a captivating and authentic experience. Join us as we break free from the conventional, paving the way for a new era where audio becomes a seamless, enjoyable part of everyone's daily life. Explore the horizon of possibilities with AudioHorizon – where sound meets innovation.`,
    imageSrc: '/inside-shop/mission.png',
    secondaryTitle: "Harmony Unleashed: Your Personalized Audio Revolution",
    subjects: [
        {
            title: "Sonic Symphony: Crafting Timeless Soundscapes",
            description: 'Embark on a journey where every note is meticulously composed to create sonic symphonies that stand the test of time. Dive into the art of crafting timeless soundscapes that captivate the soul and elevate your auditory experience.'
        },
        {
            title: "Innovation Echo: Reshaping the Future of Audio",
            description: 'Explore the frontier of audio innovation as we reshape the future of sonic experiences. Innovation Echo guides us through cutting-edge technologies and imaginative design, pushing boundaries to redefine what is possible in the world of audio.'
        },
        {
            title: "The Comfort Beat: Elevating Your Listening Pleasure",
            description: "Immerse yourself in the comfort beat, where the design meets functionality to enhance your listening pleasure. Discover how ergonomic design and thoughtful engineering create headphones that seamlessly integrate into your lifestyle, providing comfort without compromising on audio excellence."
        },
        {
            title: "Sonic Fusion: Where Technology Meets Musical Artistry",
            description: 'Experience the harmonious fusion of technology and musical artistry. Sonic Fusion takes you on a captivating journey, showcasing how advanced engineering and a deep appreciation for musical nuances come together to create headphones that deliver an unparalleled sonic experience.'
        },
        {
            title: "Beyond Sound: The Lifestyle Revolution",
            description: 'Join the lifestyle revolution where audio transcends its conventional role. Beyond Sound explores how our headphones seamlessly integrate into your daily life, becoming not just a device but a companion on your journey, enhancing moments and creating memories through the power of sound.'
        }
    ]
}

const page: FC<pageProps> = ({ }) => {
    return <Pageformat pageDetails={pageDetails} />
}

export default page