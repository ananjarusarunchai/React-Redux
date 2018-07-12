import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.read('src/index.html', 'utf8', (err, markup) => {
    if (err) {
        console.log(err);
        return;
    }

    const $ = cheerio.load(markup);

    $('head').prepend('<link rel="stylesheet" href="style.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('index.html written to /dist'.green);
    });
});