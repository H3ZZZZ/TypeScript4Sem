import React from 'react'

interface IProps {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}

const InputComponent: React.FC<IProps> = ({text, setText}) => {
  return (
    <div>
      <input type="text" value={text} onChange={(evt) => setText(evt.target.value) }></input>
    </div>
  )
}

export default InputComponent
