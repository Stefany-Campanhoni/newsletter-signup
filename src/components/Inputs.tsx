import "../styles/Inputs.css"

import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

type Inputs = {
  email: string
}

export default function Inputs() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate("success", {state: data.email})
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    if (!email || !emailRegex.test(email)) {
      return false
    }
    return true
  }

  return (
    <form
      className="inputs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="email-field">Email address</label>
        {errors.email && (
          <span className="error-message">Valid email required</span>
        )}
      </div>

      <Controller
        name="email"
        control={control}
        rules={{ required: true, validate: validateEmail }}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="email-field"
            placeholder="email@company.com"
            className={errors.email ? "email-error" : ""}
          />
        )}
      />

      <Button name="Subscribe to monthly newsletter" type="submit" />
    </form>
  )
}
