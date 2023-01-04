# Getting started

Install `matija-utils` with your package manager of choice:

```bash
npm i matija-utils
yarn add matija-utils
```

Import the functions you need:

```typescript
import { range, groupBy } from "matija-utils";

for (const n of range(0, 5)) {
  console.log(n); // 0, 1, 2, 3, 4
}

const x = [
  {
    name: "Ivan",
    company: "Google"
  },
  {
    name: "Kenny",
    company: "Google"
  },
  {
    name: "Joseph",
    company: "Amazon"
  }
];

groupBy(x, "company"); // {"Google":[{"name":"Ivan","company":"Google"},{"name":"Kenny","company":"Google"}],"Amazon":[{"name":"Joseph","company":"Amazon"}]}
```

And that's all there is to it!
