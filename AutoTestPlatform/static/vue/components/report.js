var report = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">测试报告</h1>\n' +
    '    </div>' +
    '    <div class="row top4" v-show="repList">\n' +
    '        <form class="col-md-2 bs-example bs-example-form">\n' +
    '            <div class="input-group">\n' +
    '                <span class="input-group-addon">套件</span>\n' +
    '                <select class="form-control" v-model="suite">\n' +
    '                    <option value="">无</option>\n' +
    '                    <option v-for="suite1 in suiteList" v-bind:value="suite1">{{suite1.suite_name}}</option>'+
    '                </select>\n' +
    '            </div>\n' +
    '        </form>' +
    '       <form class="col-md-3 bs-example bs-example-form">\n' +
    '            <div class="input-group date form_date startTime" data-date="" data-date-format="dd MM yyyy">\n' +
    '                <span class="input-group-addon">起始时间</span>\n' +
    '                <input type="text" class="form-control" v-model="startDate" readonly style="background: white">\n' +
    '                <span class=" input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>\n' +
    '            </div>\n' +
    '        </form>' +
    '       <form class="col-md-3 bs-example bs-example-form">\n' +
    '            <div class="input-group date form_date endTime" data-date="" data-date-format="dd MM yyyy"\n' +
    '                 data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">\n' +
    '                <span class="input-group-addon">结束时间</span>\n' +
    '                <input class="form-control" type="text" v-model="endDate" readonly style="background: white">\n' +
    '                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>\n' +
    '            </div>\n' +
    '        </form> ' +
    '       <form class="col-md-2 bs-example bs-example-form">\n' +
    '            <div class="input-group">\n' +
    '                <span class="input-group-addon">标题</span>\n' +
    '                <input type="text" class="form-control" v-model="title">\n' +
    '            </div>\n' +
    '        </form>' +
    '       <div class="btn-group col-md-2">\n' +
    '            <button class="btn btn-info" v-on:click="inquiry(reportName)">查询</button>\n' +
    '            <button class="btn btn-danger" v-on:click="clearSelect()">清除</button>\n' +
    '        </div>' +
    '        <div class="top3 col-md-11">\n' +
    '            <table class="table table-hover">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th>序号</th>\n' +
    '                    <th>标题</th>\n' +
    '                    <th>套件</th>\n' +
    '                    <th>时间</th>\n' +
    '                    <th>运行时长</th>\n' +
    '                    <th>成功用例数</th>\n' +
    '                    <th>失败用例数</th>\n' +
    '                    <th>操作</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                <tr v-for="(rt,index) in pageList">\n' +
    '                    <td>{{(currentPage-1)*15+index+1}}</td>\n' +
    '                    <td>{{rt.report_name}}</td>\n' +
    '                    <td>{{rt.suite_name}}</td>\n' +
    '                    <td>{{rt.start_time}}</td>\n' +
    '                    <td>{{timeInval[index]}}</td>\n' +
    '                    <td>{{rt.pass_num}}</td>\n' +
    '                    <td>{{rt.fail_num}}</td>\n' +
    '                    <td>\n' +
    '                        <a v-on:click="showDetail(rt)">查看详情</a>\n' +
    '                        <a v-on:click="delReport(rt.result_id)">删除</a>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div class="pull-right marginRight" v-show="totalItems>15">\n' +
    '            <pagination boundary-links="true" total-items="totalItems" v-model="currentPage" v-on:change="pageChanged(1)"\n' +
    '                        class="pagination" items-per-page="15" previous-text="上一页" next-text="下一页" first-text="&laquo;" last-text="&raquo;">\n' +
    '        </div>' +
    '    </div>' +
    '    <div v-show="repDetail">\n' +
    '        <a v-on:click="returnList()">&lt;&lt;&lt;返回报告列表</a>\n' +
    '        <div class="row top3">\n' +
    '            <span class="col-md-3">\n' +
    '                <h4>报告名：{{result.report_name}}</h4>\n' +
    '                开始时间：<span>{{result.start_time}}</span></br>\n' +
    '                结束时间：<span>{{result.end_time}}</span>\n' +
    '            </span>\n' +
    '            <div class="pull-right marginRight div-set" >\n' +
    '                <button v-bind:disabled="true" type="button" class="textsize btn btn-lg btn-success">\n' +
    '                    <span>{{result.pass_num}}</span></br>通过\n' +
    '                </button>\n' +
    '                <button v-bind:disabled="true" type="button" class="textsize btn btn-lg btn-danger" >\n' +
    '                    <span>{{result.fail_num}}</span></br>失败\n' +
    '                </button>\n' +
    '                <button v-bind:disabled="true" type="button" class="textsize btn btn-lg btn-danger" >\n' +
    '                    <span>{{result.unrun_num}}</span></br>错误\n' +
    '                </button>\n' +
    '                <button v-bind:disabled="true" type="button" class="textsize btn btn-lg btn-info">\n' +
    '                    <span>{{result.pass_num+result.fail_num}}</span></br>合计\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>' +
    '        <div class="top2 col-md-11">\n' +
    '            <table class="design col-xs-12">\n' +
    '                <tr>\n' +
    '                    <th class="wid9">ID</th>\n' +
    '                    <th class="wid3">接口名称</th>\n' +
    '                    <th class="wid4">用例名称</th>\n' +
    '                    <th class="wid3">请求方法</th>\n' +
    '                    <th class="wid3">验证器</th>\n' +
    '                    <th class="wid9">结果</th>\n' +
    '                </tr>\n' +
    '                <tr v-for="(rdl,index) in reaultDetailList">\n' +
    '                    <td v-show="reportDetal[index]" colspan="6">\n' +
    '                        <table class="col-xs-12">\n' +
    '                            <tr>\n' +
    '                                <td class="wid9">\n' +
    '                                    <a v-on:click="showReport(rdl,index)">{{(currentPage2-1)*15+index+1}}</a>\n' +
    '                                </td>\n' +
    '                                <td class="wid3">{{rdl.api_name}}</td>\n' +
    '                                <td class="wid4">{{rdl.case_name}}</td>\n' +
    '                                <td class="wid3">{{rdl.check_desc}}</td>\n' +
    '                                <td class="wid3">{{rdl.check_desc}}</td>\n' +
    '                                <td class="wid9">\n' +
    '                                    <button v-bind:disabled="true" type="button" class="btn btn-success"\n' +
    '                                            v-show="rdl.is_pass==1">\n' +
    '                                        通过\n' +
    '                                    </button>\n' +
    '                                    <button v-bind:disabled="true" type="button" class="btn btn-danger"\n' +
    '                                            v-show="rdl.is_pass==0">\n' +
    '                                        失败\n' +
    '                                    </button>\n' +
    '                                    <button v-bind:disabled="true" type="button" class="btn btn-danger"\n' +
    '                                            v-show="rdl.is_pass==2">\n' +
    '                                        错误\n' +
    '                                    </button>\n' +
    '                                </td>\n' +
    '                            </tr>\n' +
    '                        </table>\n' +
    '                        <div class="container">\n' +
    '                            <table class="table">\n' +
    '                                <thead>\n' +
    '                                    <tr>\n' +
    '                                        <td>请求信息</td>\n' +
    '                                    </tr>\n' +
    '                                </thead>\n' +
    '                                <tr>\n' +
    '                                    <td class="detailTable1">URL</td>\n' +
    '                                    <td class="detailTable2">{{rdl.input_data.url}}</td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="detailTable1">body参数</td>\n' +
    '                                    <td class="detailTable2">{{rdl.input_data.body}}</td>\n' +
    '                                </tr>\n' +
    '                                <thead>\n' +
    '                                    <tr>\n' +
    '                                        <td>响应信息</td>\n' +
    '                                    </tr>\n' +
    '                                </thead>\n' +
    '                                <tr>\n' +
    '                                    <td class="detailTable1">状态码</td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.status_check==null">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,1)">实际结果</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.status_check==0">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,1)">失败</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.status_check==1">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,1)">通过</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.status_check==2">\n' +
    '                                        <button class="btn-link" v-bind:disabled="true">未校验</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.status_check==3">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,1)">错误</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="detailTable1">body</td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.body_check==1">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,2)">通过</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.body_check==0">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,2)">失败</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.body_check==2">\n' +
    '                                        <button class="btn-link" v-bind:disabled="true">未校验</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.body_check==3">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,2)">错误</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                                <tr>\n' +
    '                                    <td class="detailTable1">schema</td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.schema_check==1">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,3)">通过</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.schema_check==0">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,3)">失败</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.schema_check==2">\n' +
    '                                        <button class="btn-link" v-bind:disabled="true">未校验</button>\n' +
    '                                    </td>\n' +
    '                                    <td class="detailTable2" v-show="rdl.schema_check==3">\n' +
    '                                        <button class="btn-link" v-on:click="getResult(rdl,3)">错误</button>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <a v-show="!reportDetal[index]" v-on:click="showReport(rdl,index)">{{(currentPage2-1)*15+index+1}}</a>\n' +
    '                    </td>\n' +
    '                    <td v-show="reportDetal[index]==false">{{rdl.api_name}}</td>\n' +
    '                    <td v-show="reportDetal[index]==false">{{rdl.case_name}}</td>\n' +
    '                    <td v-show="reportDetal[index]==false">{{rdl.case_method}}</td>\n' +
    '                    <td v-show="reportDetal[index]==false">{{rdl.check_desc}}</td>\n' +
    '                    <td v-show="reportDetal[index]==false">\n' +
    '                        <button type="button" v-bind:disabled="true" class="btn btn-success" v-show="rdl.is_pass==1">\n' +
    '                            通过\n' +
    '                        </button>\n' +
    '                        <button type="button" v-bind:disabled="true" class="btn btn-danger" v-show="rdl.is_pass==0">\n' +
    '                            失败\n' +
    '                        </button>\n' +
    '                        <button v-bind:disabled="true" type="button" class="btn btn-danger" v-show="rdl.is_pass==2">\n' +
    '                            错误\n' +
    '                        </button>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </div>' +
    '        <div class="pull-right marginRight" v-show="totalItems2>15">\n' +
    '            <pagination boundary-links="true" total-items="totalItems2" v-model="currentPage2" items-per-page="15" v-on:change="pageChanged(2)"\n' +
    '                        class="pagination" previous-text="上一页" next-text="下一页" first-text="&laquo;" last-text="&raquo;" >\n' +
    '        </div>' +
    '    </div>' +
    '    <div class="modal fade" id="bodyDetail">\n' +
    '        <div class="modal-dialog modalWidth">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">验证器：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" style="background-color: white" class="form-control"\n' +
    '                                       v-model="res.check_desc" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">实际响应：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <textarea type="text" rows="5" style="background-color: white" class="form-control"\n' +
    '                                          rows="" v-model="res.out_data.response_data.body" readonly>\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">期望响应：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" style="background-color: white" class="form-control"\n' +
    '                                       v-model="res.exp_data" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-info" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="modal fade" id="schemaDetail">\n' +
    '        <div class="modal-dialog modalWidth">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">实际响应：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <textarea type="text" rows="7" style="background-color: white" class="form-control"\n' +
    '                                          v-model="res.out_data.response_data.body" readonly>\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">schema：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <textarea type="text" rows="7" style="background-color: white" class="form-control"\n' +
    '                                          rows="" v-model="res.case_schema" readonly>\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">校验信息：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" style="background-color: white" class="form-control" readonly\n' +
    '                                       v-model="res.schema_msg">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-info" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="modal fade" id="statusDetail">\n' +
    '        <div class="modal-dialog modalWidth">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">状态码：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" style="background-color: white" class="form-control"\n' +
    '                                       v-model="res.out_data.status_code" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">期望状态码：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" rows="7" style="background-color: white" class="form-control" rows=""\n' +
    '                                       v-model="res.exp_status" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-info" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '</div>',
    data: function(){
        return {
            suite: {
                "suite_desc": "",
                "suite_id": null,
                "pro_id": app.currProID,
                "suite_name": ""
            },
            startDate: "",
            endDate: "",
            title: "",
            repDetail: false,
            repList: true,
            totalItems: 0,
            currentPage: 1,
            pageList: [],
            timeInval: [],
            resultDetailId: null,
            reaultDetailList: [],
            totalItems2: 0,
            currentPage2: 1,
            wid: {},
            List: ['active'],
            reportDetal: [],
            suiteList: [],
            resultList: [],
            result: {
                "result_id": 1,
                "suite_id": 1,
                "start_time": "1478617457",
                "pass_num": 1,
                "report_name": "test",
                "end_time": "1478617457",
                "fail_num": 1,
                "pro_id": 1
            },
            allResult: [],
            api: {
                "api_param": "username,pwd",
                "api_id": null,
                "module_id": null,
                "pro_id": app.currProID,
                "api_url": "",
                "api_method": "post",
                "api_type": "34",
                "api_protocol": "http",
                "api_name": "登录接口",
                "api_desc": "登录"
            },
            check: {
                "check_name": "",
                "check_id": null,
                "pro_id": app.currProID,
                "check_desc": "",
                "check_code": ""
            },
            res: {
                api_desc: '',
                api_id: null,
                api_method: '',
                api_name: '',
                api_protocol: '',
                api_url: '',
                body_check: '',
                case_desc: '',
                case_id: null,
                case_method: '',
                case_name: '',
                case_protocol: '',
                case_schema: '',
                case_url: '',
                check_code: '',
                check_desc: '',
                check_id: null,
                check_name: '',
                depnd_api_id: null,
                err_msg: '',
                exp_data: '',
                exp_header: '',
                exp_status: '',
                front_sql: '',
                header_check: '',
                input_data: '',
                is_pass: '',
                is_run_sql: '',
                module_id: null,
                out_data: {
                    response_data: {
                        body: ''
                    },
                    status_code: 200,
                },
                param_type: '',
                pro_id: app.currProID,
                rear_sql: '',
                result_detail_id: null,
                result_id: null,
                schema_check: '',
                schema_msg: '',
                status_check: ''
            }
        }
    },
    mounted: function() {
        var that = this;
        Vue.http.post('interface/project/suite/list', {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.suiteList = response.body.data;
            } else {
                alert(response.body.msg);
            }
        });
        Vue.http.post('interface/project/result/list', {
            "pro_id": app.currProID
        }).then(function (response1) {
            if (response1.body.code = 1) {
                that.resultList = response1.body.data;
                that.totalItems = that.resultList.length;
                that.currentPage = 1;//d当前页面
                that.pageChanged(1);
                for (var i = 0; i < that.resultList.length; i++) {
                    date = new Date((that.resultList[i].end_time - that.resultList[i].start_time) * 1000);
                    var m = date.getMinutes();
                    var s = date.getSeconds();
                    if (m > 0) {
                        that.timeInval[i] = m + "m" + s + "s";
                    } else {
                        that.timeInval[i] = s + "s";
                    }
                }
                if(app.caseRun==1){
                    that.resultList[0].start_time = app.CovertToDate(that.resultList[0].start_time);
                    that.resultList[0].end_time = app.CovertToDate(that.resultList[0].end_time);
                    that.showDetail(that.resultList[0]);
                }
            } else {
                alert(response1.body.msg);
            }
        });
        $('.form_date').datetimepicker({
            format: 'yyyy-mm-dd',
            startDate: '1900-01-01',
            autoclose: true,
            bootcssVer: 3,
            language: 'zh_CN',
            minView: "month"
        })
        .on('hide', function (ev) {
            var className = this.className.toString();
            var value = this.children[1].value;
            if(className.indexOf('startTime')!=-1){
                that.startDate = value;
            }else if(className.indexOf('endTime')!=-1){
                that.endDate = value;
            }
         });
    },
    methods:{
        pageChanged: function(index){
            var that = this;
            if(index==1){
                Vue.http.post('interface/project/result/list', {
                    "pro_id": app.currProID
                }).then(function (response1) {
                    if (response1.body.code = 1) {
                        that.resultList = response1.body.data;
                        that.totalItems = that.resultList.length;
                        that.pageList = [];
                        if(that.totalItems>0){
                            if(that.currentPage==Math.ceil(that.resultList.length/15)){
                                for(var i=0;i<that.resultList.length-(that.currentPage-1)*15;i++){
                                    that.pageList[i] = that.resultList[(that.currentPage-1)*15+i];
                                }
                            }else{
                                for(var i=0;i<15;i++){
                                    that.pageList[i] = that.resultList[(that.currentPage-1)*15+i];
                                }
                            }
                        }
                        for(var i=0;i<that.pageList.length;i++){
                            that.pageList[i].start_time = app.CovertToDate(that.pageList[i].start_time);
                            that.pageList[i].end_time = app.CovertToDate(that.pageList[i].end_time);
                        }
                    }else{
                        alert(response1.body.msg);
                    }
                })
            }else{
                Vue.http.post('interface/project/result/detailList', {
                    "result_id": resultDetailId
                }).then(function (response) {
                    if (response.body.code = 1) {
                        that.allResult = response.body.data;
                        that.totalItems2 = that.allResult.length;
                        that.reaultDetailList = [];
                        if(that.totalItems2>0){
                            if(that.currentPage2==Math.ceil(that.allResult.length/15)){
                                for(var i=0;i<that.allResult.length-(that.currentPage2-1)*15;i++){
                                    that.reaultDetailList[i] = that.allResult[(that.currentPage2-1)*15+i];
                                }
                            }else{
                                for(var i=0;i<15;i++){
                                    that.reaultDetailList[i] = that.allResult[(that.currentPage2-1)*15+i];
                                }
                            }
                        }
                    }else{
                        alert(response.body.msg);
                    }
                })
            }
        },
        clearSelect: function () {
            this.suite = {
                "suite_desc": "",
                "suite_id": null,
                "pro_id": app.currProID,
                "suite_name": ""
            };
            this.startDate = "";
            this.endDate = "";
            this.title = "";
        },
        showDetail: function (obj) {
            var that = this;
            that.result = obj;
            that.repList = false;
            that.repDetail = true;
            resultDetailId = obj.result_id;
            Vue.http.post('interface/project/result/detailList', {
                "result_id": obj.result_id
            }).then(function (response) {
                if (response.body.code = 1) {
                    that.allResult = response.body.data;
                    that.currentPage2 = 1;
                    that.totalItems2 = that.allResult.length;
                    that.pageChanged(2);
                    that.resultStr = "";
                    for (var i = 0; i < that.allResult.length; i++) {
                        that.reportDetal[i] = false;
                    }
                } else {
                    alert(response.body.msg)
                }
            })
        },
        showReport: function (obj, index) {
            var that = this;
            that.res = obj;
            Vue.http.post("interface/project/api/detail", {
                "api_id": obj.api_id
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.api = response.body.data;
                } else {
                    alert(response.body.msg);
                }
            });
            that.reportDetal[index] = !that.reportDetal[index];
        },
        returnList: function () {
            var that = this;
            app.caseRun = 0;
            that.repDetail = false;
            that.repList = true;
            Vue.http.post('interface/project/result/list', {
                "pro_id": app.currProID
            }).then(function (response1) {
                if (response1.body.code = 1) {
                    that.resultList = response1.body.data;
                    that.totalItems = that.resultList.length;
                    that.pageChanged(1);
                } else {
                    alert(response1.body.msg);
                }
            })
        },
        delReport: function (id) {
            var that = this;
            Vue.http.post("interface/project/result/delete", {
                "result_id": id
            }).then(function (response) {
                if (response.body.code == 1) {
                    Vue.http.post('project/result/list', {
                        "pro_id": app.currProID
                    }).then(function (response1) {
                        if (response1.body.code = 1) {
                            that.resultList = response1.body.data;
                            that.totalItems = that.resultList.length;
                            that.pageChanged(1);
                        } else {
                            alert(response1.body.msg);
                        }
                    })
                } else {
                    alert(response.body.msg);
                }
            })
        },
        getResult: function(obj,index){
             this.res = obj;
             switch (index){
                 case 1:
                     $("#statusDetail").modal();
                     break;
                 case 2:
                     $("#bodyDetail").modal();
                     break;
                 case 3:
                     $("#schemaDetail").modal();
                     break;
                 case 4:
                     $("#headerDetail").modal();
                     break;
             }
        }
    }
});