const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.(js)$/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", ["@babel/preset-react", {
                        "runtime": "automatic"
                     }]]
                }
            }},
            { test: /\.(css)$/, use: ['style-loader', 'css-loader']}
        ]
    }
}