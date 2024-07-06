import { MouseEvent } from "react";

const ListGroup = () => {
  const cities = ["Lagos", "Benin", "Port Harcourt", "Zaria"];

  const HandleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          // key=city serves as a unique identifier for react
          <li className="list-group-item" key={index} onClick={HandleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
