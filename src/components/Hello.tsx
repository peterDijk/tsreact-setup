import * as React from 'react'

export interface Props {
  name: string,
  enthusiasmLevel?: number
}

function Hello({ name, enthusiasmLevel = 1}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error(`You could be  a little more enthusiastic. :D`)
  }

  return (
    <section className="section-hello">
      <p>
        Hello {`${name} ${getExclamationMarks(enthusiasmLevel)}`}
      </p>
    </section>
  )
}

export default Hello

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}