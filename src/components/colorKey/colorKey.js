import React from 'react'
import './colorKey.scss'

class colorKey extends React.Component {
  render () {
    return <div className='colorKey'>
      <h1 className='colorheading'>Color Key</h1>

      <div className='colorKey-box'>

        <div className='colorKey-box-row'>
          <div className='colorKey-box-row-col11'>
            <span className='colorKey-box-row-col11-c1' /> <p>Yours</p>
          </div>
          <div className='colorKey-box-row-col12'>
            <span className='colorKey-box-row-col12-c2' /> <p>Yours on sale</p>
          </div>
          <div className='colorKey-box-row-col13'>
            <span className='colorKey-box-row-col13-c3' /> <p>Taken</p>
          </div>
        </div>

        <div className='colorKey-box-row'>
          <div className='colorKey-box-row-col21'>
            <span className='colorKey-box-row-col21-c1' /> <p>District</p>
          </div>
          <div className='colorKey-box-row-col22'>
            <span className='colorKey-box-row-col22-c2' /> <p>Contribution</p>
          </div>
          <div className='colorKey-box-row-col23'>
            <span className='colorKey-box-row-col23-c3' /><p>Roads</p>
          </div>
        </div>

        <div className='colorKey-box-row'>
          <div className='colorKey-box-row-col31'>
            <span className='colorKey-box-row-col31-c1' /> <p>Plaza</p>
          </div>
          <div className='colorKey-box-row-col32'>
            <span className='colorKey-box-row-col32-c2' /><p>Unowned</p>
          </div>
          <div className='colorKey-box-row-col33'>
            <span className='colorKey-box-row-col33-c3' /><p>On sale</p>
          </div>
        </div>

      </div>
    </div>
  }
}

export default colorKey
