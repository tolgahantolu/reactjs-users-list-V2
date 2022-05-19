import React from "react";

import classes from "./Card.module.css";

function Card(props) {
  return (
    <>
      {/* className AddUser'da Card bileşeninde kullandığımız attribute'nin adı */}
      <div className={`${classes.card} ${props.className}`}>
        {props.children}
        {/*başka yerde Card bileşeni içinde kullandıklarımız buraya children prop olarak geçeçek*/}
      </div>
    </>
  );
}

export default Card;
