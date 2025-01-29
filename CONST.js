import facebookL from './assets/login/light/Facebook.png'
import googleL from './assets/login/light/Google.png'
import appleL from './assets/login/light/Apple.png'
import backL from './assets/login/light/Back.png'

import facebookD from './assets/login/dark/facebook.png'
import googleD from './assets/login/dark/Google.png'
import appleD from './assets/login/dark/apple.png'
import backD from './assets/login/dark/Back.png'

import toggle from './assets/home/Menu.png'
import search from './assets/home/Search.png'
import someicon from './assets/home/Group.png'


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
const homeSearchImages = {
    toggle: toggle,
    search: search,
    someicon: someicon
}

const backgroundcolorProvider = {
    light: "#DFEDFB",
    dark: "#2F2F2F"
}
const textColorProvider = {
    light: "#2F2F2F",
    dark: "#DFEDFB"
}
const elementsColorProvider = {
    light: "#25598E",
    dark: "#4378AF"
}


export const themeData = { backgroundcolorProvider, providersLogoPath, textColorProvider, elementsColorProvider, homeSearchImages };