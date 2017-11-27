var record = Vue.extend({
    template: '<div class="top1">\n' +
    '    <div>\n' +
    '        <h1 class="page-header text-primary">录制</h1>\n' +
    '    </div>' +
    '    <div class="container-fluid">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="pull-right">\n' +
    '                    <button class="btn btn-success" v-on:click="dfRecord()">录制</button>\n' +
    '                    <button class="btn btn-danger" v-on:click="stopRecord()">停止录制</button>\n' +
    '                    <button class="btn btn-primary" v-on:click="setRecord()">生成接口列表</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="panel-body">\n' +
    '                <div v-show="showiframe">\n' +
    '                    <iframe v-bind:src="servers_url" width="100%" marginwidth="0" height="100%"\n' +
    '                            marginheight="0" scrolling="Yes" frameborder="0" vspace="0" id="Iframe1" border="0"\n' +
    '                            framespacing="0" noresize="noResize">\n' +
    '                    </iframe>\n' +
    '                </div>\n' +
    '                <div v-show="showtable" class="col-md-12">\n' +
    '                    <table class="table table-bordered design ">\n' +
    '                        <tr>\n' +
    '                            <th class="tableWid1">序号</th>\n' +
    '                            <th class="tableWid1">方法</th>\n' +
    '                            <th class="tableWid1">协议</th>\n' +
    '                            <th class="tableWid5">host</th>\n' +
    '                            <th class="tableWid3">path</th>\n' +
    '                            <th class="tableWid4">请求体</th>\n' +
    '                            <th class="tableWid4">返回</th>\n' +
    '                            <th class="tableWid5">操作</th>\n' +
    '                        </tr>\n' +
    '                        <tr v-for="(rc,index) in pageList" v-bind:style="styleList[index]"\n' +
    '                            v-on:mouseenter="tableGray(index)" v-on:mouseleave="tableWhite(index)">\n' +
    '                            <td class="tableWid1">{{(currentPage-1)*10+index+1}}</td>\n' +
    '                            <td class="tableWid1" data-toggle="tooltip" data-placement="top"\n' +
    '                                v-bind:title="rc.method">{{rc.method}}</td>\n' +
    '                            <td class="tableWid1" data-toggle="tooltip" data-placement="top"\n' +
    '                                v-bind:title="rc.protocol">{{rc.protocol}}</td>\n' +
    '                            <td class="tableWid5" data-toggle="tooltip" data-placement="top"\n' +
    '                                v-bind:title="rc.host">{{rc.host}}</td>\n' +
    '                            <td class="tableWid3" data-toggle="tooltip" data-placement="top"\n' +
    '                                v-bind:title="rc.path">{{rc.path}}</td>\n' +
    '                            <td class="tableWid4" data-toggle="tooltip" data-placement="top"\n' +
    '                                v-bind:title="rc.reqBody">{{rc.reqBody}}</td>\n' +
    '                            <td class="tableWid4" data-toggle="tooltip" data-placement="top"\n' +
    '                                v-bind:title="rc.resBody">{{rc.resBody}}</td>\n' +
    '                            <td>\n' +
    '                                <button class="btn btn-xs btn-danger" v-disabled="undisabled[index]"\n' +
    '                                        v-on:click="cfRecord(index)">删除\n' +
    '                                </button>\n' +
    '                                <button class="btn btn-xs btn-primary" v-on:click="editRecord(index)">编辑</button>\n' +
    '                                <button class="btn btn-xs btn-info" v-disabled="runDisabled[index]"\n' +
    '                                        v-on:click="runRecord(rc)">运行\n' +
    '                                </button>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                    <div class="pull-right" v-show="totalItems>0">\n' +
    '                        <vue-nav :cur="currentPage" :all="allPage" :callback="pageChanged"></vue-nav>' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>' +

    '<div class="modal fade" id="recordModal">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                    &times;\n' +
    '                </button>\n' +
    '                <h4 class="modal-title" id="myModalLabel">\n' +
    '                    录制信息\n' +
    '                </h4>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal" role="form">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-3 control-label">host地址：</label>\n' +
    '                        <div class="col-sm-8">\n' +
    '                            <input type="text" class="form-control" v-model="record_info.host">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-3 control-label">端口号：</label>\n' +
    '                        <div class="col-sm-8">\n' +
    '                            <input type="text" class="form-control" v-model="record_info.port">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-sm-3 control-label">过滤字段：</label>\n' +
    '                        <div class="col-sm-8">\n' +
    '                            <input type="text" class="form-control" v-model="record_info.filter">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-primary" v-on:click="startRecord()">\n' +
    '                    开始录制\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>' +
    '<div class="modal fade" id="editRecord" aria-hidden="true">\n' +
    '    <div class="modal-dialog modalWidth">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                    &times;\n' +
    '                </button>\n' +
    '                <h4 class="modal-title">\n' +
    '                    编辑录制用例\n' +
    '                </h4>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">用例名：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" placeholder="请输入用例名称" v-model="rcdCase.case_name">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">所属API：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <select class="form-control" ng-model="selected1">\n' +
    '                                <option value="">无</option>\n' +
    '                                <option v-for="api in apiList" v-bind:value="api.api_id">{{ api.api_name }}</option>'+
    '                            </select>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">所属套件：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <div class="panel panel-default">\n' +
    '                                <div class="panel-body">\n' +
    '                                    <div class="checkbox col-md-6" v-for="(st,index) in suiteList">\n' +
    '                                        <label>\n' +
    '                                            <input type="checkbox" v-model="check[index]"\n' +
    '                                                   v-on:click="addSuiteList(index,st.suite_id)"><span\n' +
    '                                                v-bind="st.suite_name"></span>\n' +
    '                                        </label>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">描述：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" placeholder="请输入用例描述" v-model="rcdCase.case_desc">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">依赖接口：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <select class="form-control" ng-model="selected2"\n>' +
    '                                <option value="">无</option>\n' +
    '                                <option v-for="apiDep in apiDepList" v-bind:value="apiDep.depnd_api_id">{{ apiDep.depnd_api_name }}</option>'+
    '                            </select>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">校验器：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <select class="form-control" v-model="selected4">\n' +
    '                                <option value="">无</option>\n' +
    '                                <option v-for="check1 in checkList" v-bind:value="check1.check_id">{{ check1.check_desc }}</option>'+
    '                            </select>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">接口协议：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" placeholder="请输入用例协议"\n' +
    '                                   v-model="rcdCase.case_protocol">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">URL：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" placeholder="请输入URL" v-model="rcdCase.case_url">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">请求方法：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" placeholder="请输入请求方法"\n' +
    '                                   v-model="rcdCase.case_method">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">格式：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <select class="form-control" v-model="rcdCase.param_type">\n' +
    '                                <option value="">无</option>\n' +
    '                                <option v-for="type in typeType" v-bind:value="type">{{ type }}</option>'+
    '                            </select>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">接口参数：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <textarea type="text" class="form-control" placeholder="请输入接口参数"\n' +
    '                                      v-model="rcdCase.input_data">\n' +
    '                            </textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">期望响应：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <textarea type="text" rows="3" class="form-control" placeholder="请输入期望响应"\n' +
    '                                      v-model="rcdCase.exp_data">\n' +
    '                            </textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">期望状态码：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <input type="text" class="form-control" placeholder="请输入期望状态码"\n' +
    '                                   v-model="rcdCase.exp_status">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label">schema：</label>\n' +
    '                        <div class="col-md-9">\n' +
    '                            <textarea type="text" rows="3" class="form-control" placeholder="请输入schema"\n' +
    '                                      v-model="rcdCase.case_schema">\n' +
    '                            </textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-default" data-dismiss="modal">关闭\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-primary" v-on:click="saveEditRecord(selected1,selected2,selected4)">\n' +
    '                    保存\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>' +
    '<div class="modal fade" id="cfRecord">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header alert alert-danger">\n' +
    '                <h4 class="modal-title">\n' +
    '                    删除录制结果\n' +
    '                </h4>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                确定删除该录制结果？？\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-default" data-dismiss="modal">取消\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-primary" v-on:click="delRecord()">\n' +
    '                    确定\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>' +
    '<div class="modal fade" id="recordResult" aria-hidden="true">\n' +
    '    <div class="modal-dialog modalWidth">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header">\n' +
    '                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n' +
    '                    &times;\n' +
    '                </button>\n' +
    '                <h4 class="modal-title">\n' +
    '                    运行\n' +
    '                </h4>\n' +
    '            </div>\n' +
    '            <div class="modal-body">\n' +
    '                <form class="form-horizontal">\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-1 control-label">请求体：</label>\n' +
    '                        <div class="col-md-11">\n' +
    '                            <div class="panel panel-default">\n' +
    '                                <div class="panel-body">\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">URL：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                            <input type="text" class="form-control" v-model="rcdResult.url"\n' +
    '                                                   style="background-color: white" readonly>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">请求：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="rcdResult.request_body"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <label class="col-md-1 control-label">状态码：</label>\n' +
    '                        <div class="col-md-11">\n' +
    '                            <div class="panel {$rcdResult.status_check == 1 ? \'panel-default\' : \'panel-danger\'$}">\n' +
    '                                <div class="panel-body">\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">期望：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                            <input type="text" class="form-control" v-model="rcdResult.exp_status"\n' +
    '                                                   style="background-color: white" readonly>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">实际：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                            <input type="text" class="form-control" v-model="rcdResult.status"\n' +
    '                                                   style="background-color: white" readonly>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">校验：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                            <input type="text" class="form-control"\n' +
    '                                                   v-model="rcdResult.status_check_text"\n' +
    '                                                   style="background-color: white" readonly>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!--\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">期望响应头：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="caseResult.exp_header"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">响应头：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="caseResult.header"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <div class="form-group">\n' +
    '                            <label class="col-md-2 control-label">响应头检验：</label>\n' +
    '                            <div class="col-md-9">\n' +
    '                                <input type="text" class="form-control" v-model="caseResult.header_check_text"\n' +
    '                                       style="background-color: white" readonly>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        -->\n' +
    '                        <label class="col-md-1 control-label">响应：</label>\n' +
    '                        <div class="col-md-11">\n' +
    '                            <div class="panel {$rcdResult.body_check == 1 ? \'panel-default\' : \'panel-danger\'$}">\n' +
    '                                <div class="panel-body">\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">期望：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="rcdResult.exp_data"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">实际：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="rcdResult.response_body"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">校验：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                            <input type="text" class="form-control"\n' +
    '                                                   v-model="rcdResult.body_check_text"\n' +
    '                                                   style="background-color: white" readonly>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <label class="col-md-1 control-label">schema：</label>\n' +
    '                        <div class="col-md-11">\n' +
    '                            <div class="panel" v-bind:class="rcdResult.schema_check == 1 ? \'panel-default\' : \'panel-danger\'">\n' +
    '                                <div class="panel-body">\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">schema：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="3" v-model="rcdResult.schema"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <label class="col-md-1 control-label">检验：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                            <input type="text" class="form-control"\n' +
    '                                                   v-model="rcdResult.schema_check_text"\n' +
    '                                                   style="background-color: white" readonly>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group" v-hide="rcdResult.schema_check ==1">\n' +
    '                                        <label class="col-md-1 control-label">信息：</label>\n' +
    '                                        <div class="col-md-11">\n' +
    '                                <textarea type="text" class="form-control" rows="1" v-model="rcdResult.schema_msg"\n' +
    '                                          style="background-color: white" readonly>\n' +
    '                                </textarea>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-info" data-dismiss="modal">关闭\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'+
    '</div>',
    data: function(){
        return {
            rcdCase: {
                "case_id": "",
                "pro_id": app.currProID,
                "api_id": "",
                "case_url": "",
                "case_method": "",
                "case_protocol": "",
                "exp_header": "",
                "input_data": "",
                "exp_data": "",
                "check_id": "",
                "case_name": "",
                "case_desc": "",
                "depnd_api_id": "",
                "param_type": "",
                "suite_list": "",
                "exp_status": ""
            },
            record_info: {
                host: "192.168.36.32",
                port: 8003,
                filter: "192.168.32.112"
            },
            servers_url: "",
            reqData: [{}],
            showiframe: false,
            showtable: false,
            pageList: [],
            totalItems: 0,
            currentPage: 1,
            allPage: 1,
            typeType: ["json"],
            apiList: [],
            suiteList: [],
            apiDepList: [],
            moduleList: [],
            checkList: [],
            envList: [],
            dataSocket: {},
            baseUrl: '',
            socketPort: '',
            reqURL:  "",
            reqString: "",
            reqLength: "",
            data: "",
            reqData_str: "",
            anyproxy_id_list: [],
            temp: "",
            reqDataPage: [],
            idList: [],
            objList: [],
            runDisabled: [],
            undisabled: [],
            styleList: [],
            tableStyle: {
                "background-color": "white",
            },
            styleChange: {
                "background-color": "#eeeeff",
            },
            suite_list: [],
            RecordId: null,
            editId: null,
            check: [],
            num: 0,
            selected4: 0,
            rcdResult: {}
        }
    },
    mounted: function() {
        var that = this;
        Vue.http.post('interface/project/api/list', {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.apiList = response.body.data;
            } else {
                alert(response.body.msg);
            }
        });
        Vue.http.post('interface/project/suite/list', {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.suiteList = response.body.data;
            } else {
                alert(response.body.msg);
            }
        });
        Vue.http.post("interface/project/dapi/list", {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.apiDepList = response.body.data;
            } else {
                alert(response.body.msg);
            }
        });
        Vue.http.post('interface/project/module/list', {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.moduleList = response.body.data;
            } else {
                alert(response.body.msg);
            }
        });
        Vue.http.post("interface/project/check/list", {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.checkList = response.body.data;
            } else {
                alert(response.body.msg)
            }
        });
        Vue.http.post("interface/project/env/list", {
            "pro_id": app.currProID
        }).then(function (response) {
            if (response.body.code == 1) {
                that.envList = response.body.data;
            } else {
                alert(response.body.msg);
            }
        });
    },
    methods:{
        pageChanged: function () {
            this.pageList = [];
            if (this.reqDataPage.length > 0) {
                if (this.currentPage == Math.ceil(this.reqDataPage.length / 15)) {
                    for (var i = 0; i < this.reqDataPage.length - (this.currentPage - 1) * 15; i++) {
                        this.pageList[i] = this.reqDataPage[(this.currentPage - 1) * 15 + i];
                    }
                } else {
                    for (var i = 0; i < 15; i++) {
                        this.pageList[i] = this.reqDataPage[(this.currentPage - 1) * 15 + i];
                    }
                }
            }
        },
        dfRecord: function () {
            console.log(1);
            $("#recordModal").modal();
        },
        initSocket: function () {
            var that = this;
            that.dataSocket = new WebSocket("ws://" + that.baseUrl + ":" + that.socketPort);
            that.dataSocket.onmessage = function (event) {
                that.data = JSON.parse(event.data);
                that.reqData_str = JSON.stringify(that.data);
                if (that.reqData_str.indexOf(that.record_info.filter) != -1) {
                    that.data.content.reqHeader = JSON.stringify(that.data.content.reqHeader);
                    that.temp = that.data.content;
                    if (that.anyproxy_id_list.indexOf(that.data.content.id) != -1) {
                        that.reqData[that.anyproxy_id_list.indexOf(that.data.content.id)] = that.temp;
                    } else {
                        that.anyproxy_id_list.push(that.data.content.id)
                        that.reqData.push(that.temp);
                    }
                }
            }
        },
        startRecord: function () {
            this.baseUrl = this.record_info.host;
            this.socketPort = this.record_info.port;
            this.initSocket();
            $("#recordModal").modal('hide');
            this.servers_url = $sce.trustAsResourceUrl("http://" + this.record_info.host + ":" + "8002/");
            this.showiframe = true;
            window.frames["Iframe1"];
        },
        stopRecord: function () {
            this.dataSocket.close();
        },
        setRecord: function () {
            var that = this;
            var temp_resp = "";
            that.reqData.forEach(function (value, index) {
                value.sex = 'male';
                Vue.http.post("interface/project/record/reqdetail", {
                    host: that.record_info.host,
                    port: 8002,
                    req_id: value.id
                }).then(function (response) {
                    if (typeof(response.body.content) != "undefined") {
                        value.resBody = JSON.stringify(response.body.content);
                    }
                })
            });
            for (var i = 0; i < that.reqData.length; i++) {
                that.idList[i] = -1;
                that.objList[i] = new Object();
                that.runDisabled[i] = true;
                that.undisabled[i] = false;
            }
            that.reqDataPage = that.reqData;
            that.showiframe = false;
            that.showtable = true;
            that.totalItems = that.reqData.length;
            that.currentPage = 1;
            that.pageChanged();
        },
        tableGray: function (index) {
            this.styleList[index] = this.styleChange;
        },
        tableWhite: function (index) {
            this.styleList[index] = this.tableStyle;
        },
        addSuiteList: function (index, id) {
            if (this.check[index] == true) {
                this.suite_list[index] = id;
            } else {
                this.suite_list[index] = "";
            }
        },
        cfRecord: function (index) {
            $("#cfRecord").modal();
            this.RecordId = index;
        },
        delRecord: function () {
            this.idList.splice(this.RecordId, 1);
            this.objList.splice(this.RecordId, 1);
            this.reqData.splice(this.RecordId, 1);
            this.reqDataPage = this.reqData;
            this.totalItems = this.reqDataPage.length;
            this.pageChanged();
            this.runDisabled.splice(RecordId, 1);
            this.undisabled.splice(RecordId, 1);
            $("#cfRecord").modal('hide');
        },
        editRecord: function (id) {
            this.editId = id;
            $("#editRecord").modal();
            if (this.idList[id] == -1) {
                this.req_data = this.reqData[id];
                this.rcdCase.case_url = this.req_data.host + this.req_data.path;
                this.rcdCase.case_method = this.req_data.method;
                this.rcdCase.case_protocol = this.req_data.protocol;
                this.rcdCase.case_header = this.req_data.reqHeader;
                this.rcdCase.input_data = this.req_data.reqBody;
                this.rcdCase.exp_data = this.req_data.resBody;
                this.rcdCase.exp_status = this.req_data.statusCode
                this.suite_list = [];
                for (var i = 0; i < this.suiteList.length; i++) {
                    this.check[i] = false;
                }
            } else {
                this.rcdCase = this.objList[id];
                this.selected1 = this.rcdCase.api_id;
                this.selected2 = this.rcdCase.depnd_api_id;
                this.selected4 = this.rcdCase.check_type;
            }
        },
        saveEditRecord: function (apiId, apiDepId, checkId) {
            if (apiId == undefined) {
                apiId = 0;
            }
            if (apiDepId == undefined) {
                apiDepId = 0;
            }
            if (checkId == undefined) {
                checkId = 0;
            }
            var that = this;
            if (that.rcdCase.param_type == undefined) {
                that.rcdCase.param_type = "json"
            }
            that.rcdCase.pro_id = app.currProID;
            that.rcdCase.api_id = apiId;
            that.rcdCase.depnd_api_id = apiDepId;
            that.rcdCase.check_id = checkId;
            that.rcdCase.suite_list = suite_list;
            if (that.rcdCase.case_id == "") {
                Vue.http.post('interface/project/case/create', {
                    "pro_id": that.rcdCase.pro_id,
                    "api_id": that.rcdCase.api_id,
                    "case_url": that.rcdCase.case_url,
                    "case_method": that.rcdCase.case_method,
                    "case_protocol": that.rcdCase.case_protocol,
                    "exp_header": that.rcdCase.exp_header,
                    "input_data": that.rcdCase.input_data,
                    "exp_data": that.rcdCase.exp_data,
                    "check_id": that.rcdCase.check_id,
                    "case_name": that.rcdCase.case_name,
                    "case_desc": that.rcdCase.case_desc,
                    "depnd_api_id": that.rcdCase.depnd_api_id,
                    "param_type": that.rcdCase.param_type,
                    "suite_list": that.rcdCase.suite_list,
                    "exp_status": that.rcdCase.exp_status,
                    "case_schema": that.rcdCase.case_schema,
                    "front_sql": "",
                    "rear_sql": "",
                    "is_run_sql": 1
                }).then(function (response) {
                    if (response.body.code == 1) {
                        that.num = that.rcdCase.case_url.indexOf('/');
                        that.req_data.host = that.rcdCase.case_url.slice(0, num - 1);
                        that.req_data.path = that.rcdCase.case_url.slice(num, -1);
                        that.req_data.method = that.rcdCase.case_method;
                        that.req_data.protocol = that.rcdCase.case_protocol;
                        that.req_data.reqHeader = that.rcdCase.exp_header;
                        that.req_data.reqBody = that.rcdCase.input_data;
                        that.req_data.resBody = that.rcdCase.exp_data;
                        that.rcdCase.case_id = response.body.data.case_id;
                        that.idList[that.editId] = that.rcdCase.case_id;
                        that.objList[that.editId] = that.rcdCase;
                        $("#editRecord").modal('hide');
                        that.undisabled[that.editId] = true;
                        that.runDisabled[that.editId] = false;
                    } else {
                        alert(response.body.msg);
                    }
                })
            } else {
                Vue.http.post('interface/project/case/edit', {
                    "case_id": that.rcdCase.case_id,
                    "pro_id": that.rcdCase.pro_id,
                    "api_id": that.rcdCase.api_id,
                    "case_url": that.rcdCase.case_url,
                    "case_method": that.rcdCase.case_method,
                    "case_protocol": that.rcdCase.case_protocol,
                    "exp_header": that.rcdCase.exp_header,
                    "input_data": that.rcdCase.input_data,
                    "exp_data": that.rcdCase.exp_data,
                    "check_id": that.rcdCase.check_id,
                    "case_name": that.rcdCase.case_name,
                    "case_desc": that.rcdCase.case_desc,
                    "depnd_api_id": that.rcdCase.depnd_api_id,
                    "param_type": that.rcdCase.param_type,
                    "suite_list": that.rcdCase.suite_list,
                    "exp_status": that.rcdCase.exp_status,
                    "case_schema": that.rcdCase.case_schema
                }).then(function (response) {
                    if (response.body.code == 1) {
                        that.num = that.rcdCase.case_url.indexOf('/');
                        that.req_data.host = that.rcdCase.case_url.slice(0, num - 1);
                        that.req_data.path = that.rcdCase.case_url.slice(num, -1);
                        that.req_data.method = that.rcdCase.case_method;
                        that.req_data.protocol = that.rcdCase.case_protocol;
                        that.req_data.reqHeader = that.rcdCase.case_header;
                        that.req_data.reqBody = that.rcdCase.input_data;
                        that.req_data.resBody = that.rcdCase.exp_data;
                        that.idList[that.editId] = that.rcdCase.case_id;
                        that.objList[that.editId] = that.rcdCase;
                        $("#editRecord").modal('hide');
                        that.undisabled[that.editId] = true;
                        that.runDisabled[that.editId] = false;
                    } else {
                        alert(response.body.msg);
                    }
                })
            }
        },
        runRecord: function (obj) {
            this.env = {
                pro_id: app.currProID,
                env_id: null,
                env_name: '',
                env_desc: ''
            };
            $("#runRecord").modal();
        },
        getRecordResult: function (caseId, envId) {
            if (envId == undefined) {
                envId = 0;
            }
            var that = this;
            $("#runRecord").modal("hide");
            Vue.http.post("interface/project/case/runsingal", {
                "case_id": caseId,
                "env_id": envId
            }).then(function (response) {
                if (response.body.code == 1) {
                    that.rcdResult = response.body.data;
                    if (that.rcdResult.schema_check == 1) {
                        that.rcdResult.schema_check_text = "通过";
                    } else {
                        that.rcdResult.schema_check_text = "失败";
                    }
                    if (that.rcdResult.body_check == 1) {
                        that.rcdResult.body_check_text = "通过";
                    } else {
                        that.rcdResult.body_check_text = "失败";
                    }
                    if (that.rcdResult.status_check == 0) {
                        that.rcdResult.status_check_text = "未通过";
                    } else if (that.rcdResult.status_check == 1) {
                        that.rcdResult.status_check_text = "通过";
                    } else {
                        that.rcdResult.status_check_text = "未校验";
                    }
                    if (that.rcdResult.header_check == 0) {
                        that.rcdResult.header_check_text = "未通过";
                    } else if (that.rcdResult.header_check == 1) {
                        that.rcdResult.header_check_text = "通过";
                    } else {
                        that.rcdResult.header_check_text = "未校验";
                    }
                    $("#recordResult").modal();
                } else {
                    alert(response.body.msg);
                }
            })
        }

    }
});