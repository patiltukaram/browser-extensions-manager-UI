// Adjust the path as necessary
import ExtensionCard from "./ExtensionCard";
import rawData from "../data.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialData = rawData.map((item) => ({
  ...item,
  id: uuidv4(),
}));

function List() {
  const [filter, setFliter] = useState("all");
  const [data, setData] = useState(initialData);

  // Remove handler
  const handleRemove = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => {
        return item.id !== id;
      });
    });
  }

  //Toggle Active State
  const handleToggle = (id)=> {
    setData((prev) => 
        prev.map((item)=> 
        item.id === id ? {...item, isActive: !item.isActive}: item
    )
    )
  };

  // Apply filter before rendering
    const filteredData = data.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });

  return (
    <div className="section">
      <div className="title">
        <h1>Extensions List</h1>
        <div className="filters">
          <button className="all" onClick={() => setFliter("all")}>All</button>
          <button className="active" onClick={() => setFliter("active")}>Active</button>
          <button className="inactive" onClick={() => setFliter("inactive")}>Inactive</button>
        </div>
      </div>
      <div className="container">
     {filteredData.map((item) => (
        <ExtensionCard
          key={item.id}
          item={item}
          onRemove={() => handleRemove(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
      </div>
    </div>
  );
}

export default List;
