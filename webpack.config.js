module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },
    target: 'node',
    module:{
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            }
        ]
    }
};