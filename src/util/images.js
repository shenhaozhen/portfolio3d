import htmlCssSrc from '../assets/icons/html_css.png'
import jsSrc from '../assets/icons/js.jpeg'
import reactSrc from '../assets/icons/react.svg'
import vueSrc from '../assets/icons/vue.jpeg'
import nodeSrc from '../assets/icons/node.png'
import nextSrc from '../assets/icons/next.jpeg'
import threeSrc from '../assets/icons/threejs.jpeg'
import tsSrc from '../assets/icons/ts.jpeg'
import webglSrc from '../assets/icons/webgl.jpeg'


const generateImageObj = (src, alt, stop, sleft, etop, eleft) => ({src, alt, stop, sleft, etop, eleft})

export const images = [
    generateImageObj(htmlCssSrc, 'html and css' , 25, 30, 15, 10),
    generateImageObj(jsSrc, 'javascript', 25, 45, 15, 45),
    generateImageObj(reactSrc, 'react', 25, 60, 15, 80),
    generateImageObj(vueSrc, 'vue', 45, 30, 45, 10),
    generateImageObj(nodeSrc, 'node', 45, 45, 45, 45),
    generateImageObj(nextSrc, 'nextjs', 45, 60, 45, 80),
    generateImageObj(threeSrc, 'threejs', 65, 30, 75, 10),
    generateImageObj(tsSrc, 'typescrpt', 65 ,45, 75, 45),
    generateImageObj(webglSrc, 'webgl', 65 ,60, 75, 80)
]