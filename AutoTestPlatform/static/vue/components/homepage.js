var homepage = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">项目首页</h1>\n' +
    '    </div>\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="panel">\n' +
    '            <div class="panel-body">\n' +
    '                <div class="col-md-10">\n' +
    '                    <div class="panel panel-default">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <p class="panel-title"><span class="glyphicon glyphicon glyphicon-signal"></span>&nbsp测试结果</p>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body">\n' +
    '                            <canvas id="line" class="chart chart-line" v-bind:chart-data="data1"\n' +
    '                                    v-bind:chart-labels="labels" v-bind:chart-series="series" chart-options="options"\n' +
    '                                    v-bind:chart-dataset-override="datasetOverride" v-bind:chart-colors="colors">\n' +
    '                            </canvas>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-md-2">\n' +
    '                    <div class="panel panel-default">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <p class="panel-title"><span class="glyphicon glyphicon glyphicon-signal"></span>&nbsp计划任务</p>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body">\n' +
    '                            <div v-for="plan in planList">\n' +
    '                                <a class="col-md-10" v-on:click="gotoPlan(plan.plan_id)">{{plan.plan_name}}</a>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>',
    data: function(){
        return {
            resultList: [],
            data1: new Array(3),
            labels: [],
            planList: [],
            colors: ['#46BFBD', '#FF0000', '#DCDCDC'],
            series: ['PASS_NUM', 'FAIL_NUM', 'CASE_NUM'],
            datasetOverride: [
                {
                    id:'y-axis-pass',
                    label: "PASS_NUM",
                    borderWidth: 3,
                    type: 'line'
                },
                {
                    id:'y-axis-fail',
                    label: "FAIL_NUM",
                    borderWidth: 3,
                    type: 'line'
                },
                {
                    id:'y-axis-total',
                    label: "CASE_NUM",
                    borderWidth: 3,
                    type: 'line'
                }
            ]
        }
    },
    mounted: function() {
        var that = this;
        Vue.http.post("interface/project/plan/list",{
            "pro_id": app.currProID,
            "status": 1
        }).then(function(response){
            if(response.body.code==1){
                that.planList = response.body.data;
            }else{
                alert(response.body.msg);
            }
        });
        Vue.http.post("interface/project/result/list",{
            "pro_id": app.currProID
        }).then(function(response){
            if(response.body.code==1){
                that.resultList = response.body.data;

                that.data1[0] = new Array(that.resultList.length);
                that.data1[1] = new Array(that.resultList.length);
                that.data1[2] = new Array(that.resultList.length);
                for (var i = 0; i < that.resultList.length; i++) {
                    that.labels[that.resultList.length-i-1] = that.resultList[i].report_name;
                    that.data1[0][that.resultList.length-i-1] = that.resultList[i].pass_num;
                    that.data1[1][that.resultList.length-i-1] = that.resultList[i].fail_num;
                    that.data1[2][that.resultList.length-i-1] = that.resultList[i].fail_num + that.resultList[i].pass_num;
                }
                console.log(that.labels)
                console.log(that.data1)
            }else{
                alert(response.body.msg);
            }
        });
    },
    methods:{
        gotoPlan: function(id){
            app.planId = id;
            app.planSelect = 1;
            app.active(6);
            this.$router.push('/project/interface/task');

        }
    }

});