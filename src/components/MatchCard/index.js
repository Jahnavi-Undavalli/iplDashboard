import './index.css'

const MatchCard = props => {
  const {recentMatches} = props

  return (
    <div className="bg-container">
      <ul className="appointments-list">
        {recentMatches.map(eachMatch => (
          <div>
            <img
              src={eachMatch.competingTeamLogo}
              alt={eachMatch.competingTeam}
              className="img"
            />
            <h1 className="heading">{eachMatch.competingTeam}</h1>
            <p className="paragraph">{eachMatch.result}</p>
            <p className="paragraph">{eachMatch.score}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default MatchCard
