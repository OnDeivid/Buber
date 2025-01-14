import facebookL from './assets/login/light/Facebook.png'
import googleL from './assets/login/light/Google.png'
import appleL from './assets/login/light/Apple.png'
import backL from './assets/login/light/Back.png'

import facebookD from './assets/login/dark/facebook.png'
import googleD from './assets/login/dark/Google.png'
import appleD from './assets/login/dark/apple.png'
import backD from './assets/login/dark/Back.png'


const providersLogoPath = {
    dark: {
        facebook: facebookD,
        google: googleD,
        apple: appleD,
        back: backL
    },
    light: {
        facebook: facebookD,
        google: googleD,
        apple: appleD,
        back: backD
    }
}
const backgroundcolorProvider = {
    dark: "#2F2F2F",
    light: "#DFEDFB"
}
const textColorProvider = {
    light: "#2F2F2F",
    dark: "#DFEDFB"
}
const elementsColorProvider = {
    dark: "#4378AF",
    light: "#25598E"
}


export const themeData = { backgroundcolorProvider, providersLogoPath, textColorProvider, elementsColorProvider };