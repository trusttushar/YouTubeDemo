/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _server3 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _App = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _crossFetch = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n\nvar _crossFetch2 = _interopRequireDefault(_crossFetch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar client = new _client.ApolloClient({\n  ssrMode: true,\n  link: (0, _client.createHttpLink)({\n    uri: process.env.REACT_APP_API_BASE_URL + '/graphql',\n    fetch: _crossFetch2.default\n  }),\n  cache: new _client.InMemoryCache()\n});\nvar app = (0, _express2.default)();\nvar PORT = process.env.PORT;\napp.use(_bodyParser2.default.json());\napp.use(_express2.default.static(\"build/public\"));\n\napp.get(\"*\", function (req, res) {\n  var context = {};\n\n  var content = _server2.default.renderToString(_react2.default.createElement(\n    _client.ApolloProvider,\n    { client: client },\n    _react2.default.createElement(\n      _server3.StaticRouter,\n      { location: req.url, context: context },\n      _react2.default.createElement(_App2.default, null)\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  var html = \"\\n  <html>\\n    <head>\\n    \" + helmet.meta.toString() + \"\\n    \" + helmet.title.toString() + \"\\n    \" + helmet.link.toString() + \"\\n    \" + helmet.script.toString() + \"\\n    </head>\\n    <body>\\n    <div id=\\\"root\\\">\" + content + \"</div>\\n    <script src=\\\"/client_bundle.js\\\"></script>\\n    <script src=\\\"/assets/js/vendor-all.min.js\\\"></script>\\n    <script src=\\\"/assets/plugins/bootstrap/js/bootstrap.min.js\\\"></script>\\n    <script src=\\\"/assets/js/pcoded.min.js\\\"></script>\\n    </body>\\n    </html>\\n    \";\n\n  res.send(html);\n});\napp.listen(PORT, function () {\n  console.log(\"App is now running at post : \", PORT);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction App() {\n  return _react2.default.createElement(\n    _reactRouterDom.Routes,\n    null,\n    _routes2.default.map(function (route, i) {\n      return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));\n    })\n  );\n}\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/AddVideo/index.js":
/*!******************************************!*\
  !*** ./src/components/AddVideo/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _FormInput = __webpack_require__(/*! ../common/FormInput */ \"./src/components/common/FormInput/index.js\");\n\nvar _FormInput2 = _interopRequireDefault(_FormInput);\n\nvar _Validation = __webpack_require__(/*! ../common/Validation */ \"./src/components/common/Validation/index.js\");\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _mutations = __webpack_require__(/*! ../../graphQL/mutations */ \"./src/graphQL/mutations.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialData = {\n  form: {\n    title: {\n      type: \"text\",\n      label: \"title\",\n      placeholder: \"Enter video title\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    },\n    thumbnail: {\n      type: \"file\",\n      label: \"Thumb Nail\",\n      placeholder: \"Add Thumb Nail\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    },\n    fileName: {\n      type: \"file\",\n      label: \"Video\",\n      placeholder: \"Upload video\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    },\n    discription: {\n      type: \"textArea\",\n      label: \"Discription\",\n      placeholder: \"Enter Discription\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    }\n  },\n  isValid: false\n};\n\nfunction index() {\n  var _useMutation = (0, _client.useMutation)(_mutations.VideoAddMutation),\n      _useMutation2 = _slicedToArray(_useMutation, 2),\n      submitVideoAddForm = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  var _useState = (0, _react.useState)(initialData),\n      _useState2 = _slicedToArray(_useState, 2),\n      VideoAddData = _useState2[0],\n      setVideoAddData = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    if (data && data.addVideo && data.addVideo.title) {\n      window.location.href = \"/\";\n    }\n  }, [data]);\n\n  var handleInputChange = function handleInputChange(e, inputElement) {\n    var form = _extends({}, VideoAddData.form, _defineProperty({}, inputElement, _extends({}, VideoAddData.form[inputElement], {\n      value: e.target.value,\n      error: \"\"\n    })));\n    setVideoAddData(_extends({}, VideoAddData, { form: form }));\n  };\n  var handleFileInputChange = function handleFileInputChange(e, inputElement) {\n    e.currentTarget.style.border = '2px solid red';\n\n    var data = new FormData();\n    data.append('dataFile', e.target.files[0]);\n    var url = process.env.REACT_APP_API_BASE_URL + \"/upload\";\n\n    _axios2.default.post(url, data, {// receive two parameter endpoint url ,form data \n    }).then(function (res) {\n      // then print response status\n      var form = _extends({}, VideoAddData.form, _defineProperty({}, inputElement, _extends({}, VideoAddData.form[inputElement], {\n        value: res.data.fileName,\n        error: \"\"\n      })));\n      setVideoAddData(_extends({}, VideoAddData, { form: form }));\n      e.target.style.border = '2px solid green';\n    });\n  };\n  var handleSubmit = function handleSubmit() {\n    console.log(\"VideoAddData\", VideoAddData);\n    var isValid = true;\n    var FormFlag = _extends({}, VideoAddData.form);\n    for (var val in VideoAddData.form) {\n      for (var key in VideoAddData.form[val].validations) {\n        var err = _Validation.Validate[key](VideoAddData.form[val].value, VideoAddData.form[val].validations[key]);\n        if (!FormFlag[val].error) {\n          FormFlag[val].error = err;\n        }\n        isValid = isValid && err ? false : isValid;\n      }\n    }\n    setVideoAddData({ form: FormFlag, isValid: isValid });\n    if (isValid) {\n      var formData = {};\n      for (var _key in VideoAddData.form) {\n        formData[_key] = VideoAddData.form[_key].value;\n      }\n      console.log(\"formData00000000000\", formData);\n      submitVideoAddForm({ variables: formData });\n    }\n  };\n  var FormElements = [];\n  for (var key in VideoAddData.form) {\n    FormElements.push({\n      id: key,\n      input: VideoAddData.form[key]\n    });\n  }\n\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"content\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"container\" },\n      _react2.default.createElement(\n        \"div\",\n        { className: \"row align-items-stretch justify-content-center no-gutters\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"col-md-7\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"form h-100 contact-wrap p-5\" },\n            _react2.default.createElement(\n              \"h3\",\n              { className: \"text-center\" },\n              \"Add Video Details\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row\" },\n              FormElements.map(function (val) {\n                return _react2.default.createElement(\n                  \"div\",\n                  { key: val.id, className: \"col-md-12 form-group mb-3\" },\n                  _react2.default.createElement(_FormInput2.default, {\n                    FormElement: val,\n                    handleInputChange: val.input.type !== 'file' ? handleInputChange : handleFileInputChange\n                  })\n                );\n              })\n            ),\n            error && _react2.default.createElement(\n              \"label\",\n              { id: \"\", className: \"error\", \"for\": \"validation-email\" },\n              error.message\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row justify-content-center\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"col-md-5 form-group text-center\" },\n                _react2.default.createElement(\n                  \"button\",\n                  {\n                    onClick: handleSubmit,\n                    className: \"btn btn-block btn-primary rounded-0 py-2 px-4\"\n                  },\n                  \"Add\"\n                )\n              )\n            )\n          )\n        )\n      )\n    )\n  );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/AddVideo/index.js?");

/***/ }),

/***/ "./src/components/CommentSideBar/index.js":
/*!************************************************!*\
  !*** ./src/components/CommentSideBar/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction index() {\n    return _react2.default.createElement(\n        \"div\",\n        { className: \"vid-comments\" },\n        _react2.default.createElement(\n            \"div\",\n            { className: \"scroll-container\" },\n            _react2.default.createElement(\n                \"div\",\n                { className: \"comment-msg\" },\n                \"kgjhgbj\"\n            ),\n            _react2.default.createElement(\n                \"div\",\n                { className: \"comment-rpl\" },\n                \"reply\"\n            )\n        ),\n        _react2.default.createElement(\n            \"div\",\n            { className: \"msg-bar\" },\n            _react2.default.createElement(\"input\", { type: \"text\", placeholder: \"Enter text\", name: \"message\" }),\n            _react2.default.createElement(\n                \"button\",\n                { type: \"submit\" },\n                _react2.default.createElement(\"i\", { className: \"fa fa-send\" })\n            )\n        )\n    );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/CommentSideBar/index.js?");

/***/ }),

/***/ "./src/components/MyVideos/index.js":
/*!******************************************!*\
  !*** ./src/components/MyVideos/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _query = __webpack_require__(/*! ../../graphQL/query */ \"./src/graphQL/query.js\");\n\nvar _mutations = __webpack_require__(/*! ../../graphQL/mutations */ \"./src/graphQL/mutations.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction index(props) {\n  var _useQuery = (0, _client.useQuery)(_query.userVideos),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var _useMutation = (0, _client.useMutation)(_mutations.deleteVideo),\n      _useMutation2 = _slicedToArray(_useMutation, 2),\n      deleteVideoCall = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      deletedData = _useMutation2$.deletedData,\n      loadingDeletedData = _useMutation2$.loadingDeletedData,\n      DeletedData = _useMutation2$.DeletedData;\n\n  var handleDelete = function handleDelete(id) {\n    console.log(\"id****************************\", id);\n    deleteVideoCall({ variables: { id: id } });\n    refetch();\n  };\n  console.log(\"my vvvvvvvvvvvvv\", data);\n  return _react2.default.createElement(\n    'div',\n    { className: 'content' },\n    _react2.default.createElement(\n      'h5',\n      null,\n      props.title\n    ),\n    _react2.default.createElement('hr', null),\n    data && data.user && data.user.video && data.user.video.map(function (val) {\n      return _react2.default.createElement(\n        'div',\n        { key: val._id, className: 'video-item' },\n        _react2.default.createElement(\n          'a',\n          { href: \"/video/\" + val._id },\n          _react2.default.createElement('img', { src: process.env.REACT_APP_API_BASE_URL + \"/static/\" + val.thumbnail, alt: val.title, width: '600', height: '400' })\n        ),\n        _react2.default.createElement(\n          'h5',\n          null,\n          val.title\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          val.discription\n        ),\n        props.title === \"My videos\" && _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'button',\n            { type: 'button', className: 'btn btn-primary' },\n            'Edit'\n          ),\n          _react2.default.createElement(\n            'button',\n            { type: 'button', onClick: function onClick() {\n                return handleDelete(val._id);\n              }, className: 'btn btn-danger' },\n            'Delete'\n          )\n        )\n      );\n    })\n  );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/MyVideos/index.js?");

/***/ }),

/***/ "./src/components/SignIn/index.js":
/*!****************************************!*\
  !*** ./src/components/SignIn/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _FormInput = __webpack_require__(/*! ../common/FormInput */ \"./src/components/common/FormInput/index.js\");\n\nvar _FormInput2 = _interopRequireDefault(_FormInput);\n\nvar _Validation = __webpack_require__(/*! ../common/Validation */ \"./src/components/common/Validation/index.js\");\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _mutations = __webpack_require__(/*! ../../graphQL/mutations */ \"./src/graphQL/mutations.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialData = {\n  form: {\n    email: {\n      type: \"email\",\n      label: \"Email\",\n      placeholder: \"Enter email\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" },\n        isEmail: { message: \"Please enter a valid email\" }\n      }\n    },\n    password: {\n      type: \"password\",\n      label: \"Password\",\n      placeholder: \"Enter Password\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    }\n  },\n  isValid: false\n};\n\nfunction index() {\n  var _useMutation = (0, _client.useMutation)(_mutations.SignInMutation),\n      _useMutation2 = _slicedToArray(_useMutation, 2),\n      submitSignInForm = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  console.log(\"ooo\", data);\n  (0, _react.useEffect)(function () {\n    if (data && data.Signin && data.Signin.token) {\n      sessionStorage.setItem(\"token\", data.Signin.token);\n      window.location.href = \"/\";\n    }\n  }, [data]);\n\n  var _useState = (0, _react.useState)(initialData),\n      _useState2 = _slicedToArray(_useState, 2),\n      signInData = _useState2[0],\n      setSignInData = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e, inputElement) {\n    var form = _extends({}, signInData.form, _defineProperty({}, inputElement, _extends({}, signInData.form[inputElement], {\n      value: e.target.value,\n      error: \"\"\n    })));\n    setSignInData(_extends({}, signInData, { form: form }));\n  };\n  var handleSubmit = function handleSubmit() {\n    console.log(\"signInData\", signInData);\n    var isValid = true;\n    var FormFlag = _extends({}, signInData.form);\n    for (var val in signInData.form) {\n      for (var key in signInData.form[val].validations) {\n        var err = _Validation.Validate[key](signInData.form[val].value, signInData.form[val].validations[key]);\n        if (!FormFlag[val].error) {\n          FormFlag[val].error = err;\n        }\n        isValid = isValid && err ? false : isValid;\n      }\n    }\n    setSignInData({ form: FormFlag, isValid: isValid });\n    if (isValid) {\n      var formData = {};\n      for (var _key in signInData.form) {\n        formData[_key] = signInData.form[_key].value;\n      }\n      console.log(\"hvjjh\");\n      submitSignInForm({ variables: formData });\n    }\n  };\n  var FormElements = [];\n  for (var key in signInData.form) {\n    FormElements.push({\n      id: key,\n      input: signInData.form[key]\n    });\n  }\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"content\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"container\" },\n      _react2.default.createElement(\n        \"div\",\n        { className: \"row align-items-stretch justify-content-center no-gutters\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"col-md-7\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"form h-100 contact-wrap p-5\" },\n            _react2.default.createElement(\n              \"h3\",\n              { className: \"text-center\" },\n              \"Sign In\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row\" },\n              FormElements.map(function (val) {\n                return _react2.default.createElement(\n                  \"div\",\n                  { key: val.id, className: \"col-md-12 form-group mb-3\" },\n                  _react2.default.createElement(_FormInput2.default, {\n                    FormElement: val,\n                    handleInputChange: handleInputChange\n                  })\n                );\n              })\n            ),\n            error && _react2.default.createElement(\n              \"label\",\n              { id: \"\", className: \"error\", \"for\": \"validation-email\" },\n              error.message\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row justify-content-center\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"col-md-5 form-group text-center\" },\n                _react2.default.createElement(\n                  \"button\",\n                  {\n                    onClick: handleSubmit,\n                    className: \"btn btn-block btn-primary rounded-0 py-2 px-4\"\n                  },\n                  \"Sign In\"\n                )\n              )\n            )\n          )\n        )\n      )\n    )\n  );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/SignIn/index.js?");

/***/ }),

/***/ "./src/components/SignUp/index.js":
/*!****************************************!*\
  !*** ./src/components/SignUp/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _FormInput = __webpack_require__(/*! ../common/FormInput */ \"./src/components/common/FormInput/index.js\");\n\nvar _FormInput2 = _interopRequireDefault(_FormInput);\n\nvar _Validation = __webpack_require__(/*! ../common/Validation */ \"./src/components/common/Validation/index.js\");\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _mutations = __webpack_require__(/*! ../../graphQL/mutations */ \"./src/graphQL/mutations.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialData = {\n  form: {\n    firstName: {\n      type: \"text\",\n      label: \"First Name\",\n      placeholder: \"First Name\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    },\n    lastName: {\n      type: \"text\",\n      label: \"FLat Name\",\n      placeholder: \"Last Name\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    },\n    email: {\n      type: \"email\",\n      label: \"Email\",\n      placeholder: \"Enter email\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" },\n        isEmail: { message: \"Please enter a valid email\" }\n      }\n    },\n    password: {\n      type: \"password\",\n      label: \"Password\",\n      placeholder: \"Enter Password\",\n      value: \"\",\n      error: \"\",\n      className: \"form-control\",\n      validations: {\n        isRequired: { message: \"This field is required\" }\n      }\n    }\n  },\n  isValid: false\n};\n\nfunction index() {\n  var _useMutation = (0, _client.useMutation)(_mutations.SignUpMutation),\n      _useMutation2 = _slicedToArray(_useMutation, 2),\n      submitSignUpForm = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  (0, _react.useEffect)(function () {\n    if (data && data.SignUp && data.SignUp.token) {\n      sessionStorage.setItem(\"token\", data.SignUp.token);\n      window.location.href = \"/\";\n    }\n  }, [data]);\n\n  var _useState = (0, _react.useState)(initialData),\n      _useState2 = _slicedToArray(_useState, 2),\n      signUpData = _useState2[0],\n      setSignUpData = _useState2[1];\n\n  var handleInputChange = function handleInputChange(e, inputElement) {\n    var form = _extends({}, signUpData.form, _defineProperty({}, inputElement, _extends({}, signUpData.form[inputElement], {\n      value: e.target.value,\n      error: \"\"\n    })));\n    setSignUpData(_extends({}, signUpData, { form: form }));\n  };\n  var handleSubmit = function handleSubmit() {\n    console.log(\"signUpData\", signUpData);\n    var isValid = true;\n    var FormFlag = _extends({}, signUpData.form);\n    for (var val in signUpData.form) {\n      for (var key in signUpData.form[val].validations) {\n        var err = _Validation.Validate[key](signUpData.form[val].value, signUpData.form[val].validations[key]);\n        if (!FormFlag[val].error) {\n          FormFlag[val].error = err;\n        }\n        isValid = isValid && err ? false : isValid;\n      }\n    }\n    setSignUpData({ form: FormFlag, isValid: isValid });\n    if (isValid) {\n      var formData = {};\n      for (var _key in signUpData.form) {\n        formData[_key] = signUpData.form[_key].value;\n      }\n      submitSignUpForm({ variables: formData });\n    }\n  };\n  var FormElements = [];\n  for (var key in signUpData.form) {\n    FormElements.push({\n      id: key,\n      input: signUpData.form[key]\n    });\n  }\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"content\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"container\" },\n      _react2.default.createElement(\n        \"div\",\n        { className: \"row align-items-stretch justify-content-center no-gutters\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"col-md-7\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"form h-100 contact-wrap p-5\" },\n            _react2.default.createElement(\n              \"h3\",\n              { className: \"text-center\" },\n              \"Sign Up\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row\" },\n              FormElements.map(function (val) {\n                return _react2.default.createElement(\n                  \"div\",\n                  { key: val.id, className: \"col-md-12 form-group mb-3\" },\n                  _react2.default.createElement(_FormInput2.default, {\n                    FormElement: val,\n                    handleInputChange: handleInputChange\n                  })\n                );\n              })\n            ),\n            error && _react2.default.createElement(\n              \"label\",\n              { id: \"\", className: \"error\", \"for\": \"validation-email\" },\n              error.message\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row justify-content-center\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"col-md-5 form-group text-center\" },\n                _react2.default.createElement(\n                  \"button\",\n                  {\n                    onClick: handleSubmit,\n                    className: \"btn btn-block btn-primary rounded-0 py-2 px-4\"\n                  },\n                  \"Sign Up\"\n                )\n              )\n            )\n          )\n        )\n      )\n    )\n  );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/SignUp/index.js?");

/***/ }),

/***/ "./src/components/VideoPlayArea/index.js":
/*!***********************************************!*\
  !*** ./src/components/VideoPlayArea/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction index(props) {\n  console.log(\"props._id\", props._id);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(\n      \"div\",\n      { className: \"video-container\" },\n      _react2.default.createElement(\n        \"video\",\n        { controls: true },\n        _react2.default.createElement(\"source\", { src: process.env.REACT_APP_API_BASE_URL + \"/video/\" + props._id, type: \"video/mp4\" }),\n        props.discription\n      ),\n      _react2.default.createElement(\n        \"h4\",\n        null,\n        props.title\n      ),\n      _react2.default.createElement(\n        \"div\",\n        { className: \"desc\" },\n        props.discription\n      )\n    )\n  );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/VideoPlayArea/index.js?");

/***/ }),

/***/ "./src/components/VideosList/index.js":
/*!********************************************!*\
  !*** ./src/components/VideosList/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _query = __webpack_require__(/*! ../../graphQL/query */ \"./src/graphQL/query.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction index(props) {\n    var _useQuery = (0, _client.useQuery)(_query.getVideos),\n        loading = _useQuery.loading,\n        error = _useQuery.error,\n        data = _useQuery.data;\n\n    console.log(\"data---\", data);\n    return _react2.default.createElement(\n        'div',\n        { className: 'content' },\n        _react2.default.createElement(\n            'h5',\n            null,\n            props.title\n        ),\n        _react2.default.createElement('hr', null),\n        data && data.getVideos && data.getVideos.map(function (val) {\n            return _react2.default.createElement(\n                'div',\n                { key: val._id, className: 'video-item' },\n                _react2.default.createElement(\n                    'a',\n                    { href: \"/video/\" + val._id },\n                    _react2.default.createElement('img', { src: process.env.REACT_APP_API_BASE_URL + \"/static/\" + val.thumbnail, alt: val.title, width: '600', height: '400' })\n                ),\n                _react2.default.createElement(\n                    'h5',\n                    null,\n                    val.title\n                ),\n                _react2.default.createElement(\n                    'p',\n                    null,\n                    val.discription\n                ),\n                props.title === \"My videos\" && _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'button', className: 'btn btn-primary' },\n                        'Edit'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'button', className: 'btn btn-danger' },\n                        'Delete'\n                    )\n                )\n            );\n        })\n    );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/VideosList/index.js?");

/***/ }),

/***/ "./src/components/common/FormInput/index.js":
/*!**************************************************!*\
  !*** ./src/components/common/FormInput/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction index(props) {\n  var inputElement = null;\n  switch (props.FormElement.input.type) {\n    case \"text\":\n    case \"email\":\n    case \"password\":\n      inputElement = _react2.default.createElement(\"input\", {\n        type: props.FormElement.input.type,\n        className: props.FormElement.input.className,\n        value: props.FormElement.input.value,\n        placeholder: props.FormElement.input.placeholder,\n        onChange: function onChange(e) {\n          return props.handleInputChange(e, props.FormElement.id);\n        }\n      });\n      break;\n    case \"file\":\n      inputElement = _react2.default.createElement(\"input\", {\n        type: props.FormElement.input.type,\n        className: props.FormElement.input.className,\n        placeholder: props.FormElement.input.placeholder,\n        onChange: function onChange(e) {\n          return props.handleInputChange(e, props.FormElement.id);\n        }\n      });\n      break;\n    case \"textArea\":\n      inputElement = _react2.default.createElement(\n        \"textarea\",\n        {\n          className: props.FormElement.input.className,\n          placeholder: props.FormElement.input.placeholder,\n          onChange: function onChange(e) {\n            return props.handleInputChange(e, props.FormElement.id);\n          }\n        },\n        props.FormElement.input.value\n      );\n      break;\n    case \"select\":\n      inputElement = _react2.default.createElement(\n        \"select\",\n        {\n          className: props.FormElement.input.className,\n          onChange: function onChange(e) {\n            return props.handleInputChange(e, props.FormElement.id);\n          }\n        },\n        _react2.default.createElement(\n          \"option\",\n          { value: \"\" },\n          props.FormElement.input.placeholder\n        ),\n        props.FormElement.options.map(function (value, i) {\n          return _react2.default.createElement(\n            \"option\",\n            { key: i, value: value },\n            value\n          );\n        })\n      );\n      break;\n    default:\n      inputElement = null;\n  }\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    props.FormElement.input.label ? _react2.default.createElement(\n      \"label\",\n      { className: \"col-form-label\" },\n      props.FormElement.input.label\n    ) : \"\",\n    inputElement,\n    props.FormElement.input.error ? _react2.default.createElement(\n      \"label\",\n      { id: \"\", className: \"error\", \"for\": \"validation-email\" },\n      \" \",\n      props.FormElement.input.error\n    ) : \"\"\n  );\n}\n\nexports.default = index;\n\n//# sourceURL=webpack:///./src/components/common/FormInput/index.js?");

/***/ }),

/***/ "./src/components/common/HeadComponent.js":
/*!************************************************!*\
  !*** ./src/components/common/HeadComponent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = HeadComponent;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction HeadComponent(props) {\n  var getTitle = function getTitle() {\n    switch (props.pathname) {\n      case \"/\":\n        return \"Home\";\n      case \"/signin\":\n        return \"Log in\";\n      case \"/signup\":\n        return \"Sign Up\";\n      case \"/add/video\":\n        return \"Add Video\";\n      case \"/my/videos\":\n        return \"My Videos\";\n      case \"/update/video\":\n        return \"Update Video\";\n      default:\n        return \"YouTube\";\n    }\n  };\n  var link = function link() {\n    switch (props.pathname) {\n      case \"/\":\n        return [{\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/bootstrap.min.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/style.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n        }];\n      case \"/my/videos\":\n        return [{\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/bootstrap.min.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/style.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n        }];\n      case \"/add/video\":\n        return [{\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/bootstrap.min.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/style.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n        }];\n      default:\n        return [{\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/bootstrap.min.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"/assets/style.css\"\n        }, {\n          rel: \"stylesheet\",\n          type: \"text/css\",\n          href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n        }];\n    }\n  };\n\n  return _react2.default.createElement(\n    _reactHelmet2.default,\n    { link: link() },\n    _react2.default.createElement(\n      \"title\",\n      null,\n      getTitle()\n    )\n  );\n}\n\n//# sourceURL=webpack:///./src/components/common/HeadComponent.js?");

/***/ }),

/***/ "./src/components/common/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/common/NavBar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _query = __webpack_require__(/*! ../../graphQL/query */ \"./src/graphQL/query.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction NavBar(props) {\n  var _useLazyQuery = (0, _client.useLazyQuery)(_query.searchVideos),\n      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),\n      getSearchVideo = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data;\n\n  console.log(\"pppppppp\", data);\n\n  var _useState = (0, _react.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var timeOut = (0, _react.useRef)();\n  var handleInputChange = function handleInputChange(e) {\n    setText(e.target.value);\n    clearTimeout(timeOut.current);\n    timeOut.current = setTimeout(function () {\n      getSearchVideo({ variables: { title: e.target.value } });\n    }, 500);\n  };\n  var handleLogOut = function handleLogOut(e) {\n    e.preventDefault();\n    sessionStorage.setItem(\"token\", \"\");\n    window.location.href = \"/\";\n  };\n\n  return _react2.default.createElement(\n    \"nav\",\n    null,\n    _react2.default.createElement(\n      \"a\",\n      { className: \"logo\", href: \"/\" },\n      \"YouTube\"\n    ),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"search-bar\" },\n      _react2.default.createElement(\"input\", { type: \"text\", onChange: handleInputChange, value: text, placeholder: \"Search..\", name: \"search\" }),\n      _react2.default.createElement(\"i\", { className: \"fa fa-search\" }),\n      data && data.searchVideos && _react2.default.createElement(\n        \"div\",\n        { className: \"sug\" },\n        _react2.default.createElement(\n          \"ul\",\n          null,\n          data.searchVideos.map(function (val) {\n            return _react2.default.createElement(\n              \"li\",\n              { key: val._id },\n              _react2.default.createElement(\n                \"a\",\n                { href: \"/video/\" + val._id },\n                val.title\n              )\n            );\n          })\n        )\n      )\n    ),\n    !props.login ? _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      _react2.default.createElement(\n        \"a\",\n        { className: \"split\", href: \"/signin\" },\n        \"Sign In\"\n      ),\n      _react2.default.createElement(\n        \"a\",\n        { className: \"split\", href: \"/signup\" },\n        \"Sign Up\"\n      )\n    ) : _react2.default.createElement(\n      \"a\",\n      { className: \"split\", href: \"#\", onClick: handleLogOut },\n      \"Log Out\"\n    )\n  );\n}\n\nexports.default = NavBar;\n\n//# sourceURL=webpack:///./src/components/common/NavBar.js?");

/***/ }),

/***/ "./src/components/common/SideNav.js":
/*!******************************************!*\
  !*** ./src/components/common/SideNav.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction SideNav(props) {\n\n  return _react2.default.createElement(\n    \"aside\",\n    { className: \"sidenav\" },\n    props.login && _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      _react2.default.createElement(\n        \"a\",\n        { href: \"/add/video\" },\n        \"Add Video\"\n      ),\n      _react2.default.createElement(\n        \"a\",\n        { href: \"/my/videos\" },\n        \"My Videos\"\n      )\n    )\n  );\n}\n\nexports.default = SideNav;\n\n//# sourceURL=webpack:///./src/components/common/SideNav.js?");

/***/ }),

/***/ "./src/components/common/Validation/index.js":
/*!***************************************************!*\
  !*** ./src/components/common/Validation/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Validate = exports.Validate = {\n  isRequired: function isRequired(value, data) {\n    if (value && value != \"\") return \"\";else return data.message;\n  },\n  isEmail: function isEmail(value, data) {\n    var emailText = value;\n    var pattern = /^[a-zA-Z0-9\\-_]+(\\.[a-zA-Z0-9\\-_]+)*@[a-z0-9]+(\\-[a-z0-9]+)*(\\.[a-z0-9]+(\\-[a-z0-9]+)*)*\\.[a-z]{2,4}$/;\n    if (pattern.test(emailText)) {\n      return \"\";\n    } else {\n      return data.message;\n    }\n  }\n};\n\nvar isValid = exports.isValid = function isValid(value, validations) {\n  var error = \"\";\n  if (validations) validations.forEach(function (val) {\n    for (var property in val) {\n      if (property != \"message\" && val[property] && error == \"\") {\n        var flag = validation[property](value);\n        error = flag ? \"\" : val.message;\n      }\n    }\n  });\n  return error;\n};\n\n//# sourceURL=webpack:///./src/components/common/Validation/index.js?");

/***/ }),

/***/ "./src/graphQL/mutations.js":
/*!**********************************!*\
  !*** ./src/graphQL/mutations.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deleteVideo = exports.VideoAddMutation = exports.SignInMutation = exports.SignUpMutation = undefined;\n\nvar _templateObject = _taggedTemplateLiteral(['\\nmutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\\n  SignUp(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\\n    email\\n    token\\n  }\\n}\\n'], ['\\nmutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\\n  SignUp(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\\n    email\\n    token\\n  }\\n}\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\nmutation Signin($email: String!, $password: String!) {\\n  Signin(email: $email, password: $password) {\\n    token\\n    email\\n  }\\n}\\n'], ['\\nmutation Signin($email: String!, $password: String!) {\\n  Signin(email: $email, password: $password) {\\n    token\\n    email\\n  }\\n}\\n']),\n    _templateObject3 = _taggedTemplateLiteral(['\\nmutation addVideo($title: String!, $discription: String!, $thumbnail: String!, $fileName: String!) {\\n  addVideo(title: $title, discription: $discription, thumbnail: $thumbnail, fileName: $fileName) {\\n    title\\n    discription\\n  }\\n}\\n'], ['\\nmutation addVideo($title: String!, $discription: String!, $thumbnail: String!, $fileName: String!) {\\n  addVideo(title: $title, discription: $discription, thumbnail: $thumbnail, fileName: $fileName) {\\n    title\\n    discription\\n  }\\n}\\n']),\n    _templateObject4 = _taggedTemplateLiteral(['\\nmutation deleteVideo($id: ID!) {\\n  deleteVideo(_id: $id) {\\n    _id\\n  }\\n}\\n'], ['\\nmutation deleteVideo($id: ID!) {\\n  deleteVideo(_id: $id) {\\n    _id\\n  }\\n}\\n']);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar SignUpMutation = exports.SignUpMutation = (0, _client.gql)(_templateObject);\nvar SignInMutation = exports.SignInMutation = (0, _client.gql)(_templateObject2);\n\nvar VideoAddMutation = exports.VideoAddMutation = (0, _client.gql)(_templateObject3);\n\nvar deleteVideo = exports.deleteVideo = (0, _client.gql)(_templateObject4);\n\n//# sourceURL=webpack:///./src/graphQL/mutations.js?");

/***/ }),

/***/ "./src/graphQL/query.js":
/*!******************************!*\
  !*** ./src/graphQL/query.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.searchVideos = exports.getVideo = exports.userVideos = exports.getVideos = undefined;\n\nvar _templateObject = _taggedTemplateLiteral(['\\nquery{\\n    getVideos{\\n      _id\\n      title\\n      discription\\n      thumbnail \\n      fileName\\n    }\\n  }\\n'], ['\\nquery{\\n    getVideos{\\n      _id\\n      title\\n      discription\\n      thumbnail \\n      fileName\\n    }\\n  }\\n']),\n    _templateObject2 = _taggedTemplateLiteral(['\\nquery{\\n    user{\\n      email\\n      video{\\n        _id\\n        title\\n        discription\\n        thumbnail \\n        fileName\\n      }\\n    }\\n  }\\n'], ['\\nquery{\\n    user{\\n      email\\n      video{\\n        _id\\n        title\\n        discription\\n        thumbnail \\n        fileName\\n      }\\n    }\\n  }\\n']),\n    _templateObject3 = _taggedTemplateLiteral(['\\nquery getVideo($id: ID!) {\\n    getVideo(_id: $id) {\\n        _id\\n        title\\n        discription\\n        thumbnail \\n        fileName\\n  }\\n}\\n'], ['\\nquery getVideo($id: ID!) {\\n    getVideo(_id: $id) {\\n        _id\\n        title\\n        discription\\n        thumbnail \\n        fileName\\n  }\\n}\\n']),\n    _templateObject4 = _taggedTemplateLiteral(['\\nquery searchVideos($title: String!) {\\n    searchVideos(title: $title) {\\n        _id\\n        title\\n  }\\n}\\n'], ['\\nquery searchVideos($title: String!) {\\n    searchVideos(title: $title) {\\n        _id\\n        title\\n  }\\n}\\n']);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar getVideos = exports.getVideos = (0, _client.gql)(_templateObject);\n\nvar userVideos = exports.userVideos = (0, _client.gql)(_templateObject2);\n\nvar getVideo = exports.getVideo = (0, _client.gql)(_templateObject3);\n\nvar searchVideos = exports.searchVideos = (0, _client.gql)(_templateObject4);\n\n//# sourceURL=webpack:///./src/graphQL/query.js?");

/***/ }),

/***/ "./src/pages/AddVideoPage.js":
/*!***********************************!*\
  !*** ./src/pages/AddVideoPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _SideNav = __webpack_require__(/*! ../components/common/SideNav */ \"./src/components/common/SideNav.js\");\n\nvar _SideNav2 = _interopRequireDefault(_SideNav);\n\nvar _AddVideo = __webpack_require__(/*! ../components/AddVideo */ \"./src/components/AddVideo/index.js\");\n\nvar _AddVideo2 = _interopRequireDefault(_AddVideo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AddVideoPage(props) {\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      login = _useState2[0],\n      setLogin = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    if (window.sessionStorage.getItem('token')) {\n      setLogin(true);\n    }\n  }, []);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, { login: login }),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"main\" },\n      _react2.default.createElement(_SideNav2.default, { login: login }),\n      _react2.default.createElement(_AddVideo2.default, null)\n    )\n  );\n}\n\nexports.default = { element: _react2.default.createElement(AddVideoPage, null) };\n\n//# sourceURL=webpack:///./src/pages/AddVideoPage.js?");

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _SideNav = __webpack_require__(/*! ../components/common/SideNav */ \"./src/components/common/SideNav.js\");\n\nvar _SideNav2 = _interopRequireDefault(_SideNav);\n\nvar _VideosList = __webpack_require__(/*! ../components/VideosList */ \"./src/components/VideosList/index.js\");\n\nvar _VideosList2 = _interopRequireDefault(_VideosList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction HomePage(props) {\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      login = _useState2[0],\n      setLogin = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    if (window.sessionStorage.getItem('token')) {\n      setLogin(true);\n    }\n  }, []);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, { login: login }),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"main\" },\n      _react2.default.createElement(_SideNav2.default, { login: login }),\n      _react2.default.createElement(_VideosList2.default, { title: \"Latest videos\" })\n    )\n  );\n}\n\nexports.default = { element: _react2.default.createElement(HomePage, null) };\n\n//# sourceURL=webpack:///./src/pages/HomePage.js?");

/***/ }),

/***/ "./src/pages/MyVideosPage.js":
/*!***********************************!*\
  !*** ./src/pages/MyVideosPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _SideNav = __webpack_require__(/*! ../components/common/SideNav */ \"./src/components/common/SideNav.js\");\n\nvar _SideNav2 = _interopRequireDefault(_SideNav);\n\nvar _MyVideos = __webpack_require__(/*! ../components/MyVideos */ \"./src/components/MyVideos/index.js\");\n\nvar _MyVideos2 = _interopRequireDefault(_MyVideos);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction MyVideosPage(props) {\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      login = _useState2[0],\n      setLogin = _useState2[1];\n\n  _react2.default.useEffect(function () {\n    if (window.sessionStorage.getItem('token')) {\n      setLogin(true);\n    }\n  }, []);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, { login: login }),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"main\" },\n      _react2.default.createElement(_SideNav2.default, { login: login }),\n      _react2.default.createElement(_MyVideos2.default, { title: \"My videos\" })\n    )\n  );\n}\n\nexports.default = { element: _react2.default.createElement(MyVideosPage, null) };\n\n//# sourceURL=webpack:///./src/pages/MyVideosPage.js?");

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction NotFound(props) {\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(\n      \"div\",\n      { className: \"wrapper\" },\n      _react2.default.createElement(\n        \"h1\",\n        null,\n        \"Page NotFound\"\n      )\n    )\n  );\n}\n\nexports.default = { element: _react2.default.createElement(NotFound, null) };\n\n//# sourceURL=webpack:///./src/pages/NotFound.js?");

/***/ }),

/***/ "./src/pages/SignInPage.js":
/*!*********************************!*\
  !*** ./src/pages/SignInPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _SignIn = __webpack_require__(/*! ../components/SignIn */ \"./src/components/SignIn/index.js\");\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction SignInPage(props) {\n  (0, _react.useEffect)(function () {\n    if (window.sessionStorage.getItem('token')) {\n      window.location.href = \"/\";\n    }\n  }, []);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, null),\n    _react2.default.createElement(_SignIn2.default, null)\n  );\n}\n\nexports.default = { element: _react2.default.createElement(SignInPage, null) };\n\n//# sourceURL=webpack:///./src/pages/SignInPage.js?");

/***/ }),

/***/ "./src/pages/SignUpPage.js":
/*!*********************************!*\
  !*** ./src/pages/SignUpPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _SignUp = __webpack_require__(/*! ../components/SignUp */ \"./src/components/SignUp/index.js\");\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction SignUpPage(props) {\n\n  (0, _react.useEffect)(function () {\n    if (window.sessionStorage.getItem('token')) {\n      window.location.href = \"/\";\n    }\n  }, []);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, null),\n    _react2.default.createElement(_SignUp2.default, null)\n  );\n}\n\nexports.default = { element: _react2.default.createElement(SignUpPage, null) };\n\n//# sourceURL=webpack:///./src/pages/SignUpPage.js?");

/***/ }),

/***/ "./src/pages/UpdateVideoPage.js":
/*!**************************************!*\
  !*** ./src/pages/UpdateVideoPage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _SideNav = __webpack_require__(/*! ../components/common/SideNav */ \"./src/components/common/SideNav.js\");\n\nvar _SideNav2 = _interopRequireDefault(_SideNav);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction UpdateVideoPage(props) {\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      login = _useState2[0],\n      setLogin = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    if (window.sessionStorage.getItem('token')) {\n      setLogin(true);\n    }\n  }, []);\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, { login: login }),\n    _react2.default.createElement(_SideNav2.default, { login: login })\n  );\n}\n\nexports.default = { element: _react2.default.createElement(UpdateVideoPage, null) };\n\n//# sourceURL=webpack:///./src/pages/UpdateVideoPage.js?");

/***/ }),

/***/ "./src/pages/VideoPage.js":
/*!********************************!*\
  !*** ./src/pages/VideoPage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _HeadComponent = __webpack_require__(/*! ../components/common/HeadComponent.js */ \"./src/components/common/HeadComponent.js\");\n\nvar _HeadComponent2 = _interopRequireDefault(_HeadComponent);\n\nvar _NavBar = __webpack_require__(/*! ../components/common/NavBar */ \"./src/components/common/NavBar.js\");\n\nvar _NavBar2 = _interopRequireDefault(_NavBar);\n\nvar _VideoPlayArea = __webpack_require__(/*! ../components/VideoPlayArea */ \"./src/components/VideoPlayArea/index.js\");\n\nvar _VideoPlayArea2 = _interopRequireDefault(_VideoPlayArea);\n\nvar _CommentSideBar = __webpack_require__(/*! ../components/CommentSideBar */ \"./src/components/CommentSideBar/index.js\");\n\nvar _CommentSideBar2 = _interopRequireDefault(_CommentSideBar);\n\nvar _client = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nvar _query = __webpack_require__(/*! ../graphQL/query */ \"./src/graphQL/query.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction VideoPage(props) {\n  var VideoId = (0, _reactRouterDom.useParams)();\n\n  var _useQuery = (0, _client.useQuery)(_query.getVideo, {\n    variables: { id: VideoId ? VideoId.id : \"\" }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      login = _useState2[0],\n      setLogin = _useState2[1];\n\n  (0, _react.useEffect)(function () {\n    if (window.sessionStorage.getItem('token')) {\n      setLogin(true);\n    }\n  }, []);\n\n  return _react2.default.createElement(\n    _react2.default.Fragment,\n    null,\n    _react2.default.createElement(_HeadComponent2.default, props.location),\n    _react2.default.createElement(_NavBar2.default, { login: login }),\n    data && data.getVideo && _react2.default.createElement(\n      'div',\n      { className: 'play-main' },\n      _react2.default.createElement(_VideoPlayArea2.default, data.getVideo),\n      _react2.default.createElement(_CommentSideBar2.default, { login: login })\n    ),\n    error && _react2.default.createElement(\n      'div',\n      { className: 'play-main' },\n      _react2.default.createElement(\n        'h4',\n        null,\n        'No Data Found'\n      )\n    )\n  );\n}\n\nexports.default = { element: _react2.default.createElement(VideoPage, null) };\n\n//# sourceURL=webpack:///./src/pages/VideoPage.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _VideoPage = __webpack_require__(/*! ./pages/VideoPage */ \"./src/pages/VideoPage.js\");\n\nvar _VideoPage2 = _interopRequireDefault(_VideoPage);\n\nvar _SignInPage = __webpack_require__(/*! ./pages/SignInPage */ \"./src/pages/SignInPage.js\");\n\nvar _SignInPage2 = _interopRequireDefault(_SignInPage);\n\nvar _SignUpPage = __webpack_require__(/*! ./pages/SignUpPage */ \"./src/pages/SignUpPage.js\");\n\nvar _SignUpPage2 = _interopRequireDefault(_SignUpPage);\n\nvar _AddVideoPage = __webpack_require__(/*! ./pages/AddVideoPage */ \"./src/pages/AddVideoPage.js\");\n\nvar _AddVideoPage2 = _interopRequireDefault(_AddVideoPage);\n\nvar _MyVideosPage = __webpack_require__(/*! ./pages/MyVideosPage */ \"./src/pages/MyVideosPage.js\");\n\nvar _MyVideosPage2 = _interopRequireDefault(_MyVideosPage);\n\nvar _UpdateVideoPage = __webpack_require__(/*! ./pages/UpdateVideoPage */ \"./src/pages/UpdateVideoPage.js\");\n\nvar _UpdateVideoPage2 = _interopRequireDefault(_UpdateVideoPage);\n\nvar _NotFound = __webpack_require__(/*! ./pages/NotFound */ \"./src/pages/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [_extends({}, _HomePage2.default, {\n  path: \"/\",\n  exact: true\n}), _extends({}, _VideoPage2.default, {\n  path: \"/video/:id\",\n  exact: true\n}), _extends({}, _SignInPage2.default, {\n  path: \"/signin\",\n  exact: true\n}), _extends({}, _SignUpPage2.default, {\n  path: \"/signup\",\n  exact: true\n}), _extends({}, _AddVideoPage2.default, {\n  path: \"/add/video\",\n  exact: true\n}), _extends({}, _MyVideosPage2.default, {\n  path: \"/my/videos\",\n  exact: true\n}), _extends({}, _UpdateVideoPage2.default, {\n  path: \"/update/video\",\n  exact: true\n}), _extends({}, _NotFound2.default, {\n  path: \"*\",\n  exact: true\n})];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");\n\n//# sourceURL=webpack:///external_%22@apollo/client%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cross-fetch\");\n\n//# sourceURL=webpack:///external_%22cross-fetch%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/server%22?");

/***/ })

/******/ });