import "../styles/Success.css"

import { NavigateFunction, useLocation, useNavigate } from "react-router-dom"
import SuccessIcon from "../assets/images/icon-success.svg?react"
import Button from "../components/Button"

export default function Success() {
  const email: string = useLocation().state
  const navigate: NavigateFunction = useNavigate()

  if (!email) {
    redirectToPrincipal()
  }

  function redirectToPrincipal() {
    navigate("/")
  }

  return (
    <section className="Success">
      <div>
        <SuccessIcon />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>{email}</b>. Please open it
          and click the button inside to confirm your subscription
        </p>
      </div>

      <div>
        <Button
          name="Dismiss message"
          type="button"
          onClick={redirectToPrincipal}
        />
      </div>
    </section>
  )
}
