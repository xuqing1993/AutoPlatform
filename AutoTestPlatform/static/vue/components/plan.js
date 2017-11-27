var plan = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">添加定时任务</h1>\n' +
    '    </div>\n' +
    '    <div class="marginRight pull-right">\n' +
    '        <button class="btn btn-info" v-on:click="addPlan()"><span class="glyphicon glyphicon-plus"></span>添加</button>\n' +
    '    </div>\n' +
    '    <div class="col-md-12 top3">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-body">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-12">\n' +
    '                        <ul class="nav nav-tabs">\n' +
    '                            <li v-bind:class="selectList[0]">\n' +
    '                                <a v-on:click="showSelect(0)">全部</a>\n' +
    '                            </li>\n' +
    '                            <li v-bind:class="selectList[1]">\n' +
    '                                <a v-on:click="showSelect(1)">进行中</a>\n' +
    '                            </li>\n' +
    '                            <li v-bind:class="selectList[2]">\n' +
    '                                <a v-on:click="showSelect(2)">已完成</a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <div v-for="(pl,index) in pageList">\n' +
    '                    <div class="panel panel-info">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h4 class="panel-title"  v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false" >\n' +
    '                                 <div class="row">\n' +
    '                                     <div class="col-xs-4">\n' +
    '                                     <a class="marginLeft" v-on:click="getTaskDetail(pl.plan_id,index)">{{pl.plan_name}}</a>\n' +
    '                                     </div>\n' +
    '                                     <div class="pull-right">\n' +
    '                                         <a v-show="shownCom" v-on:click="editPlan(pl.plan_id)"><span class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                         <a v-show="shownCom" v-on:click="cfDelPlan(pl.plan_id)"><span class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                                     </div>\n' +
    '                                </div>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body" v-show="showDetail[index]">\n' +
    '                            <table class="table">\n' +
    '                                <tr>\n' +
    '                                    <td class="wid1">名称</td>\n' +
    '                                    <td class="wid2">{{plan.plan_name}}</td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="wid1">类型</td>\n' +
    '                                    <td class="wid2">{{plan_type}}</td>\n' +
    '                                    <td class="wid1">间隔</td>\n' +
    '                                    <td class="wid2">{{plan.plan_interval+\'s\'}}</td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="wid1">开始时间</td>\n' +
    '                                    <td class="wid2">{{plan.start_time}}</td>\n' +
    '                                    <td class="wid1">结束时间</td>\n' +
    '                                    <td class="wid2">{{plan.end_time}}</td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="wid1">套件</td>\n' +
    '                                    <td class="wid2">{{suite.suite_name}}</td>\n' +
    '                                    <td class="wid1">运行环境</td>\n' +
    '                                    <td class="wid2" colspan="3">{{env.env_name}}</td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="wid1"></td>\n' +
    '                                    <td class="wid2"></td>\n' +
    '                                    <td class="wid1"></td>\n' +
    '                                    <td class="wid2"></td>\n' +
    '                                </tr>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="pull-right" v-show="totalItems>0">\n' +
    '                    <vue-nav :cur="currentPage" :all="allPage" :callback="pageChanged"></vue-nav>' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="modal fade" id="addPlanModal">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加定时任务\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">名称：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" v-model="plan.plan_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">类型：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="selected3">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="type in typeList" v-bind:value="type.type_id">{{ type.type_name}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group" v-show="selected3==1">\n' +
    '                            <label class="col-md-3 control-label">间隔：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <input type="text" class="form-control" v-model="plan.plan_interval">\n' +
    '                            </div>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="inteval">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="inteval in intevalType" v-bind:value="inteval">{{inteval}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">开始时间：</label>\n' +
    '                            <div class="col-md-8 ">\n' +
    '                                <div class="input-group date form_datetime startTime" ddata-date="1979-09-16T05:25:07Z" >\n' +
    '                                    <input autoclose="true" type="text" class="form-control" readonly style="background-color: white" v-model="plan.start_time" >\n' +
    '                                    <span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group" v-show="selected3==1">\n' +
    '                            <label class="col-md-3 control-label">结束时间：</label>\n' +
    '                            <div class="col-md-8 ">\n' +
    '                                <div class="input-group date form_datetime endTime" ddata-date="1979-09-16T05:25:07Z" >\n' +
    '                                    <input type="text" class="form-control" readonly style="background-color: white" v-model="plan.end_time">\n' +
    '                                    <span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">运行环境：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="selected1">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="env in envList" v-bind:value="env.env_id">{{env.env_name}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">套件：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="selected2">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="suite in suiteList" v-bind:value="suite.suite_id">{{suite.suite_name}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                     <btn class="btn btn-default" v-on:click="saveTask(inteval,selected1,selected2,selected3)">保存</btn>\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="modal fade" id="editPlanModal">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        编辑定时任务\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">名称：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" v-model="plan.plan_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">类型：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="selected3">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="type in typeList" v-bind:value="type.type_id">{{type.type_name}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group" v-show="selected3==1">\n' +
    '                            <label class="col-md-3 control-label">间隔：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <input type="text" class="form-control" v-model="plan.plan_interval">\n' +
    '                            </div>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="inteval">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="inteval in intevalType" v-bind:value="inteval">{{inteval}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">开始时间：</label>\n' +
    '                            <div class="col-md-8 ">\n' +
    '                                <div class="input-group date form_datetime startTime" ddata-date="1979-09-16T05:25:07Z" >\n' +
    '                                    <input type="text" class="form-control" readonly style="background-color: white" v-model="plan.start_time">\n' +
    '                                    <span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group" v-show="selected3==1">\n' +
    '                            <label class="col-md-3 control-label">结束时间：</label>\n' +
    '                            <div class="col-md-8 ">\n' +
    '                                <div class="input-group date form_datetime endTime" ddata-date="1979-09-16T05:25:07Z" >\n' +
    '                                    <input type="text" class="form-control" readonly style="background-color: white" v-model="plan.end_time">\n' +
    '                                    <span class="input-group-addon"><span class="glyphicon glyphicon-time"></span></span>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">运行环境：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="selected1" v-disabled="readOnly" style="background-color: white">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="env in envList" v-bind:value="env.env_id">{{env.env_name}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">套件：</label>\n' +
    '                            <div class="col-md-3">\n' +
    '                                <select class="form-control" v-model="selected2" v-disabled="readOnly" style="background-color: white">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="suite in suiteList" v-bind:value="suite.suite_id">{{suite.suite_name}}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                     <btn class="btn btn-default" v-on:click="saveTask(inteval,selected1,selected2,selected3)">保存</btn>\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="modal fade" id="cfDelPlan" >\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除定时任务\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    确定删除该定时任务？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delPlan()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n',
    data: function(){
        return {
            shownCom: false,
            selectList: ["active","disactive","disactive"],
            planList: [],
            totalItems: 0,
            currentPage: 1,
            allPage: 1,
            plan_type: '',
            plan: {
                "pro_id": app.currProID,
                "suite_id": null,
                "env_id": null,
                "plan_name": "",
                "plan_type": "",
                "plan_interval": 0,
                "start_time": "",
                "end_time": ""
            },
            typeList: [{"type_id":1,"type_name":"循环"},{"type_id":2,"type_name":"不循环"}],
            intevalType: ["秒","分","时","日","周","月"],
            envList: [],
            env: {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            },
            suiteList: [],
            suite: {
                "suite_desc": "",
                "suite_id": null,
                "pro_id": app.currProID,
                "suite_name": ""
            },
            showDetail: [],
            prentedIndex: 0,
            delPlanId: null,
            pageList: [],
            totalItems: 0,
            currentPage: 1,
            inteval: '',
            selected1: 0,
            selected2: 0,
            selected3: 0,
            readOnly: false
        }
    },
    components:{
        'vue-nav': Vnav
    },
    mounted: function() {
        var that = this;
        Vue.http.post('interface/project/env/list', {
             "pro_id": app.currProID
        }).then(function (response) {
            if(response.body.code==1) {
                that.envList = response.body.data;
            }else{
                alert(response.body.msg);
            }
        });
        Vue.http.post('interface/project/suite/list', {
             "pro_id": app.currProID
        }).then(function (response1) {
             if(response1.body.code==1) {
                 that.suiteList = response1.body.data;
             }else{
                alert(response1.body.msg);
            }
        });
        if(app.planSelect==1){
             that.selectList = ["disactive","active","disactive"];
             that.showSelect(1);
             that.getTaskDetail(app.planId,0);
        }else{
             that.selectList=["active","disactive","disactive"];
             that.showSelect(0);
         };
        $('.form_datetime').datetimepicker({
            autoclose: true,
            bootcssVer: 3,
            language: 'zh_CN',
            weekStart: 1,
            todayBtn:  1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        })
        .on('hide', function (ev) {
            var className = this.className.toString();
            var value = this.children[0].value;
            if(className.indexOf('startTime')!=-1){
                that.plan.start_time = value;
            }else if(className.indexOf('endTime')!=-1){
                that.plan.end_time = value;
            }
         });
    },
    methods:{
        showSelect: function(index){
            var that = this;
            that.prentedIndex = index;
            for(var i=0;i<that.selectList.length;i++){
                that.selectList[i] = "disactive";
            }
            that.selectList[index] = "active";
            Vue.http.post("interface/project/plan/list",{
                "pro_id": app.currProID,
                "status": index
            }).then(function(response1){
                if(response1.body.code==1){
                    that.planList = response1.body.data;
                    that.totalItems = that.planList.length;
                    that.currentPage = 1;
                    that.pageChanged(1);
                    that.showDetail = [];
                    for(var i=0;i<that.planList.length;i++){
                        that.showDetail[i] = false;
                    }
                }else{
                    alert(response1.body.msg)
                }
            })
        },
        pageChanged: function(data){
            var that = this;
            that.currentPage = data;
            Vue.http.post("interface/project/plan/list",{
                "pro_id": app.currProID,
                "status": that.prentedIndex
            }).then(function(response1) {
                if (response1.body.code == 1) {
                    that.planList = response1.body.data;
                    that.totalItems = that.planList.length;
                    that.allpage = Math.ceil(that.planList.length/10);
                    that.pageList = [];
                    if(that.totalItems>0){
                        if(that.currentPage==Math.ceil(that.planList.length/10)){
                            for(var i=0;i<that.planList.length-(that.currentPage-1)*10;i++){
                                that.pageList[i] = that.planList[(that.currentPage-1)*10+i];
                            }
                        }else{
                            for(var i=0;i<10;i++){
                                that.pageList[i] = that.planList[(that.currentPage-1)*10+i];
                            }
                        }
                    }
                }else{
                    alert(response1.body.msg)
                }
            })
        },
        addPlan: function(){
            this.plan = {
                "pro_id": app.currProID,
                "suite_id": null,
                "env_id": null,
                "plan_name": "",
                "plan_type": "",
                "plan_interval": 0,
                "start_time": "",
                "end_time": ""
            };
            this.selected1 = 0;
            this.selected2 = 0;
            this.selected3 = 0;
            this.inteval = "";
            $("#addPlanModal").modal();
        },
        saveTask: function(inteval,envId,suiteId,typeId) {
            var that = this;
            if(typeId==2){
                that.plan.end_time = that.plan.start_time;
                that.plan.plan_interval = 0;
            }else{
                that.plan.plan_interval = parseInt(that.plan.plan_interval);
                switch(inteval){
                    case "秒":
                        break;
                    case "分":
                        that.plan.plan_interval = that.plan.plan_interval*60;
                        break;
                    case "时":
                        that.plan.plan_interval = that.plan.plan_interval*3600;
                        break;
                    case "日":
                        that.plan.plan_interval = that.plan.plan_interval*3600*24;
                        break;
                    case "周":
                        that.plan.plan_interval = that.plan.plan_interval*3600*24*7;
                        break;
                    case "月":
                        that.plan.plan_interval = that.plan.plan_interval*3600*24*30;
                        break;
                }
            }
            if(that.plan.start_time.split(':').length==2){
                that.plan.start_time = that.plan.start_time+':00';
            }
            if(that.plan.end_time.split(':').length==2){
                that.plan.end_time = that.plan.end_time+':00';
            }
            if(that.plan.plan_id==undefined){
                Vue.http.post("interface/project/plan/create",{
                    "pro_id": app.currProID,
                    "suite_id": suiteId,
                    "env_id": envId,
                    "plan_name": that.plan.plan_name,
                    "plan_type": typeId,
                    "plan_interval": that.plan.plan_interval,
                    "start_time": that.plan.start_time,
                    "end_time": that.plan.end_time
                }).then(function(response){
                    if(response.body.code==1){
                        $("#addPlanModal").modal('hide');
                        Vue.http.post("interface/project/plan/list",{
                            "pro_id": app.currProID,
                            "status": that.prentedIndex
                        }).then(function(response1){
                            if(response1.body.code==1){
                                that.planList = response1.body.data;
                                that.totalItems = that.planList.length;
                                that.allPage = Math.ceil(that.planList.length/10);
                                that.pageChanged(that.allPage);
                                that.showDetai = [];
                                for(var i=0;i<that.planList.length;i++){
                                    that.showDetail[i] = false;
                                }
                            }else{
                                alert(response1.body.msg)
                            }
                        })
                    }else{
                        alert(response.body.msg);
                    }
                })
            }else{
                Vue.http.post("interface/project/plan/edit",{
                    "plan_id": that.plan.plan_id,
                    "plan_name": that.plan.plan_name,
                    "plan_type": typeId,
                    "plan_interval": that.plan.plan_interval,
                    "start_time": that.plan.start_time,
                    "end_time": that.plan.end_time
                }).then(function(response){
                    if(response.body.code==1){
                        $("#editPlanModal").modal('hide');
                        Vue.http.post("interface/project/plan/list",{
                            "pro_id": app.currProID,
                            "status": that.prentedIndex
                        }).then(function(response1){
                            if(response1.body.code==1){
                                that.planList = response1.body.data;
                                that.totalItems = that.planList.length;
                                that.pageChanged(that.currentPage);
                                that.showDetai = [];
                                for(var i=0;i<that.planList.length;i++){
                                    that.showDetail[i] = false;
                                }
                            }else{
                                alert(response1.body.msg)
                            }
                        })
                    }else{
                        alert(response.body.msg)
                    }
                })
            }
        },
        getTaskDetail: function(planID,index){
            var that = this;
            for(var i=0;i<that.showDetail.length;i++){
                if(i!=index){
                    that.showDetail[i] = false;
                }
            }
            that.showDetail[index] = !that.showDetail[index];
            Vue.http.post("interface/project/plan/detail",{
                "plan_id": planID
            }).then(function(response){
                if(response.body.code==1){
                    that.plan = response.body.data;
                    that.plan.start_time = app.CovertToDate(that.plan.start_time);
                    that.plan.end_time = app.CovertToDate(that.plan.end_time);
                    if(that.plan.plan_type==1){
                        that.plan_type = "循环";
                    }else{
                        that.plan_type = "不循环";
                    }
                    Vue.http.post("interface/project/suite/detail",{
                        "suite_id": that.plan.suite_id
                    }).then(function(response1){
                        if(response1.body.code==1){
                            that.suite = response1.body.data;
                        }else{
                            alert(response1.body.msg);
                        }
                    })
                    Vue.http.post("interface/project/env/detail",{
                        "env_id": that.plan.env_id
                    }).then(function(response2){
                        if(response2.body.code==1){
                            that.env = response2.body.data;
                        }else{
                            alert(response2.body.msg)
                        }
                    })
                }else{
                    alert(response.body.msg);
                }
            })
        },
        editPlan: function(planID){
            var that = this;
            Vue.http.post("interface/project/plan/detail",{
                "plan_id": planID
            }).then(function(response){
                if(response.body.code==1){
                    that.plan = response.body.data;
                    that.readOnly = true;
                    that.selected1 = that.plan.env_id;
                    that.selected2 = that.plan.suite_id;
                    that.selected3 = that.plan.plan_type;
                    that.plan.start_time = app.CovertToDate(that.plan.start_time);
                    that.plan.end_time = app.CovertToDate(that.plan.end_time);
                    if(that.plan.plan_interval>3600*24*30){
                        that.plan.plan_interval = that.plan.plan_interval/3600*24*30;
                        that.inteval="月";
                    }else if(that.plan.plan_interval>3600*24*7){
                        that.plan.plan_interval = that.plan.plan_interval/3600*24*7;
                        that.inteval="周";
                    }else if(that.plan.plan_interval>3600*24){
                        that.plan.plan_interval = that.plan.plan_interval/3600*24;
                        that.inteval="天";
                    }else if(that.plan.plan_interval>3600){
                        that.plan.plan_interval = that.plan.plan_interval/3600;
                        that.inteval="时";
                    }else if(that.plan.plan_interval>60){
                        that.plan.plan_interval = that.plan.plan_interval/60;
                        that.inteval="分";
                    }else{
                        that.inteval="秒";
                    }
                    $("#editPlanModal").modal();
                }else{
                    alert(response.body.msg);
                }
            })
        },
        cfDelPlan: function(planId){
            this.delPlanId = planId;
            $("#cfDelPlan").modal();
        },
        delPlan: function(){
            var that = this;
            Vue.http.post("interface/project/plan/delete",{
                "plan_id": that.delPlanId
            }).then(function(response){
                if(response.body.code==1){
                    $("#cfDelPlan").modal('hide');
                    Vue.http.post("interface/project/plan/list",{
                        "pro_id": app.currProID,
                        "status": that.prentedIndex
                    }).then(function(response1){
                        if(response1.body.code==1){
                            that.planList = response1.body.data;
                            that.totalItems = that.planList.length;
                            var newPage = Math.ceil(that.planList.length/10);
                            if(that.currentPage == newPage+1){
                                that.currentPage--;
                            };
                            that.pageChanged(that.currentPage);
                            that.showDetai = [];
                            for(var i=0;i<that.planList.length;i++){
                                that.showDetail[i] = false;
                            }
                        }else{
                            alert(response1.body.msg);
                        }
                    })
                }else{
                    alert(response.body.msg);
                }
            })
        }
    }
});