import { useState } from "react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardNavigator from "../../components/Dashboard/DashboardNavigator/DashboardNavigator";
import MainPage from "./MainPage";
import FinancialPage from "./FinancialPage";
import ServicePage from "./ServicePage";

export default function Dashboard() {
  const [selectedDashboard, setDashboardPage] = useState(2);

  return (
    <main style={{ display: "flex", flexDirection: "column"}}>
      <DashboardHeader />
      <DashboardNavigator
        handleDashboardPage={{setDashboardPage, selectedDashboard}}
      />

      {selectedDashboard == 1 && <FinancialPage />}
      {selectedDashboard == 2 && <MainPage />}
      {selectedDashboard == 3 && <ServicePage />} 
    </main> 
  );
}
