import { useParams } from 'react-router-dom'

const PaymentResult = () => {
  const { payload } = useParams()
  console.log('payload: ', payload)
  return <div>asdf</div>
}

export default PaymentResult
