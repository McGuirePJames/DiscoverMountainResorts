/// <binding />
const webpack = require('webpack');
const Pkg = require('./package.json');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//config = {
module.exports = {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        //new BundleAnalyzerPlugin()
        //new UglifyJsPlugin()
    ],
    entry: {
        Home: './src/Entry/HomeEntry',
        UserLogin: './src/Entry/UserLoginEntry',
        UserSignUp: './src/Entry/UserSignUpEntry',
        SkiResortsExplore: './src/Entry/SkiResortsExploreEntry',
        vendor: Object.keys(Pkg.dependencies)
    },

    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/wwwroot/scripts/js',
        jsonpFunction: 'webpackJsonp'
    },

    node: {
        fs: 'empty'
    },
    //
    // Enable sourcemaps for debugging webpack's output.
    //devtool: 'source-map',
    devtool: 'inline-source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json', ".jsx"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            {
                "test": /\.jsx?$/i,
                "loader": "awesome-typescript-loader",
                "exclude": /node_modules/,
                "query": {
                    "presets": ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            //{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
}

