var path =require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require('webpack')
module.exports = {
	entry:'./src/app.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'js/[name].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				include:/src/,
				exclude: /(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['latest']
					}
				}
			},
			{
				test:/\.css$/,
				use:['style-loader',{
					loader:'css-loader',
					options:{
						importLoaders:1
					}
				},'postcss-loader']
			},
			{
				test:/\.less$/,
				use:['style-loader','css-loader','postcss-loader','less-loader']
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.ejs$/,
				use:'ejs-loader'
			},
			{
				test:/\.(png|jpg|svg|gif)/i,
				use:[{
						loader:'url-loader',
						options:{
							limit:5000,
							name:'assets/[name]-[hash:5].[ext]'
						}
					},{
						loader:'image-webpack-loader',
						options:{
							bypassOnDebug:true
						}
					}
				]
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			title:'this is webpack',
			template:'index.html',
			filename:'index.html',
			inject:'body'
		}),
		new webpack.LoaderOptionsPlugin({
	      options: {
	        postcss: function(){
	          return [
	            require("autoprefixer")({
	              browsers: ['last 5 versions']
	            })
	          ]
	        }
	      }
	    })
	]
}