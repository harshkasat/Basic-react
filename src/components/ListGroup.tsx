import { Fragment } from "react";
import { useState } from "react";

// {items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
}

// items = []

function ListGroup(props: ListGroupProps) {
  const [ColorList, SetColorList] = useState(-1);
  const message = props.items.length === 0 ? <p>No Country Name</p> : null;
  const getMessage = () => {
    return props.items.length === 0 ? <p>No Country Name</p> : null;
  };
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>Country Name</h1>       ---------------->>> We don't want to return duplicates items more times
  //         <p>No Country Name</p>
  //       </>
  //     );
  return (
    <Fragment>
      <h1>{props.heading}</h1>
      {message}
      {/*  if conditions is true --> No Country Name else return null */}
      {getMessage()} {/* we can also call functions if we want para in that*/}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              ColorList === index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              SetColorList(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
