import React from 'react'
import {bindAll} from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'

export default class Walkthrough extends React.Component {
  static get propTypes () {
    return {
      className: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      onHide: PropTypes.func.isRequired,
      onClickBackdrop:PropTypes.func,
      onSlide: PropTypes.func,
      nextBtnTitle: PropTypes.string,
      backBtnTitle: PropTypes.string,
      CloseBtntitle: PropTypes.string,
      animated: PropTypes.bool
    }
  }

  static get defaultProps () {
    return {
      width: 500,
      height: 400,
      nextBtnTitle: 'Next',
      backBtnTitle: 'Back',
      closeBtnTitle: 'Close',
      animated: true
    }
  }

  constructor (props) {
    super(props)

    bindAll(this, [
      'onClickBack',
      'onClickNext',
      'onClickIndicator'
    ])

    this.state = {
      page: 0
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

  updatePage (page) {
    this.setState({page: page})
    if (this.props.onSlide) {
      this.props.onSlide(page)
    }
  }

  render () {
    if (! this.props.children) return null
    const amount = this.props.children.length // 全体のページ数
    const page = this.state.page // 現在の表示ページ
    const width = this.props.width // モーダル幅
    const height = this.props.height // モーダル高

    const modalStyle = {
      width: `${width}px`,
      height: `${height}px`
    }

    const containerStyle = {
      transform: `translateX(${width * page * -1}px)`,
      width: `${width * amount}px`,
      height: '100%'
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
      <div className={cx('walkthrough', this.props.className)}>
        <div className='walkthrough-backdrop' onClick={this.props.onClickBackdrop}>
          <div className='walkthrough-modal' style={modalStyle}>
            <div className={cx('walkthrough-container', {'animated': this.props.animated})} style={containerStyle}>
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
              <div className='walkthrough-page-indicator'>
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
