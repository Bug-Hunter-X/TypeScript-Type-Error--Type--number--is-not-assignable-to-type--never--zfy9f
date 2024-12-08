# TypeScript Type Error: Type 'number' is not assignable to type 'never'

This repository demonstrates a common TypeScript type error and its solution. The error occurs because of a limitation in TypeScript's type inference with exhaustive switch statements.  The compiler can't deduce that the function will always return a number despite the exhaustive `switch` statement, leading to a type error.