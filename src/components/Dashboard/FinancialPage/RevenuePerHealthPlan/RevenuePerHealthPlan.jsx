
import { floatToString } from "../../../../utils/floatToString";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import "./RevenuePerHealthPlan.css";

function HealthPlan({ image, name, billing }) {
  return (
    <li className="revenue-component">
      <img src={image} alt="" className="health-plan-image" />
      <div className="health-plan-revenue-info">
        <p className="kanit-medium">{name}</p>
        <p className="kanit-medium">{`R$ ${floatToString(billing)}`}</p>
      </div>
    </li>
  );
}

export default function RevenuePerHealthPlan({healthPlanRevenues}) {

  return (
    <InformationPlaceholder width="auto" height="500px" flexGrow={1} title="Receitas por planos e/ou convênios">
        <ul>
          {healthPlanRevenues.map((healthPlan) => {
            return (
              <HealthPlan
                image={healthPlan.image}
                name={healthPlan.name}
                billing={healthPlan.billing}
              />
            );
          })}
        </ul>
    </InformationPlaceholder>
  );
}
