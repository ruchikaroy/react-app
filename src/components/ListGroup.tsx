function ListGroup() {
  let items = ["New York", "Delhi", "London", "Manchester"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Item not found</p>}
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
