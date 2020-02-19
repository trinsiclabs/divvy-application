import pathToRegexp from 'path-to-regexp';

/**
 * @param {String} path
 * @param {Object} params
 * @return {String}
 */
export const compilePath = (path, params) => {
  const toPath = pathToRegexp.compile(path);
  return toPath(params);
};

/**
 * @param {String} url
 * @param {String} path
 * @return {Boolean}
 */
export const urlMatchesPath = (url, path) => {
  return pathToRegexp(path).exec(url) !== null;
};
