const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		app: path.join(__dirname, './src/index.jsx'),
		'1': ['react', 'react-dom'],
		'2': ['react-router', 'react-router-dom'],
		'3': ['./src/jqwidgets-react/react_jqxbargauge.js', './src/jqwidgets-react/react_jqxbulletchart.js', './src/jqwidgets-react/react_jqxbuttongroup.js', './src/jqwidgets-react/react_jqxbuttons.js', './src/jqwidgets-react/react_jqxcalendar.js', './src/jqwidgets-react/react_jqxchart.js', './src/jqwidgets-react/react_jqxcheckbox.js', './src/jqwidgets-react/react_jqxcolorpicker.js', './src/jqwidgets-react/react_jqxcombobox.js', './src/jqwidgets-react/react_jqxcomplexinput.js', './src/jqwidgets-react/react_jqxdatatable.js', './src/jqwidgets-react/react_jqxdatetimeinput.js', './src/jqwidgets-react/react_jqxdocking.js', './src/jqwidgets-react/react_jqxdockinglayout.js', './src/jqwidgets-react/react_jqxdockpanel.js', './src/jqwidgets-react/react_jqxdragdrop.js', './src/jqwidgets-react/react_jqxdraw.js', './src/jqwidgets-react/react_jqxdropdownbutton.js', './src/jqwidgets-react/react_jqxdropdownlist.js', './src/jqwidgets-react/react_jqxeditor.js', './src/jqwidgets-react/react_jqxexpander.js', './src/jqwidgets-react/react_jqxfileupload.js', './src/jqwidgets-react/react_jqxformattedinput.js', './src/jqwidgets-react/react_jqxgauge.js', './src/jqwidgets-react/react_jqxgrid.js', './src/jqwidgets-react/react_jqxinput.js', './src/jqwidgets-react/react_jqxkanban.js', './src/jqwidgets-react/react_jqxknob.js', './src/jqwidgets-react/react_jqxlayout.js', './src/jqwidgets-react/react_jqxlineargauge.js', './src/jqwidgets-react/react_jqxlinkbutton.js', './src/jqwidgets-react/react_jqxlistbox.js', './src/jqwidgets-react/react_jqxlistmenu.js', './src/jqwidgets-react/react_jqxloader.js', './src/jqwidgets-react/react_jqxmaskedinput.js', './src/jqwidgets-react/react_jqxmenu.js', './src/jqwidgets-react/react_jqxnavbar.js', './src/jqwidgets-react/react_jqxnavigationbar.js', './src/jqwidgets-react/react_jqxnotification.js', './src/jqwidgets-react/react_jqxnumberinput.js', './src/jqwidgets-react/react_jqxpanel.js', './src/jqwidgets-react/react_jqxpasswordinput.js', './src/jqwidgets-react/react_jqxpopover.js', './src/jqwidgets-react/react_jqxprogressbar.js', './src/jqwidgets-react/react_jqxradiobutton.js', './src/jqwidgets-react/react_jqxrangeselector.js', './src/jqwidgets-react/react_jqxrating.js', './src/jqwidgets-react/react_jqxrepeatbutton.js', './src/jqwidgets-react/react_jqxresponsivepanel.js', './src/jqwidgets-react/react_jqxribbon.js', './src/jqwidgets-react/react_jqxscheduler.js', './src/jqwidgets-react/react_jqxscrollbar.js', './src/jqwidgets-react/react_jqxscrollview.js', './src/jqwidgets-react/react_jqxslider.js', './src/jqwidgets-react/react_jqxsortable.js', './src/jqwidgets-react/react_jqxsplitter.js', './src/jqwidgets-react/react_jqxswitchbutton.js', './src/jqwidgets-react/react_jqxtabs.js', './src/jqwidgets-react/react_jqxtagcloud.js', './src/jqwidgets-react/react_jqxtextarea.js', './src/jqwidgets-react/react_jqxtogglebutton.js', './src/jqwidgets-react/react_jqxtoolbar.js', './src/jqwidgets-react/react_jqxtooltip.js', './src/jqwidgets-react/react_jqxtreegrid.js', './src/jqwidgets-react/react_jqxtree.js', './src/jqwidgets-react/react_jqxtreemap.js', './src/jqwidgets-react/react_jqxvalidator.js', './src/jqwidgets-react/react_jqxwindow.js' ],
	},
	output: {
		filename: 'bundle/[name].[hash].bundle.js',
		chunkFilename: 'bundle/[name].[chunkhash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist/bundle']),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template: 'index.html',
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: '1',
			chunks: ['1'],
			minChunks: Infinity,
			filename: 'bundle/1.bundle.js',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: '2',
			chunks: ['2'],
			minChunks: Infinity,
			filename: 'bundle/2.bundle.js',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: '3',
			chunks: ['3'],
			minChunks: Infinity,
			filename: 'bundle/3.bundle.js',
		}),
		new UglifyJSPlugin({
			parallel: {
			  cache: true,
			  workers: 3
			}
		})
	],
	devtool: 'inline-source-map',
	devServer: {
     	contentBase: './dist',
     	inline: true,
     	hot: true,
   	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env','react']
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
	        },
		]
	},
	resolve: {
		alias: {
			'jqwidgets-react': path.resolve(__dirname, 'src/jqwidgets-react/'),
			'components': path.resolve(__dirname, 'src/components/')
		}
	}
};