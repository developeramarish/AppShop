const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (env) => {
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: { modules: false },
        context: __dirname,
        resolve: { 
            extensions: [ '.js', '.ts' ],
            plugins: [
                new TsConfigPathsPlugin(/* { configFileName, compiler } */)
            ]
        },
        output: {
            filename: '[name].js',
            publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                { test: /\.ts$/, use: isDevBuild ? ['awesome-typescript-loader?silent=true', 'angular2-template-loader', 'angular2-router-loader'] : '@ngtools/webpack' },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: [ 'to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize' ] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
                { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=25000' },
                { test: /\.scss$/, exclude: /node_modules/, loaders: [
                    'raw-loader', 
                    {
                        loader: 'sass-loader', 
                        options: {
                            includePaths: ["./wwwroot/manage/assets/scss"]
                        }
                    }
                ]}
            ]
        },
        plugins: [new CheckerPlugin()]
    };

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/manage/dist';
    const clientBundleConfig = merge(sharedConfig, {
        entry: { 'main-client': './ManageApp/boot.browser.ts' },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/manage/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.join(__dirname, 'ManageApp/app/app.browser.module#AppModule'),
                exclude: ['./**/*.server.ts']
            })
        ])
    });

    // Configuration for server-side (prerendering) bundle suitable for running in Node
    const serverBundleConfig = merge(sharedConfig, {
        resolve: { mainFields: ['main'] },
        entry: { 'main-server': './ManageApp/boot.server.ts' },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./ManageApp/dist/vendor-manifest.json'),
                sourceType: 'commonjs2',
                name: './vendor'
            })
        ].concat(isDevBuild ? [] : [
            // Plugins that apply in production builds only
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.join(__dirname, 'ManageApp/app/app.server.module#AppModule'),
                exclude: ['./**/*.browser.ts']
            })
        ]),
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, './ManageApp/dist')
        },
        target: 'node',
        devtool: 'inline-source-map'
    });

    return [clientBundleConfig, serverBundleConfig];
};
