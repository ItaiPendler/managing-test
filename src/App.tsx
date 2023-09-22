import "./App.css";
import Draggable from "react-draggable";
import { missions, people, Person } from "./db";

const App = () => {
  const clickname = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data: Person = people[index];
    console.log("clicked!");
    alert(`${data.name}\n ${data.descrption}`);
  };
  return (
    <>
      <div>
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>משימות</h1>
          </div>
        </div>

        <div style={{ position: "absolute",  bottom: 0,
      left: '0m',
      width: '20%',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '10px',
      padding: '10px' }}>
          {missions.map((el) => (
            <Draggable>
              <div className="box">
                <h4>{el.title}</h4>
                <div>{el.description}</div>
              </div>
            </Draggable>
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
