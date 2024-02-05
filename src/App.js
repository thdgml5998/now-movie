import Movie from "./components/Movie";
import { movieDummy } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="wrap">
        {movieDummy.results.map((item)=>{
          //movieDummy데이터 안에 results안에 데이터 사용예정
          return(
            <Movie 
              poster_path={item.poster_path} 
              title={item.title} 
              vote_average={item.vote_average} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
