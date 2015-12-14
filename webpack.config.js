/**
 * Created by lball on 12/14/15.
 */
module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}