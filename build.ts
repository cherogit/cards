import * as webpack from 'webpack'
import { resolve } from 'path'
import { create } from 'browser-sync'

const browser = create()

browser.init({ server: './dist' })

const compiler: webpack.Compiler = webpack({

    entry: './app/index.ts',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    mode: "development"

} as webpack.Configuration)

compiler.watch({}, (error, stats) => {

    browser.reload()

    console.log(stats.toString())

})