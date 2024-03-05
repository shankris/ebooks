import classes from "./Categories.module.css";
import { items } from "../data/data";
import { useState } from "react";

const Categories = () => {
  const [selected, setSelected] = useState();

  useState(items[0]);
  return (
    <>
      <div className={`${classes.categories}`}>
        {items.map((item) => (
          <div key={item} className={`${classes.item}`}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
