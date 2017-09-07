import React from 'react'
import {bindAll} from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import bowser from 'bowser'

export default class Walkthrough extends React.Component {
  static get propTypes () {
    return {
      className: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      onHide: PropTypes.func.isRequired,
      onClickBackdrop:PropTypes.func,
      onSlide: PropTypes.func,
      onShow: PropTypes.func,
      nextBtnTitle: PropTypes.string,
      backBtnTitle: PropTypes.string,
      closeBtnTitle: PropTypes.string,
      animated: PropTypes.bool,
      animationDuration: PropTypes.number,
      showBackdrop: PropTypes.bool,
      showIndicator: PropTypes.bool,
      topSpace: PropTypes.number
    }
  }

  static get defaultProps () {
    return {
      width: 450,
      height: 360,
      nextBtnTitle: 'Next',
      backBtnTitle: 'Back',
      closeBtnTitle: 'Close',
      animated: true,
      animationDuration: 200,
      showBackdrop: true,
      showIndicator: true,
      topSpace: 100
    }
  }

  constructor (props) {
    super(props)

    bindAll(this, [
      'onClickBack',
      'onClickNext',
      'onClickIndicator',
      'onClickBackdrop',
      'onClickModal'
    ])

    this.state = {
      page: 0
    }
  }

  componentDidMount () {
    if (this.props.onShow) {
      this.props.onShow()
    }
  }

  onClickBack () {
    if (this.state.page <= 0) return
    this.updatePage(this.state.page - 1)
  }

  onClickNext () {
    const maxPage = this.props.children.length - 1
    if (this.state.page >= maxPage) {
      this.props.onHide()
      return
    }
    this.updatePage(this.state.page + 1)
  }

  onClickIndicator (index) {
    this.updatePage(index)
  }

  onClickBackdrop () {
    if (this.props.onClickBackdrop) {
      this.props.onClickBackdrop()
    }
  }

  onClickModal (e) {
    e.stopPropagation()
  }

  updatePage (page) {
    this.setState({page: page})
    if (this.props.onSlide) {
      this.props.onSlide(page)
    }
  }

  render () {
    if (! this.props.children) return null
    const amount = this.props.children.length
    const page = this.state.page
    const width = bowser.mobile ? window.innerWidth : this.props.width
    const height = bowser.mobile ? window.innerHeight : this.props.height
    const topSpace = bowser.mobile ? 0 : this.props.topSpace
    const modalStyle = {
      width: `${width}px`,
      height: `${height}px`,
      marginTop: `${topSpace}px`
    }

    const containerStyle = {
      transform: `translateX(${width * page * -1}px)`,
      width: `${width * amount}px`,
      height: '100%',
      transition: (() => {
        if (!this.props.animated) {
          return '0ms'
        }
        return `${this.props.animationDuration}ms ease-out`
      })()
    }

    const contentBoxStyle = {
      width: `${width}px`,
      height: '100%'
    }

    const indicators = this.props.children.map((val, index) => {
      return (
        <button onClick={() => this.onClickIndicator(index)} key={index}>
          <div className={cx('walkthrough-dot', {'selected': page === index})} />
        </button>
      )
    })

    return (
      <div className={cx('walkthrough', this.props
      .className)}>
        <div className={cx('walkthrough-backdrop', {'show': this.props.showBackdrop})} onClick={this.onClickBackdrop}>
          <div className='walkthrough-modal' style={modalStyle} onClick={this.onClickModal}>
            <div className='walkthrough-container' style={containerStyle}>
              {
                this.props.children.map(function (val, index) {
                  return (
                    <div className='walkthrough-content-box' style={contentBoxStyle} key={index}>
                      {val}
                    </div>
                  )
                })
              }
            </div>
            <div className='walkthrough-footer'>
              <button
                className={cx('btn-footer', 'btn-back', {'first-page': page === 0})}
                onClick={this.onClickBack}>
                {this.props.backBtnTitle}
              </button>
              <div className={cx('walkthrough-page-indicator', {'show': this.props.showIndicator})}>
                {indicators}
              </div>
              <button
                  className='btn-footer btn-next'
                onClick={this.onClickNext}>
                {
                  page < amount - 1
                    ? <span>{this.props.nextBtnTitle}</span>
                    : <span>{this.props.closeBtnTitle}</span>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class WalkthroughContent extends React.Component {
  static get propTypes () {
    return {
      className: PropTypes.string
    }
  }

  render () {
    return (
      <div className={cx('walkthrough-content', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

Walkthrough.Content = WalkthroughContent
