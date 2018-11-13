import * as React from 'react'

interface Props {
  name: string
  enthusiasmLevel?: number
}

interface State {
  currentEnthusiasm: number
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 }
  }

  updateEnthusiasm = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm })
  }

  getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1)

  render() {
    const { name } = this.props

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    return (
      <section className="section-hello">
        <p className="greeting">
          Hello {`${name}${this.getExclamationMarks(this.state.currentEnthusiasm)}`}
        </p>
        <button onClick={this.onIncrement} className="btn btn-inc">+</button>
        <button onClick={this.onDecrement} className="btn btn-dec">-</button>
      </section>
    )
  }
}

export default Hello

