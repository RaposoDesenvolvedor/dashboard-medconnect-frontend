import FinancialStatistics from "../../components/Dashboard/FinancialPage/FinancialStatistics/FinancialStatistics";
import OperationalCosts from "../../components/Dashboard/FinancialPage/OperationalCosts/OperationalCosts";
import RevenuePerHealthPlan from "../../components/Dashboard/FinancialPage/RevenuePerHealthPlan/RevenuePerHealthPlan";
import "./DashboardPage.css";
import HP_LOGO from "../../assets/imgs/health-plans-logo/healthPlanLogoIndex";

export default function FinancialPage() {
  const healthPlanRevenues = [
    { image: HP_LOGO.LOGO_UNIMED, name: "Unimed", billing: 12296.21 },
    { image: HP_LOGO.LOGO_HAPVIDA, name: "Hapvida", billing: 8919.3 },
    { image: HP_LOGO.LOGO_IPASGO, name: "Ipasgo", billing: 2622.17 },
    { image: HP_LOGO.LOGO_AMIL, name: "Amil", billing: 2291.22 },
  ];

  const operationalCosts = [
    {
      name: "Aluguel",
      description: "Aluguel do consultório ou sala clínica",
      value: 2000,
    },
    {
      name: "Condomínio/IPTU",
      description: "Taxas de condomínio e Imposto Predial",
      value: 500,
    },
    {
      name: "Utilidades",
      description: "Contas de energia elétrica, água e internet",
      value: 350,
    },
    {
      name: "Salário Secretária",
      description: "Custo total com remuneração e encargos da assistente",
      value: 1800,
    },
    {
      name: "Contabilidade",
      description: "Honorários mensais para serviços contábeis",
      value: 400,
    },
    {
      name: "Materiais de Consumo",
      description: "Despesas com insumos (luvas, seringas, papel, etc.)",
      value: 650,
    },
    {
      name: "Software Clínico",
      description: "Assinatura de software de gestão e prontuário eletrônico",
      value: 150,
    },
    {
      name: "Marketing",
      description: "Investimento em publicidade e redes sociais",
      value: 400,
    },
    {
      name: "Limpeza/Higiene",
      description: "Materiais de limpeza e serviços de conservação",
      value: 250,
    },
    {
      name: "Manutenção",
      description: "Manutenção e calibração de equipamentos",
      value: 100,
    },
  ];

  const grossRevenue = healthPlanRevenues.reduce((sum, healthPlan) => {
    return sum + healthPlan.billing;
  }, 0);

  const netRevenue = operationalCosts.reduce((subtract, operationalCost) => {
    return subtract - operationalCost.value;
  }, grossRevenue);

  const financialStatistics = [
    {
      title: "Faturamento Bruto",
      value: grossRevenue,
      periodInfo: "Mês de novembro de 2025",
    },
    {
      title: "Faturamento Líquido",
      value: netRevenue,
      periodInfo: "Mês de novembro de 2025",
    },
  ];

  return (
    <section className="dashboard-page">
      <div className="dashboard-statistics">
        <FinancialStatistics financialStatistics={financialStatistics} />
      </div>

      <div className="dashboard-info">
        <RevenuePerHealthPlan healthPlanRevenues={healthPlanRevenues} />
        <OperationalCosts operationalCosts={operationalCosts} />
      </div>
    </section>
  );
}
