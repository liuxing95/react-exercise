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
class Index extends Component {
  constructor(props) {
    super(props);

  }

  base = (axis) => {
    chart.coord('theta');
    chart.intervalStack().position(`${axis.percent}`).color(`${axis.title}`).label(`${axis.percent}`, {
        offset: -40,
        // autoRotate: false,
        textStyle: {
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }).tooltip(`${axis.title}*${axis.percent}`, function(item, percent) {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      }).style({
        lineWidth: 1,
        stroke: '#fff'
      })
  };

  rang = (axis) => {
    const { data } = this.props;
    let sum = 0;
    data.forEach(item => {
      sum += item.value;
    });
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    chart.intervalStack().position(`${axis.percent}`).color(`${axis.title}`).opacity(1).label(`${axis.percent}`, {
      offset: -18,
      textStyle: {
        fill: 'white',
        fontSize: 12,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
      rotate: 0,
      autoRotate: false,
      formatter: function formatter(text, item) {
        return String(parseInt(item.point.percent * 100)) + '%';
      }
    });
    chart.guide().html({
      position: ['50%', '50%'],
      html: `<div class="guideWrapper"><p style="text-align: center" class="guideTitle">项目总计</p><p style="text-align: center" class="guideValue">${sum}</p></div>`
    });
    var dom = window.document.getElementsByClassName('guideWrapper');
    var title = window.document.getElementsByClassName('guideTitle');
    var value = window.document.getElementsByClassName('guideValue');
    chart.on('interval:mouseenter', function(ev) {
      var data = ev.data._origin;
      dom[0].style.opacity = '1';
      title[0].innerHTML = data[axis.title];
      value[0].innerHTML = data.value;
    });

    chart.on('interval:mouseleave', function() {
      title[0].innerHTML = '项目总计';
      value[0].innerHTML = sum;
    });
  };

  componentDidMount() {
    const { id, height, data, axis, type } = this.props;
    chart = new G2.Chart({
      container: id,
      forceFit: true,
      height: height,
      title: true
    });
    chart.source(data, {
      percent: {
        formatter: function formatter(val) {
          val = val * 100 + '%';
          return val;
        }
      }
    });
    if(type === 'base'){
      this.base(axis)
    }else if(type === 'rang'){
      this.rang(axis);
    }
    chart.tooltip({
      showTitle: false
    });

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
