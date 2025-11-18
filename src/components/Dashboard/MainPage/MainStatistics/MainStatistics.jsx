import { Ambulance, Clock, Hospital, Star, UsersRoundIcon } from "lucide-react";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import "./MainStatistics.css";
import Separator from "../../Separator";

function Statistic({
  information,
  value,
  date,
  icon,
  iconBackgroundColor,
}) {
  return (
    <div className="stat-placeholder">
      <div>
        <p className="kanit-bold value">{value}</p>
        <p className="kanit-medium information">{information}</p>
        {date && <p className="date kanit-bold">{date}</p>}
      </div>
      <span style={{ backgroundColor: iconBackgroundColor }}>{icon}</span>
    </div>
  );
}

export default function MainStatistics({mainStatistics}) {
  return (
    <InformationPlaceholder
      height="100px"
      width="auto"
      flexDirection="row"
      gap={30}
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Statistic
        information={mainStatistics[0].information}
        value={mainStatistics[0].value}
        date={mainStatistics[0].date}
        icon={mainStatistics[0].icon}
        iconBackgroundColor={mainStatistics[0].iconBackgroundColor}
      />
      <Separator position="vertical" />

      <Statistic
        information={mainStatistics[1].information}
        value={mainStatistics[1].value}
        date={mainStatistics[1].date}
        icon={mainStatistics[1].icon}
        iconBackgroundColor={mainStatistics[1].iconBackgroundColor}
      />
      <Separator position="vertical" />

      <Statistic
        information={mainStatistics[2].information}
        value={mainStatistics[2].value}
        date={mainStatistics[2].date}
        icon={mainStatistics[2].icon}
        iconBackgroundColor={mainStatistics[2].iconBackgroundColor}
      />
      <Separator position="vertical" />

      <Statistic
        information={mainStatistics[3].information}
        value={mainStatistics[3].value}
        date={mainStatistics[3].date}
        icon={mainStatistics[3].icon}
        iconBackgroundColor={mainStatistics[3].iconBackgroundColor}
      />
    </InformationPlaceholder>
  );
}
