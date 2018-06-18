'use strict';

require('fs').createReadStream(process.argv[2])
        .on('data', chuck => process.stdout.write(chuck))
        .on('error', err => process.stderr.write(`ERROR => ${err} \n`));