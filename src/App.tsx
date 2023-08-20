// import Message  from "./Message";

import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "India",
    "Canada",
    "France",
    "Germany",
    "United States",
    "Australia",
    "China",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Country Name"></ListGroup>
    </div>
  );
}
export default App;
