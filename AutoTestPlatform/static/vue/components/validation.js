var validation = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">验证器</h1>\n' +
    '    </div>\n' +
    '    <div class="col-md-1 pull-right">\n' +
    '        <button class="btn btn-info" v-on:click="addCheck()"><span class="glyphicon glyphicon-plus"></span>添加</button>\n' +
    '    </div>\n' +
    '    <div class="col-md-12 top3" v-show="checkList.length!=0">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-body">\n' +
    '                <div v-for="(check,index) in pageList">\n' +
    '                    <div class="panel panel-info">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h4 class="panel-title"  v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false" >\n' +
    '                                 <div class="row">\n' +
    '                                     <div class="col-xs-4">\n' +
    '                                     <input type="text" class="form-control" v-show="edit && editCheckId==check.check_id" v-model="check.check_desc">\n' +
    '                                     <a class="marginLeft" v-show="!(edit && editCheckId==check.check_id)" v-on:click="checkDetail(check.check_id,index)">{{check.check_desc}}</a>\n' +
    '                                     </div>\n' +
    '                                     <div class="pull-right">\n' +
    '                                         <a v-show="shownCom" v-on:click="editCheck(check.check_id,index)"><span class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                         <a v-show="shownCom" v-on:click="cfDelCheck(check.check_id)"><span class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                                     </div>\n' +
    '                                </div>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body" v-show="showcheck[index]&&(checkId==check.check_id || check.check_id==null)">\n' +
    '                            <div class="row">\n' +
    '                                <div class="col-md-10">\n' +
    '                                    <ul class="nav nav-tabs">\n' +
    '                                        <li v-bind:class="activeList2[0]" >\n' +
    '                                            <a v-on:click="active4(0)">基本信息</a>\n' +
    '                                        </li>\n' +
    '                                        <li v-bind:class="activeList2[1]" >\n' +
    '                                            <a v-on:click="active4(1)">代码</a>\n' +
    '                                        </li>\n' +
    '                                    </ul>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-2">\n' +
    '                                    <div class="pull-right">\n' +
    '                                        <button class="btn btn-default" v-on:click="saveCheck(check)">保存</button>\n' +
    '                                        <button class="btn btn-default" v-on:click="runCheck(check)"><span class="glyphicon glyphicon-play"></span>运行</button>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="top3">\n' +
    '                                <table class="table" v-show="formation && !edit">\n' +
    '                                    <thead>\n' +
    '                                        <tr>\n' +
    '                                            <td class="wid6">函数名</td>\n' +
    '                                            <td class="wid7">{{check.check_name}}</td>\n' +
    '                                        </tr>\n' +
    '                                    </thead>\n' +
    '                                    <tbody>\n' +
    '                                        <tr>\n' +
    '                                            <td class="wid6">描述</td>\n' +
    '                                            <td class="wid7">{{check.check_desc}}</td>\n' +
    '                                        </tr>\n' +
    '                                    </tbody>\n' +
    '                                </table>\n' +
    '                                <div v-show="formation && edit">\n' +
    '                                    <form class="col-md-10 bs-example bs-example-form">\n' +
    '                                        <div class="input-group">\n' +
    '                                            <span class="input-group-addon">函数名</span>\n' +
    '                                            <input type="text" class="form-control" v-model="check.check_name">\n' +
    '                                        </div>\n' +
    '                                    </form>\n' +
    '                                    <form class="col-md-10 bs-example bs-example-form">\n' +
    '                                        <div class="input-group">\n' +
    '                                            <span class="input-group-addon">描述</span>\n' +
    '                                            <input type="text" class="form-control" v-model="check.check_desc">\n' +
    '                                        </div>\n' +
    '                                    </form>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div v-show="code">\n' +
    '                                <textarea class="form-control msd-elastic: \\n;" rows="10" v-model="check.check_code">\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="pull-right" v-show="totalItems>0">\n' +
    '                    <vue-nav :cur="currentPage" :all="allPage" :callback="pageChanged"></vue-nav> ' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal fade" id="addCheck" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加验证器\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">验证器名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入验证器名称" v-model="check.check_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入验证器描述" v-model="check.check_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="moreCheckDetail(check)">确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal fade" id="runCheck" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
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
    '                    <h5>{{runResult.output}}</h5>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-info" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal fade" id="cfDelCheck" >\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除验证器\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    确定删除该验证器？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delCheck()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n',
    data: function(){
        return {
            activeList2: ["active","disactive"],
            checkList: [],
            check: {
                "check_name": "",
                "check_id": null,
                "pro_id": app.currProID,
                "check_desc": "",
                "check_code": ""
            },
            pageList: [],
            totalItems: 0,
            currentPage: 1,
            allPage: 1,
            showcheck: [],
            code: false,
            formation: false,
            checkId: 0,
            runResult: {},
            delCheckID: null,
            edit: false,
            shownCom: false
        }
    },
    components:{
        'vue-nav': Vnav
    },
    mounted: function() {
        var that = this;
        Vue.http.post("interface/project/check/list",{
             "pro_id": app.currProID
        }).then(function (response) {
             if(response.body.code==1) {
                 that.checkList = response.body.data;
                 that.totalItems = that.checkList.length;
                 that.currentPage = 1;
                 that.pageChanged(1);
                 for(var i=0;i<that.checkList.length;i++){
                     that.showcheck[i] = false;
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
            Vue.http.post("interface/project/check/list",{
                 "pro_id": app.currProID
            }).then(function (response) {
                 if(response.body.code==1) {
                     that.checkList = response.body.data;
                     that.totalItems = that.checkList.length;
                     that.allPage = Math.ceil(that.totalItems/10);
                     that.pageList = [];
                     if(that.totalItems>0){
                         if(that.currentPage==Math.ceil(that.checkList.length/10)){
                            for(var i=0;i<that.checkList.length-(that.currentPage-1)*10;i++){
                                that.pageList[i] = that.checkList[(that.currentPage-1)*10+i];
                            }
                         }else{
                            for(var i=0;i<10;i++){
                                that.pageList[i] = that.checkList[(that.currentPage-1)*10+i];
                            }
                         }
                     }
                 }
            })
        },
        addCheck: function(){
            $("#addCheck").modal();
            this.check = {
                "check_name": "",
                "check_id": null,
                "pro_id": app.currProID,
                "check_desc": "",
                "check_code": ""
            };
        },
        moreCheckDetail: function(obj){
            var that = this;
            that.check = obj;
            that.checkList.push(that.check);
            that.totalItems = that.checkList.length;
            that.currentPage = Math.ceil(that.totalItems/10);
            that.pageList = [];
            for(var i=0;i<that.checkList.length-(that.currentPage-1)*10;i++){
                that.pageList[i] = that.checkList[(that.currentPage-1)*10+i];
            }
            that.showcheck = [];
            for(var i=0;i<that.pageList.length;i++){
                that.showcheck[i] = false;
            }
            that.showcheck[that.showcheck.length-1] = true;
            that.activeList2 = ["disactivec","active"];
            that.formation = false;
            that.code = true;
        },
        checkDetail: function(id,index){
            var that = this;
            for(var i=0;i<that.showcheck.length;i++){
                if(i!=index){
                    that.showcheck[i] = false;
                }
            }
            that.showcheck[index] = !that.showcheck[index];
            that.checkId = id;
            that.activeList2 = ["active","disactive"];
            that.formation = true;
            that.code = false;
            Vue.http.post("interface/project/check/detail",{
                "check_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.check = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            })
        },
        active4: function(index){
            for(var i=0;i<2;i++){
                this.activeList2[i] = "disactive";
            }
            this.activeList2[index] = "active";
            if(index==0){
                this.formation = true;
                this.code = false;
            }else{
                this.formation = false;
                this.code = true;
            }
        },
        runCheck: function(obj){
            var that = this;
            $("#runCheck").modal();
            Vue.http.post("interface/project/check/run",{
                "check_name": obj.check_name,
                "check_code": obj.check_code
            }).then(function(response) {
                if(response.body.code==1){
                    if(response.body.data.status == 1){
                        that.runResult = response.body.data;
                    }
                    else {
                        that.runResult = {
                            status: response.body.data.status,
                            output: "【异常】："+response.body.data.error + "【具体信息】:"+response.body.data.output
                        }
                    }
                }else{
                    alert(response.body.msg)
                }
            })
        },
        saveCheck: function(obj){
            var that = this;
             if(obj.check_desc==""){
                obj.check_desc=" ";
            }
            if(obj.check_code==null){
                obj.check_code=" ";
            }
            if(obj.check_id==null){
                Vue.http.post("interface/project/check/run",{
                    "check_name": obj.check_name,
                    "check_code": obj.check_code
                }).then(function(response){
                    if(response.body.code==1) {
                        if (response.body.data.status == 1) {
                            Vue.http.post("interface/project/check/create", {
                                "pro_id": app.currProID,
                                "check_name": obj.check_name,
                                "check_code": obj.check_code,
                                "check_desc": obj.check_desc
                            }).then(function (response1) {
                                if (response1.body.code == 1) {
                                    Vue.http.post("interface/project/check/list", {
                                        "pro_id": app.currProID
                                    }).then(function (response2) {
                                        if (response2.body.code == 1) {
                                            that.checkList = response2.body.data;
                                            that.allPage = Math.ceil(that.checkList.length/10);
                                            that.pageChanged(that.allPage);
                                            that.showcheck = [];
                                            for(var i=0;i<that.checkList.length;i++){
                                                 that.showcheck[i] = false;
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
                Vue.http.post("interface/project/check/run",{
                    "check_name": obj.check_name,
                    "check_code": obj.check_code
                }).then(function(response){
                    if(response.body.code==1){
                        if (response.body.data.status == 1) {
                            Vue.http.post("interface/project/check/edit", {
                                "check_id": obj.check_id,
                                "check_name": obj.check_name,
                                "check_code": obj.check_code,
                                "check_desc": obj.check_desc
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
            that.edit=false;
        },
        editCheck: function(id,index){
            var that = this;
            that.editCheckId = id;
            that.checkId = id;
            that.edit = true;
            for(var i=0;i<that.showcheck.length;i++){
                if(i!=index){
                    that.showcheck[i] = false;
                }
            }
            that.showcheck[index] = true;
            that.activeList2 = ["active","disactive"];
            that.formation = true;
            that.code = false;
            Vue.http.post("interface/project/check/detail",{
                "check_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.check = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            })
        },
        cfDelCheck: function(id){
            $("#cfDelCheck").modal();
            this.delCheckID = id;
        },
        delCheck: function(){
            var that = this;
            Vue.http.post("interface/project/check/delete",{
                "check_id": that.delCheckID
            }).then(function(response1){
                if(response1.body.code==1){
                    $("#cfDelCheck").modal("hide");
                    Vue.http.post("interface/project/check/list",{
                         "pro_id": app.currProID
                    }).then(function (response) {
                         if(response.body.code==1) {
                             that.checkList = response.body.data;
                             var newPage = Math.ceil(that.checkList.length/10);
                             if(that.currentPage == newPage+1){
                                 that.currentPage--;
                             };
                             that.pageChanged(that.currentPage);
                             that.showcheck = [];
                             for(var i=0;i<that.checkList.length;i++){
                                 that.showcheck[i] = false;
                             }
                         }else{
                            alert(response.body.msg);
                        }
                    });
                }else{
                    alert(response1.body.msg)
                }
            })
        }
    }

});