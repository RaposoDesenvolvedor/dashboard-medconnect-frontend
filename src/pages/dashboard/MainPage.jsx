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
      name: "Reunião Matinal",
      startTime: "07:00",
      endTime: "07:30",
    },
    {
      id: 2,
      name: "Atendimento: Benetida Soares",
      startTime: "08:00",
      endTime: "09:00",
    },
    {
      id: 3,
      name: "Atendimento: Flávia Biseth",
      startTime: "09:30",
      endTime: "10:30",
    },
    {
      id: 3,
      name: "Evento Online",
      startTime: "14:00",
      endTime: "16:00",
    },
    {
      id: 4,
      name: "Horário de Almoço",
      startTime: "13:00",
      endTime: "14:00",
    },
    {
      id: 4,
      name: "Procedimento Cirúrgico: Sandro Martins",
      startTime: "11:00",
      endTime: "12:30",
    },
  ];
  
  const tasks = [
    {
      id: 1,
      name: "Revisão e pedido de estoque de anestésicos e luvas",
      status: "Pending",
      isPriority: true,
    },
    {
      id: 2,
      name: "Limpar e esterilizar instrumentos cirúrgicos - Lote da manhã",
      status: "In progress",
      isPriority: true,
    },
    {
      id: 3,
      name: "Ligar para o Laboratório: Confirmar entrega da Prótese do Paciente M. Silva",
      status: "Pending",
      isPriority: true,
    },
    {
      id: 4,
      name: "Preencher e arquivar as fichas médicas dos 5 novos pacientes",
      status: "Pending",
      isPriority: false,
    },
    {
      id: 5,
      name: "Enviar lembretes de consultas por SMS/WhatsApp (Próxima semana)",
      status: "In progress",
      isPriority: false,
    },
    {
      id: 6,
      name: "Organizar e atualizar a sala de espera com revistas novas",
      status: "Finished",
      isPriority: false,
    },
    {
      id: 7,
      name: "Pesquisar curso online sobre novas técnicas de Odontologia Estética",
      status: "Pending",
      isPriority: false,
    },
    {
      id: 8,
      name: "Realizar backup diário do sistema de agendamento e Raio-X",
      status: "Finished",
      isPriority: true,
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
