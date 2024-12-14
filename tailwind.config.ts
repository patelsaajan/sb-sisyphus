import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
	theme: {
		container: {
			padding: '2rem',
			center: true
		},

		extend: {
			// fontFamily: {
			// },
			fontSize: {
				'lg-heading': '5rem',
				'heading': '3rem',
				'sub-heading': '2rem',
			},
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9',
			},
			colors: {
				base: '#547AA5',
				secondary: '#2a4494',
				text: {
					DEFAULT: '#1a090d',
					alternative: '#d6c9c9',
				},
				white: '#d6c9c9',
			},
			typography: {
				DEFAULT: {
					css: {
						fontSize: '1.4rem',
						// 'color': '#383839',
						// 'h1, h2, h3, h4': {
						// 	color: '#383839'
						// },
						// 'a': {
						// 	color: '#f4241d'
						// },
						// 'blockquote': {
						// 	color: '#383839'
						// }
					}
				}
			}
		}
	}
}
