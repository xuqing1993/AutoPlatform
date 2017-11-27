var index = Vue.extend({
    template:  ' <div id="homepage">\n' +
'        <div>\n' +
'            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n' +
'                <div class="container">\n' +
'                    <div class="navbar-header">\n' +
'                        <a class="navbar-brand" href="#" >自动化平台</a>\n' +
'                    </div>\n' +
'                    <div>\n' +
'                        <form class="navbar-form navbar-right" role="search">\n' +
'                            <div class="form-group">\n' +
'                                <input type="text" class="form-control" placeholder="Email">\n' +
'                                <input type="text" class="form-control" placeholder="Password">\n' +
'                                <button type="submit" class="btn btn-success">登录</button>\n' +
'                            </div>\n' +
'                        </form>\n' +
'                    </div>\n' +
'                </div>\n' +
'            </nav>\n' +
'            <div class="collapse navbar-collapse bs-js-navbar-scrollspy">\n' +
'                <div class="jumbotron">\n' +
'                    <div class="container">\n' +
'                        <br><br><br>\n' +
'                        <h1>测试平台</h1>\n' +
'                        <p>--------------------------------------------------------</p>\n' +
'                        <a class="btn btn-primary btn-lg" v-on:click="addProject()">\n' +
'                          <span class="glyphicon glyphicon-plus">   </span> 添加项目\n' +
'                        </a>\n' +
'                    </div>\n' +
'                </div>\n' +
'\n' +
'\n' +
'                <!--添加项目-->\n' +
'                <div class="modal fade" id="myModal">\n' +
'                    <div class="modal-dialog">\n' +
'                        <div class="modal-content">\n' +
'                            <div class="modal-header">\n' +
'                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
'                                    &times;\n' +
'                                </button>\n' +
'                                <h4 class="modal-title">\n' +
'                                    添加项目\n' +
'                                </h4>\n' +
'                            </div>\n' +
'                            <div class="modal-body">\n' +
'                                <form class="form-horizontal" role="form">\n' +
'                                    <div class="form-group">\n' +
'                                        <label class="col-sm-2 control-label">项目名：</label>\n' +
'                                        <div class="col-sm-10">\n' +
'                                            <input type="text" class="form-control" v-model="pro.pro_name" placeholder="请输入名称">\n' +
'                                        </div>\n' +
'                                    </div>\n' +
'                                    <div class="form-group">\n' +
'                                        <label class="col-sm-2 control-label">描述：</label>\n' +
'                                        <div class="col-sm-10">\n' +
'                                            <input type="text" class="form-control" v-model="pro.pro_desc" placeholder="请输入描述">\n' +
'                                        </div>\n' +
'                                    </div>\n' +
'                                </form>\n' +
'                            </div>\n' +
'                            <div class="modal-footer">\n' +
'                                <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
'                                </button>\n' +
'                                <button type="button" class="btn btn-primary" v-on:click="save()" >\n' +
'                                    保存\n' +
'                                </button>\n' +
'                            </div>\n' +
'                        </div>\n' +
'                    </div>\n' +
'                 </div>\n' +
'                <div  class="col-md-12 column">\n' +
'                    <div class="container">\n' +
'                        <div class="row">\n' +
'\n' +
'                            <div v-for="x in list">\n' +
'                                <div class="col-md-4">\n' +
'                                    <div class="thumbnail">\n' +
'                                        <div class="caption">\n' +
'                                                <h3> {{ x.pro_name  }} </h3>\n' +
'                                                <p>{{ x.pro_desc }}</p>\n' +
'                                             <router-link to="/project" class="btn btn-default" role="button" v-on:click.native="recordId(x.pro_id)">进入项目</router-link>'+
'                                            <btn class="btn" v-on:click="editPro(x.pro_id)">编辑</btn>\n' +
'                                            <btn class="btn" v-on:click="confirmDel(x.pro_id)">删除</btn>\n' +
'\n' +
'\n' +
'                                        </div>\n' +
'                                    </div>\n' +
'                                </div>\n' +
'                            </div>\n' +
'\n' +
'                        </div>\n' +
'                    </div>\n' +
'                </div>\n' +
'            </div>\n' +
'\n' +
'\n' +
'            <!--编辑项目-->\n' +
'            <div class="modal fade" id="editModal">\n' +
'                <div class="modal-dialog">\n' +
'                    <div class="modal-content">\n' +
'                        <div class="modal-header">\n' +
'                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
'                                &times;\n' +
'                            </button>\n' +
'                            <h4 class="modal-title" id="myModalLabel">\n' +
'                                编辑项目\n' +
'                            </h4>\n' +
'                        </div>\n' +
'                        <div class="modal-body">\n' +
'                            <form class="form-horizontal" role="form">\n' +
'                                <div class="form-group">\n' +
'                                    <label class="col-sm-2 control-label">项目名：</label>\n' +
'                                    <div class="col-sm-10">\n' +
'                                        <input type="text" class="form-control" v-model="pro.pro_name">\n' +
'                                    </div>\n' +
'                                </div>\n' +
'                                <div class="form-group">\n' +
'                                    <label class="col-sm-2 control-label">描述：</label>\n' +
'                                    <div class="col-sm-10">\n' +
'                                        <input type="text" class="form-control" v-model="pro.pro_desc">\n' +
'                                    </div>\n' +
'                                </div>\n' +
'                            </form>\n' +
'                        </div>\n' +
'                        <div class="modal-footer">\n' +
'                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
'                            </button>\n' +
'                            <button type="button" class="btn btn-primary" v-on:click="saveEdit(pro.pro_id)">\n' +
'                                保存\n' +
'                            </button>\n' +
'                        </div>\n' +
'                    </div>\n' +
'                </div>\n' +
'             </div>\n' +
'\n' +
'            <div class="modal fade" id="confirmModal" >\n' +
'                <div class="modal-dialog">\n' +
'                    <div class="modal-content">\n' +
'                        <div class="modal-header alert alert-danger">\n' +
'                            <h4 class="modal-title">\n' +
'                                删除项目\n' +
'                            </h4>\n' +
'                        </div>\n' +
'                        <div class="modal-body">\n' +
'                            确定删除该项目吗？\n' +
'                        </div>\n' +
'                        <div class="modal-footer">\n' +
'                            <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
'                            </button>\n' +
'                            <button type="button" class="btn btn-primary" v-on:click="delPro()">\n' +
'                                确定\n' +
'                            </button>\n' +
'                        </div>\n' +
'                    </div>\n' +
'                </div>\n' +
'             </div>\n' +
'        </div>\n' +
'    </div>',
    data: function(){
        return {
            delId: 0,
            list: [],
            pro: {
                pro_id: 0,
                pro_name: '',
                pro_desc: ''
            }
        }
    },
    mounted: function() {
        var that = this;
        Vue.http.get('project/list').then(function(response){
           that.list = response.body.data;
        });
    },
    methods: {
        recordId: function (id) {
            app.currProID = id;
            app.currItemID = 0;
            app.currmodelID = 0;
        },
        addProject: function (){
            this.pro = {};
            $("#myModal").modal();
        },
        save : function (){
            var that = this;
            if(that.pro.pro_name == null){
                that.pro.pro_name = "";
            }
            if(that.pro.pro_desc == null){
                that.pro.pro_desc = "无";
            }
            Vue.http.post("project/create",{
                "pro_name": that.pro.pro_name,
                "pro_desc": that.pro.pro_desc
            }).then(function(response){
               if(response.body.code==1){
                   $("#myModal").modal('hide');
                   Vue.http.get('project/list').then(function(response){
                       that.list = response.body.data;
                   });
               }else{
                    alert(response.body.msg);
                }
            });
        },
        editPro: function (id){
            var that = this;
            Vue.http.post("project/detail",{
                "pro_id": id
            }).then(function(response){
               if(response.body.code==1){
                  that.pro = response.body.data;
               }else{
                    alert(response.body.msg);
                }
            });
            $("#editModal").modal();
        },
        saveEdit: function (id){
            var that = this;
            if(this.pro.pro_desc==""){
                this.pro.pro_desc="无";
            }
            Vue.http.post("project/edit",{
                "pro_id": id,
                "pro_name": that.pro.pro_name,
                "pro_desc": that.pro.pro_desc
            }).then(function(response){
               if(response.body.code==1){
                  $("#editModal").modal('hide');
                   Vue.http.get('project/list').then(function(response){
                       that.list = response.body.data;
                   });
               }else{
                    alert(response.body.msg);
                }
            });
        },
        confirmDel: function (id){
            delId=id;
            $("#confirmModal").modal();
        },
        delPro: function (){
            var that = this;
            $("#confirmModal").modal('hide');
            Vue.http.post("project/delete",{
                "pro_id": delId
            }).then(function(response){
               if(response.body.code==1){
                   Vue.http.get('project/list').then(function(response){
                       that.list = response.body.data;
                   });
               }else{
                    alert(response.body.msg);
               }
            });
        }
    }
});



 
