import React,{ useState} from 'react'

export default function FBC(props) {
    let [state,changeState] = useState()
  return (
    <div>
      <p>I am a FBC {props.Topic}</p>
    </div>
  )
}
