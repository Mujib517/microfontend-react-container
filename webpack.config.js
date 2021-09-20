const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const port = 8082;
module.exports = {
    mode: 'development',
    output: {
        publicPath: `http://localhost:${port}/`,
    },
    devServer: {
        port: port,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app_shell',
            remotes: {
                users: 'users_app@http://localhost:8081/remoteEntry.js',
            },
            shared: {
                'react': {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: '17.0.2'
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: '17.0.2'
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};