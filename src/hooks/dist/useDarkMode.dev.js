"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDarkMode = void 0;

var _react = require("react");

var _useLocalStorage3 = require("../hooks/useLocalStorage");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDarkMode = function useDarkMode() {
  //const [someValue, setSomeValue] = useLocalStorage(darkMode)
  var _useLocalStorage = (0, _useLocalStorage3.useLocalStorage)('dark-mode'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      darkMode = _useLocalStorage2[0],
      setDarkMode = _useLocalStorage2[1];

  (0, _react.useEffect)(function () {
    darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  }, [darkMode]);

  var toggleMode = function toggleMode(e) {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode];
};

exports.useDarkMode = useDarkMode;