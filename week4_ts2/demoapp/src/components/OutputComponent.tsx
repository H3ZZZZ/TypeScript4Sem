import React from 'react'

interface IProps {
    text: string
}

const OutputComponent: React.FC<IProps> = ({text}) => {


  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default OutputComponent
