import { InfoCircleOutlined } from "@ant-design/icons"
import './styles/job.css'

const Dashboard = () => {
  return (
    <div className="userlevel uc-card">
      <div className="uc-dotgrid" aria-hidden="true" />
      <div className="uc-glow" aria-hidden="true" />

      <div className="levelitem2 board">
        <div className="streak">Job Application Guide</div>

        <div className="missing">
          <div className="construction" aria-hidden="true">
            🚧
          </div>

          <div className="missingtext">
            <InfoCircleOutlined className="micon" />
            This page is currently under construction
          </div>

          <div className="uc-subtext">
            We're putting the finishing touches on this guide — check back soon.
          </div>
        </div>

        <div className="streak"></div>
      </div>
    </div>
  )
}

export default Dashboard