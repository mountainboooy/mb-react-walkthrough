import React from 'react'
import ReactDOM from 'react-dom'
import MBWalkthrough from 'mb-react-walkthrough'

class ExampleWalkthrough extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      show: true
    }
  }

  render () {
    if (!this.state.show) return null

    return (
      <MBWalkthrough onHide={()=>{this.setState({show: false})}}>
        <MBWalkthrough.Content>
          <div className='title'>
            PAGE 1
          </div>
          <div className='desc'>
            Hello! This is a sample sentence. Hello ! This is a sample sentence. Hello! This is...
          </div>
        </MBWalkthrough.Content>
        <MBWalkthrough.Content>
          <div className='title'>
            PAGE 2
          </div>
          <div className='desc'>
            Hello! This is a sample sentence. Hello ! This is a sample sentence. Hello! This is...
          </div>
        </MBWalkthrough.Content>
        <MBWalkthrough.Content>
          <div className='title'>
            PAGE 3
          </div>
          <div className='desc'>
            Hello! This is a sample sentence. Hello ! This is a sample sentence. Hello! This is...
          </div>
        </MBWalkthrough.Content>
        <MBWalkthrough.Content>
          <div className='title'>
            PAGE 4
          </div>
          <div className='desc'>
            Hello! This is a sample sentence. Hello ! This is a sample sentence. Hello! This is...
          </div>
        </MBWalkthrough.Content>
        <MBWalkthrough.Content>
          <div className='title'>
            PAGE 5
          </div>
          <div className='desc'>
            Hello! This is a sample sentence. Hello ! This is a sample sentence. Hello! This is...
          </div>
        </MBWalkthrough.Content>
      </MBWalkthrough>
    )
  }
}

const exampleComponent = (
  <div>
    <ExampleWalkthrough />
  </div>
)

ReactDOM.render(
  exampleComponent,
  document.getElementById('react-root')
)