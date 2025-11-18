
import "./FinancialStatistics.css";


import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import { floatToString } from "../../../../utils/floatToString";
import Separator from "../../Separator";

function Statistic({ title, value, periodInfo }) {
  return (
    <div className="financial-stat-placeholder">
      <p className="kanit-semibold title">{title}</p>
      <p className="kanit-bold value">{`R$ ${floatToString(value)}`}</p>
      <p className="kanit-medium period-info">{periodInfo}</p>
    </div>
  );
}

export default function FinancialStatistics({ financialStatistics }) {

  let counter = 0;

  return (
    <InformationPlaceholder
      width="auto"
      height="100px"
      flexDirection="row"
      gap={50}
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
    >
      <Separator position="vertical" />
      {financialStatistics.map((stat) => {
        counter++;
        return (
          <>
            <Statistic
              title={stat.title}
              value={stat.value}
              periodInfo={stat.periodInfo}
            />

            {counter < financialStatistics.length && (
              <Separator position="vertical" />
            )}
          </>
        );
      })}
      <Separator position="vertical" />
    </InformationPlaceholder>
  );
}
