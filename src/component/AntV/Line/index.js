import React, { Component } from 'react';
import G2 from '@antv/g2';
import PropTypes from 'prop-types';

let chart = {};

const styles = {
  title: {
    textAlign: 'center',
    letterSpacing: 2,
    color: '#666',
    fontWeight: 600,
  },
};
var Util = G2.Util;
var KEY_DOWN = false;
class Index extends Component {
  constructor(props) {
    super(props);

  }

  base = (axis) => {
    chart.scale(axis.value, {
      min: 0,
    });
    chart.scale(axis.title, {
      range: [0, 1],
    });
    chart.tooltip({
      crosshairs: {
        type: 'line',
      },
    });
    chart.line().position(`${axis.title}*${axis.value}`);
    chart.point().position(`${axis.title}*${axis.value}`).size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1,
    });
  };

  multiple = (axis) => {
    chart.scale('year', {
      range: [0, 1]
    });
    chart.tooltip({
      crosshairs: 'y',
      shared: true,

    });
    chart.legend({
      position: 'bottom-center',
      onHover: Util.debounce(function(ev) {
        var item = ev.item;

        var country = item.dataValue;
        chart.get('geoms').forEach(function(geom) {
          geom.getShapes().forEach(function(shape) {
            var origin = shape.get('origin');
            if (Util.isArray(origin)) {
              origin = origin[0];
            }
            if (!shape.get('_originAttrs')) {
              shape.set('_originAttrs', Util.cloneDeep(shape._attrs)); // 缓存原来的属性
            }
            if (origin._origin.country === country) {
              var originAttrs = shape.get('_originAttrs');
              shape._attrs = Util.cloneDeep(originAttrs);
            } else {
              shape.attr('stroke', '#ccc');
            }
          });
        });
      }),
      onUnhover: Util.debounce(function() {
        chart.get('geoms').forEach(function(geom) {
          geom.getShapes().forEach(function(shape) {
            if (shape.get('_originAttrs')) {
              var originAttrs = shape.get('_originAttrs');
              shape._attrs = Util.cloneDeep(originAttrs);
            }
          });
        });
        chart.get('canvas').draw();
      })
    });
    chart.line().position(`${axis.Yaxis}*${axis.value}`).color(`${axis.title}`);
    chart.point().position(`${axis.Yaxis}*${axis.value}`).color(`${axis.title}`).style({
      lineWidth: 2
    });

  };

  componentDidMount() {
    const { id, data, height, axis, type } = this.props;
    chart = new G2.Chart({
      container: id,
      forceFit: true,
      height: height,
    });
    chart.source(data);
    if (type === 'base') {
      this.base(axis);
    } else if (type === 'multiple') {
      this.multiple(axis);
    }


    chart.render();
  }


  render() {
    const { id, title } = this.props;
    return (
      <div>
        <h2 style={styles.title}>{title}</h2>
        <div id={id}>

        </div>
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
