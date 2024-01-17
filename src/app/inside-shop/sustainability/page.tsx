import { FC } from 'react'
import Pageformat from '../Pageformat'

interface pageProps {

}

const pageDetails = {
    title: "EcoHarmony: Fostering Sustainable Sound Solutions",
    mainDescription: `"EcoHarmony" is dedicated to fostering a harmonious coexistence between cutting-edge audio technology and environmental sustainability. Dive into a realm where innovation meets responsibility, exploring how we are committed to creating sound solutions that minimize ecological impact. From eco-friendly materials to energy-efficient production, join us in a journey that prioritizes sustainability without compromising on audio excellence. Discover how EcoHarmony envisions a future where immersive sound experiences coexist seamlessly with a healthy planet, setting the stage for a more sustainable and responsible approach to audio technology.`,
    imageSrc:'/inside-shop/sustainability.png',
    secondaryTitle: "Soundwaves for a Greener Tomorrow",
    subjects: [
        {
            title: "Sustainable Resonance: Crafting Eco-Friendly Audio Masterpieces",
            description: 'Immerse yourself in the world of Sustainable Resonance, where each audio masterpiece is crafted with a commitment to eco-friendliness. Explore the use of sustainable materials and environmentally conscious manufacturing practices that redefine the way we experience sound.'
        },
        {
            title: "Harmony in Green: Balancing Innovation with Environmental Stewardship",
            description: 'Delve into Harmony in Green, a passage that navigates the delicate balance between innovation and environmental stewardship. Discover how we harmonize cutting-edge technology with sustainable practices to create a new standard for responsible audio solutions.'
        },
        {
            title: "EcoSound Engineering: Revolutionizing Sustainability in Audio",
            description: 'Embark on a journey through EcoSound Engineering, where sustainability takes center stage in audio innovation. Explore groundbreaking approaches to engineering that prioritize environmental responsibility, setting a new paradigm for sustainable audio technology.'
        },
        {
            title: "Nature's Symphony: Connecting Sound and Sustainability",
            description: 'Witness the fusion of Nature and Symphony, where sound and sustainability intertwine. Learn how our commitment to eco-friendly practices extends beyond the product, embracing a holistic approach that reflects the harmony between sound and the natural world.'
        },
        {
            title: "Green Resonance Community: A Collective Commitment to Sustainability",
            description: 'Join the Green Resonance Community, a collective commitment to sustainability within Sonic Culture. Explore how individuals come together to share ideas, practices, and initiatives that amplify the impact of sustainable choices, shaping a greener soundscape for future generations.'
        }
    ]
}

const page: FC<pageProps> = ({ }) => {
    return <Pageformat pageDetails={pageDetails} />
}

export default page