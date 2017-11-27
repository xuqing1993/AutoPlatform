var apiCase = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">API用例库</h1>\n' +
    '    </div> ' +
    '   <div class="col-md-12 top3">\n' +
    '        <div class="panel panel-default">\n' +
    '            <div class="panel-body">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-12">\n' +
    '                        <ul class="nav nav-tabs">\n' +
    '                            <li v-bind:class="List[0]">\n' +
    '                                <a v-on:click="showAll()">全部</a>\n' +
    '                            </li>\n' +
    '                            <li v-for="(md,index) in moduleList" v-bind:class="List[index+1]" class="module_li">\n' +
    '                                <a class="bind_hover_card" v-on:click="active1(index)">{{md.module_name}}</a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>' +
    '           <div class="panel-body">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <div class="btn-group">\n' +
    '                            <button type="button" class="btn btn-info" v-on:click="run()">\n' +
    '                                <span class="glyphicon glyphicon-play"></span>运行\n' +
    '                            </button>\n' +
    '                            <button type="button" class="btn btn-default" v-on:click="addCase()">\n' +
    '                                添加用例\n' +
    '                            </button>\n' +
    '                            <button type="button" class="btn btn-default" v-on:click="addApi()">\n' +
    '                                添加接口\n' +
    '                            </button>\n' +
    '                            <button type="button" class="btn btn-default" v-on:click="addModule()">\n' +
    '                                添加模块\n' +
    '                            </button>\n' +
    '                            <button type="button" class="btn btn-default" v-on:click="addSuite()">\n' +
    '                                添加套件\n' +
    '                            </button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>' +
    '       </div>' +
    '       <div class="panel-body">\n' +
    '            <div v-for="(list,index) in pageList">\n' +
    '                <div class="panel panel-info">\n' +
    '                    <div class="panel-heading">\n' +
    '                        <h4 class="panel-title" v-on:mouseenter="shownCom=true" v-on:mouseleave="shownCom=false">\n' +
    '                            <a v-on:click="getAPICase(list.api_id,index)">{{list.api_name}}</a>\n' +
    '                            <div class="pull-right">\n' +
    '                                <a v-show="shownCom" v-on:click="editapi(list.api_id)"><span\n' +
    '                                        class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                <a v-show="shownCom" v-on:click="cfDelapi(list.api_id)"><span\n' +
    '                                        class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                            </div>\n' +
    '                        </h4>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body" v-show="showCase[index]">\n' +
    '                        <div v-for="(cs,index1) in caseList">\n' +
    '                            <div class="panel panel-default">\n' +
    '                                <div class="panel-heading">\n' +
    '                                    <h4 class="panel-title" v-on:mouseenter="shownCom1=true" v-on:mouseleave="shownCom1=false">\n' +
    '                                        <a v-on:click="infoCase(cs,index1)">{{cs.case_name}}</a>\n' +
    '                                        <div class="pull-right">\n' +
    '                                            <a v-show="shownCom1" v-on:click="copyCase(cs)"><span\n' +
    '                                                    class="glyphicon glyphicon-file"></span>复制</a>\n' +
    '                                            <a v-show="shownCom1" v-on:click="runCase(cs)"><span\n' +
    '                                                    class="glyphicon glyphicon-play"></span>运行</a>\n' +
    '                                            <a v-show="shownCom1" v-on:click="editCase(cs)"><span\n' +
    '                                                    class="glyphicon glyphicon-pencil"></span>编辑</a>\n' +
    '                                            <a v-show="shownCom1" v-on:click="cfDelCase(cs)"><span\n' +
    '                                                    class="glyphicon glyphicon-remove"></span>删除</a>\n' +
    '                                        </div>\n' +
    '                                    </h4>\n' +
    '                                </div>' +
    '                                <div class="panel-body" v-show="showinfo[index1]">\n' +
    '                                    <div class="row col-md-12">\n' +
    '                                        <ul class="nav nav-tabs">\n' +
    '                                            <li v-bind:class="al[0]">\n' +
    '                                                <a v-on:click="active2(0,cs)">基本信息</a>\n' +
    '                                            </li>\n' +
    '                                            <li v-bind:class="al[1]" class="dropdown">\n' +
    '                                                <a class="dropdown-toggle" data-toggle="dropdown"\n' +
    '                                                   v-on:click="active2(1,cs)">\n' +
    '                                                    请求\n' +
    '                                                </a>\n' +
    '                                            </li>\n' +
    '                                            <li v-bind:class="al[2]" class="dropdown">\n' +
    '                                                <a class="dropdown-toggle" data-toggle="dropdown"\n' +
    '                                                   v-on:click="active2(2,cs)">\n' +
    '                                                    响应\n' +
    '                                                </a>\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>' +
    '                                    <div class="panel-body top3">\n' +
    '                                        <table class="table" v-show="showSelectId==0">\n' +
    '                                            <tr>\n' +
    '                                               <td class="wid1">名称</td>\n' +
    '                                               <td class="wid2" colspan="3">{{cs.case_name}}</td>\n' +
    '                                            </tr>\n' +
    '                                            <tr>\n' +
    '                                                <td class="wid1">URL</td>\n' +
    '                                                <td class="wid2">{{cs.case_url}}</td>\n' +
    '                                                <td class="wid1">请求方法</td>\n' +
    '                                                <td class="wid2">{{cs.case_method}}</td>\n' +
    '                                            </tr>\n' +
    '                                            <tr>\n' +
    '                                                <td class="wid1">接口协议</td>\n' +
    '                                                <td class="wid2">{{cs.case_protocol}}</td>\n' +
    '                                                <td class="wid1">所属API</td>\n' +
    '                                                <td class="wid2">{{api.api_name}}</td>\n' +
    '                                            </tr>\n' +
    '                                            <tr>\n' +
    '                                                <td class="wid1">校验器</td>\n' +
    '                                                <td class="wid2">{{check1.check_desc}}</td>\n' +
    '                                                <td class="wid1">依赖</td>\n' +
    '                                                <td class="wid2">{{depnd.depnd_api_name}}</td>\n' +
    '                                            </tr>\n' +
    '                                            <tr>\n' +
    '                                                <td class="wid1">描述</td>\n' +
    '                                                <td class="wid2" colspan="3">{{cs.case_desc}}</td>\n' +
    '                                            </tr>\n' +
    '                                            <tr>\n' +
    '                                                <td class="wid1"></td>\n' +
    '                                                <td class="wid2"></td>\n' +
    '                                                <td class="wid1"></td>\n' +
    '                                                <td class="wid2"></td>\n' +
    '                                            </tr>\n' +
    '                                        </table>' +

    '                                        <div v-show="showSelectId==1">\n' +
    '                                            <div class="col-md-12 top3">\n' +
    '                                                <div class="row form-group">\n' +
    '                                                    <form class="col-md-4 bs-example bs-example-form">\n' +
    '                                                        <div class="input-group">\n' +
    '                                                            <span class="input-group-addon">依赖接口</span>\n' +
    '                                                            <select class="form-control" v-model="selected2">\n' +
    '                                                               <option v-for="apiDep in apiDepList" v-bind:value="apiDep.depnd_api_id">{{ apiDep.depnd_api_name }}</option>\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                    </form>\n' +
    '                                                    <form class="col-md-4 bs-example bs-example-form">\n' +
    '                                                        <div class="input-group">\n' +
    '                                                            <span class="input-group-addon">请求格式</span>\n' +
    '                                                            <select class="form-control" v-model="cs.param_type">\n' +
    '                                                                <option value="">无</option>\n' +
    '                                                                <option v-for="type in typeType" v-bind:value="type">{{ type }}</option>\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                    </form>\n' +
    '                                                </div>\n' +
    '                                                <h4>请求参数：</h4>\n' +
    '                                                <div class="form">\n' +
    '                                                    <form role="form">\n' +
    '                                                        <div class="form-group">\n' +
    '                                                           <textarea class="form-control msd-elastic: \\n;" rows="3"\n' +
    '                                                                  v-model="cs.input_data">\n' +
    '                                                           </textarea>\n' +
    '                                                        </div>\n' +
    '                                                    </form>\n' +
    '                                                </div>\n' +
    '                                                <h4>前置SQL：</h4>\n' +
    '                                                    <div class="form">\n' +
    '                                                        <form role="form">\n' +
    '                                                            <div class="form-group">\n' +
    '                                                               <textarea class="form-control msd-elastic: \\n;" rows="3"\n' +
    '                                                                      v-model="cs.front_sql">\n' +
    '                                                               </textarea>\n' +
    '                                                            </div>\n' +
    '                                                        </form>\n' +
    '                                                    </div>\n' +
    '                                                <h4>后置SQL：</h4>\n' +
    '                                                <div class="form">\n' +
    '                                                    <form role="form">\n' +
    '                                                        <div class="form-group">\n' +
    '                                                            <textarea class="form-control msd-elastic: \\n;" rows="3"\n' +
    '                                                                      v-model="cs.rear_sql">\n' +
    '                                                            </textarea>\n' +
    '                                                        </div>\n' +
    '                                                    </form>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="btn-group  col-sm-offset-11">\n' +
    '                                                <button class="btn btn-primary"\n' +
    '                                                    v-on:click="saveEditCase(cs,cs.api_id,selected2,cs.check_id)">\n' +
    '                                                    保存\n' +
    '                                                </button>\n' +
    '                                                <button class="btn btn-success" v-on:click="runCase(cs)">运行</button>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +

    '                                        <div class="col-md-12 top3" v-show="showSelectId==2">\n' +
    '                                            <div class="row form-group">\n' +
    '                                                <form class="col-md-4 bs-example bs-example-form">\n' +
    '                                                    <div class="input-group">\n' +
    '                                                        <span class="input-group-addon">验证器</span>\n' +
    '                                                        <select class="form-control" v-model="selected3">\n' +
    '                                                            <option v-for="check1 in checkList" v-bind:value="check1.check_id">{{ check1.check_desc }}</option>\n' +
    '                                                        </select>\n' +
    '                                                    </div>\n' +
    '                                                </form>\n' +
    '                                                <form class="col-md-4 bs-example bs-example-form">\n' +
    '                                                    <div class="input-group">\n' +
    '                                                        <span class="input-group-addon">状态码</span>\n' +
    '                                                        <input type="text" class="form-control"\n' +
    '                                                               v-model="cs.exp_status">\n' +
    '                                                    </div>\n' +
    '                                                </form>\n' +
    '                                            </div>\n' +
    '                                            <h4>期望的返回值：</h4>\n' +
    '                                            <div class="col-md-12">\n' +
    '                                                <form role="form">\n' +
    '                                                    <textarea class="form-control msd-elastic: \\n" rows="3"\n' +
    '                                                              v-model="cs.exp_data">\n' +
    '                                                    </textarea>\n' +
    '                                                </form>\n' +
    '                                            </div>\n' +
    '                                            <h4>shcema验证：</h4>\n' +
    '                                            <div class="col-md-12">\n' +
    '                                                <form role="form">\n' +
    '                                                    <textarea class="form-control msd-elastic: \\n" rows="5"\n' +
    '                                                             v-model="cs.case_schema">\n' +
    '                                                    </textarea>\n' +
    '                                                </form>\n' +
    '                                            </div>\n' +
    '                                            <div class="btn-group  col-sm-offset-11">\n' +
    '                                                <button class="btn btn-primary"\n' +
    '                                                        v-on:click="saveEditCase(cs,cs.api_id,cs.depnd_api_id,selected3)">\n' +
    '                                                    保存\n' +
    '                                                </button>\n' +
    '                                                <button class="btn btn-success" v-on:click="runCase(cs)">运行</button>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                     </div>\n' +
    '                                 </div>' +
    '                             </div>' +
    '                         </div>' +
    '                     </div>\n' +
    '                 </div>\n' +
    '            </div>\n' +
    '            <div class="pull-right" v-show="totalItems>0">\n' +
    '                <vue-nav :cur="currentPage" :all="allPage" :callback="pageChanged"></vue-nav>' +
    '            </div>\n' +
    '        </div>' +
    '   </div>' +
    '   <div class="modal fade" id="AddModule" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加模块\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">模块名：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入模块名称"\n' +
    '                                       v-model="module.module_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">描述：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入模块描述"\n' +
    '                                       v-model="module.module_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveModule()">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="AddSuite" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加套件\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">套件名：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入套件名称"\n' +
    '                                       v-model="suite.suite_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">描述：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入套件描述"\n' +
    '                                       v-model="suite.suite_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveSuite()">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="addapi" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加接口\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">接口名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入接口名称" v-model="api.api_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属模块：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="module">\n' +
    '                                    <option value="">无</option>\n' +
    '                                     <option v-for="module in moduleList" v-bind:value="module.module_id">{{ module.module_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">接口协议：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="api.api_protocol">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="type in protocolType" v-bind:value="type">{{ type }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">URL：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入URL" v-model="api.api_url">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">请求方法：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="api.api_method">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="type in methodType" v-bind:value="type">{{ type }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">格式：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="api.param_type">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="type in typeType" v-bind:value="type">{{ type }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入描述" v-model="api.api_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveAPI(module.module_id)">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div> ' +
    '    <div class="modal fade" id="editapi" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        编辑接口\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">接口名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入接口名称" v-model="api.api_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属模块：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="selected">\n' +
    '                                     <option v-for="module in moduleList" v-bind:value="module.module_id">{{ module.module_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">接口协议：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="api.api_protocol">\n' +
    '                                        <option v-for="type in protocolType" v-bind:value="type">{{ type }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">URL：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入URL" v-model="api.api_url">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">请求方法：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="api.api_method">\n' +
    '                                        <option v-for="type in methodType" v-bind:value="type">{{ type }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">格式：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="api.param_type">\n' +
    '                                        <option v-for="type in typeType" v-bind:value="type">{{ type }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入描述" v-model="api.api_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveEditAPI(selected)">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="cfAPI">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除接口\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    确定删除该接口？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delAPI()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '   <div class="modal fade" id="AddCase" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        添加用例\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">用例名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入用例名称" v-model="caseDetail.case_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入用例描述" v-model="caseDetail.case_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属API：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="selectedApi" v-on:change="getApi(caseDetail,selectedApi)">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="api in apiList" v-bind:value="api.api_id">{{ api.api_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属套件：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <div class="panel panel-default">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div class="checkbox col-md-6" v-for="(st,index) in suiteList">\n' +
    '                                            <label>\n' +
    '                                                <input type="checkbox" v-bind:value="st.suite_id"  v-model="suite_list"\n' +
    '                                                       ><span>{{st.suite_name}}</span>\n' +
    '                                            </label>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">URL：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入URL" v-model="caseDetail.case_url">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">请求协议：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="caseDetail.case_protocol">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="protocol in protocolType" v-bind:value="protocol">{{ protocol }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">请求方法：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="caseDetail.case_method">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="method in methodType" v-bind:value="method">{{ method }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary"\n' +
    '                            v-on:click="saveCase(selectedApi)">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="EditCase" aria-hidden="true">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        编辑用例信息\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <form class="form-horizontal">\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">用例名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入用例名称" v-model="caseDetail.case_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">描述：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入用例描述" v-model="caseDetail.case_desc">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属API：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="selected1" v-on:change="getApi(caseDetail,selected1)">\n' +
    '                                        <option v-for="api in apiList" v-bind:value="api.api_id ">{{ api.api_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属套件：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <div class="panel panel-default">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div class="checkbox col-md-6" v-for="st in suiteList">\n' +
    '                                            <label>\n' +
    '                                                <input type="checkbox" v-bind:value="st.suite_id" v-model="suite_list">\n' +
    '                                                   <span>{{st.suite_name}}</span>\n' +
    '                                            </label>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">URL：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入URL" v-model="caseDetail.case_url">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">请求协议：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="caseDetail.case_protocol">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="protocol in protocolType" v-bind:value="protocol">{{ protocol }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">请求方法：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="caseDetail.case_method">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="method in methodType" v-bind:value="method">{{ method }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary"\n' +
    '                            v-on:click="saveEditCase(caseDetail,selected1,caseDetail.depnd_api_id,caseDetail.check_id)">\n' +
    '                        保存\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="cfCase">\n' +
    '        <div class="modal-dialog">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header alert alert-danger">\n' +
    '                    <h4 class="modal-title">\n' +
    '                        删除用例\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    确定删除该用例？？\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="delCase()">\n' +
    '                        确定\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="runCase" aria-hidden="true">\n' +
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
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="env1 in envList" v-bind:value="env1">{{ env1.env_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary"\n' +
    '                            v-on:click="getCaseResult(caseDetail.case_id,env.env_id)">\n' +
    '                        执行\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="caseResult" aria-hidden="true">\n' +
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
    '                            <label class="col-md-1 control-label">请求体：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <div class="panel panel-default">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">URL：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                                <input type="text" class="form-control" v-model="caseResult.url"\n' +
    '                                                       style="background-color: white" readonly>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">请求：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="caseResult.request_body"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <label class="col-md-1 control-label">状态码：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <div class="panel" v-bind:class="caseResult.status_check == 1 || caseResult.status_check == 2 ? \'panel-default\' : \'panel-danger\'">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">期望：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                                <input type="text" class="form-control" v-model="caseResult.exp_status"\n' +
    '                                                       style="background-color: white" readonly>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">实际：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                                <input type="text" class="form-control" v-model="caseResult.status"\n' +
    '                                                       style="background-color: white" readonly>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">校验：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                                <input type="text" class="form-control"\n' +
    '                                                       v-model="caseResult.status_check_text"\n' +
    '                                                       style="background-color: white" readonly>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <label class="col-md-1 control-label">响应：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <div class="panel" v-bind:class="caseResult.body_check == 1 || caseResult.body_check == 2 ? \'panel-default\' : \'panel-danger\'">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">期望：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="caseResult.exp_data"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">实际：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="caseResult.response_body"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">校验：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                                <input type="text" class="form-control"\n' +
    '                                                       v-model="caseResult.body_check_text"\n' +
    '                                                       style="background-color: white" readonly>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <label class="col-md-1 control-label">schema：</label>\n' +
    '                            <div class="col-md-11">\n' +
    '                                <div class="panel" v-bind:class="caseResult.schema_check == 1 || caseResult.schema_check == 2 ? \'panel-default\' : \'panel-danger\'">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">schema：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="caseResult.schema"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group">\n' +
    '                                            <label class="col-md-1 control-label">检验：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                                <input type="text" class="form-control"\n' +
    '                                                       v-model="caseResult.schema_check_text"\n' +
    '                                                       style="background-color: white" readonly>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <div class="form-group" v-show="caseResult.schema_check !=1">\n' +
    '                                            <label class="col-md-1 control-label">信息：</label>\n' +
    '                                            <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="1" v-model="caseResult.schema_msg"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
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
    '    <div class="modal fade" id="runModule" aria-hidden="true">\n' +
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
    '                            <label class="col-md-3 control-label">报告名：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <input type="text" class="form-control" placeholder="请输入报告名称" v-model="report_name">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属环境：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="env">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="env1 in envList" v-bind:value="env1">{{ env1.env_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-3 control-label">所属套件：</label>\n' +
    '                            <div class="col-md-8">\n' +
    '                                <select class="form-control" v-model="suite">\n' +
    '                                    <option value="">无</option>\n' +
    '                                    <option v-for="suite1 in suiteList" v-bind:value="suite1">{{ suite1.suite_name }}</option>\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-primary" v-on:click="saveRun(env.env_id,suite.suite_id)">\n' +
    '                        执行\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +
    '    <div class="modal fade" id="loading" aria-hidden="true">\n' +
    '        <div id="loader-container" v-show="showLoading">\n' +
    '            <p id="loadingText">运行中……</p>\n' +
    '        </div>\n' +
    '    </div>' +
    '</div>',
    data: function(){
        return {
            pageList: [],
            totalItems: 0,
            currentPage: 1,
            allPage: 1,
            shownCom: false,
            shownCom1: false,
            moduleId: null,
            apiId: null,
            caseId: null,
            selected: 0,
            showBtn: false,
            showBtn1: true,
            showBtn: false,
            showModule: true,
            List: ["active"],
            envList: [],
            suite_list: [],
            varInfoShow: true,
            moduleList: [],
            module: {
                "module_desc": "",
                "module_id": null,
                "pro_id": app.currProID,
                "module_name": ""
            },
            suiteList: [],
            suite: {
                "suite_desc": "",
                "suite_id": null,
                "pro_id": app.currProID,
                "suite_name": ""
            },
            methodType: ["GET","POST","PUT","DELETE"],
            protocolType: ["http","https"],
            typeType: ["json"],
            apiList: [],
            api: {
                "pro_id": app.currProID,
                "api_id": null,
                "module_id": null,
                "api_desc": "",
                "api_param": "",
                "api_url": "",
                "api_method": "",
                "api_type": "",
                "api_protocol": "",
                "api_name": ""
            },
            selectedApi: '',
            caseList: [],
            caseDetail: {
                "case_id": null,
                "pro_id": app.currProID,
                "api_id": null,
                "case_desc": "",
                "case_name": "",
                "depnd_api_id": null,
                "check_id": null,
                "input_data": "",
                "exp_data": "",
                "case_schema": "",
                "case_protocol": "",
                "case_url": "",
                "case_method": "",
                "exp_status": 200,
                "exp_resp_header": "",
                "param_type": "",
                "suite_list":[]
            },
            report: {
                "report_name": "",
                "start_time": "",
                "suite_id": null,
                "fail_num": 1,
                "pro_id": app.currProID,
                "pass_num": 1,
                "result_id": null,
                "end_time": 1478621079
            },
            report_name: "",
            showLoading: false,
            check1: {
                "check_name": "",
                "check_id": null,
                "pro_id": app.currProID,
                "check_desc": "",
                "check_code": ""
            },
            depnd: {
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
            showCase: [false],
            showAllAPI: true,
            al: ["active","disactive","disactive"],
            showSelectId: 0,
            selected1: 0,
            selected2: 0,
            selected3: 0,
            caseId: 0,
            apiId: 0,
            env: {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            },
            caseResult: {
                "request_body": "",
                "schema_check": 0,
                "header": "",
                "response_body": "",
                "header_check": 0,
                "schema": "",
                "url": "",
                "exp_data": "",
                "body_check": 0,
                "status": 200,
                "exp_status": 0,
                "exp_header": "",
                "status_check": 0,
                "schema_msg":""
            }
        }
    },
    components:{
        'vue-nav': Vnav
    },
    mounted: function() {
        var that = this;
        Vue.http.post('interface/project/env/list',{
            "pro_id": app.currProID
        }).then(function(response){
            if(response.body.code==1){
                that.envList = response.body.data;
            }else{
                alert(response.body.msg)
            }
        })
        Vue.http.post("interface/project/dapi/list",{
            "pro_id": app.currProID
        }).then(function(response){
            if(response.body.code==1){
                that.apiDepList = response.body.data;
                that.apiDep = new Object();
                that.apiDep.depnd_api_name = "无";
                that.apiDep.depnd_api_id = 0;
                that.apiDepList.unshift(that.apiDep);
            }else{
                alert(response.body.msg);
            }
        })
        Vue.http.post("interface/project/check/list",{
            "pro_id": app.currProID
        }).then(function(response){
            if(response.body.code==1){
                that.checkList = response.body.data;
                that.check1 = new Object();
                that.check1.check_desc = "默认";
                that.check1.check_id = 0;
                that.checkList.unshift(that.check1);
            }else{
                alert(response.body.msg)
            }
        })
        Vue.http.post('interface/project/module/list', {
             "pro_id": app.currProID
        }).then(function (response) {
            if(response.body.code==1) {
                that.moduleList = response.body.data;
            }else{
                alert(response.body.msg);
            }
        });
        for(var i=0;i<that.moduleList.length;i++){
            that.List[i+1] = "disactive";
        }
        that.List[0]= "active";
        Vue.http.post('interface/project/api/list',{
            "pro_id": app.currProID
        }).then(function (response) {
            if(response.body.code==1){
                that.apiList = response.body.data;
                that.totalItems = that.apiList.length;
                that.currentPage = 1;
                that.pageChanged(1);
                that.showCase = [];
                 for(var i=0;i<that.apiList.length;i++){
                    that.showCase[i] = false;
                 }
            }else{
                alert(response.body.msg)
            }
        })
        Vue.http.post('interface/project/suite/list', {
             "pro_id": app.currProID
        }).then(function (response) {
            if(response.body.code==1) {
                that.suiteList = response.body.data;
            }else{
                alert(response.body.msg);
            }
        });
    },
    methods:{
        pageChanged: function(data){
            var that = this;
            that.currentPage = data;
            Vue.http.post('interface/project/api/list',{
                "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1){
                    that.apiList = response.body.data;
                    that.totalItems = that.apiList.length;
                    that.allPage = Math.ceil(that.totalItems/10);
                    that.pageList = [];
                    if(that.totalItems>0){
                        if(that.currentPage==Math.ceil(that.apiList.length/10)){
                            for(var i=0;i<that.apiList.length-(that.currentPage-1)*10;i++){
                                that.pageList[i] = that.apiList[(that.currentPage-1)*10+i];
                            }
                        }else{
                            for(var i=0;i<10;i++){
                                that.pageList[i] = that.apiList[(that.currentPage-1)*10+i];
                            }
                        }
                    }
                }
            })
        },
        showAll: function(){
            var that = this;
            for(var i=0;i<that.moduleList.length;i++){
                that.List[i+1] = "disactive";
            }
            that.List[0] = "active";
            Vue.http.post('interface/project/api/list',{
                "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1){
                    that.apiList = response.body.data;
                    that.pageChanged(that.currentPage);
                    that.showCase = [];
                     for(var i=0;i<that.apiList.length;i++){
                        that.showCase[i] = false;
                     }
                }else{
                    alert(response.body.msg);
                }
            })
            that.showBtn = false;
            that.showBtn1 = true;
            that.showAllAPI = true;
        },
        active1: function(id) {
            var that = this;
             for(var i=0;i<that.moduleList.length;i++){
                that.List[i+1] = "disactive"
             }
             that.List[id+1] = 'active';
             that.List[0] = "disactive";
             that.module = that.moduleList[id];
             that.showId = that.module.module_id;
             that.showBtn = true;
             that.showBtn1 = false;
             that.showAllAPI = false;
             Vue.http.post('interface/project/module/apiList',{
                 "module_id": that.module.module_id
             }).then(function(response){
                 if(response.body.code==1){
                     that.apiList = response.body.data;
                     that.totalItems = that.apiList.length;
                     that.pageList = [];
                     if(that.totalItems>0){
                        if(that.currentPage==Math.ceil(that.apiList.length/10)){
                            for(var i=0;i<that.apiList.length-(that.currentPage-1)*10;i++){
                                that.pageList[i] = that.apiList[(that.currentPage-1)*10+i];
                            }
                        }else{
                            for(var i=0;i<10;i++){
                                that.pageList[i] = that.apiList[(that.currentPage-1)*10+i];
                            }
                        }
                     }
                     that.showCase = [];
                     for(var i=0;i<that.apiList.length;i++){
                        that.showCase[i] = false;
                     }
                 }else{
                     alert(response.body.msg);
                 }
             })
        },
        active2: function(index,obj){
            this.case = obj;
            for(i=0;i<3;i++){
                this.al[i] = "disactive";
            }
            this.al[index] = "active";
            this.showSelectId = index;
            this.showParamId = 0;
        },
        run: function(){
            $("#runModule").modal();
            this.report_name = "";
            this.env = "无";
            this.suite = "";
        },
        saveRun: function(envId,suiteId){
            var that = this;
            if(envId==undefined){
                envId = 0;
            }
            if(suiteId==undefined){
                suiteId = 0;
            }
            that.showLoading = true;
            Vue.http.post('interface/project/case/run',{
                "suite_id": suiteId,
                "pro_id": app.currProID,
                "env_id": envId,
                "report_name": that.report_name
            }).then(function(response){
                if(response.body.code==1){
                    that.report = response.body.data;
                    that.showLoading = false;
                    app.caseRun = 1;
                    app.active(7);
                    that.$router.push('/project/interface/testReport');

                }else{
                    alert(response.body.msg);
                }
            })
            $("#runModule").modal('hide');
            $("#loading").modal();
        },
        addModule: function(){
            this.module = {
                "module_desc": "",
                "module_id": null,
                "pro_id": app.currProID,
                "module_name": ""
            };
            $("#AddModule").modal();
        },
        saveModule: function(){
            var that = this;
            if(that.module.module_name==null){
                that.module.module_name = "";
            }
            if(that.module.module_desc==null){
                that.module.module_desc = "无";
            }
            Vue.http.post('interface/project/module/create',{
                "pro_id": app.currProID,
                "module_name": that.module.module_name,
                "module_desc": that.module.module_desc
            }).then(function (response) {
                if(response.body.code==1){
                    $("#AddModule").modal('hide');
                    Vue.http.post('interface/project/module/list', {
                         "pro_id": app.currProID
                    }).then(function (response1) {
                         if(response1.body.code==1) {
                             that.moduleList = response1.body.data;
                         }else{
                            alert(response1.body.msg);
                        }
                    });
                } else{
                    alert(response.body.msg);
                }
            });
        },
        addSuite: function(){
             this.suite = {
                "suite_desc": "",
                "suite_id": null,
                "pro_id": app.currProID,
                "suite_name": ""
            };
            $("#AddSuite").modal();
        },
        saveSuite: function(){
            var that = this;
            if(that.suite.suite_name==null){
                that.suite.suite_name = "";
            }
            if(that.suite.suite_desc==null){
                that.suite.suite_desc = "无";
            }
            Vue.http.post('interface/project/suite/create',{
                "pro_id": app.currProID,
                "suite_name": that.suite.suite_name,
                "suite_desc": that.suite.suite_desc
            }).then(function (response) {
                if(response.body.code==1){
                    $("#AddSuite").modal('hide');
                    Vue.http.post('interface/project/suite/list', {
                         "pro_id": app.currProID
                    }).then(function (response1) {
                         if(response1.code==1) {
                             that.suiteList = response1.body.data;
                         }else{
                            alert(response1.body.msg);
                        }
                    });
                } else{
                    alert(response.body.msg);
                }
            });
        },
        addApi: function(){
            var that = this;
            Vue.http.post('interface/project/module/list', {
                 "pro_id": app.currProID
            }).then(function (response) {
                if(response.body.code==1) {
                    that.moduleList = response.body.data;
                }else{
                    alert(response.body.msg);
                }
            });
            that.api = {
                "pro_id": app.currProID,
                "api_id": null,
                "module_id": null,
                "api_desc": "",
                "api_param": "",
                "api_url": "",
                "api_method": "",
                "api_type": "",
                "api_protocol": "",
                "api_name": ""
            };
            $("#addapi").modal();
        },
        saveAPI: function(id){
            var that = this;
            if(that.api.api_name==null){
                that.api.api_name = "";
            }
            if(that.api.api_desc==null){
                that.api.api_desc = "无";
            }
            if(id==""){
                id = 0;
            }
            if(that.api.api_protocol==undefined){
                that.api.api_protocol = "http";
            }
            if(that.api.api_method==undefined){
                that.api.api_method = "POST";
            }
            if(that.api.param_type==undefined){
                that.api.param_type = "json";
            }
            Vue.http.post('interface/project/api/create',{
                "module_id": id,
                "pro_id": app.currProID,
                "api_url": that.api.api_url,
                "api_method": that.api.api_method,
                "param_type": that.api.param_type,
                "api_protocol": that.api.api_protocol,
                "api_name": that.api.api_name,
                "api_desc": that.api.api_desc
            }).then(function (response) {
                if(response.body.code==1){
                    $("#addapi").modal('hide');
                    if(that.showAllAPI){
                        Vue.http.post('interface/project/api/list', {
                             "pro_id": app.currProID
                        }).then(function (response1) {
                             if(response1.body.code==1) {
                                 that.apiList = response1.body.data;
                                 that.allPage = Math.ceil(that.apiList.length/10);
                                 that.pageChanged(that.allPage);
                                 that.showCase = [];
                                 for(var i=0;i<that.apiList.length;i++){
                                    that.showCase[i] = false;
                                 }
                             }else{
                                alert(response1.body.msg);
                            }
                        });
                    }else if(that.showAPIInModule){
                         Vue.http.post('interface/project/module/apiList',{
                            "module_id": that.showId
                         }).then(function(response2){
                             if(response2.body.code==1){
                                 that.apiList = response2.body.data;
                                 that.allPage = Math.ceil(that.apiList.length/10);
                                 that.pageChanged(that.allPage);
                                 that.showCase = [];
                                 for(var i=0;i<that.apiList.length;i++){
                                    that.showCase[i] = false;
                                 }
                             }else{
                                 alert(response2.body.msg);
                             }
                         })
                    }
                } else{
                    alert(response.body.msg);
                }
            });
        },
        editapi: function(id){
            var that = this;
            Vue.http.post('interface/project/api/detail',{
                "api_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.api = response.body.data;
                    that.api.api_method = that.api.api_method.toLocaleUpperCase();
                    that.selected = that.api.module_id;
                }else{
                    alert(response.body.msg);
                }
            })
            $("#editapi").modal();
        },
        saveEditAPI: function(id){
            var that = this;
            if(that.api.api_name==null){
                that.api.api_name = "";
            }
            if(that.api.api_desc==null){
                that.api.api_desc = "无";
            }
            Vue.http.post('interface/project/api/edit',{
                "module_id": id,
                "pro_id": app.currProID,
                "api_id": that.api.api_id,
                "api_url": that.api.api_url,
                "api_method": that.api.api_method,
                "param_type": that.api.param_type,
                "api_protocol": that.api.api_protocol,
                "api_name": that.api.api_name,
                "api_desc": that.api.api_desc
            }).then(function (response) {
                if(response.body.code==1){
                    $("#editapi").modal('hide');
                    if(that.showAllAPI){
                         Vue.http.post('interface/project/api/list', {
                             "pro_id": app.currProID
                        }).then(function (response1) {
                             if(response1.body.code==1) {
                                 that.apiList = response1.body.data;
                                 that.pageChanged(that.currentPage);
                                 that.showCase = [];
                                 for(var i=0;i<that.apiList.length;i++){
                                    that.showCase[i] = false;
                                 }
                             }else{
                                alert(response1.body.msg);
                            }
                        });
                    }else if(that.showAPIInModule){
                         Vue.http.post('interface/project/module/apiList',{
                            "module_id": that.showId
                         }).then(function(response2){
                             if(response2.body.code==1){
                                 that.apiList = response2.body.data;
                                 that.pageChanged(that.currentPage);
                                 that.showCase = [];
                                 for(var i=0;i<that.apiList.length;i++){
                                    that.showCase[i] = false;
                                 }
                             }else{
                                 alert(response2.body.msg);
                             }
                         })
                    }
                }else {
                    alert(response.body.msg);
                }
            });
        },
        cfDelapi: function(id){
            $("#cfAPI").modal();
            this.apiId = id;
        },
        delAPI: function(){
            var that = this;
            $("#cfAPI").modal('hide');
            Vue.http.post('interface/project/api/delete',{
                "api_id": that.apiId,
            }).then(function (response1) {
                if(response1.body.code==1){
                    if(that.showAllAPI){
                        Vue.http.post('interface/project/api/list', {
                             "pro_id": app.currProID
                        }).then(function (response1) {
                             if(response1.body.code==1) {
                                 that.apiList = response1.body.data;
                                 var newPage = Math.ceil(that.apiList.length/10);
                                 if(that.currentPage == newPage+1){
                                     that.currentPage--;
                                 };
                                 that.pageChanged(that.currentPage);
                                 that.showCase = [];
                                 for(var i=0;i<that.apiList.length;i++){
                                    that.showCase[i] = false;
                                 }
                             }else{
                                alert(response1.body.msg);
                            }
                        });
                    }else if(that.showAPIInModule){
                         Vue.http.post('interface/project/module/apiList',{
                            "module_id": that.showId
                         }).then(function(response2){
                             if(response2.body.code==1){
                                 that.apiList = response2.body.data;
                                 var newPage = Math.ceil(that.apiList.length/10);
                                 if(that.currentPage == newPage+1){
                                     that.currentPage--;
                                 };
                                 that.pageChanged(that.currentPage);
                                 that.showCase = [];
                                 for(var i=0;i<that.apiList.length;i++){
                                    that.showCase[i] = false;
                                 }
                             }else{
                                 alert(response2.body.msg);
                             }
                         })
                    }
                }else{
                    alert(response1.body.msg);
                }
            })
        },
        addCase: function(){
            this.caseDetail={
                "case_id":null,
                "pro_id": app.currProID,
                "api_id": null,
                "case_desc": "",
                "case_name": "",
                "depnd_api_id": null,
                "check_id": null,
                "input_data": "",
                "exp_data": "",
                "case_schema": "",
                "case_protocol": "",
                "case_url": "",
                "case_method": "",
                "exp_status": 200,
                "exp_resp_header": "",
                "param_type": "",
                "suite_list":[],
                "front_sql":"",
                "rear_sql":"",
                "is_run_sql": 0
            };
            this.selectedApi = 0;
            this.api = "";
            this.suite_list = [];
            //this.check = [];
            $("#AddCase").modal();
        },
        getApi: function(obj,apiId){
            var that = this;
            that.caseDetail = obj;
            Vue.http.post("interface/project/api/detail",{
                "api_id": apiId
            }).then(function(response){
                if(response.body.code==1){
                    that.api = response.body.data;
                    that.selectedApi = that.api.api_id;
                    that.caseDetail.case_url = that.api.api_url;
                    that.caseDetail.case_protocol = that.api.api_protocol;
                    that.caseDetail.case_method = that.api.api_method;
                }else{
                    alert(response.body.msg);
                }
            })
        },
        saveCase: function(apiId,apiDepId){
            var that = this;
            if(apiId==undefined){
                apiId = 0;
            }
            if(apiDepId==undefined){
                apiDepId = 0;
            }

            that.caseDetail.depnd_api_id = apiDepId;
            that.caseDetail.api_id = apiId;
            if(that.caseDetail.case_name==null){
                that.caseDetail.case_name = "";
            }
            if(that.caseDetail.case_desc==null){
                that.caseDetail.case_desc = "无";
            }
            if(that.caseDetail.input_data==null){
                that.caseDetail.input_data = "";
            }
            if(that.caseDetail.exp_data==null){
                that.caseDetail.exp_data = "";
            }
            if(that.caseDetail.case_schema==null){
                that.caseDetail.case_schema = "";
            }
            if(that.caseDetail.case_protocol==null){
                that.caseDetail.case_protocol = "";
            }
            if(that.caseDetail.case_url==null){
                that.caseDetail.case_url = "";
            }
            if(that.caseDetail.case_method==null){
                that.caseDetail.case_method = "";
            }
            if(that.caseDetail.exp_header==null){
                that.caseDetail.exp_header = "";
            }
            if(that.caseDetail.param_type==null){
                that.caseDetail.param_type = "";
            }
            if(that.caseDetail.exp_status==null){
                that.caseDetail.exp_status = 0;
            }
            Vue.http.post('interface/project/case/create',{
                "api_id": that.caseDetail.api_id,
                "pro_id": app.currProID,
                "case_desc": that.caseDetail.case_desc,
                "case_name": that.caseDetail.case_name,
                "suite_list": that.suite_list,
                "depnd_api_id": that.caseDetail.depnd_api_id,
                "check_id": 0,
                "input_data": that.caseDetail.input_data,
                "exp_data": that.caseDetail.exp_data,
                "case_schema": that.caseDetail.case_schema,
                "case_protocol": that.caseDetail.case_protocol,
                "case_url": that.caseDetail.case_url,
                "case_method": that.caseDetail.case_method,
                "exp_status": that.caseDetail.exp_status,
                "exp_header": that.caseDetail.exp_header,
                "param_type": that.caseDetail.param_type,
                "front_sql": that.caseDetail.front_sql,
                "rear_sql": that.caseDetail.rear_sql,
                "is_run_sql": 1
            }).then(function(response){
                if(response.body.code==1) {
                    Vue.http.post('interface/project/api/caseList',{
                        "api_id": that.caseDetail.api_id
                    }).then(function(response1){
                        that.caseList = response1.body.data;
                        that.showinfo = [];
                        for(var i=0;i<that.caseList.length;i++){
                            that.showinfo[i] = false;
                        }
                    })
                }else{
                    alert(response.body.msg);
                }
            })
            $("#AddCase").modal('hide');
        },
        getAPICase: function(id,index){
            var that = this;
            for(var i=0;i<that.showCase.length;i++){
                if(i!=index){
                    that.showCase[i] = false;
                }
            }
            Vue.http.post('interface/project/api/caseList',{
                "api_id": id
            }).then(function(response){
                if(response.body.code==1){
                    that.caseList = response.body.data;
                    that.showinfo = [];
                    for(var i=0;i<that.caseList.length;i++){
                        that.showinfo[i] = false;
                    }
                    that.showCase[index] = !that.showCase[index];
                }else{
                    alert(response.body.msg);
                }
            })
        },
        infoCase: function(obj,index){
            var that = this;
            for(var i=0;i<that.showinfo.length;i++){
                if(i!=index){
                    that.showinfo[i] = false;
                }
            }
            that.showinfo[index] = !that.showinfo[index];
            that.str = "";
            that.al = ["active","disactive","disactive"];
            that.showSelectId = 0;
            that.selected2 = obj.depnd_api_id;
            that.selected3 = obj.check_id;
            Vue.http.post("interface/project/case/detail", {
                "case_id": obj.case_id
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.caseDetail = response.body.data;
                    for(var i=0;i<that.caseDetail.suite_list.length;i++){
                        for(var j=0;j<that.suiteList.length;j++){
                            if(that.suiteList[j].suite_id==that.caseDetail.suite_list[i]){
                                //that.check[j] = true;
                                that.suite_list[j] = that.suiteList[j].suite_id;
                            }
                        }
                    }
                    Vue.http.post('interface/project/api/detail', {
                        "api_id": that.caseDetail.api_id
                    }).then(function (response) {
                        if (response.body.code == 1) {
                            that.api = response.body.data;
                        } else {
                            alert(response.body.msg);
                        }
                    })
                    if(obj.check_id==0){
                        that.check1.check_name = "默认";
                    }else{
                        Vue.http.post("interface/project/check/detail", {
                            "check_id": obj.check_id
                        }).then(function (response) {
                            if (response.body.code == 1) {
                                that.check1 = response.body.data;
                            } else {
                                alert(response.body.msg);
                            }
                        })
                    }
                    if(obj.depnd_api_id==0){
                        that.depnd.depnd_api_name = "无";
                    }else{
                        Vue.http.post("interface/project/dapi/detail", {
                            "depnd_api_id": obj.depnd_api_id
                        }).then(function (response) {
                            if (response.body.code == 1) {
                                that.depnd = response.body.data;
                            } else {
                                alert(response.body.msg);
                            }
                        })
                    }
                }else{
                    alert(response.body.msg);
                }
            })
        },
        editCase: function (obj) {
            this.caseDetail = obj;
            this.selected1 = this.caseDetail.api_id;
            this.suite_list = [];
            $("#EditCase").modal();
            if(this.selected3==0){
                this.selected3 = "无"
            }
            for(var i=0;i<this.caseDetail.suite_list.length;i++){
                for(var j=0;j<this.suiteList.length;j++){
                    if(this.suiteList[j].suite_id==this.caseDetail.suite_list[i]){
                        this.suite_list[j] = this.suiteList[j].suite_id;
                    }
                }
            }
        },
        saveEditCase: function(obj,apiId,depntId,checkId){
            var that = this;
            that.caseDetail = obj;
            if(that.caseDetail.case_name==null){
                that.caseDetail.case_name = "";
            }
            if(that.caseDetail.case_desc==null){
                that.caseDetail.case_desc = "无";
            }
            Vue.http.post('interface/project/case/edit',{
                "case_id":that.caseDetail.case_id,
                "api_id": apiId,
                "pro_id": app.currProID,
                "case_desc": that.caseDetail.case_desc,
                "case_name": that.caseDetail.case_name,
                "suite_list":that.suite_list,
                "depnd_api_id":depntId,
                "check_id": checkId,
                "input_data": that.caseDetail.input_data,
                "exp_data": that.caseDetail.exp_data,
                "case_schema": that.caseDetail.case_schema,
                "case_protocol": that.caseDetail.case_protocol,
                "case_url": that.caseDetail.case_url,
                "case_method": that.caseDetail.case_method,
                "exp_status": that.caseDetail.exp_status,
                "exp_header": that.caseDetail.exp_header,
                "param_type": that.caseDetail.param_type,
                "front_sql": that.caseDetail.front_sql,
                "rear_sql": that.caseDetail.rear_sql,
                "is_run_sql":1
            }).then(function(response){
                if(response.body.code==1) {
                    that.selected2 = depntId;
                    that.selected3 = checkId;
                    Vue.http.post('interface/project/api/caseList',{
                        "api_id": apiId
                    }).then(function(response1){
                        that.caseList = response1.body.data;
                        that.showinfo = [];
                        for(var i=0;i<that.caseList.length;i++){
                            that.showinfo[i] = false;
                        }
                    })
                    if(checkId==0){
                        that.check1.check_desc = "默认";
                    }else{
                        Vue.http.post("interface/project/check/detail", {
                            "check_id": checkId
                        }).then(function (response) {
                            if (response.body.code == 1) {
                                that.check1 = response.body.data;
                            } else {
                                alert(response.body.msg);
                            }
                        })
                    }
                    if(depntId==0){
                        that.depnd.depnd_api_name="无"
                    }else{
                        Vue.http.post("interface/project/dapi/detail", {
                            "depnd_api_id": depntId
                        }).then(function (response) {
                            if (response.body.code == 1) {
                                that.depnd = response.body.data;
                            } else {
                                alert(response.body.msg);
                            }
                        })
                    }
                }else{
                    alert(response.body.msg);
                }
            })
            $("#EditCase").modal('hide');
        },
        cfDelCase: function(obj){
            $("#cfCase").modal();
            this.caseId = obj.case_id;
            this.apiId = obj.api_id;
        },
        delCase: function(){
            var that = this;
            Vue.http.post('interface/project/case/delete',{
                "case_id": that.caseId
            }).then(function(response){
                if(response.body.code==1){
                    $("#cfCase").modal("hide");
                    Vue.http.post('interface/project/api/caseList',{
                        "api_id": that.apiId
                    }).then(function(response1){
                        if(response1.body.code==1){
                            that.caseList = response1.body.data;
                            that.showinfo = [];
                            for(var i=0;i<that.caseList.length;i++){
                                that.showinfo[i] = false;
                            }
                        }else{
                            alert(response1.body.msg);
                        }
                    })
                }else{
                    alert(response.body.msg);
                }
            })
        },
        runCase: function(obj){
            this.caseDetail = obj;
            this.env = {};
            $("#runCase").modal();
        },
        getCaseResult: function(caseId,envId){
            var that = this;
            $("#runCase").modal("hide");
            Vue.http.post("interface/project/case/runsingal",{
                "case_id": caseId,
                "env_id": envId
            }).then(function(response){
                if(response.body.code==1){
                    $("#caseResult").modal();
                    that.caseResult = response.body.data;
                    if(that.caseResult.schema_check==1){
                        that.caseResult.schema_check_text = "通过";
                    }else if(that.caseResult.schema_check==2){
                        that.caseResult.schema_check_text = "未检验";
                    }else {
                        that.caseResult.schema_check_text = "失败";
                    }
                    if(that.caseResult.body_check==1){
                        that.caseResult.body_check_text = "通过";
                    }else{
                        that.caseResult.body_check_text = "失败";
                    }
                    if(that.caseResult.status_check==2){
                        that.caseResult.status_check_text = "未校验";
                    }else if(that.caseResult.status_check==1){
                        that.caseResult.status_check_text = "通过";
                    }else{
                        that.caseResult.status_check_text = "失败";
                    }
                    if(that.caseResult.header_check==2){
                        that.caseResult.header_check_text = "未校验";
                    }else if(that.caseResult.header_check==1){
                        that.caseResult.header_check_text = "通过";
                    }else{
                        that.caseResult.header_check_text = "失败";
                    }
                }else{
                    alert(response.body.msg);
                }
            })
        },
        copyCase: function(obj){
            this.caseDetail = obj;
            this.saveCase(this.caseDetail.api_id,this.caseDetail.depnd_api_id);
        }
    }
});