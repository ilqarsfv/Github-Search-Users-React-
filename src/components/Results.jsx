import Result from "./Result";

function Results({ results }) {

  const items = results?.items || []; 

  return (
    <div className="resultWrapper">
      {
        items.map((item)=>(
          <Result key={item.id} item={item}/>
        ))
      }
    </div>
  );
}

export default Results;
