import "../styles/Info.css"
import ListDot from "../assets/images/icon-list.svg?react"

export default function Info() {
  const benefits: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ]

  return (
    <section className="info">
      <h1>Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        {benefits.map((benefit: string) => {
          return (
            <li>
              <div>
                <ListDot />
              </div>
              <div>{benefit}</div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
