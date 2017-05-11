import {Component} from "@angular/core";
import {DateFormatter} from "@angular/common/src/pipes/intl";
/**
 * Created by Administrator on 2017/5/10.
 */
@Component({
    moduleId: module.id,
    selector: 'app-task',
    templateUrl: '../../views/main/task.html',
    styleUrls: ['../../styles/main/task.css'],
    providers: []
})
export class TaskComponent {
    getVirtulData() {
        let date = Date.parse('2016-01-01');
        let end = Date.parse('2017-01-01');
        let dayTime = 3600 * 24 * 1000;
        let data = [];
        for (let time = date; time < end; time += dayTime) {
            let date = new Date(time);
            data.push([
                date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate(),
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    }

    data = this.getVirtulData();

    option = {
        backgroundColor: '#404a59',

        title: {
            top: 30,
            text: '2016年某人每天的步数',
            subtext: '数据纯属虚构',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '30',
            left: '100',
            data: ['步数', 'Top 12'],
            textStyle: {
                color: '#fff'
            }
        },
        calendar: [{
            top: 100,
            left: 'center',
            range: ['2016-01-01', '2016-06-30'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                    width: 4,
                    type: 'solid'
                }
            },
            yearLabel: {
                formatter: '{start}  1st',
                textStyle: {
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    color: '#323c48',
                    borderWidth: 1,
                    borderColor: '#111'
                }
            }
        }, {
            top: 340,
            left: 'center',
            range: ['2016-07-01', '2016-12-31'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                    width: 4,
                    type: 'solid'
                }
            },
            yearLabel: {
                formatter: '{start}  2nd',
                textStyle: {
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    color: '#323c48',
                    borderWidth: 1,
                    borderColor: '#111'
                }
            }
        }],
        series: [
            {
                name: '步数',
                type: 'scatter',
                coordinateSystem: 'calendar',
                data: this.data,
                symbolSize: function (val) {
                    return val[1] / 500;
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: '步数',
                type: 'scatter',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: this.data,
                symbolSize: function (val) {
                    return val[1] / 500;
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top 12',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: this.data.sort(function (a, b) {
                    return b[1] - a[1];
                }).slice(0, 12),
                symbolSize: function (val) {
                    return val[1] / 500;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            },
            {
                name: 'Top 12',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                data: this.data.sort(function (a, b) {
                    return b[1] - a[1];
                }).slice(0, 12),
                symbolSize: function (val) {
                    return val[1] / 500;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };

}