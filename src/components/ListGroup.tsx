const ListGroup = () => {
  const cities = ["Lagos", "Benin", "Port Harcourt", "Zaria"];

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          // key=city serves as a unique identifier for react
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
