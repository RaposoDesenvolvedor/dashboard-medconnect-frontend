
import { floatToString } from "../../../../utils/floatToString";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import "./OperationalCosts.css";

function OperationalCost({ name, description, value }) {
  return (
    <li className="operational-cost-component">
      <div className="operational-cost-info">
        <p className="kanit-semibold">{name}</p>
        <p className="kanit-regular">{description}</p>
      </div>
      <p className="kanit-semibold operational-cost-value">
        {`R$ ${floatToString(value)}`}
      </p>
    </li>
  );
}

export default function OperationalCosts({ operationalCosts }) {


  return (
    <InformationPlaceholder width={"500px"} height={"500px"} title="Custos operacionais">
        <ul>
          {operationalCosts.map((operationalCost) => {
            return (
              <OperationalCost
                name={operationalCost.name}
                description={operationalCost.description}
                value={operationalCost.value}
              />
            );
          })}
        </ul>
    </InformationPlaceholder>
  );
}
