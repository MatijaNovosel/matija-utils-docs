# groupBy

Groups values in an array of objects by the provided property.

```typescript
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
groupBy(x, "company");
```

Result:

```json
{
  "Google": [
    {
      "name": "Ivan",
      "company": "Google"
    },
    {
      "name": "Kenny",
      "company": "Google"
    }
  ],
  "Amazon": [
    {
      "name": "Joseph",
      "company": "Amazon"
    }
  ]
}
```
