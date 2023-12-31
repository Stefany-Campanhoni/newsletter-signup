import "../styles/Button.css"


interface IPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: IPropsType) {
  return (
    <button onClick={props.onClick} type={props.type} className="Button">
      <span>{props.name}</span>
    </button>
  )
}
