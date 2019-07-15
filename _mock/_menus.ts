export const menus = {
  P_MENUS: [
    {
      ID: '3ae5c74930da4b1e877efabee3af0005',
      PID: 'FC',
      MENUID: 'FC',
      MENUNAME: '快速开发平台',
      ENABLE: 'Y',
      WXMENU: 'N',
      MENUTYPE: 'MENU',
      HASCHILD: 'Y',
      MENUICON: 'icon iconfont icon-ppbs',
      SORT: 1000,
      ROUTER: '/fc',
      P_CHILDMENUS: [
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'BUDGET',
          MENUID: 'BGTX',
          MENUNAME: '主导航',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-yibiaopan',
          PARENT: 'BUDGET',
          SORT: 1100,
          ROUTER: '/budget',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCHOME2',
              MENUNAME: '分析页',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1101,
              ROUTER: '/home1'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCHOME1',
              MENUNAME: '监控页',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1102,
              ROUTER: '/home2'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'FCANTDESIGN',
          MENUNAME: 'Ant Design',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-antdesign',
          PARENT: 'BUDGET',
          SORT: 1150,
          ROUTER: '/antdesign',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCBUTTON',
              MENUNAME: '按钮',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/building'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTABLE',
              MENUNAME: '表格',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/building'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'FCCHART',
          MENUNAME: '图表',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-tubiao',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/building',
        },
        {
          ID: '63fbb2f0708f4fd68db04a92dd5df121',
          PID: 'FC',
          MENUID: 'FCSPREAD',
          MENUNAME: 'spread报表',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-shujubiaoge',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/building'
        },
        {
          ID: '63fbb2f0708f4fd68db04a92dd5df121',
          PID: 'FC',
          MENUID: 'BGIFRAME',
          MENUNAME: 'iframe',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-iframe',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/building'
        },
        {
          ID: '63fbb2f0708f4fd68db04a92dd5df121',
          PID: 'FC',
          MENUID: 'FCAGGRID',
          MENUNAME: 'ag-grid表格',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-datatable',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/building'
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'FCPAGES',
          MENUNAME: '模版页面',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-pages',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATELIST',
              MENUNAME: '列表页面',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/building'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'BGBUSSINESS',
          MENUNAME: '基础业务',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-Workorder',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCLISTINFO',
              MENUNAME: '查询',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/fclistinfoList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCCREATE',
              MENUNAME: '新增',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/fccreateList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCUPDATE',
              MENUNAME: '修改',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/fcupdateList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCREMOVE',
              MENUNAME: '删除',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/fcremoveList'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'SYSTEM',
          MENUNAME: '系统管理',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/system',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'SYSTEMBASIC',
              MENUNAME: '基础设置',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSTEMBASIC',
              HASCHILD: 'Y',
              PARENT: 'SYSTEM',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/sysmenuList',
              P_CHILDMENUS: [
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSROLE',
                  MENUNAME: '权限管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSROLE',
                  MENUICON: 'fc-icon-peizhi',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/sysroleList'
                },
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSMENU',
                  MENUNAME: '用户管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  MENUICON: 'fc-icon-peizhi',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/sysmenuList'
                },
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSMENU',
                  MENUNAME: '菜单管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/sysmenuList'
                },
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSLOG',
                  MENUNAME: '日志管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/syslogList'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
