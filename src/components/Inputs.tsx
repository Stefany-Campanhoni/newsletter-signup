import "../styles/Inputs.css"

export default function Inputs() {
  return (
    <section className="inputs">
      <label htmlFor="email-field">Email address</label>

      <input
        type="email"
        name="email"
        id="email-field"
        placeholder="email@company.com"
      />

      <input
        type="submit"
        value="Subscribe to monthly newsletter"
      />
    </section>
  )
}
