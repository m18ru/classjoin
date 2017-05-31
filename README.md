# classjoin

A bit simpler utility for conditionally joining classNames together.

It’s simplified version of `classnames` package. The original package is not
very lage in size, but it can be a bit simpler. Also, it has no ES-modules
verison, and TypeScript types should be installed separately. A lot of problems
for so small and simple package, so I write my own in TypeScript.

There is only two options:

* You can specify classes with conditions in object as first argument.  
  If the value of the key is falsy, class won't be included in the output.
* You can specify classes without conditions in array as second argument.

If you want to take classes from several objects, just combine them useing
`Object.assign` or spread operator and use resulting object.

## Installation

For bundlers and other NPM-based environments:

```
npm install --save-dev classjoin
```

## Usage

The first argument of the function is object and it’s required (because it’s the
main purpose of this package, if you want just to combine classes from array,
you can use `.join( ' ' )`).

You can use second argument to specify classes, that should be added to the
output. This argument is not required and can be omitted. Classes from this
array added to the output string before classes from the object (because they
always exists).

```jsx
function MyComponent( {active, disabled, items} )
{
	const className = classJoin(
		{
			active,
			disabled,
			multiple: ( items.length > 1 ),
		},
		[
			'my-component',
		]
	);
	
	return (
		<div className={className}></div>
	);
}

// <MyComponent active items={['one', 'two']} />
// → <div class="my-component active multiple"></div>
```

### UMD

UMD is default for this package, so just use something like:

```js
import classJoin from 'classjoin';
// or
const classJoin = require( 'classjoin' );
```

For using directly in browser (import with `<script>` tag in HTML-file):

* [Development version](https://unpkg.com/classjoin/es5/index.js)
* [Production version](https://unpkg.com/classjoin/es5/classjoin.min.js)

You can use AMD or `classJoin` global variable.

### ES2015 module systems

Package contain `module` property for use with ES2015 module bundlers
(like Rollup and Webpack 2).

### ES2015 code base

If you don’t want to use transplitted to ES5 code, you can use included
ES2015 version.

You can directly import this version:

```js
import classJoin from 'classjoin/es2015';
```

Or specify alias in Webpack config:

```js
{
	// …
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'classjoin': 'classjoin/es2015',
		},
	},
};
```

## License

[MIT](https://github.com/m18ru/classjoin/blob/master/LICENSE).
