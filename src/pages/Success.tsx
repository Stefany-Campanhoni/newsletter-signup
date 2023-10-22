import { useLocation, Navigate } from "react-router-dom"

export default function Success() {
  const email: string = useLocation().state

  if (!email) {
    return <Navigate to={"/"} />
  }

  return <div className="Success">{email}</div>
}
