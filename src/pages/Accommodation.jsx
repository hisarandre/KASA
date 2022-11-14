import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Rating from "../components/Rating";

function Accommodation({ data, error, loading }) {
  const { id } = useParams();

  if (!error && !loading && data) {
    const accommodation = data.find((object) => object.id === id);
    return (
      <div className="main-container">
        <img className="accommodation__cover" src={accommodation.cover} alt={accommodation.title}></img>
        <header className="accommodation__info">
          <section className="accommodation__details">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
            <ul className="tags">
              {accommodation.tags.map((tag, index) => (
                <li className="tags__item" key={`${tag}-${index}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>
          <section className="host">
            <div className="host__details">
              <p>{accommodation.host.name}</p>
              <img src={accommodation.host.picture} alt={accommodation.host.name} />
            </div>
            <Rating value={accommodation.rating} />
          </section>
        </header>

        <section className="dropdown--double">
          <Dropdown title="Description" content={accommodation.description} defaultOpen={false} />
          <Dropdown title="Equipements" content={accommodation.equipments} defaultOpen={false} />
        </section>
      </div>
    );
  }
}

export default Accommodation;
