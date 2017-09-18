let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');

let ExtractTextPlugin = require("extract-text-webpack-plugin");

let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject:   'body',
});

let SASSWebpackPluginConfig = new ExtractTextPlugin({
    filename:  "main.css",
    allChunks: true
});

module.exports = {
    devServer: {inline: true},
    entry:     [
        './app/index.js'
    ],
    output:    {
        library:  'Example', // window.Example
        path:     __dirname + '/dist',
        filename: "index_bundle.js"
    },
    resolve:   {
        extensions: ['*', '.js', '.jsx', '.css', '.scss']
        //extensions: ['*', '.js', '.jsx']
    },
    module:    {
        rules: [
            {
                test: [
                    /\.js$/,
                    /\.jsx?$/
                ],

                exclude: /node_modules/,
                use:     "babel-loader"
            },
            {
                test: /\.json$/,
                use:  'json-loader'
            },
            /*
             * Load inline styles
             * */

            //{
            //    test:    [
            //        /\.scss$/
            //    ],
            //
            //    exclude: /node_modules/,
            //    loader:  "style-loader!css-loader!autoprefixer-loader!sass-loader"
            //},

            //{
            //    test: /\.css$/,
            //    exclude: /node_modules/,
            //    use: ExtractTextPlugin.extract({
            //        fallback: 'style-loader',
            //        loader: 'css-loader'
            //    }),
            //},

            /*
             * Inject style sheet
             * */

            {
                test: [
                    /\.scss$/
                ],
                exclude:
                      /node_modules/,
                use:
                      ExtractTextPlugin.extract({
                          fallback: "style-loader",
                          //use: ['css-loader', 'sass-loader']
                          //use: ['style-loader','css-loader','autoprefixer-loader','sass-loader']
                          //use:  "style-loader!css-loader!autoprefixer-loader!sass-loader"
                          //use:  "css-loader!autoprefixer-loader!sass-loader"
                          use:      ['css-loader', 'autoprefixer-loader', 'sass-loader']
                      })

            }

        ]
    },
    devtool:   '#inline-source-map',
    //devtool:   'source-map',
    plugins:
               [HTMLWebpackPluginConfig, SASSWebpackPluginConfig]
    //plugins:   [HTMLWebpackPluginConfig]
}
;