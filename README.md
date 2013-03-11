[![build status](https://api.travis-ci.org/repositories/noahtkeller/express-tgz.png)](https://api.travis-ci.org/repositories/noahtkeller/express-tgz.png)

# express-tgz

    express-tgz allows you to do `res.tgz(directory, filename)` in [express](http://expressjs.com/), without creating any intermediary files on disk, and in 100% pure node.

```js
var app = require('express')();
var tgz = require('express-tgz');

app.get('/', function(req, res) {
  res.tgz('/some/directory', 'some_dir.tar.gz');
});

app.listen(3000);
```

## Installation

    $ npm install express-tgz

## Credits

    Borrows heavily from thrackle's [express-zip](https://github.com/thrackle/express-zip).

## License

    The MIT License

    Copyright (c) 2012 Noah Keller <noahtkeller@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.