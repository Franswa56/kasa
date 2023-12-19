import Carrousel from "../../components/Carrousel/Carrousel";
import Host from "../../components/Host/Host";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags.jsx";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../../assets/logements.json";
import "./_Accommodation.scss";

export default function Accomodation() {
  const params = useParams();
  const navigate = useNavigate();

  const [pickedAppart, setPickedAppart] = useState();

  useEffect(() => {
    const picked = logements.find(({ id }) => id === params.id);
    if (picked) {
      setPickedAppart(picked);
    } else {
      navigate("/404", { state: { message: "Logement non trouvé" } });
    }
  }, [params.id, navigate]);

  return (
    pickedAppart && (
      <>
        <div className="accommodation">
          <Carrousel slides={pickedAppart.pictures} />
          <div className="infos-container">
            <div className="accommodation__infos">
              <Title title={pickedAppart.title} location={pickedAppart.location} />
              <Tags tags={pickedAppart.tags} />
            </div>
            <div className="accommodation__tag-and-rate">
              <Host picture={pickedAppart.host.picture} name={pickedAppart.host.name} />
              <Rate rating={pickedAppart.rating} />
            </div>
          </div>
          <div className="accommodation__collapses">
            <Collapse title="Description" content={pickedAppart.description} />
            <Collapse title="Équipements" content={pickedAppart.equipments} isList={true} />
          </div>
        </div>
      </>
    )
  );
}
