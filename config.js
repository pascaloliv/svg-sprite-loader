var path = require('path');

/**
 * SVG sprite loader config.
 *
 * @typedef  {Object} SVGSpriteLoaderConfig
 * @property {String} [name="[name]"] Sprite symbol naming pattern. Supported patterns: `[ext]`, `[name]`, `[path]`, `[hash]` and `[pathhash]`.
 * @property {Boolean} [prefixize=true] Add prefix to all elements in SVG.
 * @property {String} [spriteModule] Sprite module name. You can define your own sprite module based on `./lib/web/sprite`.
*/

module.exports = {
  name: '[name]',
  prefixize: true,
  spriteModule: path.resolve(__dirname, 'lib/web/global-sprite')
};