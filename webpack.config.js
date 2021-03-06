const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
 
module.exports = {
    mode:'production', // production 설정 파일에서는 'production'
   
    entry: './src/index.js',
    
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }, 
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        })
    ]
};