import {Component} from 'react'

import './index.css'

import Navbar from '../NavBar'

import Emojicard from '../EmojiCard'

import Resultcard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {topscore: 0, clickedemojilist: [], gamestoped: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  shuffleemojis = id => {
    const {emojisList} = this.props
    const {clickedemojilist, topscore} = this.state
    const len = clickedemojilist.length
    const lenoflist = emojisList.length

    const checkemoji = clickedemojilist.includes(id)
    console.log(len)

    if (checkemoji) {
      if (len > topscore) {
        this.setState({topscore: len})
      }
      this.setState({gamestoped: true})
    } else {
      this.setState(prevState => ({
        clickedemojilist: [...prevState.clickedemojilist, id],
      }))
      if (lenoflist - 1 === len) {
        if (len > topscore) {
          this.setState({topscore: lenoflist})
        }
        this.setState({gamestoped: true})
      }
    }
  }

  playagain = () => {
    this.setState({gamestoped: false})
    this.setState({clickedemojilist: []})
  }

  rendershufflegame = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="game">
        {shuffledEmojisList.map(eachemoji => (
          <Emojicard
            key={eachemoji.id}
            emojidetails={eachemoji}
            shuffleemojis={this.shuffleemojis}
          />
        ))}
      </ul>
    )
  }

  renderresultcard = () => {
    const {emojisList} = this.props
    const {clickedemojilist} = this.state
    const isgamewon = emojisList.length === clickedemojilist.length
    return (
      <Resultcard
        isgamewon={isgamewon}
        score={clickedemojilist.length}
        playagain={this.playagain}
      />
    )
  }

  render() {
    const {topscore, clickedemojilist, gamestoped} = this.state
    const score = clickedemojilist.length

    return (
      <div className="container">
        <div className="navbar-container">
          <Navbar score={score} topscore={topscore} gamestoped={gamestoped} />
        </div>
        <div className="game-container">
          {gamestoped ? this.renderresultcard() : this.rendershufflegame()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
