import Charts from "../../components/Dashboard/ServicePage/PatientDemography/PatientDemography";
import PatientsPerHealthPlan from "../../components/Dashboard/ServicePage/PatientsPerHealthPlan/PatientsPerHealthPlan";
import ServiceStatistics from "../../components/Dashboard/ServicePage/ServiceStatistics/ServiceStatistics";
import "./DashboardPage.css";
import HP_LOGO from "../../assets/imgs/health-plans-logo/healthPlanLogoIndex";
import PatientDemography from "../../components/Dashboard/ServicePage/PatientDemography/PatientDemography";

export default function ServicePage() {
  const healthPlanPatients = [
    {
      image: HP_LOGO.LOGO_UNIMED,
      name: "Unimed",
      percentage: 48.3,
      quantity: 145,
    },
    {
      image: HP_LOGO.LOGO_HAPVIDA,
      name: "Hapvida",
      percentage: 32,
      quantity: 96,
    },
    {
      image: HP_LOGO.LOGO_IPASGO,
      name: "Ipasgo",
      percentage: 10.3,
      quantity: 31,
    },
    { image: HP_LOGO.LOGO_AMIL, name: "Amil", percentage: 0.9, quantity: 28 },
  ];

  const chartData = {
    patientsSexData: {
      malePatients: 50,
      femalePatients: 175,
    },
    patientsAgeData: {
      young: 150,
      adult: 50,
      elderly: 25,
    },
  };

  const serviceStatistics = {
    rating: 4.8,
    newPatientsQuantity: 12,
  };

  return (
    <section className="dashboard-page">
      <div className="dashboard-statistics">
        <ServiceStatistics data={serviceStatistics} />
      </div>
      <div className="dashboard-info">
        <PatientDemography data={chartData} />
        <PatientsPerHealthPlan healthPlanPatients={healthPlanPatients} />
      </div>
    </section>
  );
}
