import spinnerIcon from '../assets/spinner.svg'
import './spinner.css'

export default function Spinner() {
  return (
    <div className="spin-slow">
      <img
        src={spinnerIcon}
        alt="spinner"
        width={28}
        height={28}
      />
    </div>
  )
}
