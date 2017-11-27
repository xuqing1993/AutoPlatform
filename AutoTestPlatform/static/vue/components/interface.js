var interface = Vue.extend({
    template: '<div>\n' +
    '    <div class="row">\n' +
    '        <div class="wid sidebar">\n' +
    '            <ul class="contain nav nav-pills nav-stacked nav-sidebar">\n' +
    '                <li v-bind:class="app.activeList[0]"><router-link to="/project/interface/homepage" v-on:click.native="app.active(0)"> 项目首页</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[1]"><router-link to="/project/interface/globalVar" v-on:click.native="app.active(1)"> 全局变量</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[2]"><router-link to="/project/interface/method" v-on:click.native="app.active(2)"> 常用方法</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[3]"><router-link to="/project/interface/validation" v-on:click.native="app.active(3)"> 验证器</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[4]"><router-link to="/project/interface/APIDependency" v-on:click.native="app.active(4)"> API依赖库</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[5]"><router-link to="/project/interface/APICase" v-on:click.native="app.active(5)"> API用例库</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[6]"><router-link to="/project/interface/task" v-on:click.native="app.active(6)"> 定时任务</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[7]"><router-link to="/project/interface/testReport" v-on:click.native="app.active(7)"> 测试报告</router-link></li>\n' +
    '                <li v-bind:class="app.activeList[8]"><router-link to="/project/interface/record" v-on:click.native="app.active(8)"> 录制</router-link></li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <div  class="dis container-fluid">' +
    '           <router-view></router-view>' +
    '        </div>\n' +
    '    </div>'+
    '    <div class="modal fade" id="Intro" aria-hidden="true" >\n' +
    '        <div class="modal-dialog modalWidth">\n' +
    '            <div class="modal-content">\n' +
    '                <div class="modal-header">\n' +
    '                    <button type="button" class="close"\n' +
    '                            data-dismiss="modal" aria-hidden="true">\n' +
    '                        &times;\n' +
    '                    </button>\n' +
    '                    <h4 class="modal-title">\n' +
    '                        使用说明\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-div">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <div class="panel-title">\n' +
    '                                <p>全局变量:在执行测试用例时动态改变用例属性</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.请在全局变量添加变量名为"host"的变量，作为请求的域名</li>\n' +
    '                                    <li>2.若需要添加请求头，请在全局变量添加变量名为"headers"的变量，格式为json</li>\n' +
    '                                    <li>3.若需要设置请求的编码，请在全局变量添加变量名为"encode"的变量，默认为"utf-8"</li>\n' +
    '                                    <li>4.若需要使用数据库连接，请在全局变量添加变量名为"DB"的变量，格式给json，键值分别为"host","pwd","user","db_name","charset"</li>\n' +
    '                                </ul>\n' +
    '                                </br>\n' +
    '                                <p>常用方法:Python函数，对入参进行处理并且返回结果</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.使用的python版本为3.5.x</li>\n' +
    '                                    <li>2.不要在函数里添加任务print语句</li>\n' +
    '                                    <li>3.使用{&amp;&amp;}作为标志，进行参数的替换，如{&amp;get_md5(\'000000\')&amp;}</li>\n' +
    '                                </ul>\n' +
    '                                </br>\n' +
    '                                <p>验证器:Python函数，如果函数返回True，则测试通过；返回False，则测试失败。默认提供一个文本包含的验证器。</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.使用的python版本为3.5.x</li>\n' +
    '                                    <li>2.不要在函数里添加任务print语句</li>\n' +
    '                                </ul>\n' +
    '                                </br>\n' +
    '                                <p>API依赖库:为后续用例提供变量的接口</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.使用$.作为参数提取的标志，使用jsonpath进行提取。如{"code":10000,"uid":219},则可以使用$.uid进行提取</li>\n' +
    '                                    <li>2.只支持json格式</li>\n' +
    '                                </ul>\n' +
    '                                </br>\n' +
    '                                <p>API用例库:测试用例库</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.添加套件信息，对用例进行分类</li>\n' +
    '                                    <li>2.针对业务逻辑，提供模块化的管理</li>\n' +
    '                                    <li>3.每一个接口对应多个用例</li>\n' +
    '                                    <li>4.配置用例的基本信息，请求信息（请求参数，依赖接口，sql等），响应信息（验证器，状态码，期望返回，schema）等</li>\n' +
    '                                </ul>\n' +
    '                                </br>\n' +
    '                                <p>定时任务:定时执行某一个用例套件</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.可以使用循环，在周期内循环运行；也可以单独运行一次</li>\n' +
    '                                </ul>\n' +
    '                                <p>测试报告:测试用例执行后，生成的报告</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.有对于状态码，响应头，响应体，schema检验的结果，以及详情</li>\n' +
    '                                </ul>\n' +
    '                                </ul>\n' +
    '                                <p>录制:通过手机录制case</p>\n' +
    '                                <ul>\n' +
    '                                    <li>1.使用anyproxy进行抓包</li>\n' +
    '                                    <li>2.配置好手机后，填入端口号8003，即可进行录制</li>\n' +
    '                                    <li>3.录制完后，点击停止录制，生成接口列表，即可生成用例</li>\n' +
    '                                    <li>4.编辑保存之后，即可用过运行，来看接口是否配置正确。保存成功的用例，会进入API用例库对应的接口下</li>\n' +
    '                                </ul>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer btn_div">\n' +
    '                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'+
    '</div>',
    mounted: function() {
        var that = this;
        Vue.http.post("project/detail",{
            "pro_id": app.currProID
        }).then(function(response){
            if(response.body.code==1){
                that.pro = response.body.data;
            }else{
                alert(response.body.msg);
            }
        });

    },
    methods:{
        openIntro: function () {
            $("#Intro").modal();
        }
    }

});