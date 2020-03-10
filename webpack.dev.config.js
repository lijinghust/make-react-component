const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require("webpack-api-mocker");

module.exports = {
    mode: 'development',
    entry: './demo/test.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                ['import', { libraryName: 'antd', style: 'css' }, 'antd'],  // `style: true` 会加载 less 文件  
                                ['import', {
                                    libraryName: 'ant-design-pro',
                                    libraryDirectory: 'lib',
                                    style: true,
                                    camel2DashComponentName: false,
                                }, 'ant-design-pro']
                            ],
                            // This is a feature of `babel-loader` for webpack (not Babel itself).
                            // It enables caching results in ./node_modules/.cache/babel-loader/
                            // directory for faster rebuilds.
                            cacheDirectory: true,
                        },
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                exclude : /^node_modules$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            // modules:{
                            //     localIdentName:'[path][name]__[local]__[hash:base64:5]',
                            // },
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         ident: 'postcss',
                    //         plugins: (loader) => [
                    //             require('postcss-import')({ root: loader.resourcePath }),
                    //             require('postcss-cssnext')(),
                    //             require('autoprefixer')(),
                    //             require('cssnano')()
                    //         ]
                    //     }
                    // },
                    {
                        loader: 'less-loader',  // 
                        options: {
                            importLoaders: 1,
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3001,
        before(app) {
            apiMocker(app, path.resolve('./mock/api.js'), {
                // proxy: {
                //     '/amap/*': 'https://api.github.com/',
                // },
                changeHost: true,
            })
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
};
