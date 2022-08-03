// import React from 'react';



import "./src/styles/index.scss"
// import "./src/styles/global/scrollbar.scss"
// import "./src/styles/global/react-select.scss"
// import "./src/styles/global/search.scss"
// import "./src/css/styles.css"
// import "typeface-roboto"
// import "prismjs/themes/prism-tomorrow.css"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebookSquare,  faInstagram, faLinkedin, faTwitterSquare , faWhatsappSquare, faPinterestSquare, faTelegram, faYoutubeSquare, } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee, faBars, faChevronCircleLeft,faChevronCircleRight,  faChevronDown,faChevronLeft, faSun, faMoon, faCircle} from '@fortawesome/free-solid-svg-icons'
// import {faEnvelope } from "@fortawesome/free-regular-svg-icons"


// library.add( faCheckSquare, faCoffee, faBars, faChevronCircleLeft, faChevronLeft, faChevronCircleRight, faChevronDown, faEnvelope, faSun, faMoon, faCircle, faTwitterSquare, faFacebookSquare, faInstagram, faLinkedin,faWhatsappSquare,  faPinterestSquare, faTelegram, faYoutubeSquare)

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faUser, faSearch, faChevronCircleLeft, faChevronCircleRight, faAngleRight, faAngleLeft, } from '@fortawesome/free-solid-svg-icons'




library.add(fab, faUser, faSearch, faChevronCircleRight, faChevronCircleLeft, faAngleRight, faAngleLeft, faEnvelope)

export const disableCorePrefetching = () => true

export const registerServiceWorker = () => true
export const onServiceWorkerUpdateReady = () => window.location.reload();




