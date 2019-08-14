/**
 * @author Anton Kozlovskyi
 * @date 27 Apr 2019
 */
// import {addBabelPlugins, override, addLessLoader} from "customize-cra";

const addBabelPlugins = require('customize-cra');
const { override } = require('customize-cra');
const { addLessLoader } = require('customize-cra');
//
// module.exports = function override(config, env) {
//     config = rewireLess.withLoaderOptions({
//         javascriptEnabled: true
//     })(config, env);
//
//     return config;
// };

module.exports = override(addLessLoader({}));