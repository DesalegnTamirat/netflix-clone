import { MOVIE_ROWS } from "../../utils/data";
import Row from "./Row";

function RowList() {
  return (
    <div className="row-list-container">
      {MOVIE_ROWS.map((row, index) => (
        <Row key={index} {...row} />
      ))}
    </div>
  );
}

export default RowList;
