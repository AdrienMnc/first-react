import "./App.css";
// import Menu from "./component/Menu";
// import Content from "./component/Content";
import Movie from "./component/Movie";
import list from "./list.json";

function App() {
  const listmovie = list.list;
  return (
    <div>
      {Object.keys(listmovie).map((key, index) => (
        <div key={index}>
          <h2>{key}</h2>
          {listmovie[key].map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ))}
    </div>
  );
}
export default App;
