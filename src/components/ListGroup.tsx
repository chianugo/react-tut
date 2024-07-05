const ListGroup = () => {
  const cities = ["Lagos", "Benin", "Port Harcourt", "Zaria"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item">{city}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
