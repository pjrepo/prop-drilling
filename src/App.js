import React, { useState } from "react";
import List from "./List";
import { data } from "./data";

const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const deleteHandler = (id) =>
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });

  return (
    <PersonContext.Provider value={{ deleteHandler, people }}>
      <React.Fragment>
        <section>
          <h3>Prop Drilling</h3>
          <List />
        </section>
      </React.Fragment>
    </PersonContext.Provider>
  );
};

export default ContextAPI;
