var project = Vue.extend({
    template: '<div>'+
    '<div class="navbar-wrapper">\n' +
    '    <div class="container">\n' +
    '\n' +
    '        <nav class="navbar navbar-inverse navbar-fixed-top">\n' +
    '            <div class="container">\n' +
    '                <div class="navbar-header">\n' +
    '                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"\n' +
    '                            aria-expanded="false" aria-controls="navbar">\n' +
    '                        <span class="sr-only">Toggle navigation</span>\n' +
    '                        <span class="icon-bar"></span>\n' +
    '                        <span class="icon-bar"></span>\n' +
    '                        <span class="icon-bar"></span>\n' +
    '                    </button>\n' +
    '                    <a class="navbar-brand" href="#">{{pro.pro_name}}</a>\n' +
    '                </div>\n' +
    '                <div id="navbar" class="navbar-collapse collapse">\n' +
    '                    <ul class="nav navbar-nav">\n' +
    '                        <li v-bind:class="activeItemList[0]"><router-link to="/project/case" v-on:click.native="recordItemID(0)" >用例管理</router-link></li>\n' +
    '                        <li v-bind:class="activeItemList[1]"><router-link to="/project/interface" v-on:click.native="recordItemID(1)">接口测试</router-link></li>\n' +
    '                        <li v-bind:class="activeItemList[2]"><router-link to="/project/ui" v-on:click.native="recordItemID(2)">功能测试</router-link></li>\n' +
    '                        <li v-bind:class="activeItemList[3]"><router-link to="/project/app-performance" v-on:click.native="recordItemID(3)">APP性能测试</router-link></li>\n' +
    '                        <li v-bind:class="activeItemList[4]"><router-link to="/project/web" v-on:click.native="recordItemID(4)">服务器性能测试</router-link></li>\n' +
    '                        <li v-bind:class="activeItemList[5]"><router-link to="/project/tools" v-on:click.native="recordItemID(5)">小工具</router-link></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </nav>\n' +
    '\n' +
    '    </div>\n' +
    '</div>' +
    '<router-view></router-view>' +
    '</div>',
    data: function(){
        return {
            activeItemList: ["disactive", "disactive", "disactive", "disactive", "disactive", "disactive"],
            pro: {}
        }
    },
    mounted: function() {
        var that = this;
        for (var i = 0; i < this.activeItemList.length; i++) {
                this.activeItemList[i] = "disactive";
            }
        if (app.currItemID != 10) {
            this.activeItemList[app.currItemID] = 'active';
        }
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
        recordItemID: function (id) {
            app.currItemID = id;
            for (var i = 0; i < this.activeItemList.length; i++) {
                this.activeItemList[i] = "disactive";
            }
            this.activeItemList[id] = 'active';
        }
    }

});