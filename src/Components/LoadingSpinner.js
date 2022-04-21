import React from 'react'
import { Spinner } from 'react-bootstrap'


function LoadingSpinner() {
  return (
    <div>

{/* <Spinner animation="border" /> */}
<>
<Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" /><Spinner animation="grow" />
</>

    </div>
  )
}

export default LoadingSpinner