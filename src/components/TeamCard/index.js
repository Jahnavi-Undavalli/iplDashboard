import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamCard extends Component {
  state = {isLoading: true, teamData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamData: formattedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="teams-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <Link to={`/team-matches/${teamData.name}`} className="item-link">
            <ul className="matches-list">
              {teamData.map(eachMatch => (
                <div className="bg-container">
                  <img
                    src={eachMatch.teamImageUrl}
                    className="img"
                    alt={eachMatch.name}
                  />
                  <h1 className="heading">{eachMatch.name}</h1>
                </div>
              ))}
            </ul>
          </Link>
        )}
      </div>
    )
  }
}

export default TeamCard
