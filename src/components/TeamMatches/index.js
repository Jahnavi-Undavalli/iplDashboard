import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {name} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${name}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const updatedMatchDetails = {
      umpires: data.latestMatchDetails.umpires,
      result: data.latestMatchDetails.result,
      manOfTheMatch: data.latestMatchDetails.man_of_the_match,
      id: data.latestMatchDetails.id,
      date: data.latestMatchDetails.date,
      venue: data.latestMatchDetails.venue,
      competingTeam: data.latestMatchDetails.competing_team,
      competingTeamLogo: data.latestMatchDetails.competing_team_logo,
      firstInnings: data.latestMatchDetails.first_innings,
      secondInnings: data.latestMatchDetails.second_innings,
      matchStatus: data.latestMatchDetails.match_status,
    }

    const updatedRecentDetails = data.recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    updatedData.latestMatchDetails = updatedMatchDetails
    updatedData.recentMatches = updatedRecentDetails
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="bg-container">
        <img src={teamBannerUrl} className="img" alt="teamBanner" />
        <p className="paragraph">Latest Matches</p>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <MatchCard recentMatches={recentMatches} key={recentMatches.id} />
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            data-testid="loader"
            height={50}
            width={50}
          />
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
