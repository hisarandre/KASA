import star from "../assets/star.svg";
import emptyStar from "../assets/emptyStar.svg";

function Rating({ value }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeElem) => (value >= rangeElem ? <img src={star} alt="etoile" /> : <img src={emptyStar} alt="etoile" />))}
    </div>
  );
}

export default Rating;
