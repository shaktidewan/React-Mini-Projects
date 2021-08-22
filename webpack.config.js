const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js', //journey start of webpack
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js','.jsx']//should be aware of some extension while importing e.g. index,pizza
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',// thrid party login: babel loader
                exclude: /node_modules/
            },
            //for css
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,//enable css module
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () =>[
                                autoprefixer({
                                    browsers:[
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            //for iamge
            { 
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'//kb
            }
        ]
    }
};