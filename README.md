# Fetching from an API

`useEffect` is typically used for side effects—hence the time. The most common side effect is fetching data from an API.

One way that we could do that would be as follows:

```js
useEffect(() => {
  fetch(toURL(searchTerm))
    .then(async (response) => {
      if (response.ok) {
        const { pokemon } = await response.json();
        return setPokemon(pokemon);
      } else {
        const { error } = await response.json();
        return setError(error);
      }
    })
    .catch((error) => setError(JSON.stringify(error)));
}, [searchTerm, setError, setPokemon]);
```

## With `useSWR`

Our friends at [Vercel](https://vercel.com) have a super cool library for making a lot of this easier called [`useSWR`](https://swr.vercel.app/docs/getting-started). SWR stands for `stale-while-revalidate`.

We do need to define a fetcher:

```js
const fetcher = (...args) =>
  fetch(...args).then(async (response) => {
    if (response.ok) {
      return response.json();
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  });
```

And then we can replace our `useEffect` with `useSWR`.

```js
const { data, error } = useSWR(toURL(searchTerm), fetcher);
const loading = !data && !error;
```
