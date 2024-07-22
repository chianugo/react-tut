import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 3rem;
`;

const ListItem = styled.li`
  padding: 25px 0;
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((city, index) => (
          // key=city serves as a unique identifier for react
          <ListItem
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
