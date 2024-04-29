import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      click: false,
      display: 'invisible',
    }
  }

  onClicked = () => {
    this.setState(prevState => ({
      click: !prevState.click,
      display: prevState.click ? 'invisible' : 'visible',
    }))
  }

  render() {
    const {text, click, display} = this.state

    const buttonContent = click
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = click ? 'minus' : 'plus'

    return (
      <div className="container">
        <div className="questionText">
          <h1 className="question">{text.questionText}</h1>
          <button className="button" type="button" onClick={this.onClicked}>
            <img src={buttonContent} className="image" alt={altText} />
          </button>
          <div className={display}>
            <hr />
            <p className="answerText">{text.answerText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export {FaqItem}
