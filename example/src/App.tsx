import React from 'react'
import {useScrollTo} from 'framer-motion-scroll-to-hook';

const App = () => {
	const scrollTo = useScrollTo()
	return (
		<>
			<header id={'id'} style={{marginTop: 40}}/>
			<button type="button" onClick={() => scrollTo('#id')}>
				Click me!
			</button>
		</>
	)
}
export default App
