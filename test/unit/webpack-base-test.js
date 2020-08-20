const assert = require('assert');

describe('webpack.base.js', () => {
  const baseConfig = require('../../lib/webpack.base');

  it('entry',()=> {
    assert.equal(baseConfig.entry.index.indexOf('/test/smoke/template/src/index/index.js') > -1);
  })
})