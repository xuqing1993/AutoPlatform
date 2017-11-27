var dependency = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">API依赖库</h1>\n' +
    '    </div>\n' +
    '    <div class="col-md-1 pull-right">\n' +
    '        <button type="button" class="btn btn-info" v-on:click="addAPIDep()">\n' +
    '            <span class="glyphicon glyphicon-plus"></span> 添加\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="col-md-12 top3" v-show="pageList.length!=0">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-body">\n' +
    '                <div v-for="(Dep,index) in pageList">\n' +
    '                    <div class="panel panel-info">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h4 class="panel-title" v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false">\n' +
    '                                <div class="row">\n' +
    '                                    <div class="col-xs-4">\n' +
    '                                        <input type="text" class="form-control"\n' +
    '                                               v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                               v-model="Dep.depnd_api_name">\n' +
    '                                        <a class="marginLeft"\n' +
    '                                           v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)"\n' +
    '                                           v-on:click="apiDepDetail(Dep,index)">{{Dep.depnd_api_name}}</a>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div v-show="showDetail[index] && (apiDepId==Dep.depnd_api_id||Dep.depnd_api_id==null)">\n' +
    '                            <div class="panel-body btn-group pull-right">\n' +
    '                                <button type="button" class="btn btn-default" v-on:click="saveapiDep(apiDep,selected)">保存\n' +
    '                                </button>\n' +
    '                                <button type="button" class="btn btn-default" v-on:click="editApiDep(apiDep,index)">编辑\n' +
    '                                </button>\n' +
    '                                <button type="button" class="btn btn-default" v-on:click="cfdelapiDep(Dep.depnd_api_id)">\n' +
    '                                    删除\n' +
    '                                </button>\n' +
    '                                <button type="button" class="btn btn-default" v-on:click="runAPIDep(Dep)">运行</button>\n' +
    '                            </div>\n' +
    '                            <div class="panel-body">\n' +
    '                                <table class="table">\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">请求协议</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)">{{Dep.depnd_api_protocol}}</span>\n' +
    '                                            <select class="form-control" v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null" v-model="apiDep.depnd_api_protocol">\n' +
    '                                               <option v-for="protocol in protocolType" v-bind:value="protocol">{{ protocol }}</option>\n' +
    '                                            </select>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">请求方式</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)">{{Dep.depnd_api_method}}</span>\n' +
    '                                            <select class="form-control"\n' +
    '                                                    v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                                    v-model="apiDep.depnd_api_method">\n' +
    '                                                    <option v-for="method in methodType" v-bind:value="method">{{ method}}</option>\n' +
    '                                            </select>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">数据格式</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)">{{Dep.depnd_api_type}}</span>\n' +
    '                                            <select class="form-control"\n' +
    '                                                    v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                                    v-model="apiDep.depnd_api_type">\n' +
    '                                                    <option v-for="type in typeType" v-bind:value="type">{{ type}}</option>\n' +
    '                                            </select>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">请求url</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)">{{Dep.depnd_api_url}}</span>\n' +
    '                                            <input type="text" class="col-md-12"\n' +
    '                                                   v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                                   v-model="apiDep.depnd_api_url">\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">请求体</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)"\n' +
    '                                                 >{{Dep.depnd_api_param}}</span>\n' +
    '                                            <textarea type="text" class="col-md-12" rows="3"\n' +
    '                                                      v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                                      v-model="apiDep.depnd_api_param">\n' +
    '                                            </textarea>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">请求描述</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)"\n' +
    '                                                 >{{Dep.depnd_api_desc}}</span>\n' +
    '                                            <input type="text" class="col-md-12"\n' +
    '                                                   v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                                   v-model="apiDep.depnd_api_desc">\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr>\n' +
    '                                        <td class="detailTable1">依赖接口</td>\n' +
    '                                        <td class="detailTable2">\n' +
    '                                            <span v-show="!(edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null)"\n' +
    '                                                 >{{apiDepName}}</span>\n' +
    '                                            <select class="form-control"\n' +
    '                                                    v-show="edit && editId==Dep.depnd_api_id || Dep.depnd_api_id == null"\n' +
    '                                                    v-model="selected">\n' +
    '                                                    <option v-for="apiDep1 in apiDepList1" v-bind:value="apiDep1.depnd_api_id">{{ apiDep1.depnd_api_name}}</option>\n' +
    '                                            </select>\n' +
    '                                        </td>' +

    '                                    </tr>\n' +
    '                                </table>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="pull-right" v-show="totalItems>0">\n' +
    '                    <vue-nav :cur="currentPage" :all="allPage" :callback="pageChanged"></vue-nav>' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="modal fade" id="addapiDep" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加依赖接口\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">依赖接口名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入依赖接口名称"\n' +
    '                                       v-model="apiDep.depnd_api_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入依赖接口描述"\n' +
    '                                       v-model="apiDep.depnd_api_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="moreDetail(apiDep)">确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="cfapiDep">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除依赖接口\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    确定删除该依赖接口？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delapiDep()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="runAPIDep" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        运行\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属环境：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="env">\n' +
    '                                    <option value="">请选择</option>\n' +
    '                                    <option v-for="env in envList" v-bind:value="env.env_name">{{ env.env_name}}</option>'+
    '                                </select>\n'+
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary"\n' +
    '                            v-on:click="getAPIDepResult(apiDep.depnd_api_id,env.env_id)">\n' +
    '                        执行\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="apiDepResult" aria-hidden="true">\n' +
    '        <div class="modal-dialog modalWidth">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        运行\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">URL：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" class="form-control" v-model="apiDepResult.url"\n' +
    '                                       style="background-color: white" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">请求：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3"\n' +
    '                                          v-model="apiDepResult.request_body" style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">状态码：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <input type="text" class="form-control" v-model="apiDepResult.status"\n' +
    '                                       style="background-color: white" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-1 control-label">响应体：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="6"\n' +
    '                                          v-model="apiDepResult.response_body" style="background-color: white"\n' +
    '                                          readonly>\n' +
    '                                </textarea>\n' +
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
            protocolType: ["http", "https"],
            methodType: ["GET", "POST", "PUSH", "DELETE"],
            typeType: ["json"],
            envList: [],
            env: {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            },
            showDetail: [],
            apiDepId: null,
            apiDepList: "",
            pageList: [],
            apiDepName: '',
            apiDep: {
                "depnd_api_name": "",
                "depnd_api_protocol": "",
                "depnd_api_desc": "",
                "depnd_api_method": "",
                "depnd_api_type": "",
                "depnd_api_id": null,
                "depnd_api_url": "",
                "depnd_api_param": "",
                "pro_id": app.currProID,
                "depnd_id": null
            },
            totalItems: 0,
            currentPage: 1,
            allPage: 1,
            selected: 0,
            edit: false,
            editId: 0,
            delDepID: 0,
            apiDepList1: [],
            apiDepResult: []
        }
    },
    components:{
        'vue-nav': Vnav
    },
    mounted: function() {
        var that = this;
        Vue.http.post("interface/project/dapi/list", {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.apiDepList = response.body.data;
                that.totalItems = that.apiDepList.length;
                that.currentPage = 1;
                that.pageChanged(that.currentPage);
                for (var i = 0; i < that.apiDepList.length; i++) {
                    that.showDetail[i] = false;
                }
            } else {
                alert(response.body.msg)
            }
        });
        Vue.http.post('interface/project/env/list', {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.envList = response.body.data;
            } else {
                alert(response.body.msg)
            }
        });
    },
    methods:{
        pageChanged: function (data) {
            var that = this;
            that.currentPage = data;
            Vue.http.post("interface/project/dapi/list", {
                "pro_id": app.currProID
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.apiDepList = response.body.data;
                    that.totalItems = that.apiDepList.length;
                    that.allPage = Math.ceil(that.apiDepList.length / 10);
                    that.pageList = [];
                    if (that.totalItems > 0) {
                        if (that.currentPage == Math.ceil(that.apiDepList.length / 10)) {
                            for (var i = 0; i < that.apiDepList.length - (that.currentPage - 1) * 10; i++) {
                                that.pageList[i] = that.apiDepList[(that.currentPage - 1) * 10 + i];
                            }
                        } else {
                            for (var i = 0; i < 10; i++) {
                                that.pageList[i] = that.apiDepList[(that.currentPage - 1) * 10 + i];
                            }
                        }
                    }
                }
            })
        },
        addAPIDep: function () {
            this.apiDep = {
                "depnd_api_name": "",
                "depnd_api_protocol": "",
                "depnd_api_desc": "",
                "depnd_api_method": "",
                "depnd_api_type": "",
                "depnd_api_id": null,
                "depnd_api_url": "",
                "depnd_api_param": "",
                "pro_id": app.currProID,
                "depnd_id": null
            };
            this.selected = 0;
            $("#addapiDep").modal();
        },
        moreDetail: function (obj) {
            var that = this;
            this.apiDep = obj;
            this.apiDepList.push(obj);
            this.totalItems = this.apiDepList.length;
            this.currentPage = Math.ceil(this.totalItems / 10);
            this.pageList = [];
            for (var i = 0; i < this.apiDepList.length - (this.currentPage - 1) * 10; i++) {
                this.pageList[i] = this.apiDepList[(this.currentPage - 1) * 10 + i];
            }
            this.showDetail = [];
            for (var i = 0; i < this.pageList.length; i++) {
                this.showDetail[i] = false;
            }
            this.showDetail[this.showDetail.length-1] = true;
            Vue.http.post("interface/project/dapi/list", {
                "pro_id": app.currProID
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.apiDepList1 = response.body.data;
                    that.apiDep1 = new Object();
                    that.apiDep1.depnd_api_name = "无";
                    that.apiDep1.depnd_api_id = 0;
                    that.apiDepList1.unshift(that.apiDep1);
                } else {
                    alert(response.body.msg);
                }
            })
        },
        saveapiDep: function (obj, apiDepId) {
            var that = this;
            if (apiDepId == undefined) {
                apiDepId = 0;
            }
            if (obj.depnd_api_id == null) {
                Vue.http.post("interface/project/dapi/create", {
                    "depnd_api_name": obj.depnd_api_name,
                    "depnd_api_protocol": obj.depnd_api_protocol,
                    "depnd_api_desc": obj.depnd_api_desc,
                    "depnd_api_method": obj.depnd_api_method,
                    "depnd_api_url": obj.depnd_api_url,
                    "depnd_api_type": obj.depnd_api_type,
                    "depnd_api_param": obj.depnd_api_param,
                    "pro_id": app.currProID,
                    "depnd_id": apiDepId
                }).then(function (response) {
                    if (response.body.code == 1) {
                        Vue.http.post("interface/project/dapi/list", {
                            "pro_id": app.currProID
                        }).then(function (response1) {
                            if (response1.body.code == 1) {
                                that.apiDepList = response1.body.data;
                                that.allPage = Math.ceil(that.apiDepList.length/10);
                                that.pageChanged(that.allPage);
                                that.showDetail = [];
                                for (var i = 0; i < that.apiDepList.length; i++) {
                                    that.showDetail[i] = false;
                                }
                            } else {
                                alert(response1.body.msg);
                            }
                        })
                    } else {
                        alert(response.body.msg)
                    }
                })
            } else {
                Vue.http.post("interface/project/dapi/edit", {
                    "depnd_api_id": obj.depnd_api_id,
                    "depnd_api_name": obj.depnd_api_name,
                    "depnd_api_protocol": obj.depnd_api_protocol,
                    "depnd_api_desc": obj.depnd_api_desc,
                    "depnd_api_method": obj.depnd_api_method,
                    "depnd_api_type": obj.depnd_api_type,
                    "depnd_api_url": obj.depnd_api_url,
                    "depnd_api_param": obj.depnd_api_param,
                    "pro_id": app.currProID,
                    "depnd_id": that.selected
                }).then(function (response) {
                    if (response.body.code == 1) {
                        Vue.http.post("interface/project/dapi/detail", {
                            "depnd_api_id": that.selected
                        }).then(function (response) {
                            if (response.body.data.depnd_api_id == 0) {
                                that.apiDepName = "无"
                            } else {
                                that.apiDepName = response.body.data.depnd_api_name;
                            }
                        })
                    } else {
                        alert(response.body.msg)
                    }
                })
            }
            that.edit = false;
        },
        apiDepDetail: function (obj, index) {
            var that = this;
            that.edit = false;
            that.apiDepId = obj.depnd_api_id;
            for (var i = 0; i < that.showDetail.length; i++) {
                if (i != index) {
                    that.showDetail[i] = false;
                }
            }
            that.showDetail[index] = !that.showDetail[index];
            Vue.http.post("interface/project/dapi/detail", {
                "depnd_api_id": obj.depnd_api_id
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.apiDep = response.body.data;
                    that.selected = that.apiDep.depnd_id;
                    if (response.body.data.depnd_id == 0) {
                        that.apiDepName = "无"
                    } else {
                        Vue.http.post("interface/project/dapi/detail", {
                            "depnd_api_id": that.apiDep.depnd_id
                        }).then(function (response) {
                            that.apiDepName = response.body.data.depnd_api_name;

                        })
                    }
                } else {
                    alert(response.body.msg);
                }
            })
        },
        editApiDep: function (obj, index) {
            var that = this;
            that.editId = obj.depnd_api_id;
            that.edit = true;
            that.apiDepId = obj.depnd_api_id;
            for (var i = 0; i < that.showDetail.length; i++) {
                if (i != index) {
                    that.showDetail[i] = false;
                }
            }
            that.showDetail[index] = true;
            Vue.http.post("interface/project/dapi/detail", {
                "depnd_api_id": obj.depnd_api_id
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.apiDep = response.body.data;
                    that.selected = that.apiDep.depnd_id;
                    Vue.http.post("interface/project/dapi/list", {
                        "pro_id": app.currProID
                    }).then(function (response) {
                        if (response.body.code == 1) {
                            that.apiDepList1 = response.body.data;
                            that.apiDep1 = new Object();
                            that.apiDep1.depnd_api_name = "无";
                            that.apiDep1.depnd_api_id = 0;
                            that.apiDepList1.unshift(that.apiDep1);
                        } else {
                            alert(response.body.msg);
                        }
                    })
                } else {
                    alert(response.body.msg);
                }
            })
        },
        cfdelapiDep: function (id) {
            this.delDepID = id;
            $("#cfapiDep").modal();
        },
        delapiDep: function () {
            var that = this;
            $("#cfapiDep").modal('hide');
            Vue.http.post("interface/project/dapi/delete", {
                "depnd_api_id": that.delDepID
            }).then(function (response) {
                if (response.body.code == 1) {
                    Vue.http.post("interface/project/dapi/list", {
                        "pro_id": app.currProID
                    }).then(function (response1) {
                        if (response1.body.code == 1) {
                            that.apiDepList = response1.body.data;
                            var newPage = Math.ceil(that.apiDepList.length/10);
                            if(that.currentPage == newPage+1){
                                that.currentPage--;
                            };
                            that.pageChanged(that.currentPage);
                            that.showDetail = [];
                            for (var i = 0; i < that.apiDepList.length; i++) {
                                that.showDetail[i] = false;
                            }
                        } else {
                            alert(response1.body.msg);
                        }
                    })
                } else {
                    alert(response.body.msg);
                }
            })
        },
        runAPIDep: function (obj) {
            this.env = {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            };
            $("#runAPIDep").modal();
        },
        getAPIDepResult: function (depAPIId, envId) {
            var that = this;
            $("#runAPIDep").modal("hide");
            Vue.http.post("interface/project/dapi/run", {
                "depnd_api_id": depAPIId,
                "env_id": envId
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.apiDepResult = response.body.data;
                    that.apiDepResult.response_body = that.apiDepResult.response_body;
                    $("#apiDepResult").modal();
                } else {
                    alert(response.body.msg);
                }
            })
        }
    }

});