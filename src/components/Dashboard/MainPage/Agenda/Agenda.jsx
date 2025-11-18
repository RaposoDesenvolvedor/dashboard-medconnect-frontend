import { useEffect, useRef, useState } from "react";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import "./Agenda.css";

const hours = [...Array(24).keys()];

const AGENDA_PASTEL_COLORS = [
  "#B2EBF2",
  "#C8E6C9",
  "#FFF9C4",
  "#F8BBD0",
  "#E1BEE7",
  "#FFCCBC",
  "#B3E5FC",
];

const getTimeInMinutes = (schedule) => {
  const [hour, minutes] = schedule.split(":");

  return Number(hour) * 60 + Number(minutes);
};

const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * AGENDA_PASTEL_COLORS.length);
  return AGENDA_PASTEL_COLORS[randomIndex];
};

function HourBlock({ hourValue, isWorkTime }) {
  const displayTime = hourValue.toString().padStart(2, "0") + ":00";

  if (isWorkTime) {
    return (
      <div className="hour-block work-time">
        <div className="hour-block-section hour-section-middle">
          <h3 className="kanit-medium day-time">{displayTime}</h3>
        </div>
        <div className="hour-block-section"></div>
      </div>
    );
  }

  return (
    <div className="hour-block">
      <div className="hour-block-section hour-section-middle">
        <h3 className="kanit-medium day-time">{displayTime}</h3>
      </div>
      <div className="hour-block-section"></div>
    </div>
  );
}

function Schedule({ schedule }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${getTimeInMinutes(schedule.startTime)}px`,
        right: "0",
        marginRight: "10px",
        width: "85%",
        backgroundColor: `${randomColor()}`,
        height: `${
          getTimeInMinutes(schedule.endTime) -
          getTimeInMinutes(schedule.startTime)
        }px`,
      }}
      className="schedule"
    >
      <p className="schedule-name kanit-semibold">{schedule.name}</p>
    </div>
  );
}

function CurrentTimeStamp({ currentTime }) {
  const currentTimeInMinutes = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const currentTimeInMinutes = hours * 60 + minutes;
    return currentTimeInMinutes;
  };

  return (
    <div
      style={{
        width: "90%",
        height: "1px",
        border: "1px solid var(--secondary-alternative-color)",
        borderBox: "box-sizing",
        backgroundColor: "var(--secondary-alternative-color)",
        position: "absolute",
        top: `${currentTimeInMinutes()}px`,
        right: "0",
        borderRadius: "10px",
      }}
    ></div>
  );
}

function AgendaDisplay({schedules}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [workTime] = useState({ start: "07:00", end: "17:00" });

  const [workTimeToInt] = useState({
    start: Number(workTime.start.split(":")[0]),
    end: Number(workTime.end.split(":")[0]),
  });

  const agendaDisplayElement = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 60000 ms = 1 minuto
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const workStartInMinutes = getTimeInMinutes(workTime.start);

    agendaDisplayElement.current.scrollBy(0, workStartInMinutes);
  }, [workTime.start]);

  return (
    <div className="agenda-display" ref={agendaDisplayElement}>
      {hours.map((hour) => {
        let isWorkTime;
        hour >= workTimeToInt.start && hour <= workTimeToInt.end ? isWorkTime = true : isWorkTime = false;

        return (
          <HourBlock hourValue={hour} isWorkTime={isWorkTime} key={hour} />
        );
      })}

      {schedules.map((schedule) => (
        <Schedule schedule={schedule} key={schedule.id} />
      ))}

      <CurrentTimeStamp currentTime={currentTime} />
    </div>
  );
}

export default function Agenda({schedules}) {
  return (
    <InformationPlaceholder width="500px" height="500px" title="Agenda de hoje">
      <AgendaDisplay schedules={schedules}/>
    </InformationPlaceholder>
  );
}
