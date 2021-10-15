export const resolver = <T = unknown, U = unknown>(
  promise: Promise<T>
): Promise<[T] | [null, U]> =>
  promise.then(
    (response) => [response],
    (error) => [null, error]
);
