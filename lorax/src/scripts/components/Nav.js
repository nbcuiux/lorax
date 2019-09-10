
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import DelayChain from '../lib/DelayChain';


export default class Nav extends Component {


  constructor(props) {
    super(props);
    this.state={
      isRicketing: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isOpen !== nextProps.isOpen ||
        this.props.pageIndex !== nextProps.pageIndex) {
      return true;
    }

    return false;
  }

  render() {
    let {navItems, isOpen, pages, pageIndex } = this.props;

    let classnames = ClassNames({
      'nav': true,
      'nav--open': isOpen,
      'nav--ricketing': this.state.isRicketing
    });
    return (
      <div className={classnames}>
        <div className="nav-inner">
          <div className="nav-list">
            {
              pages.map((item, index)=>{
                return <NavItem 
                  item={item} 
                  key={index} 
                  index={index} 
                  slug={item.slug}
                  onClick={this.props.navTo} 
                  currPageIndex={pageIndex} />
              })
            }
            <div className="nav-item">
              <div className="nav-item__social">
                <a className="nav-item__fb" href="https://www.facebook.com/theloraxmovie/"></a>
                <a className="nav-item__tw" href="https://twitter.com/thelorax"></a>
              </div>
            </div>
          </div>
          <div className="nav-bottom">
            <img className="nav-tree-1" src={window.STATIC_URL + "/img/menu-tree-1.png"} />
            <img className="nav-tree-2" src={window.STATIC_URL + "/img/menu-tree-2.png"} />
            <img className="nav-tree-3" src={window.STATIC_URL + "/img/menu-tree-3.png"} />
            <img className="nav-grass" src={window.STATIC_URL + "/img/nav-grass.png"} />
            <img className="nav-tree-1" src={window.STATIC_URL + "/img/menu-tree-1.png"} />
          </div>
        </div>
      </div>
    );
  }
}



class NavItem extends Component {


  constructor(props) {
    super(props);
    this.dc = new DelayChain;
    this.state = {
      isRicketing: false
    }
  }

  onClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.slug);
  }

  onMouseEnter(e) {
    this.setState({
      isRicketing: true
    })

    this.dc.cancel();

    this.dc.delay(900, ()=>{
      this.setState({
        isRicketing: false
      });
    });

  }

  render() {
    let {item, currPageIndex, index } = this.props;
    let classnames= ClassNames({
      'nav-item': true,
      'nav-item--before': index < currPageIndex,
      'nav-item--curr': index === currPageIndex,
      'nav-item--after': index > currPageIndex,
      'nav-item--ricketing': this.state.isRicketing
    })

    return (
      <div className={classnames} onMouseEnter={this.onMouseEnter.bind(this)}>
        <a className="nav-item__inner" href="#" onClick={this.onClick.bind(this)}>
          <span className="nav-item__title">{item.post_title}</span>
        </a>
      </div>
    );
  }
}