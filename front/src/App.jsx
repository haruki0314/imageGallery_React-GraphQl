import "./App.css";
import { gql, useQuery } from "@apollo/client";

const ICON = gql`
  {
    icons {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`;

function App() {
  // console.log(ICON);
  console.log(useQuery(ICON));
  const { data, loading, error } = useQuery(ICON);
  if (loading) return "ロード中・・・";
  if (error) return `エラ〜！${error}`;
  return (
    <div>
      <h1>MY Skills</h1>
      <div className="iconsContainer">
        {data.icons.map((iconData) => (
          <div key={iconData.id}>
            <div className="iconCard">
              <img src={iconData.thumbnail.url} alt="" />
              <p>{iconData.name}</p>
              <p>{iconData.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
