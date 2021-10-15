# javascript-async-helper
JavaScript async helper to return result and error in same call without using try catch

```
export const resolver = <T = unknown, U = unknown>(
  promise: Promise<T>
): Promise<[T] | [null, U]> =>
  promise.then(
    (response) => [response],
    (error) => [null, error]
);
```


## Resolve promise:

```
const samplePromise = new Promise((resolve, reject) => {
  resolve("success")
  // reject("test error")
})

const [result, error] = await resolver(samplePromise)
```

## Resolve async function:
If you want to test rejection then uncomment the throwing error line
```
async function sampleAsyncFunc(data: string): Promise<String> {
  // throw new Error("test error")
  return "success"
}

const [result, error] = await resolver(sampleAsyncFunc("some data"))
```
