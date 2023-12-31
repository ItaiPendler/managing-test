import "./App.css";
import { missions, people, Person } from "./db";
import Mission from "./Mission";

const App = () => {
  const clickname = (index: number) => {
    const data: Person = people[index];
    alert(`${data.name}\n ${data.descrption}`);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>משימות</h1>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "0m",
            width: "20%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "10px",
            padding: "10px",
          }}
        >
          {missions.map((el) => (
            <Mission
              key={el.title}
              description={el.description}
              title={el.title}
            />
          ))}
        </div>
      </div>
      <div className="people">
        {people.map((person, index) => (
          <div className={"person part" + index}>
            <h3 onClick={() => clickname(index)}>{person.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
