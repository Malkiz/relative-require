# relative-require

req-config.json:
```javascript
{
	"MY_NODE_MODULES":"path/to/node/modules"
}
```

your application:
```javascript
var req = require('relative-require');
var module = req('module'); // module is located in 'path/to/node/modules/module'
```
