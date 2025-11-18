
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import Separator from "../../Separator";
import "./ServiceStatistics.css";
import { Star, User } from "lucide-react";

function Rating({ rating = 5 }) {
  return (
    <div className="service-stat-placeholder">
      <p className="kanit-semibold title">Avaliação Média:</p>
      <p className="kanit-medium service-stat-info value">
        <Star color="#F9D200" fill="#F9D200" size={30} />
        {rating}
      </p>
    </div>
  );
}

function NewPatients({ number = 0 }) {
  return (
    <div className="service-stat-placeholder">
      <p className="kanit-semibold title">Novos Pacientes:</p>
      <p className="kanit-medium service-stat-info value">
        <User size={30} />
        {number}
      </p>
      <p className="kanit-medium" style={{ fontSize: "10pt" }}>
        Últimos 30 dias
      </p>
    </div>
  );
}

export default function ServiceStatistics({data}) {
  return (
    <InformationPlaceholder
      width="auto"
      height="100px"
      flexGrow={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={50}
    >
      <Separator position="vertical"/>
      <Rating rating={data.rating}/>
      <Separator position="vertical"/>
      <NewPatients value={data.newPatientsQuantity}/>
      <Separator position="vertical"/>
    </InformationPlaceholder>
  );
}
