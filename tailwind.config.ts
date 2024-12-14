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
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9'
			},
			colors: {

			},
			typography: {
				DEFAULT: {
					css: {
						// 'fontSize': '1.4rem',
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
