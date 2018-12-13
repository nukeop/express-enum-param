# express-enum-param
Middleware for ensuring that a request parameter can only assume certain values

## Installation

```shell
$ npm install --save express-enum-param
```
Requires `body-parser`.

## Usage
```javascript
import enumParam from 'express-enum-param';

let allowedAnimals = ['crocodile', 'heron', 'turtle'];

router.get('/', 
	enumParam('animal', allowedAnimals),
	(req, res) => {
    res.status(200).send();
});
```

The above code will return a 400 HTTP status code and a message informing the client that this parameter can only have values from a certain list if `animal` is anything else than `crocodile`, `heron`, or `turtle`.

## About
### License
Copyright © 2018, [nukeop](https://github.com/nukeop).
Released under the [Affero GPL 3.0 License](LICENSE).
