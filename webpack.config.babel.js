let path = require('path')

let webpack = require('webpack')

let HtmlWebpackPlugin = require('html-webpack-plugin')

let ExtractTextPlugin = require('extract-text-webpack-plugin')

let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
})

let SASSWebpackPluginConfig = new ExtractTextPlugin({
    filename: 'main.css',
    allChunks: true,
})

//module.exports = {
const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './app/index.js',
    ],

    devServer: {
        hot: true,
        inline: true,
        //publicPath: '/user/michaelcockle.github.io/dist/',
        publicPath: '/dist',
        historyApiFallback: true,
        stats: {
            colors: true,
            reasons: false,
            chunks: false,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false,
        },
    },

    devtool: 'cheap-eval-source-map',
    //devtool: 'source-map',
    //devtool: 'inline-source-map',
    //devtool:   'eval-source-map',
    //devtool:   'cheap-module-eval-source-map',
    //devtool:   'eval',

    output: {
        library: 'Example', // window.Example
        path: __dirname + '/dist',
        filename: 'index_bundle.js',
        publicPath: '/dist',
        //publicPath: '/user/michaelcockle.github.io/dist/'
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.scss', '.json'],
    },

    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx?$/],

                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },

            /*
             * Load inline styles
             * */

            {
                test: [/\.scss$/],
                exclude: /node_modules/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    'sass-loader',
                ],
            },

            /*
             * Inject style sheet
             * */

            //{
            //    test: [/\.scss$/],
            //    exclude: /node_modules/,
            //    use: ExtractTextPlugin.extract({
            //        fallback: 'style-loader',
            //        use: ['css-loader', 'autoprefixer-loader', 'sass-loader'],
            //    }),
            //},
        ],
    },

    plugins: [
        HTMLWebpackPluginConfig,
        SASSWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
}

//console.log(process.env);
//console.log(process.env.NODE_ENV); // undefined

if (process.env.NODE_ENV === 'production') {
    config.entry = './app/index.js';
    config.devtool = false;
    config.plugins = [];
}

//if (process.env.NODE_ENV === 'development') {
//    config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
//}

module.exports = config;