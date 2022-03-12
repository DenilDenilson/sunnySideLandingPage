//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'xl': '1440px',
    },

    extend: {
      colors: {
        'Soft-red': '#FE7866',
        'Yellow': '#F9D400',
        'Dark-desaturated-cyan': '#24554B',
        'Dark-blue': '#19526B',
        'Dark-moderate-cyan': '#458C7D',
        'footer-bg-cyan': '#90d4c5',
  
        'Very-dark-desaturated-blue': '#232F3D',
        'Very-dark-grayish-blue': '#5A626C',
        'Dark-grayish-blue': '#808397',
        'Grayish-blue': '#A7AAAE',
        'White': '#FFFFFF',
      },
      // fontFamily: {
      //   sans: [
      //     'Lato',
      //     ...defaultTheme.fontFamily.sans,
      //   ]
      // }
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        // M O B I L E
        'image-header': "url('../images/mobile/image-header.jpg')",
        'image-transform': "url('../images/mobile/image-transform.jpg')",
        'image-photography': "url('../images/mobile/image-photography.jpg')",
        'image-stand-out': "url('../images/mobile/image-stand-out.jpg')",
        'image-gallery-cone': "url('../images/mobile/image-gallery-cone.jpg')",
        'image-gallery-milkbottles': "url('../images/mobile/image-gallery-milkbottles.jpg')",
        'image-gallery-orange': "url('../images/mobile/image-gallery-orange.jpg')",
        'image-gallery-sugar-cubes': "url('../images/mobile/image-gallery-sugar-cubes.jpg')",
        'image-graphic-design': "url('../images/mobile/image-graphic-design.jpg')",

        // D E S K T O P
        'image-header-desk': "url('../images/desktop/image-header.jpg')",
        'image-transform-desk': "url('../images/desktop/image-transform.jpg')",
        'image-photography-desk': "url('../images/desktop/image-photography.jpg')",
        'image-stand-out-desk': "url('../images/desktop/image-stand-out.jpg')",
        'image-gallery-cone-desk': "url('../images/desktop/image-gallery-cone.jpg')",
        'image-gallery-milkbottles-desk': "url('../images/desktop/image-gallery-milkbottles.jpg')",
        'image-gallery-orange-desk': "url('../images/desktop/image-gallery-orange.jpg')",
        'image-gallery-sugar-cubes-desk': "url('../images/desktop/image-gallery-sugarcubes.jpg')",
        'image-graphic-design-desk': "url('../images/desktop/image-graphic-design.jpg')",
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './public/index.html',
//     './src/**/*.{html,js}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }