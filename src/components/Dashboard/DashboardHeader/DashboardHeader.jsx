import medconnectLogo from "../../../assets/imgs/medconnect-horizontal-logo.png"
import "./DashboardHeader.css"

export default function DashboardHeader() {
    return (
        <header className="dashboard-header">
            <img src={medconnectLogo} alt="Logo da aplicação MedConnect" className="medconnect-logo"/>
            <h1 className="dashboard-title kanit-semibold">Dashboard do Profissional</h1>
        </header>
    )
}