var globalVar = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">全局变量</h1>\n' +
    '    </div>\n' +
    '    <div class="col-md-12">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-body">\n' +
    '                <div>\n' +
    '                    <ul class="nav nav-tabs">\n' +
    '                        <li v-bind:class="evnactive">\n' +
    '                            <a v-on:click="showEvnDiv()">环境列表</a></li>\n' +
    '                        <li v-bind:class="varactive">\n' +
    '                            <a v-on:click="showVarDiv()">变量列表</a></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="panel-body">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-4">\n' +
    '                        <div class="btn-group">\n' +
    '                            <button type="button" class="btn btn-default" v-on:click="addEnv()">\n' +
    '                                新增环境\n' +
    '                            </button>\n' +
    '                            <button type="button" class="btn btn-default" v-on:click="addVar()">\n' +
    '                                新增变量\n' +
    '                            </button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <form>\n' +
    '                        <div class="col-md-3 col-md-offset-4">\n' +
    '                            <input class="form-control">\n' +
    '                        </div>\n' +
    '                        <div class="col-md-1">\n' +
    '                            <button class="form-control">查询</button>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '            </div>' +
    '            <div class="panel-body" v-show="showVarCom">\n' +
    '                <div v-for="(env,index) in envPageList">\n' +
    '                    <div class="panel panel-info">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h4 class="panel-title"  v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false" >\n' +
    '                                <a v-on:click="getEnvVar(env.env_id,index)">{{env.env_name}}</a>\n' +
    '                                <div class="pull-right">\n' +
    '                                    <a class="op" v-show="shownCom" v-on:click="editEnv(env.env_id)"><span class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                    <a class="op" v-show="shownCom" v-on:click="cfDel(env.env_id)"><span class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                                </div>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body" v-show="showVar[index]">\n' +
    '                            <table class="table table-bordered table-striped">\n' +
    '                                <thead>\n' +
    '                                <th> 变量名</th>\n' +
    '                                <th> 变量值</th>\n' +
    '                                <th> 描述</th>\n' +
    '                                </thead>\n' +
    '                                <tbody>\n' +
    '                                    <tr v-for="varEnv in envVarList">\n' +
    '                                        <td>{{varEnv.var_name}}</td>\n' +
    '                                        <td>{{varEnv.var_value}}</td>\n' +
    '                                        <td>{{varEnv.var_desc}}</td>\n' +
    '                                    </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="pull-right" v-show="envTotalItems>0">\n' +
    '                    <vue-nav :cur="envCurrentPage" :all="allEnvPage" :callback="envPageChanged"></vue-nav>' +
    '                </div>\n' +
    '            </div>'+
    '            <div class="panel-body" v-show="showEnvCom">\n' +
    '                <div v-for="(varNum,index) in varPageList">\n' +
    '                    <div class="panel panel-info">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h4 class="panel-title" v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false">\n' +
    '                                <a v-on:click="getVarEnv(varNum.var_id,index)" >{{varNum.var_name}}</a>\n' +
    '                                <div class="pull-right">\n' +
    '                                    <a class="op" v-show="shownCom" v-on:click="editVar(varNum.var_id)"><span class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                    <a class="op" v-show="shownCom" v-on:click="cfDelVar(varNum.var_id)"><span class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                                </div>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body" v-show="showEnv[index]">\n' +
    '                            <table class="table table-bordered table-striped">\n' +
    '                                <thead>\n' +
    '                                <th> 环境</th>\n' +
    '                                <th> 变量值</th>\n' +
    '                                <th> 描述</th>\n' +
    '                                </thead>\n' +
    '                                <tbody>\n' +
    '                                    <tr v-for="envVar in val.value">\n' +
    '                                        <td>{{envVar.env_name}}</td>\n' +
    '                                        <td>{{envVar.var_value}}</td>\n' +
    '                                        <td>{{varNum.var_desc}}</td>\n' +
    '                                    </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="pull-right" v-show="varTotalItems>0">\n' +
    '                    <vue-nav :cur="varCurrentPage" :all="allVarPage" :callback="varPageChanged"></vue-nav>' +
    '                </div>\n' +
    '            </div>' +
    '       </div>' +
    '   </div>' +
    '   <div class="modal fade" id="envAddModal" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加环境\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">环境名：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入环境名称" v-model="env.env_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">描述：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入环境描述" v-model="env.env_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveEnv()">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'+
    '    <div class="modal fade" id="editEnvModal" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        编辑环境\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">环境名：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入环境名称" v-model="env.env_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">描述：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入环境描述" v-model="env.env_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveEnvEdit(env.env_id)">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '     </div>'+
    '     <div class="modal fade" id="cfModalEnv" >\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除环境\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    该环境下的变量均会被删除，请确认是否删除？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delEnv()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '     </div>'+
    '     <div class="modal fade" id="varAddModal" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加变量\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal" role="form">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">变量名：</label>\n' +
    '                            <div class="col-md-10">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入变量名称" v-model="addVal.var_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">变量值：</label>\n' +
    '                            <div class="col-md-10">\n' +
    '                                <div class="panel panel-info">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div v-for="(env,index) in envList">\n' +
    '                                            <label class="col-md-3 control-label">{{env.env_name}}</label>\n' +
    '                                            <div class="col-md-8">\n' +
    '                                                <input type="text" class="form-control" placeholder="请输入变量值" v-model="addVal.value[index].var_value">\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">描述：</label>\n' +
    '                            <div class="col-md-10">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入变量描述" v-model="addVal.var_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveVar()">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '     </div> ' +
    '     <div class="modal fade" id="editvarModal" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        编辑变量\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal" role="form">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">变量名：</label>\n' +
    '                            <div class="col-md-10">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入变量名称" v-model="addVal.var_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">变量值：</label>\n' +
    '                            <div class="col-md-10">\n' +
    '                                <div class="panel panel-info">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div v-for="(env,index) in envList">\n' +
    '                                            <label class="col-md-3 control-label">{{env.env_name}}</label>\n' +
    '                                            <div class="col-md-8">\n' +
    '                                                <input type="text" class="form-control" placeholder="请输入变量值" v-model="addVal.value[index].var_value">\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">描述：</label>\n' +
    '                            <div class="col-md-10">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入变量描述" v-model="addVal.var_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveVarEdit(addVal.var_id)">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '     <div  class="modal fade" id="cfModalVar" aria-hidden="true" >\n' +
    '         <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除变量\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <p>在各个环境下的改变量均会被删除，请确认是否删除？？</p>\n' +
    '                </div>\n' +
    '                <div class="modal-footer btn_div">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>\n' +
    '                    <button type="button" class="btn btn-danger" v-on:click="delVar()">删除</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div  class="modal fade" id="delEnvModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close"\n' +
    '                            data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title" id="myModalLabel">\n' +
    '                        确认\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body" id="myModal">\n' +
    '                    <div class="modal-body-div">\n' +
    '                        <p>该环境下的变量均会被删除，请确认是否删除？？</p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer btn_div">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>\n' +
    '                    <button type="button" class="btn btn-danger" v-on:click="delEnv()">删除</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +

    '<div>',
    data: function(){
        return {
            evnactive: "active",
            varactive: "disactive",
            showVar: [],
            showEnv: [],
            envList: [],
            varList: [],
            envVarList: [],
            envPageList: [],
            varPageList: [],
            envTotalItems: 0,
            varTotalItems: 0,
            showVarCom: true,
            showEnvCom: false,
            env: {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            },
            shownCom: false,
            envId: 0,
            varId: 0,
            varType: ["String","Number","Array","Boolean"],
            varInfoShow: true,
            addVal: {
                pro_id: app.currProID,
                var_id: 0,
                var_name: '',
                var_desc: '',
                value: []
            },
            val: {
                pro_id: app.currProID,
                var_id: 0,
                var_name: '',
                var_desc: '',
                value:[
                    {
                        env_id: null,
                        env_name: '',
                        env_desc: '',
                        var_value: ""
                    }
                ]
            },
            envCurrentPage: 1,
            allEnvPage: 1,
            varCurrentPage: 1,
            allVarPage: 1
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
                that.envTotalItems = that.envList.length;
                that.envPageChanged(1);
                for(var i=0;i<that.envList.length;i++){
                    that.showVar[i] = false;
                }
            }else{
                alert(response.body.msg);
            }
        });
        Vue.http.post('interface/project/var/list', {
             "pro_id": app.currProID
        }).then(function (response) {
            if(response.body.code==1) {
                that.varList = response.body.data;
                that.varTotalItems = that.varList.length;
                that.varPageChanged(1);
            }else{
                alert(response.body.msg);
            }
        });
    },
    methods:{
        envPageChanged: function(data){
            var that = this;
            that.envCurrentPage = data;
            Vue.http.post('interface/project/env/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1) {
                    that.envList = response.body.data;
                    for(var i=0;i<that.envList.length;i++){
                        that.addVal.value[i] = {
                            env_id: that.envList[i].env_id,
                            env_name: that.envList[i].env_name,
                            env_desc: that.envList[i].env_desc,
                            var_value: ""
                        }
                    }
                    that.envTotalItems = that.envList.length;
                    that.allEnvPage = Math.ceil(that.envList.length/10);
                    that.envPageList = [];
                    if(that.envTotalItems>0){
                        if(that.envCurrentPage==Math.ceil(that.envList.length/10)){
                            for(var i=0;i<that.envList.length-(that.envCurrentPage-1)*10;i++){
                                that.envPageList[i] = that.envList[(that.envCurrentPage-1)*10+i];
                            }
                        }else{
                            for(var i=0;i<10;i++){
                                that.envPageList[i] = that.envList[(that.envCurrentPage-1)*10+i];
                            }
                        }
                    }
                }
            })
        },
        varPageChanged: function(data){
            var that = this;
            that.varCurrentPage = data;
            Vue.http.post('interface/project/var/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1) {
                    that.varList = response.body.data;
                    that.varTotalItems = that.varList.length;
                    that.allVarPage = Math.ceil(that.varList.length/10);
                    that.varPageList = [];
                    if(that.varTotalItems>0){
                        if(that.varCurrentPage==Math.ceil(that.varList.length/10)){
                            for(var i=0;i<that.varList.length-(that.varCurrentPage-1)*10;i++){
                                that.varPageList[i] = that.varList[(that.varCurrentPage-1)*10+i];
                            }
                        }else{
                            for(var i=0;i<10;i++){
                                that.varPageList[i] = that.varList[(that.varCurrentPage-1)*10+i];
                            }
                        }
                    }
                }
            })
        },
        showEvnDiv: function(){
            var that = this;
            this.evnactive = "active";
            this.varactive = "disactive";
            Vue.http.post('interface/project/env/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                 if(response.body.code==1) {
                     that.envList = response.body.data;
                     that.envPageChanged(that.envCurrentPage);
                     that.showVar = [];
                     for(var i=0;i<that.envList.length;i++){
                        that.showVar[i] = false;
                     }
                 }else{
                    alert(response.body.msg);
                }
            });
            Vue.http.post('interface/project/var/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1) {
                    that.varList = response.body.data;
                    that.varPageChanged(that.varCurrentPage);
                    that.showEnv = [];
                     for(var i=0;i<that.varList.length;i++){
                        that.showEnv[i] = false;
                     }
                }else{
                    alert(response.body.msg);
                }
            });
            that.showVarCom = true;
            that.showEnvCom = false;
        },
        getEnvVar: function(id,index){
            var that = this;
            for(var i=0;i<that.showVar.length;i++){
                if(i!=index){
                    that.showVar[i] = false;
                }
            }
            that.showVar[index] = !that.showVar[index];
            Vue.http.post('interface/project/env/varList',{
                "env_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.envVarList = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            });
        },
        showVarDiv: function(){
            var that = this;
            that.varactive = "active";
            that.evnactive = "disactive";
            that.showVarCom = false;
            that.showEnvCom = true;
            Vue.http.post('interface/project/env/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                 if(response.body.code==1) {
                     that.envList = response.body.data;
                     that.envPageChanged(that.envCurrentPage);
                     that.showVar = [];
                     for(var i=0;i<that.envList.length;i++){
                        that.showVar[i] = false;
                     }

                 }else{
                    alert(response.body.msg);
                }
            });
            Vue.http.post('interface/project/var/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1) {
                    that.varList = response.body.data;
                    that.varPageChanged(that.varCurrentPage);
                    that.showEnv = [];
                     for(var i=0;i<that.varList.length;i++){
                        that.showEnv[i] = false;
                     }
                }else{
                    alert(response.body.msg);
                }
            });

        },
        getVarEnv: function(id,index){
            var that = this;
            for(var i=0;i<that.showEnv.length;i++){
                if(i!=index){
                    that.showEnv[i] = false;
                }
            }
            that.showEnv[index] = !that.showEnv[index];
            Vue.http.post('interface/project/var/detail',{
                "var_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.val = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            });
        },
        addEnv: function(){
            this.env = {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            };
            $("#envAddModal").modal();
        },
        saveEnv: function(){
            if(this.env.env_name==null){
                this.env.env_name="";
            }
            if(this.env.env_desc==null){
                this.env.env_desc="无";
            }
            var that = this;
            Vue.http.post('interface/project/env/create',{
                "pro_id": app.currProID,
                "env_name": that.env.env_name,
                "env_desc": that.env.env_desc
            }).then(function (response) {
                if(response.body.code==1){
                    $("#envAddModal").modal('hide');
                    Vue.http.post('interface/project/env/list', {
                         "pro_id": app.currProID
                    }).then(function (response1) {
                         if(response1.body.code==1) {
                             that.envList = response1.body.data;
                             that.allEnvPage = Math.ceil(that.envList.length/10);
                             that.envPageChanged(that.allEnvPage);
                             that.showVar = [];
                             for(var i=0;i<that.envList.length;i++){
                                 that.showVar[i]=false;
                             }
                         }else{
                            alert(response1.body.msg);
                        }
                    });
                } else{
                    alert(response.body.msg);
                }
            });
        },
        editEnv: function(id){
            var that = this;
            Vue.http.post('interface/project/env/detail',{
                "env_id": id
            }).then(function (response){
                if(response.body.code==1){
                    that.env = response.body.data;
                } else {
                    alert(response.body.msg);
                }
            });
            $("#editEnvModal").modal();
        },
        saveEnvEdit: function(id){
            var that = this;
            if(that.env.env_desc==""){
                that.env.env_desc="无";
            }
            Vue.http.post('interface/project/env/edit',{
                "env_id": id,
                "env_name": that.env.env_name,
                "env_desc": that.env.env_desc
            }).then(function (response) {
                 if(response.body.code==1){
                     $("#editEnvModal").modal('hide');
                     Vue.http.post('interface/project/env/list', {
                         "pro_id": app.currProID
                     }).then(function (response1) {
                        if(response1.body.code==1) {
                            that.envList = response1.body.data;
                            that.envPageChanged(that.envCurrentPage);
                        }else{
                            alert(response1.body.msg);
                        }
                     });
                 } else{
                     alert(response.body.msg);
                 }
            });
        },
        cfDel: function(id){
            $("#cfModalEnv").modal();
            this.envId = id;
        },
        delEnv: function(){
            $("#cfModalEnv").modal('hide');
            var that = this;
            Vue.http.post('interface/project/env/delete',{
                "env_id": that.envId
            }).then(function (response1) {
                if(response1.body.code==1){
                    Vue.http.post('interface/project/env/list', {
                         "pro_id": app.currProID
                    }).then(function (response) {
                         if(response.body.code==1) {
                             that.envList = response.body.data;
                             var newPage = Math.ceil(that.envList.length/10);
                             if(that.envCurrentPage == newPage+1){
                                 that.envCurrentPage--;
                             };
                             that.envPageChanged(that.envCurrentPage);
                             that.showVar = [];
                             for(var i=0;i<that.envList.length;i++){
                                 that.showVar[i] = false;
                             }
                         }else{
                            alert(response.body.msg);
                        }
                    });
                }else{
                    alert(response1.body.msg);
                }
            });
        },
        addVar: function(){
            this.addVal={
                pro_id: app.currProID,
                var_id: "",
                var_name: '',
                var_desc: '',
                value:[]
            };
            for(var i=0;i<this.envList.length;i++){
                this.addVal.value[i] = {
                    env_id: this.envList[i].env_id,
                    env_name: this.envList[i].env_name,
                    env_desc: this.envList[i].env_desc,
                    var_value: ""
                }
            }
            $("#varAddModal").modal();
        },
        saveVar: function(){
            var that = this;
            if(that.addVal.var_name==null){
                that.addVal.var_name=" ";
            }
            if(that.addVal.var_desc==null){
                that.addVal.var_desc="无";
            }
            for(var i=0;i<that.envList.length;i++){
                that.addVal.value[i].env_id = that.envList[i].env_id;
                that.addVal.value[i].env_name = that.envList[i].env_name;
                that.addVal.value[i].env_desc = that.envList[i].env_desc;
            }
            Vue.http.post('interface/project/var/create',{
                "pro_id": app.currProID,
                "var_name": that.addVal.var_name,
                "var_desc": that.addVal.var_desc,
                "value": that.addVal.value
            }).then(function (response) {
                if(response.body.code==1){
                    $("#varAddModal").modal('hide');
                    Vue.http.post('interface/project/var/list', {
                         "pro_id": app.currProID
                    }).then(function (response1) {
                         if(response1.body.code==1) {
                             that.varList = response1.body.data;
                             that.allVarPage = Math.ceil(that.varList.length/10);
                             that.varPageChanged(that.allVarPage);
                             that.showEnv = [];
                             for(var i=0;i<that.varList.length;i++){
                                that.showEnv[i] = false;
                             }
                         }else{
                            alert(response1.body.msg);
                        }
                    });
                } else{
                    alert(response.body.msg);
                }
            });
        },
        editVar: function(id){
            var that = this;
            Vue.http.post('interface/project/var/detail',{
                "var_id": id
            }).then(function (response){
                if(response.body.code==1){
                    that.addVal = response.body.data;
                    for(var i=that.addVal.value.length;i<that.envList.length;i++){
                        that.addVal.value[i] = {
                            env_id: null,
                            env_name: '',
                            env_desc: '',
                            var_value: ""
                        }
                    }
                } else {
                    alert(response.body.msg);
                }
            });
            $("#editvarModal").modal();
        },
        saveVarEdit: function(id){
            var that = this;
            if(that.addVal.var_desc==""){
                that.addVal.var_desc="无";
            }
            for(var i=0;i<that.envList.length;i++){
                that.addVal.value[i].env_id = that.envList[i].env_id;
                that.addVal.value[i].env_name = that.envList[i].env_name;
                that.addVal.value[i].env_desc = that.envList[i].env_desc;
            }
            Vue.http.post('interface/project/var/edit',{
                "pro_id": app.currProID,
                "var_id": id,
                "var_name": that.addVal.var_name,
                "var_desc": that.addVal.var_desc,
                "value": that.addVal.value
            }).then(function (response) {
                if(response.body.code==1){
                    $("#editvarModal").modal('hide');
                    Vue.http.post('interface/project/var/list', {
                         "pro_id": app.currProID
                    }).then(function (response1) {
                         if(response1.body.code==1) {
                             that.varList = response1.body.data;
                             that.varPageChanged(that.varCurrentPage);
                             that.showEnv = [];
                             for(var i=0;i<that.varList.length;i++){
                                that.showEnv[i] = false;
                             }
                         }else{
                            alert(response1.body.msg);
                        }
                    });
                } else{
                    alert(response.body.msg);
                }
            });
        },
        delVarCom: function(envId,varId){
            var that = this;
            Vue.http.post('interface/project/var/detail',{
                "var_id": varId
            }).then(function (response){
                if(response.body.code==1){
                    that.val = response.body.data;
                } else {
                    alert(response.body.msg);
                }
            });
            for(var i=0;i<that.val.value.length;i++){
                if(that.val.value[i].env_id==envId){
                    that.val.value[i].var_value='该环境下'+that.val.var_name+'变量不存在';
                }
            }
            Vue.http.post('interface/project/var/edit',{
                "pro_id": app.currProID,
                "var_id": that.val.var_id,
                "var_name": that.val.var_name,
                "var_desc": that.val.var_desc,
                "value": that.val.value
            }).then(function (response) {
                if(response.body.code==1){
                    Vue.http.post('interface/project/env/varList',{
                        "env_id": envId
                    }).then(function(response){
                        if(response.body.code==1){
                            that.envVarList = response.body.data;
                        }else{
                            alert(response.body.msg);
                        }
                    });
                }else{
                    alert(response.body.msg);
                }
            });
        },
        delEnvCom: function(varId,envId){
            var that = this;
            for(var i=0;i<that.val.value.length;i++){
                if(that.val.value[i].env_id==envId){
                    that.val.value[i].var_value='该环境下'+that.val.var_name+'变量不存在';
                }
            }
            Vue.http.post('interface/project/var/edit',{
                "pro_id": app.currProID,
                "var_id": that.val.var_id,
                "var_name": that.val.var_name,
                "var_desc": that.val.var_desc,
                "value": that.val.value
            }).then(function (response) {
                if(response.body.code==0){
                    alert(response.body.msg);
                }
            });
        },
        cfDelVar: function(id){
            $("#cfModalVar").modal();
            this.varId = id;
        },
        delVar: function(){
            var that = this;
            $("#cfModalVar").modal('hide');
            Vue.http.post('interface/project/var/delete',{
                "var_id": this.varId
            }).then(function (response1) {
                if(response1.body.code==1){
                    Vue.http.post('interface/project/var/list', {
                         "pro_id": app.currProID
                    }).then(function (response) {
                         if(response.body.code==1) {
                             that.varList = response.body.data;
                             var newPage = Math.ceil(that.varList.length/10);
                             if(that.varCurrentPage == newPage+1){
                                 that.varCurrentPage--;
                             };
                             that.varPageChanged(that.varCurrentPage);
                             that.showEnv = [];
                             for(var i=0;i<that.varList.length;i++){
                                that.showEnv[i] = false;
                             }
                         }else{
                            alert(response.body.msg);
                        }
                    });
                }else{
                    alert(response1.body.msg);
                }
            });
        }
    }

});