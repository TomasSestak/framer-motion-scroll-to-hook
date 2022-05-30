# framer-motion-scroll-to-hook

> Simple custom hook for ScrollTo functionality using framer-motion

[![NPM](https://img.shields.io/npm/v/framer-motion-scroll-to-hook.svg)](https://www.npmjs.com/package/framer-motion-scroll-to-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install framer-motion-scroll-to-hook
```

```bash
yarn add framer-motion-scroll-to-hook
```

## Usage

useScrollTo hook accepts 1 argument a that is framer-motion config: 
scrollTo function returned from useScrollTo hook accepts 2 arguments:

    1: Element | string | number (number of pixels from top of the window)
    2: Number (offset in pixels from element you want to scroll to)


## Examples

```tsx

import {useScrollTo} from 'framer-motion-scroll-to-hook'

//Scroll to element (you may wanna useRef)
const BasicExampleWthConfig = () => {
    const {scrollTo} = useScrollTo()
    return (
        <button type="button" onClick={() => scrollTo(document.querySelector('#id'))}>
            Scroll to Element with predefined config from framer-motion
        </button>
    )
}

//Scroll to top with config
const ScrollToTop = () => {
    const {scrollTo} = useScrollTo({ mass: 120, stiffness: 1, type: 'spring' })
    return (
        <button type="button" onClick={scrollTo}>
            Scroll to the top of the page with your config
        </button>
    )
}

//Scroll to top with offset and first argument as string only (document.querySelector is used in the hook)
const ScrollToTopWithOffset = () => {
    const {scrollTo} = useScrollTo()
    return (
        <button type="button" onClick={() => scrollTo('#id', 300)}>
            Scroll to the top of the page with default config and offset from element
        </button>
    )
}

```

## License

MIT © [TomasSestak](https://github.com/TomasSestak)
