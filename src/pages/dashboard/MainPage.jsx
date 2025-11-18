import Agenda from "../../components/Dashboard/MainPage/Agenda/Agenda";
import TaskList from "../../components/Dashboard/MainPage/TaskList/TaskList";
import MainStatistics from "../../components/Dashboard/MainPage/MainStatistics/MainStatistics";
import "./DashboardPage.css";
import { Ambulance, Clock, Hospital, UsersRoundIcon } from "lucide-react";

const iconSize = 30;
const date = new Date();

export default function MainPage() {
  const mainStatistics = [
    {
      information: "Quantidade de pacientes atendidos",
      value: 10,
      date: `${date.toLocaleDateString("pt-BR")}`,
      icon: <UsersRoundIcon size={iconSize} color="black" />,
      iconBackgroundColor: "#B3EAC8",
    },
    {
      information: "Procedimentos cirúrgicos realizados",
      value: 15,
      date: `${date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
      })}`,
      icon: <Ambulance size={iconSize} color="black" />,
      iconBackgroundColor: "#C4BDE9",
    },
    {
      information: "Taxa de comparecimento",
      value: "87%",
      date: `${date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
      })}`,
      icon: <Hospital size={iconSize} color="white" />,
      iconBackgroundColor: "#3368CA",
    },
    {
      information: "Tempo médio de atendimento",
      value: "35 min",
      date: `${date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
      })}`,
      icon: <Clock size={iconSize} color="black" />,
      iconBackgroundColor: "#F8DC3F",
    },
  ];

  const schedules = [
    {
      id: 1,
      name: "Teste",
      startTime: "18:00",
      endTime: "19:00",
    },
    {
      id: 2,
      name: "Teste 2",
      startTime: "13:00",
      endTime: "14:00",
    },
    {
      id: 3,
      name: "Reunião",
      startTime: "07:00",
      endTime: "10:00",
    },
  ];

  const tasks = [
    {
      id: 1,
      name: "Finalizar relatório mensal",
      status: "Pending",
      isPriority: true,
    },
    {
      id: 2,
      name: "Revisar código da feature X",
      status: "In progress",
      isPriority: true,
    },
    {
      id: 3,
      name: "Agendar reunião com time de design",
      status: "Finished",
      isPriority: false,
    },
    {
      id: 4,
      name: "Responder e-mails de clientes",
      status: "Pending",
      isPriority: false,
    },
    {
      id: 5,
      name: "Instalar atualizações do sistema operacional",
      status: "In progress",
      isPriority: false,
    },
    {
      id: 6,
      name: "Instalar atualizações do sistema operacional",
      status: "In progress",
      isPriority: false,
    },
    {
      id: 7,
      name: "Instalar atualizações do sistema operacional",
      status: "In progress",
      isPriority: false,
    },
    {
      id: 8,
      name: "Instalar atualizações do sistema operacional",
      status: "In progress",
      isPriority: false,
    },
  ];

  return (
    <main className="dashboard-page">
      <div className="dashboard-statistics">
        <MainStatistics mainStatistics={mainStatistics} />
      </div>
      <div className="dashboard-info">
        <TaskList tasks={tasks} />
        <Agenda schedules={schedules} />
      </div>
    </main>
  );
}
