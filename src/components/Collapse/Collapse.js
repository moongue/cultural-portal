import React, { Component } from 'react';
import Collapse from '@kunukn/react-collapse';
import './Collaplse.scss';

class MyCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.switchToggle = this.switchToggle.bind(this);
  }

  switchToggle() {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }

  render() {
    const { t, list, tittle, content } = this.props;
    const { toggle } = this.state;
    if (list.length)
      return (
        <div className="collapse">
          <button
            type="button"
            onClick={this.switchToggle}
            className="collapse--toggle"
          >
            {tittle}
          </button>
          <Collapse
            isOpen={toggle}
            transition="height 300ms cubic-bezier(.4, 0, .2, 1)"
          >
            {list.map((e, i) => (
              <div className="collapse--item" key={i}>
                <span>{e.date}</span>
                <span className={content}>
                  {t(e.info)}
                </span>
              </div>
            ))}
          </Collapse>
        </div>
      );
    else 
      return null;
  }
}

export default MyCollapse;
