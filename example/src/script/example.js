import React from 'react'
import ReactDOM from 'react-dom'
import MBWalkthrough from 'mb-walkthrough'

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
      <MBWalkthrough
        onHide={()=>{this.setState({show: false})}}
        width={400}
        height={200}
        nextBtnTitle='次へ'
        backBtnTitle='戻る'
        closeBtnTitle='閉じる'
        onClickBackdrop={()=>{alert('takeru')}}
        animationDuration={1000}
        onShow={()=>{alert('show')}}
        showIndicator={false}
        >
        <MBWalkthrough.Content>
          1
        </MBWalkthrough.Content>
        <MBWalkthrough.Content>
          2
        </MBWalkthrough.Content>

      </MBWalkthrough>
    )
  }
}

const testComponent = (
  <div>
    This is test Compo
    <ExampleWalkthrough />
  </div>
)

ReactDOM.render(
  testComponent,
  document.getElementById('test')
)