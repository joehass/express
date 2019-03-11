//一个常见的webpack配置文件
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports={
    entry: __dirname + "/app/index.jsx",//唯一的入口文件
    output: {
        path:__dirname + "/build",//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },//编译输出路径
    resolve: {
        extensions: [' ','.js','.jsx']
    },//引用不用再加入后缀名
    devtool: "eval-source-map",//在一个单独的文件中产生一个完整且功能完全的文件，便于调试
    devServer: {
        //使用代理
        //凡是/api开头的http请求，都会被代理到localhost:3000
        //koa代码在./mock目录中，启动命令为npm run mock
        proxy:{
            '_/api_':{
                target:'http://localhost:3000',
                secure:false
            }
        },
        //historyApiFallback:true,//不跳转，即所有的跳转都将指向index.html
        inline:true,//实时刷新
        hot:true,//使用热加载插件
        //colors:true//终端中输出结果为彩色
    },
    module: {
        rules:[{
            test: /(\.jsx|\.js)/,  //表示匹配规则，是一个正则表达式
            use:{   　　　　 //表示针对匹配文件将使用处理的loader
                loader: "babel-loader",
                options: {
                    presets: [
                        "env", "react"
                    ]
                }
            }
        },
            {
                test: /(\.less)/,
                use:{
                    loader: "style!css!postcss!less"
                }
            },
            {
                test: /(\.css)/,
                use:{
                    loader: "style!css!postcss"
                }
            }
        ]
    },
    plugins: [
        //html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),

    ],
    stats: { children: false },
    mode: 'development' // 设置mode
};

