'use server'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import prisma from "../api/prisma/prisma";
import { Prisma } from "@prisma/client";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export async function createProduct(formData: FormData) {
    const image = formData.get('productImage') as Blob
    const quantity = Number(formData.get('quantity'))
    const price = new Prisma.Decimal(Number(formData.get('price')))
    const category = [formData.get('category') as string]
    const name = <string>formData.get('name')


    if (!image||!formData.get('name')) return

    const imagesRef = ref(storage, `products/images/${formData.get('name')}`)

    try {
        await uploadBytes(imagesRef, image)
        const downloadUrl=await getDownloadURL(imagesRef)
        await prisma.product.create({
            data:{
                quantity: quantity,
                price: price,
                name: name,
                category: category,
                url: downloadUrl
            }

        })
    } catch (error) {
        console.log(error)
    }

}