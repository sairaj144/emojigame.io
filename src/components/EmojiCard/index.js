import './index.css'

const Emojicard = props => {
  const {emojidetails, shuffleemojis} = props
  const {id, emojiName, emojiUrl} = emojidetails

  const clickemoji = () => {
    shuffleemojis(id)
  }
  return (
    <li className="emojibox">
      <button type="button" className="btn" onClick={clickemoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default Emojicard
