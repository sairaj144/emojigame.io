import './index.css'

const Navbar = props => {
  const {score, topscore, gamestoped} = props

  const scoreBoard = gamestoped ? (
    ''
  ) : (
    <div className="navbox">
      <p className="scoreboard">Score: {score}</p>
      <p className="scoreboard">Top Score: {topscore}</p>
    </div>
  )

  return (
    <nav className="navbar">
      <div className="navbox">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {scoreBoard}
    </nav>
  )
}

export default Navbar
