import { useLocation, Navigate } from "react-router-dom"
import SuccessIcon from "../assets/images/icon-success.svg?react"
import Button from "../components/Button"

export default function Success() {
  const email: string = useLocation().state

  if (!email) {
    return <Navigate to={"/"} />
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

      <Button name="Dismiss message" type="button" />
    </section>
  )
}
