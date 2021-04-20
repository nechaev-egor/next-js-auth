// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
    init({
        authPageURL: '/auth',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        firebaseAuthEmulatorHost: 'localhost:9099',
        // Required in most cases.
        firebaseAdminInitConfig: {
            credential: {
                projectId: 'next-js-auth-17ac9',
                clientEmail: 'example-abc123@my-example-app.iam.gserviceaccount.com',
                // The private key must not be accesssible on the client side.
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
            },
            databaseURL: 'https://next-js-auth-17ac9.firebaseio.com',
        },
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyDUC6v_yg9aal2mtZjbb5t23Mhk38Ir1Qo', // required
            authDomain: 'next-js-auth-17ac9.firebaseapp.com',
            databaseURL: 'https://next-js-auth-17ac9.firebaseio.com',
            projectId: 'next-js-auth-17ac9',
        },
        cookies: {
            name: 'ExampleApp', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // set this to false in local (non-HTTPS) development
            signed: true,
        },
    })
}

export default initAuth