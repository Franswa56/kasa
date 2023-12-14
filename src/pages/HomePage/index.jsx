import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import "./Index.scss";
import arrowLeft from "../../assets/home-vector-left.png";
import arrowRight from "../../assets/home-vector-right.png";
import logements from "../../assets/logements.json"; // Import direct du fichier JSON

export default function Home() {
  // Fonctions pour la pagination //
  const LogementsPerPage = 6; // Nombre de logements par page
  const [currentPage, setCurrentPage] = useState(0); // Page actuelle
  const [data, setData] = useState([]);

function goToNextPage() {
    const totalPages = Math.ceil(logements.length / LogementsPerPage);
    if (currentPage === totalPages - 1) {
        setCurrentPage(0); 
    } else {
        setCurrentPage(currentPage + 1);
    }
}
function goToPreviousPage() {
    const totalPages = Math.ceil(logements.length / LogementsPerPage);
    if (currentPage === 0) {
        setCurrentPage(totalPages - 1); // Aller à la dernière page
    } else {
        setCurrentPage(currentPage - 1);
    }
}
  useEffect(() => {
    const start = currentPage * LogementsPerPage;
    const end = start + LogementsPerPage;
    setData(logements.slice(start, end));
  }, [currentPage]);

  return (
    <div className="index">
      <Banner />
      <div className="container">
          <img className="arrow-left" src={arrowLeft} alt="Suivant" onClick={goToPreviousPage} />
        <div className="cards_container">
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <Link to={`/accommodation/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
        </div>
          <img className="arrow-right" src={arrowRight} alt="Suivant" onClick={goToNextPage} />
      </div>
    </div>
  );
}
