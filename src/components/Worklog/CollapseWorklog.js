import React, { Component, Fragment } from 'react';
import Collapse from '@kunukn/react-collapse';
import './CollapseWorklog.scss';

class CollapseWorklog extends Component {
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
        <div className="worklog_collapse">
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
                <tr className={content + '_collapse--item'} key={i}>
                  <td className="td1">{e.key1 }</td>
                  <td className="td2">{e.key2}</td>
                  <td className="td3">{e.key3 }</td>
                </tr>
                
            ))}
          </Collapse>
        </div>
      );
    else 
      return null;
  }
}

export default CollapseWorklog;
