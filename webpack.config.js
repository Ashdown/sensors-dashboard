let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});

module.exports = {
    devtool: "eval",
    entry: [
        "webpack-dev-server/client?http://localhost:4000",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: "index.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        devFlagPlugin,
        new ExtractTextPlugin("index.css")
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["react-hot", "babel"],
                include: path.join(__dirname, "src"),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader?module!cssnext-loader")
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }

        ]
    },
    resolve: {
        extensions: ["", ".js", ".json"]
    }
};
