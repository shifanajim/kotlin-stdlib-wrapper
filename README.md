# @mtm-solutions/kotlin-stdlib-types

## Installation

```sh
npm install --save @mtm-solutions/kotlin-stdlib-types
```

## Version and License

- Latest version: 1.1.2
- License: [MIT](https://mtm-solutions.github.io/kotlin-stdlib-types/LICENSE.md)
- [Changes](https://mtm-solutions.github.io/kotlin-stdlib-types/CHANGES.md)

## Summary

TypeScript definitions and function mapping for the Kotlin Standard Library.

This allows for the interoperation of TypeScript and Kotlin code.
Kotlin modules can be embedded into a TypeScript web application and then 
typesafely called from there.

We applied this technique in our company to be able to use Kotlin business 
logic modules in an Angular frontend.

## Function Mapping

Kotlin supports function overloads, but TypeScript / JavaScript do not.
When compiling down to JavaScript, the Kotlin compiler therefore appends
a unique signature to the original function name that is generated from 
the type signature of the function. For example, Kotlin

```Kotlin
List.get(index: Int): E
```

becomes

```TS
List.get_za3lpa$(index: number): E
```

in JavaScript / TypeScript.
This library does not only provide TypeScript type definitions for the Kotlin standard library,
but it also attaches delegator functions its class prototypes.
The respective functions can be called from the TypeScript side in a simple way:

```TS
List.get(index: number): E
```

## Usage Examples

```ts
import {kotlin} from "@mtm-solutions/kotlin-stdlib-types";

// Kotlin collections: create a list.
const elements = kotlin.collections.lisOf([1,2,3,4,5])

// Kotlin stream API: create list of squares.
const squares = elements.map(it => it*it)

// Kotlin stream API: prints 1, 4, 9, 16, 25.
squares.forEach(it => console.log(it))

// Native JS iterators: prints 1, 4, 9, 16, 25.
for (const it of squares) {
    console.log(it)
}

//Convert a Kotlin list into a JS array
const squaresArray = squares.toArray()
```

## See Also

- [API Documentation](https://mtm-solutions.github.io/kotlin-stdlib-types/docs/modules.html)
- [Project Homepage](https://mtm-solutions.github.io/kotlin-stdlib-types)
- [Project on GitHub](https://github.com/mtm-solutions/kotlin-stdlib-types)
- [Issues](https://github.com/mtm-solutions/kotlin-stdlib-types/issues)
