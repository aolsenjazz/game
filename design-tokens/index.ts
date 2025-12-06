import fs from 'fs';
import path from 'path';
import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

import { splitTokenSets } from './split';

// Register the Tokens Studio transforms
register(StyleDictionary, {
  excludeParentKeys: true,
});

/**
 * Shared Style Dictionary config used for each theme build.
 */
const commonSdConfig = {
  type: 'all',
  preprocessors: ['tokens-studio'], // Required for sd-transforms >= 0.16.0
};

/**
 * Temporary working folder.
 * All split token-set files go here.
 */
const BUILD_DIR = path.resolve('.build');

/**
 * Remove build directory before starting.
 */
function cleanBuildDir() {
  if (fs.existsSync(BUILD_DIR)) {
    fs.rmSync(BUILD_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

/**
 * Build one split JSON file with Style Dictionary
 */
async function buildTheme(sourceFilePath: string, isBrandLayer: boolean) {
  const fName = path.basename(sourceFilePath);
  const cssOptions = isBrandLayer
    ? {}
    : {
        selector: '.' + path.parse(fName).name,
      };

  const sdJsonConfig = {
    ...commonSdConfig,
    source: [sourceFilePath],
    platforms: {
      json: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'dist/json/',
        files: [
          {
            destination: fName,
            format: 'json',
          },
        ],
      },
      css: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'dist/css/',
        files: [
          {
            destination: fName.replace('.json', '.css'),
            format: 'css/variables',
            options: cssOptions,
          },
        ],
      },
    },
  };

  const sdPlatforms = new StyleDictionary(sdJsonConfig, {
    verbosity: 'verbose',
  });

  await sdPlatforms.cleanAllPlatforms();
  await sdPlatforms.buildAllPlatforms();
}

async function main() {
  cleanBuildDir();

  const { writtenBrandFiles, writtenThemeFiles } = splitTokenSets(
    'tokens.json',
    '.build'
  );

  for (const file of writtenBrandFiles) {
    await buildTheme(file, true);
  }

  for (const file of writtenThemeFiles) {
    await buildTheme(file, false);
  }

  fs.rmSync(BUILD_DIR, { recursive: true, force: true });
}

main().catch((err) => {
  console.error('❌ Build failed:');
  console.error(err);
  process.exit(1);
});
