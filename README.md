# npm-Ocar

Ocar is a minimal Node Package to get the package information on the OCA service (Argentinian Courrier)

  - He can search packages only by your track number, Giving you the information of each package.
  - Magic.

### Installation

You need Gulp installed globally:

```sh
$ npm install ocar --save
```
### Usage
```sh
var Ocar = require('ocar');
Ocar(your_track_id , type);
```
Where 'type' can be "dni", "cartas", "partidas", "paquetes"

### Contributing

Want to contribute? Great!
Bug reports and pull requests are welcome on GitHub at
https://github.com/marcosocon/npm-ocar.

### Version
1.1.0

License
----

MIT
