import { FC } from 'react'
import Pageformat from '../Pageformat'

interface pageProps {

}

const pageDetails = {
    title: "Sonic Cultures: Nurturing a Community of Audio Enthusiasts",
    mainDescription: `"Sonic Cultures" embodies a vibrant community where audio enthusiasts converge to celebrate the diverse and evolving world of sound. It goes beyond headphones, delving into the shared passion for music, technology, and the ever-expanding landscape of sonic experiences. Join a culture that nurtures exploration, fosters conversations, and embraces the richness of audio in our lives. Whether you're a casual listener or an audiophile, Sonic Cultures is your hub for discovering, sharing, and celebrating the endless possibilities that sound brings to our cultural tapestry. Dive into a world where sonic appreciation becomes a shared language, connecting individuals through the universal love for music and audio innovation.`,
    imageSrc: '/inside-shop/culture.png',
    secondaryTitle: "Harmonizing Diversity: Connecting Through the Language of Sound",
    subjects: [
        {
            title: "Rhythmic Conversations: Where Sound Becomes Language",
            description: 'Delve into the unique language of Sonic Cultures, where rhythmic conversations transcend words. Explore how sound becomes a universal dialect, fostering connections and understanding among diverse audio enthusiasts.'
        },
        {
            title: "Auditory Tapestry: Weaving Stories Through Music",
            description: 'Uncover the auditory tapestry woven within Sonic Cultures, where music becomes a storytelling medium. Dive into narratives expressed through sound, as members share the tales that melodies, beats, and rhythms bring to life.'
        },
        {
            title: "Tech Harmonies: Navigating the Sonic Frontier Together",
            description: 'Join forces in navigating the sonic frontier with Tech Harmonies, a passage that explores the collective journey of embracing technology. Discover how the community collaboratively explores new audio horizons and stays on the cutting edge of sonic innovation.'
        },
        {
            title: "Cultural Resonance: Celebrating Diversity in Sound",
            description: 'Celebrate the rich tapestry of sound within Sonic Cultures, where every note resonates with cultural diversity. Explore how various musical genres and audio preferences contribute to a vibrant mosaic of sonic expression.'
        },
        {
            title: "Community Crescendo: Amplifying the Voice of Sonic Enthusiasts",
            description: 'Experience the community crescendo as Sonic Cultures amplifies the voices of enthusiasts. Delve into the collaborative spirit that empowers individuals to contribute, share insights, and collectively shape the evolving narrative of sonic appreciation.'
        }
    ]
}

const page: FC<pageProps> = ({ }) => {
    return <Pageformat pageDetails={pageDetails} />
}

export default page