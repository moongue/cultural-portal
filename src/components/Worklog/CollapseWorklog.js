import React, { Component } from 'react';
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
    const { list, tittle, content } = this.props;
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
            <table style={{ width: '100%' }}>
              <tbody>
                {list.map((e, i) => (
                  <tr className={`${content}_collapse--item`} key={i}>
                    <td className="td1">{this.props.t(e.key1)}</td>
                    <td className="td2">{this.props.t(e.key2)}</td>
                    <td className="td3">{this.props.t(e.key3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Collapse>
        </div>
      );
    return null;
  }
}

export default CollapseWorklog;
