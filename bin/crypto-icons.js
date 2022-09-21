#!/usr/bin/env node

const { readdir, copyFile, writeFile } = require('fs-extra');
const { optimize } = require('svgo');
const manifestJson = require('cryptocurrency-icons/manifest.json');

// source of crypto icons svg's and destination files for generated content
const SRC_SVG_ICONS = './node_modules/cryptocurrency-icons/svg/color';
const DEST_SVG_ICONS = './app/assets/crypto-icons/icons';
const DEST_SVG_INDEX = './app/assets/crypto-icons/index.ts';
const DEST_MANIFEST_PROPERTIES_MAP = './app/assets/crypto-icons/properties.ts';

// util to check and format coin symbol for svg import/export
const coinSymbolFormatCheck = (coinSymbol) => {
  let newCoinString = coinSymbol;
  const isValidName = coinSymbol.charAt(0).match(/[a-z]/i);
  if (!isValidName) {
    newCoinString = `_${coinSymbol}`;
  }
  return newCoinString;
};

// loop for app/assets/crypto-icons/icons to optimize with svgo
async function optimizeSvgs() {
  const items = await readdir(DEST_SVG_ICONS);
  for (const item of items) {
    optimize(item);
  }
}

// copy cryptocurrency-icons svg's to app/assets
async function copySvgs() {
  try {
    const files = await readdir(SRC_SVG_ICONS);
    // create svg import list
    let indexFile = '';
    // create svg export list
    let exportSvgs = 'export const coinIconSvgs = {';
    // for each coin svg create copy it to app/assets/crypto-icons
    // also add it to app/assets/crypto-icons index.ts export
    for (const file of files) {
      // make sure its an svg
      const isValidFile = file.includes('.svg');
      // skip and continue doesn't start with a letter
      if (!isValidFile) continue;

      // copy svg file over to app/assets/crypto-icons/icons dir
      await copyFile(`${SRC_SVG_ICONS}/${file}`, `${DEST_SVG_ICONS}/${file}`);

      // get name of coin off file name
      const typeCheckedFileString = coinSymbolFormatCheck(file);
      const importName = typeCheckedFileString.split('.')[0].toUpperCase();

      // add it to index.ts imports of crypto-icons
      indexFile = indexFile.concat(
        `\nimport ${importName} from './icons/${file}'`
      );

      // add it to default export
      exportSvgs = exportSvgs.concat(`\n${importName},`);
    }

    // concate closing export default to string
    exportSvgs = exportSvgs.concat(`\n}\n\n export default coinIconSvgs`);
    console.log('----copied cryptocurrency-icons successfully----');

    // run svgo optimize loop
    await optimizeSvgs();
    console.log('----crypto-icons optimized----');

    // create & write index file for svg exports
    await writeFile(DEST_SVG_INDEX, `${indexFile} \n\n${exportSvgs}`, (err) => {
      if (err) console.log(err);
    });
    console.log('----crypto-icons index.ts created----');
  } catch (err) {
    console.error(`----crypto-icons copy ${err}----`);
  }
}

// copy over cryptocurrency-icons manifest file
async function copyManifest() {
  try {
    // await copyFile(SRC_MANIFEST, DEST_MANIFEST);
    let coinProps = 'export const coinProperties = new Map([';
    const coinPropsclose = '])';

    // fill new properties Map
    manifestJson.map((coin) => {
      const typeCheckedCoinSymbol = coinSymbolFormatCheck(coin.symbol);
      const valueObj = `{ name: '${coin.name}', color: '${coin.color}' }`;
      coinProps = coinProps.concat(
        `\n['${typeCheckedCoinSymbol}', ${valueObj}],`
      );
    });

    // create & write file for coin properies Map
    await writeFile(
      DEST_MANIFEST_PROPERTIES_MAP,
      `${coinProps}\n${coinPropsclose}`,
      (err) => {
        if (err) console.log(err);
      }
    );
    console.log('----cryptocurrency-icons manifest.json created as map----');
  } catch (err) {
    console.error(`----cryptocurrency-icons manifest.json copy ${err}----`);
  }
}

// run generations
copySvgs();
copyManifest();
