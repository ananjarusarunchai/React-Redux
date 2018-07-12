import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack.');

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasError) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarning) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        return jsonStats.errors.map(error => console.log(error.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log('Your app has been compiled in production mode and written to /dist');

    return 0;

});