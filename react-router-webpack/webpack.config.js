var path = require('path');
var webpack = require('webpack');  

module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'js/App.js')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: {presets:['es2015','react']} },
            // { test: /\.js?$/, exclude: /node_modules/, loader: 'react-hot' },
            // { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            // { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};