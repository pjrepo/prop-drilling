import React, { useContext } from "react";
import SinglePerson from "./SinglePerson";

const PersonContext = React.createContext();

const List = () => {
  const mainData = useContext(PersonContext);

  return (
    <React.Fragment>
      {mainData.people.map((person) => {
        const { id, name } = person;
        return (
          <div>
            <SinglePerson key={id} id={id} name={name} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default List;
