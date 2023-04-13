const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  function addSubdomain(subDomain) {
    if (res.hasOwnProperty(subDomain)) {
      res[subDomain]++;
    } else {
      res[subDomain] = 1;
    }
  }

  const res = {};
  domains.forEach(domain => {
    let subDomain = '';
    while (domain.lastIndexOf('.') >= 0)
    {
      let index = domain.lastIndexOf('.');
      subDomain = subDomain + domain.slice(index);
      addSubdomain(subDomain);
      domain = domain.slice(0, index);
    }
    addSubdomain(subDomain + '.' + domain);
  })
  return res;
}

module.exports = {
  getDNSStats
};
