import { Banknote, ChartNoAxesCombined, User } from "lucide-react";
import "./DashboardNavigator.css";

function NavigatorButton({
  buttonId,
  handleDashboardPage,
  pageName,
  icon,
}) {
  const buttonStyle = "dashboard-nav-btn kanit-semibold";

  return (
    <button
      className={
        handleDashboardPage.selectedDashboard == buttonId
          ? `${buttonStyle} active`
          : `${buttonStyle}`
      }
      onClick={() => handleDashboardPage.setDashboardPage(buttonId)}
    >
      {icon}
      <p>{pageName}</p>
    </button>
  );
}

export default function DashboardNavigator({ handleDashboardPage }) {
  return (
    <nav className="dashboard-nav">
      <NavigatorButton
        buttonId={1}
        handleDashboardPage={handleDashboardPage}
        pageName={"Financeiro"}
        icon={<Banknote />}
      />
      <NavigatorButton
        buttonId={2}
        handleDashboardPage={handleDashboardPage}
        pageName={"Principal"}
        icon={<ChartNoAxesCombined />}
      />
      <NavigatorButton
        buttonId={3}
        handleDashboardPage={handleDashboardPage}
        pageName={"Atendimento"}
        icon={<User />}
      />
    </nav>
  );
}
