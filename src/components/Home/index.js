import './index.css'

import TeamCard from '../TeamCard'

const Home = () => (
  <div className="bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
      className="img"
      alt="ipl logo"
    />
    <TeamCard />
  </div>
)
export default Home
