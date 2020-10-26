import React, { PureComponent } from 'react';
import G2 from '@antv/g2';
import PropTypes from 'prop-types';

/*
* antV 柱状图
* nodeId : 节点Id
* data : 图表数据
* */
const styles = {
  title: {
    textAlign: 'center',
    letterSpacing: 2,
    color: '#666',
    fontWeight: 600,
  },
};
let chart = {};

class Index extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    const { nodeId, height, data, scale, axis, type, transpose } = this.props;
    chart = new G2.Chart({
      container: nodeId,
      forceFit: true,
      height: height,
      title: true
    });
    chart.scale(axis.y, {
      tickInterval: scale,
      alias:axis.yTitle
    });
    chart.scale(axis.x, {
      alias:axis.xTitle
    });
    if(axis.xTitle){
      chart.axis(axis.x, {
        title: {
          textStyle: {
            fontSize: 12, // 文本大小
            textAlign: 'center', // 文本对齐方式
            fill: '#999', // 文本颜色
          }
        }
      });
    }
    if(axis.yTitle){
      chart.axis(axis.y, {
        title: {
          textStyle: {
            fontSize: 12, // 文本大小
            textAlign: 'center', // 文本对齐方式
            fill: '#999', // 文本颜色
          }
        }
      });
    }
    if(transpose === true){
      chart.coord().transpose();
    }
    if(type && type === 'group') {
      chart.source(data);
      chart.interval().position(`${axis.x}*${axis.y}`).color(axis.groupField || 'name').adjust([{
        type: 'dodge',
        marginRatio: 1 / 32
      }]);
    }else if(type && type === 'stack') {
      chart.source(data);
      chart.intervalStack().position(`${axis.x}*${axis.y}`).color(axis.groupField || 'name');
    }else {
      chart.source(data);
      chart.interval().position(`${axis.x}*${axis.y}`);
    }
    chart.render();
  }


  render() {
    const { nodeId, height, title } = this.props;

    return (
      <div>
        <h2 style={{ ...styles.title }}>{title}</h2>
        <div style={{ height: height }} id={nodeId}/>
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
