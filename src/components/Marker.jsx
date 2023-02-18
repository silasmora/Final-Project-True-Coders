import React from 'react'

export default function Marker(props) {
  return (
    <div
      style={{
        // position: 'absolute',
        // transform: 'translate(-50%, -50%)',
        // top: '50%',
        // left: '50%',
        // width: '25px',
        // height: '25px',
        // borderRadius: '50%',
        // background: 'black',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
      }}
    >
      {/* {props.text} */}
      <img className='iss-marker' src="./images/iss-black.svg" alt="ISS Marker" />
    </div>
  )
}
