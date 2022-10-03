import ButtonCss from './Button.module.css'

const Button = props => (
  <button className={ButtonCss['federated-button']} {...props}>
    {'Federated button'}
  </button>
)

export default Button
