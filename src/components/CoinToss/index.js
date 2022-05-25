import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToChange = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {totalCount, headCount, tailCount, image} = this.state

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <div className="image-container">
            <img src={image} alt="toss result" className="head-image" />
            <button
              type="button"
              className="toss-button"
              onClick={this.onClickToChange}
            >
              Toss Coin
            </button>
          </div>
          <div className="results-container">
            <p className="description-para">total:{totalCount}</p>
            <p className="description-para">Heads:{headCount}</p>
            <p className="description-para">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
