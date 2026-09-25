import { InfoCircleOutlined } from "@ant-design/icons"
import Dashboard from "./Dashboard"
import Earn from "./Earn"
import Leaderboard from "./Leaderboard"
import Referal from "./Referal"
import Nss from "./Nss"
import Job from "./Job"
import Products from "./products"
import Advert from "./Advert"
import Hub from "../features/Hub"
import SolutionsList from "./SolutionsList"
import { logout } from "./authfetch"

// Keyed by name (not array position) so re-ordering the sidebar in
// Searchlist.jsx — or adding a new view like "solutions" — can never
// silently point at the wrong panel.
const VIEW_COMPONENTS = {
  hub: Hub,
  solutions: SolutionsList,
  general: Dashboard,
  nss: Nss,
  referal: Referal,
  products: Products,
  earn: Earn,
  leaderboard: Leaderboard,
  advert: Advert,
  job: Job,
}

export default function Overview({ currentView, setcurrentView }) {
  const logoutUser = () => {
    if (confirm("Confirm to Leave")) {
      logout();
      location.reload();
    }
  }

  const ViewComponent = VIEW_COMPONENTS[currentView]

  return (
    <div className="profile">
      <div className="wrap">
        {ViewComponent ? <ViewComponent onNavigate={setcurrentView} /> : <MissingComp />}
      </div>
      <div className="onmenu">
        <div onClick={logoutUser} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className="fa fa-power-off fa-dark"></i></span>Logout</div></div>
        <div onClick={() => { setcurrentView("hub") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-graduation-cap fa-dark'></i></span>Learning Hub</div></div>
        <div onClick={() => { setcurrentView("solutions") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-folder-open fa-dark'></i></span>Solutions</div></div>
        <div onClick={() => { setcurrentView("general") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-windows fa-dark'></i></span>General</div></div>
        <div onClick={() => { setcurrentView("referal") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-users fa-dark'></i></span>Referal</div></div>
        <div onClick={() => { setcurrentView("earn") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-dollar fa-dark'></i></span>Earn</div></div>
        <div onClick={() => { setcurrentView("nss") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-briefcase fa-dark'></i></span>NSS guide</div></div>
        <div onClick={() => { setcurrentView("products") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-star fa-dark'></i></span>Solve with AI</div></div>
        <div onClick={() => { setcurrentView("advert") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-shop fa-dark'></i></span>Advertise</div></div>
        <div onClick={() => { setcurrentView("job") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-certificate fa-dark'></i></span>Job guide</div></div>
        <div onClick={() => { setcurrentView("leaderboard") }} className="in">
          <div className="insp"><div className="prem4"></div><span className="fnav"><i className='fa fa-medal fa-dark'></i></span>leaderboard</div></div>
      </div>
    </div>
  )
}
const MissingComp = () => {
  return (
    <div className="userlevel">
      <div className="missing">
        <div className="missingtext">

          <InfoCircleOutlined className="micon" />
          To go back, click the search box
        </div>
        <div className="construction">
          ♒

        </div>
        <div className="missingtext">Use the links below to navigate through this space</div>

      </div>
    </div>
  )
}
