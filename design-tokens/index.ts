import { register } from '@tokens-studio/sd-transforms';
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';
import StyleDictionary from 'style-dictionary';

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary, {
  excludeParentKeys: true,
});

/**
 * Config to be consumed by all StyleDictionary instances
 */
const commonConfig = {
  type: 'all',
  source: ['tokens.json'],
  preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
};

/**
 * Build for non-Tailwind platforms
 */
const platformsDictionary = new StyleDictionary(
  {
    ...commonConfig,
    platforms: {
      json: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'build/json/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json',
          },
        ],
      },
      css: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'build/css/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
          },
        ],
      },
    },
  },
  {
    verbosity: 'verbose',
  }
);

/**
 * Build for Tailwind
 */
const tailwindDictionary = new StyleDictionary(
  makeSdTailwindConfig(commonConfig),
  {
    verbosity: 'verbose',
  }
);

(async () => {
  await tailwindDictionary.cleanAllPlatforms();
  await tailwindDictionary.buildAllPlatforms();

  await platformsDictionary.cleanAllPlatforms();
  await platformsDictionary.buildAllPlatforms();
})();

// android: {
//   transformGroup: 'tokens-studio',
//   transforms: ['name/kebab'], // is this actually needed for android?
//   buildPath: 'build/android',
//   files: [
//     {
//       destination: 'colors.xml',
//       format: 'android/colors',
//     },
//     {
//       destination: 'dimens.xml',
//       format: 'android/dimens',
//     },
//     {
//       destination: 'fontDimens.xml',
//       format: 'android/fontDimens',
//     },
//     {
//       destination: 'integers.xml',
//       format: 'android/integers',
//     },
//     { destination: 'string.xml', format: 'android/strings' },
//   ],
// },
// ios: {
//         transformGroup: 'tokens-studio',
//         transforms: ['name/kebab'], // is this actually needed for ios?
//         buildPath: 'build/ios',
//         files: [
//           {
//             destination: 'tokens.plist',
//             format: 'ios/plist',
//           },
//         ],
//       },
