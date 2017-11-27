var method = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">常用方法</h1>\n' +
    '    </div>\n' +
    '    <div class="col-md-1 pull-right">\n' +
    '        <button class="btn btn-info" v-on:click="addFunc()"><span class="glyphicon glyphicon-plus"></span>添加</button>\n' +
    '    </div>\n' +
    '    <div class="col-md-12 top3" v-show="funcList.length!=0">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-body">\n' +
    '                <div v-for="(func,index) in pageList">\n' +
    '                    <div class="panel panel-info">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h4 class="panel-title"  v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false" >\n' +
    '                                 <div class="row">\n' +
    '                                     <div class="col-xs-4">\n' +
    '                                     <input type="text" class="form-control" v-show="edit && editFuncId==func.func_id" v-model="func.func_desc">\n' +
    '                                     <a class="marginLeft" v-show="!(edit && editFuncId==func.func_id)" v-on:click="funcDetail(func.func_id,index)">{{func.func_desc}}</a>\n' +
    '                                     </div>\n' +
    '                                     <div class="pull-right">\n' +
    '                                         <a v-show="shownCom" v-on:click="editFunc(func.func_id,index)"><span class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                         <a v-show="shownCom" v-on:click="cfDelFunc(func.func_id)"><span class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                                     </div>\n' +
    '                                </div>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body" v-show="showfunc[index]&&(funcId==func.func_id || func.func_id==null)">\n' +
    '                            <div class="row">\n' +
    '                                <div class="col-md-10">\n' +
    '                                    <ul class="nav nav-tabs">\n' +
    '                                        <li v-bind:class="activeList1[0]" >\n' +
    '                                            <a v-on:click="active3(0)">基本信息</a>\n' +
    '                                        </li>\n' +
    '                                        <li v-bind:class="activeList1[1]" >\n' +
    '                                            <a v-on:click="active3(1)">代码</a>\n' +
    '                                        </li>\n' +
    '                                    </ul>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-2">\n' +
    '                                    <div class="pull-right">\n' +
    '                                    <button class="btn btn-default" v-on:click="saveFunc(func)">保存</button>\n' +
    '                                    <button class="btn btn-default" v-on:click="runFunc(func)"><span class="glyphicon glyphicon-play"></span>运行</button>\n' +
    '                                        </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="top3">\n' +
    '                                <table class="table" v-show="formation && !edit">\n' +
    '                                    <thead>\n' +
    '                                        <tr>\n' +
    '                                            <td class="wid6">函数名</td>\n' +
    '                                            <td class="wid7">{{func.func_name}}</td>\n' +
    '                                        </tr>\n' +
    '                                    </thead>\n' +
    '                                    <tbody>\n' +
    '                                        <tr>\n' +
    '                                            <td class="wid6">描述</td>\n' +
    '                                            <td class="wid7">{{func.func_desc}}</td>\n' +
    '                                        </tr>\n' +
    '                                    </tbody>\n' +
    '                                </table>\n' +
    '                                <div v-show="formation && edit">\n' +
    '                                    <form class="col-md-10 bs-example bs-example-form">\n' +
    '                                        <div class="input-group">\n' +
    '                                            <span class="input-group-addon">名字</span>\n' +
    '                                            <input type="text" class="form-control" v-model="func.func_name">\n' +
    '                                        </div>\n' +
    '                                    </form>\n' +
    '                                    <form class="col-md-10 bs-example bs-example-form">\n' +
    '                                        <div class="input-group">\n' +
    '                                            <span class="input-group-addon">描述</span>\n' +
    '                                            <input type="text" class="form-control" v-model="func.func_desc">\n' +
    '                                        </div>\n' +
    '                                    </form>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div v-show="code">\n' +
    '                                <textarea class="form-control msd-elastic: \\n;" rows="10" v-model="func.func_code">\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="pull-right" v-show="totalItems>0">\n' +
    '                   <vue-nav :cur="currentPage" :all="allPage" :callback="pageChanged"></vue-nav>' +
    '                </div>'  +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'+
    '    <div class="modal fade" id="addFunc" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加常用方法\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">常用方法名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入常用方法名称" v-model="func.func_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入常用方法描述" v-model="func.func_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="moreFuncDetail(func)">确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'+
    '    <div class="modal fade" id="runFunc" aria-hidden="true">\n' +
    '        <div class="modal-dialog modalWidth2">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        代码运行结果\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body" >\n' +
    '                    <pre>{{runResult.output}}</pre>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-info" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'+
    '    <div class="modal fade" id="cfDelFunc" >\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除常用方法\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    确定删除该方法？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delFunc()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '</div>',
    data: function(){
        return {
            activeList1: ["active","disactive"],
            funcList: [],
            pageList: [],
            func: {
                "func_desc": "hwbchjdcgxd",
                "pro_id": app.currProID,
                "func_code": "wkcjkdwhwjkh",
                "func_name": "test",
                "func_id": 2
            },
            showfunc: [],
            shownCom: false,
            funcId: 0,
            edit: false,
            runResult: {},
            editFuncId: 0,
            formation: false,
            code: false,
            delFuncID: 0,
            totalItems: 0,
            currentPage: 1,
            allPage: 1
        }
    },
    components:{
        'vue-nav': Vnav
    },
    mounted: function() {
        var that = this;
        Vue.http.post("interface/project/func/list",{
             "pro_id": app.currProID
        }).then(function (response) {
             if(response.body.code==1) {
                 that.funcList = response.body.data;
                 that.totalItems = that.funcList.length;
                 that.currentPage = 1;
                 that.pageChanged(1);
                 for(var i=0;i<that.funcList.length;i++){
                     that.showfunc[i]=false;
                 }
             }else{
                alert(response.body.msg);
            }
        });
    },
    methods:{
        pageChanged: function(data){
            var that = this;
            that.currentPage = data;
            Vue.http.post("interface/project/func/list",{
                 "pro_id": app.currProID
            }).then(function (response) {
                 if(response.body.code==1) {
                     that.funcList = response.body.data;
                     that.totalItems = that.funcList.length;
                     that.allPage = Math.ceil(that.totalItems/10);
                     that.pageList = [];
                     if(that.totalItems>0){
                         if(that.currentPage==Math.ceil(that.funcList.length/10)){
                            for(var i=0;i<that.funcList.length-(that.currentPage-1)*10;i++){
                                that.pageList[i] = that.funcList[(that.currentPage-1)*10+i];
                            }
                         }else{
                            for(var i=0;i<10;i++){
                                that.pageList[i] = that.funcList[(that.currentPage-1)*10+i];
                            }
                         }
                     }
                }
            })
        },
        addFunc: function(){
            $("#addFunc").modal();
            this.func = {
                "func_desc": "",
                "pro_id": app.currProID,
                "func_code": "",
                "func_name": "",
                "func_id": null
            };
        },
        moreFuncDetail: function(obj){
            this.func = obj;
            this.funcList.push(this.func);
            this.totalItems = this.funcList.length;
            this.currentPage = Math.ceil(this.totalItems/10);
            this.pageList = [];
            for(var i=0;i<this.funcList.length-(this.currentPage-1)*10;i++){
                this.pageList[i] = this.funcList[(this.currentPage-1)*10+i];
            }
            this.showfunc = [];
            for(var i=0;i<this.pageList.length;i++){
                this.showfunc[i] = false;
            }
            this.showfunc[this.showfunc.length-1] = true;
            this.activeList1 = ["disactive","active"];
            this.formation = false;
            this.code = true;
        },
        funcDetail: function(id,index){
            for(var i=0;i<this.showfunc.length;i++){
                if(i!=index){
                    this.showfunc[i] = false;
                }
            }
            this.showfunc[index] = !this.showfunc[index];
            this.funcId = id;
            this.activeList1 = ["active","disactive"];
            this.formation = true;
            this.code = false;
            var that = this;
            Vue.http.post("interface/project/func/detail",{
                "func_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.func = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            })
        },
        active3: function(index){
            for(var i=0;i<2;i++){
                this.activeList1[i] = "disactive";
            }
            this.activeList1[index] = "active";
            if(index==0){
                this.formation = true;
                this.code = false;
            }else{
                this.formation = false;
                this.code = true;
            }
        },
        saveFunc: function(obj){
            var that = this;
            if(obj.func_desc==""){
                obj.func_desc=" ";
            }
            if(obj.func_code==null){
                obj.func_code=" ";
            }
            if(obj.func_id==null){
                Vue.http.post("interface/project/func/run",{
                    "func_name": obj.func_name,
                    "func_code": obj.func_code
                }).then(function(response){
                    if(response.body.code==1) {
                        if (response.body.data.status == 1) {
                            Vue.http.post("interface/project/func/create", {
                                "pro_id": app.currProID,
                                "func_name": obj.func_name,
                                "func_code": obj.func_code,
                                "func_desc": obj.func_desc
                            }).then(function (response1) {
                                if (response1.body.code == 1) {
                                    Vue.http.post("interface/project/func/list", {
                                        "pro_id": app.currProID
                                    }).then(function (response2) {
                                        if (response2.body.code == 1) {
                                            that.funcList = response2.body.data;
                                            that.allPage = Math.ceil(that.funcList.length/10);
                                            that.pageChanged(that.allPage);
                                            that.showfunc = [];
                                            for(var i=0;i<that.funcList.length;i++){
                                                that.showfunc[i] = false;
                                            }
                                        } else {
                                            alert(response2.body.msg);
                                        }
                                    });
                                } else {
                                    alert(response1.body.msg)
                                }
                            })
                        } else {
                            alert("【异常】："+response.body.data.error + "【具体信息】:"+response.body.data.output)
                        }
                    }
                    else {
                        alert(response.body.msg)
                    }
                })
            }else{
                Vue.http.post("interface/project/func/run",{
                    "func_name": obj.func_name,
                    "func_code": obj.func_code
                }).then(function(response){
                    if(response.body.code==1){
                        if (response.body.data.status == 1) {
                            Vue.http.post("interface/project/func/edit", {
                                "func_id": obj.func_id,
                                "func_name": obj.func_name,
                                "func_code": obj.func_code,
                                "func_desc": obj.func_desc,
                            }).then(function (response1) {
                                if (response1.body.code == 0) {
                                    alert(response1.body.msg)
                                }
                            })
                        } else {
                            alert("【异常】："+response.body.data.error + "【具体信息】:"+response.body.data.output)
                        }
                    }
                    else {
                        alert(response.body.msg)
                    }
                })
            }
            this.edit=false;
        },
        runFunc: function(obj){
            var that = this;
            $("#runFunc").modal();
            Vue.http.post("interface/project/func/run",{
                "func_name": obj.func_name,
                "func_code": obj.func_code
            }).then(function(response) {
                if(response.body.code==1){
                    if(response.body.data.status == 1){
                        that.runResult = response.body.data;
                    }
                    else {
                        that.runResult = {
                            status: response.body.data.status,
                            output: "【异常】："+response.body.data.error + "\n" +"【具体信息】:"+response.body.data.output
                        }
                    }
                }else{
                    alert(response.body.msg)
                }
            })
        },
        editFunc: function(id,index){
            var that = this;
            for(var i=0;i<that.showfunc.length;i++){
                if(i!=index){
                    that.showfunc[i] = false;
                }
            }
            that.showfunc[index] = true;
            that.editFuncId = id;
            that.funcId = id;
            that.edit = true;
            that.activeList1 = ["active","disactive"];
            that.formation = true;
            that.code = false;
            Vue.http.post("interface/project/func/detail",{
                "func_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.func = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            })
        },
        cfDelFunc: function(id){
            $("#cfDelFunc").modal();
            this.delFuncID = id;
        },
        delFunc: function(){
            var that = this;
            Vue.http.post("interface/project/func/delete",{
                "func_id": that.delFuncID
            }).then(function(response1){
                if(response1.body.code==1){
                    $("#cfDelFunc").modal("hide");
                    Vue.http.post("interface/project/func/list",{
                         "pro_id": app.currProID
                    }).then(function (response) {
                         if(response.body.code==1) {
                             that.funcList = response.body.data;
                             var newPage = Math.ceil(that.funcList.length/10);
                             if(that.currentPage == newPage+1){
                                 that.currentPage--;
                             };
                             that.pageChanged(that.currentPage);
                             that.showfunc = [];
                             for(var i=0;i<that.funcList.length;i++){
                                 that.showfunc[i] = false;
                             }
                         }else{
                            alert(response.body.msg);
                        }
                    });
                }else{
                    alert(response1.msg)
                }
            })
        }
    }
});