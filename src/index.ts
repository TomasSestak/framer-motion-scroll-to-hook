import {Spring, Tween} from 'framer-motion';

export const useScrollTo = (transition?: Spring | Tween) => {
	let isStopped = false;

	const onWheel = () => {
		isStopped = true;
		window.removeEventListener('wheel', onWheel);
	};

	const scrollTo = async (target?: Element | number | string | null, offset: number = 0) => {
		let y = 0;

		if (typeof target === 'number') {
			y = target;
		} else if (typeof target === 'string' || target?.nodeType === 1) {
			if (typeof target === 'string') {
				target = document.querySelector(target);
			}
			if (!target) {
				console.error('framer-motion-scroll-to-hook: Element not found');
			} else {
				y = window.scrollY + target.getBoundingClientRect().top;
			}
		}

		y += offset;

		window.addEventListener('wheel', onWheel);
		const {animate} = await import('framer-motion');
		animate(window.scrollY, y, {
			...transition,
			onComplete: () => {
				isStopped = false;
				window.removeEventListener('wheel', onWheel);
			},
			onUpdate: (value) => {
				if (!isStopped) {
					window.scroll(0, value);
				}
			},
		});
	};

	return scrollTo;
};


interface ScrollToProps {
	scroller?: HTMLElement | Window | null;
	transition?: Spring | Tween;
	target?: Element | number | string | null;
	offset?: number;
}


export const scrollTo = async ({scroller = window, transition, target, offset = 0}: ScrollToProps | undefined = {}) => {
	if (typeof window === 'undefined' || !scroller) {
		return;
	}

	let isStopped = false;

	const onWheel = () => {
		isStopped = true;
		scroller.removeEventListener('wheel', onWheel);
	};

	const isScrollerWindow = 'scrollY' in scroller;
	const scrollY = isScrollerWindow ? scroller.scrollY : scroller.scrollTop;

	let y = 0;

	if (typeof target === 'number') {
		y = target;
	} else if (typeof target === 'string' || target?.nodeType === 1) {
		if (typeof target === 'string') {
			target = document.querySelector(target);
		}
		if (!target) {
			console.error('Element not found');
		} else {
			y = isScrollerWindow ? scrollY + target.getBoundingClientRect().top : (target as HTMLElement).offsetTop;
		}
	}

	y += offset;

	scroller.addEventListener('wheel', onWheel);
	const {animate} = await import('framer-motion');
	animate(scrollY, y, {
		...transition,
		onComplete: () => {
			isStopped = false;
			scroller.removeEventListener('wheel', onWheel);
		},
		onUpdate: (value) => {
			if (!isStopped) {
				scroller.scroll(0, value);
			}
		},
	});
};
