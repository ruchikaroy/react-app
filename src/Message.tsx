export function Message() {
  const name = "Ruchika";
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}
