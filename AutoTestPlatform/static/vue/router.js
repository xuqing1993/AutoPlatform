const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/project',
        component: project,
        children:[
            {
                path: '/project/interface',
                component: interface,
                redirect: '/project/interface/homepage',
                children:[
                    {
                        path: '/project/interface/homepage',
                        component: homepage
                    },
                    {
                        path: '/project/interface/globalVar',
                        component: globalVar
                    },
                    {
                        path: '/project/interface/method',
                        component: method
                    },
                    {
                        path: '/project/interface/validation',
                        component: validation
                    },
                    {
                        path: '/project/interface/APIDependency',
                        component: dependency
                    },
                    {
                        path: '/project/interface/APICase',
                        component: apiCase
                    },
                    {
                        path: '/project/interface/task',
                        component: plan
                    },
                    {
                        path: '/project/interface/testReport',
                        component: report
                    },
                    {
                        path: '/project/interface/record',
                        component: record
                    }
                ]
            }

        ]
    }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    data: {
        currProID: 0,
        currItemID: 0,
        currmodelID: 0,
        itemID: 10,
        planId: null,
        planSelect: 0,
        caseRun: 0,
        activeList: ["active","disactive","disactive","disactive","disactive","disactive","disactive","disactive","disactive"]
    },
    methods: {
        active: function(id) {
             app.currmodelID = id;
             for (var i=0;i<this.activeList.length;i++){
                 this.activeList[i]="disactive";
             }
             this.activeList[id]='active';
        },
        CovertToDate: function(unittime) {
                unittime = unittime * 1000;
                var jsDate = new Date(unittime);
                var UnixTimeToDate = jsDate.getFullYear() + '-' + (jsDate.getMonth() + 1) + '-' + jsDate.getDate() + ' ' + jsDate.getHours() + ':' + jsDate.getMinutes();
                return UnixTimeToDate;
        }
    },
  router
}).$mount('#app')