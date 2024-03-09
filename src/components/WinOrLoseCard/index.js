import './index.css'

const Resultcard = props => {
  const {score, playagain, isgamewon} = props

  const buttonplay = () => {
    playagain()
  }

  const result = isgamewon ? 'You Won' : 'You Lose'

  const scoretype = isgamewon ? 'Best Score' : 'Score'

  const resultpic = isgamewon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="resultcontainer">
      <div className="card1">
        <h1>{result}</h1>
        <p>{scoretype}</p>
        <p>{score}/12</p>
        <button type="button" onClick={buttonplay} className="button">
          Play Again
        </button>
      </div>
      <div className="card2">
        <img src={resultpic} alt="win or lose" />
      </div>
    </div>
  )
}

export default Resultcard
