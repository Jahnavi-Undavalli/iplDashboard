import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="bg-container">
      <div className="first">
        <h1 className="heading">{competingTeam}</h1>
        <p className="paragraph">{date}</p>
        <p className="paragraph">{venue}</p>
        <p className="paragraph">{result}</p>
      </div>
      <img src={competingTeamLogo} className="img" alt={competingTeam} />
      <div className="second">
        <p className="paragraph">First Innings</p>
        <p className="paragraph">{firstInnings}</p>
        <p className="paragraph">Second Innings</p>
        <p className="paragraph">{secondInnings}</p>
        <p className="paragraph">Man Of The Match</p>
        <p className="paragraph">{manOfTheMatch}</p>
        <p className="paragraph">Umpires</p>
        <p className="paragraph">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
