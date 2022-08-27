import React, { useContext } from "react";

const PersonContext = React.createContext();

const SinglePerson = (props) => {
  const { id, name } = props;
  const { deleteHandler } = useContext(PersonContext);

  const clickHandler = () => deleteHandler(id);

  return (
    <React.Fragment>
      <div>
        <h3>{name}</h3>
        <button onClick={clickHandler}>remove</button>
      </div>
    </React.Fragment>
  );
};

export default SinglePerson;
