/**
 * parse
 * @param {object, array} obj
 * @returns {*}
 */
function parse (obj) {
  return isObject(obj) ? (Object.assign(
    {},
    ...Object.keys(obj).map(item => (
      {[convert(item)]: (isObject(obj[item])) ? parse(obj[item]) : (Array.isArray(obj[item]) ? parseArray(obj[item]) : obj[item])})
    )
  )) : (parseArray(obj));
}

/**
 * parseArray
 * @param  {array} arr
 * @return {array}
 */
function parseArray (arr) {
  return arr.map(item => (isObject(item) ? parse(item) : item));
}

/**
 * isObject
 * @param {*} val
 * @returns {boolean}
 */
function isObject (val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

/**
 * isPromise
 * @param {*} val
 * @returns {boolean}
 */
function isPromise (val) {
  return !!val && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function';
}

/**
 * convert
 * @param {string} str
 * @returns {string}
 */
function convert (str) {
  let arr = str.split(/[_]/);
  let newStr = '';

  for (let i = 1; i < arr.length; i++) {
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr[0] + newStr;
}

/**
 * propsToCamelCase
 * @param {object, array, promise} props
 * @param {function} props.then
 * @returns {*}
 */
export default function propsToCamelCase (props) {
  try {
    if (!isPromise(props) && !isObject(props) && !Array.isArray(props)) {
      throw new TypeError('Function takes only objects, arrays and promises');
    }

    return isObject(props) ? parse(props) : (Array.isArray(props) ? parseArray(props) : props.then(res => (Promise.resolve(parse(res)))));
  } catch (err) {
    return err;
  }
}
