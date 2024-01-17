import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
    console.log('hi')
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    
    if (!key) return
    if (!stripePromise) {
        stripePromise = loadStripe(key);
        console.log('stripe promise',stripePromise)
    }
    return stripePromise;
};

export default getStripe;