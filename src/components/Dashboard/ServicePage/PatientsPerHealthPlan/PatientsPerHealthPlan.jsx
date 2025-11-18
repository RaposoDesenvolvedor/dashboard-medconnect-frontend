

import { floatToString } from "../../../../utils/floatToString";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import "./PatientsPerHealthPlan.css"


function HealthPlan({ image, name, percentage = 0, quantity = 0 }) {
  return (
    <li className="patient-hp-component">
      <img src={image} alt="" className="health-plan-image" />
      <div className="health-plan-patient-info">
        <p className="kanit-medium" style={{minWidth: "100px"}}>{name}</p>
        <p className="kanit-bold">{quantity} Pacientes</p>
        <p className="kanit-medium">{`${floatToString(percentage)}%`}</p>
      </div>
    </li>
  );
}

export default function PatientsPerHealthPlan({healthPlanPatients}) {

  return (
    <InformationPlaceholder width="auto" height="500px" flexGrow={1} title="Pacientes por planos e/ou convênios">
        <ul>
          {healthPlanPatients.map((healthPlan) => {
            return (
              <HealthPlan
                image={healthPlan.image}
                name={healthPlan.name}
                percentage={healthPlan.percentage}
                quantity={healthPlan.quantity}
              />
            );
          })}
        </ul>
    </InformationPlaceholder>
  );
}
