import React, { Component } from 'react';
import echarts from 'echarts';
import { connect } from 'react-redux';
class LKEChartsTwo extends Component {
  render() {
    return (
      <>
        <div id="main2" style={{ height: 400 }}></div>
      </>
    );
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    let order_counter = nextProps.order_counter;

    let left_data = Object.keys(order_counter);
    let total = [];
    for (let i = 0; i < left_data.length; i++) {
      let obj = {};
      obj.name = left_data[i];
      obj.value = order_counter[left_data[i]];
      total.push(obj);
    }
    console.log(total);

    if (order_counter !== undefined) {
      let main2 = echarts.init(document.getElementById('main2'));
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: left_data,
        },
        series: [
          {
            name: '订单统计',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center',
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold',
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: total,
          },
        ],
      };
      main2.setOption(option);
    }
  }
}

const mapStateToProps = state => {
  return {
    order_counter: state.homeData.order_counter,
  };
};
export default connect(mapStateToProps, null)(LKEChartsTwo);
