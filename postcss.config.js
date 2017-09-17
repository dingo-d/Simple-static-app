const DEV = process.env.NODE_ENV !== 'production';
const devServer = process.env.NODE_ENV === 'develop';

const path = require('path');

const fontsPath = path.join(__dirname, 'app/assets/fonts');
const publicFontsPath = devServer ? '/app/assets/fonts' : path.join(__dirname, '/app/dist/assets/fonts');

const plugins = [
  require('autoprefixer'),
  require('postcss-font-magician')({
    // custom: {
    //   MuseoSans: {
    //     variants: {
    //       normal: {
    //         300: {
    //           url: {
    //             eot: `${publicFontsPath}/MuseoSans-300.eot`,
    //             svg: `${publicFontsPath}/MuseoSans-300.svg`,
    //             ttf: `${publicFontsPath}/MuseoSans-300.ttf`,
    //             woff: `${publicFontsPath}/MuseoSans-300.woff`
    //           }
    //         },
    //         500: {
    //           url: {
    //             eot: `${publicFontsPath}/MuseoSans-500.eot`,
    //             svg: `${publicFontsPath}/MuseoSans-500.svg`,
    //             ttf: `${publicFontsPath}/MuseoSans-500.ttf`,
    //             woff: `${publicFontsPath}/MuseoSans-500.woff`
    //           }
    //         },
    //         700: {
    //           url: {
    //             eot: `${publicFontsPath}/MuseoSans-700.eot`,
    //             svg: `${publicFontsPath}/MuseoSans-700.svg`,
    //             ttf: `${publicFontsPath}/MuseoSans-700.ttf`,
    //             woff: `${publicFontsPath}/MuseoSans-700.woff`
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // variants: {
    //   'Roboto Condensed': {
    //     '300': [],
    //     '400': [],
    //     '700': []
    //   }
    // },
    // foundries: ['google'],
    hosted: [fontsPath]
  }),
  require('css-mqpacker')
];

// Use only for production build
if (!DEV) {
  plugins.push(require('cssnano'));
}

module.exports = {plugins};
