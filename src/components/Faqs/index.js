// Write your code here.
import {FaqItem} from './components/FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="background">
      <h1 className="heading">FAQs</h1>
      <div>
        {faqsList.map(eachItem => (
          <FaqItem key={eachItem.id} text={eachItem} />
        ))}
      </div>
    </div>
  )
}

export default Faqs
