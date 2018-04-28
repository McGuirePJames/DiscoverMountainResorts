const webpack = require('webpack');
const Pkg = require('./package.json');

//config = {
module.exports = {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity  })
    ],
    entry: {
        Home: './src/Entry/HomeEntry',
        UserLogin: './src/Entry/UserLoginEntry',
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
    } //,

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //externals: {
    //    "react": 'React',
    //    "react-dom": 'ReactDOM'
    //}
    //};

    //module.exports = config;
}



//var path = require('path');
//var webpack = require('webpack');

//module.exports = {
//    entry: {
//        Home: './src/Entry/HomeEntry',

//        UserLogin: './src/Entry/UserLoginEntry'
//    },
//    output: {
//        publicPath: "/js/",
//        path: path.join(__dirname, '/wwwroot/js/'),
//        filename: '[name].build.js',
//        jsonpFunction: 'webpackJsonp'
//    },

//    resolve: {
//        // Add '.ts' and '.tsx' as resolvable extensions.
//        extensions: ['.ts', '.tsx', '.js', '.json', ".jsx"]
//    },

//    module: {
//        rules: [
//            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
//            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
//            {
//                "test": /\.jsx?$/i,
//                "loader": "awesome-typescript-loader",
//                "exclude": /node_modules/,
//                "query": {
//                    "presets": ["es2015", "react"]
//                }
//            },
//            {
//                test: /\.css$/,
//                use: ['style-loader', 'css-loader']
//            },

//            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//            //{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
//        ]
//    },
//    plugins: [
//        new webpack.optimize.UglifyJsPlugin({
//            minimize: true,
//            compress: {
//                warnings: false
//            }
//        })
//    ]
//};