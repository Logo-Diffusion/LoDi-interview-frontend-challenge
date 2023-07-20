/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'app-black': '#13131A',
				'app-bg-gray': '#1C1C24',
				'app-search-gray': '#292932',
				'overlay-bg': '#292932',
				'deactive': '#6A6A7A',
				'tag-text': '#08432B',
				'button-green': '#37B081',
				'app-green': '#3DD598',
				'spinner-blue': '#5060E4',
				'spinner-cyan': '#4EECED',
				'spinner-lime': '#D0FF79',
				'overlay-border': '#8A8A92',
				'active-icon': '#92929D',
				'button-purple': '#8058F3',
				'ld-purple': '#8158F3',
				'gray-label':'#A8A8AD',
				'icon-text-color': '#9C9CAA',

				'chevron-icon': '#828287',
				'select-border': '#696972',
				'select-label-disabled': '#53535B',
				'spinner-timer-gray': '#7D7D85',

				'divider': '#2A2A36',
				'input-color': '#B5B5BB',
				'editor-label': '#92929D',
				'picker-button': '#9751F2',

				'zoom-border': '#2A2A36',

				'icon-fill': '#888897',

				'text-secondary': '#56565D',
				'dislike': '#FD2833',

				'button-blue': '#0062FF',

				'title-white': "#FAFAFB",
				'item-value': '#C1C1D1',

				'selection-border': '#858585',

				'modal-title': '#D9D8D8',
				'modal-description': '#9094A6',

				'checkmark-check': '#737373',
				'checkmark-border': '#B0B0B0',

				'carousel-dot': '#4E4E4E',
				'carousel-button-border': '#202125',
				'carousel-next-count': '#555562',

				'switch-bg': '#0B0B0E',
				'switch-des':'#A0AEC0',

				'radio-border': '#494E5B',
				'radio-des': '#6F6F6F',
				'radio-des-off': '#9093A6',
				'radio-color': '#FEFEFE',

				'perk-color': '#D9D8D8',
				'text-field-border':'#272738',
				'back-btn':'#2F2F38',
      },
    },
  },
	plugins: [
		require('@headlessui/tailwindcss'),
	],
}

