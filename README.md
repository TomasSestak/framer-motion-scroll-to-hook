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

    1: Spring | Tween | undefined
        

scrollTo function returned from useScrollTo hook accepts 2 arguments:

    1: Element | string | number (number of pixels from top of the window) | undefined
    2: Number (offset in pixels from element you want to scroll to) | undefined

In version 2 you can directly import scrollTo function from the package and use it without the hook 

    Options (one object argument):
        scroller?: HTMLElement | Window | null;
        transition?: Spring | Tween;
        target?: Element | number | string | null;
        offset?: number;


## Examples

```tsx

import {useScrollTo} from 'framer-motion-scroll-to-hook'

//Scroll to element (you may wanna useRef)
const BasicExampleWthConfig = () => {
	const scrollTo = useScrollTo()
	return (
		<button type="button" onClick={() => scrollTo(document.querySelector('#id'))}>
			Scroll to Element with predefined config from framer-motion
		</button>
	)
}

//Scroll to top with config
const ScrollToTop = () => {
	const scrollTo = useScrollTo({mass: 120, stiffness: 1, type: 'spring'})
	return (
		<button type="button" onClick={scrollTo}>
			Scroll to the top of the page with your config
		</button>
	)
}

//Scroll to top with offset and first argument as string only (document.querySelector is used in the hook)
const ScrollToTopWithOffset = () => {
	const scrollToId = useScrollTo()
	return (
		<button type="button" onClick={() => scrollToId('#id', 300)}>
			Scroll to the top of the page with default config and offset from element
		</button>
	)
}

import {scrollTo} from 'framer-motion-scroll-to-hook'

const ScrollToTopFunction = () => {
	return (
		<button type="button" onClick={() => scrollTo()}>
			Scroll to the top of the page with default config
		</button>
	)
}


```

## License

MIT © [TomasSestak](https://github.com/TomasSestak)
