webpackJsonp([1],{"2N0i":function(t,e){},"5rzY":function(t,e){},C5bi:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("zL8q"),o=a.n(r),l=(a("tvR6"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var s=a("VU/8")({name:"App"},l,!1,function(t){a("C5bi")},null,null).exports,i=a("/ocq"),u={name:"baseLayout",data:function(){return{date:new Date}},computed:{dateStr:function(){var t=this.date.getFullYear(),e=this.date.getMonth()+1;e=e<10?"0"+e:e;var a=this.date.getDate();a=a<10?"0"+a:a;var n=this.date.getDay();switch(n){case 1:n="星期一";break;case 2:n="星期二";break;case 3:n="星期三";break;case 4:n="星期四";break;case 5:n="星期五";break;case 6:n="星期六";break;case 0:n="星期日"}var r=this.date.getHours(),o=this.date.getMinutes(),l=this.date.getSeconds();return t+"年"+e+"月"+a+"日 "+n+" "+(r=r<10?"0"+r:r)+":"+(o=o<10?"0"+o:o)+":"+(l=l<10?"0"+l:l)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gray-bg",staticStyle:{"min-height":"100%"}},[e("div",{staticClass:"wrapper wrapper-content animated fadeInRight"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"footer fixed"},[this._m(0),this._v(" "),e("div",[e("strong",[this._v(this._s(this.dateStr))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pull-right"},[e("strong",[this._v("@AMS Report")])])}]},c=a("VU/8")(u,d,!1,null,null,null).exports,p={name:"baseContainer",props:{headerHeight:{type:String,default:function(){return"600"}}},data:function(){return{activeNames:["1"]}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{attrs:{height:t.headerHeight}},[a("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"查询条件",name:"1"}},[t._t("header")],2)],1)],1),t._v(" "),a("el-main",[t._t("main")],2)],1)},staticRenderFns:[]},_=a("VU/8")(p,v,!1,null,null,null).exports,h={name:"baseHeaderCard",props:{coder:{type:String,default:function(){return"曹晋（0279）"}},user:{type:String,default:function(){return"陈舒（0353）"}},project:{type:String,required:!0}},data:function(){return{count:0}},mounted:function(){var t=this.URL_PREFIX+"/Common/GetClickCount",e={title:this.project},a=this;this.$http.post(t,e).then(function(t){t.data.success?a.count=t.data.count:console.log(t.data.msg)}).catch(function(t){console.log(t)})}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[a("div",[t._v("开发者："+t._s(t.coder))]),t._v(" "),a("div",[t._v("需求者："+t._s(t.user))]),t._v(" "),a("div",[t._v("Cilck Count: "+t._s(t.count))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]},f=a("VU/8")(h,m,!1,null,null,null).exports,D=this,x={name:"baseTableContainer",props:{title:{type:String,default:function(){return""}},useExcel:{type:Boolean,default:function(){return!0}},excelStyle:{type:String},tableData:{},fileName:{type:String,default:"RPT.xls"},excelBtnLabel:{type:String,default:"Excel"}},data:function(){return{}},computed:{show:function(){return""!=D.title}},methods:{table2Excel:function(){var t="";this.excelStyle&&(t=this.excelStyle);var e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e'+t+"</head><body>{table}</body></html>",a=this.$refs.dlink,n={worksheet:"Worksheet",table:this.$refs.table.innerHTML};a.href="data:application/vnd.ms-excel;base64,"+base64(format(e,n)),a.download=this.fileName,a.click()},table2Html:function(){var t=this.$refs.table,e=(window.getComputedStyle(t),document.createElement("div"));e.innerHTML=t.outerHTML,console.log(e)}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ibox"},[t.show?a("div",{staticClass:"ibox-title"},[a("label",[t._v(t._s(t.title))])]):t._e(),t._v(" "),a("div",{staticClass:"ibox-content"},[a("el-row",{attrs:{type:"flex",justify:"end"}},[t._t("left"),t._v(" "),t.useExcel?a("div",{staticClass:"downloadBtn"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-download",size:"mini"},on:{click:t.table2Excel}},[t._v(t._s(t.excelBtnLabel))])],1):t._e(),t._v(" "),t._t("right")],2),t._v(" "),a("div",{ref:"table",staticClass:"table-div"},[t._t("table",null,{datas:t.tableData})],2),t._v(" "),a("a",{ref:"dlink",staticStyle:{display:"none"}})],1)])},staticRenderFns:[]};var b={name:"EDAPhotoDetail",components:{BaseLayout:c,BaseContainer:_,BaseHeaderCard:f,BaseTableContainer:a("VU/8")(x,C,!1,function(t){a("5rzY")},null,null).exports},data:function(){return{manualInput:!0,manualPeriod:"",manualLotQueryStr:"",autoPeriod:"",loading:!1,route:"",operName:[],lotID:[],manualTableData:[],manualTitle:"",autoTableData:[],autoTitle:"",allWaferID:[],waferID:[]}},computed:{allRoutes:function(){var t=this.autoTableData.map(function(t){return t.RouteID});return 0===this.autoTableData.length?[]:(t.distinct(),t.sort(function(t,e){return t.length-e.length}),t)},prodFilteredData:function(){var t=this,e=this.autoTableData;return null!==this.route&&""!==this.route&&(e=e.filter(function(e){return e.RouteID===t.route})),e},operNameFilteredData:function(){var t=this,e=this.prodFilteredData;return this.operName.length>0&&(e=e.filter(function(e){return t.operName.indexOf(e.OperName)>-1})),e},lotIDFilteredData:function(){var t=this,e=this.operNameFilteredData;return this.lotID.length>0&&(e=e.filter(function(e){return t.lotID.indexOf(e.LotID)>-1})),e},allOperName:function(){var t=this.prodFilteredData.map(function(t){return t.OperName});return t.distinct(),t.sort(),this.operName=[],t},allLotId:function(){var t=this.operNameFilteredData.map(function(t){return t.LotID});return t.distinct(),t.sort(),this.lotID=[],t},filteredAutoTableData:function(){var t=this,e=this.operNameFilteredData;return this.lotID.length>0&&(e=e.filter(function(e){return t.lotID.indexOf(e.LotID)>-1})),e},showTable:function(){return this.manualInput?""!==this.manualTitle:""!==this.autoTitle},viewWaferID:function(){return 0==this.waferID.length?this.allWaferID.map(function(t,e){return e}):this.waferID.sort()}},methods:{querySearch:function(t,e){var a=[];this.allRoutes.forEach(function(t){a.push({value:t})}),e(t?a.filter(function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}):a)},queryFun:function(t,e){var a=this.URL_PREFIX+"/ReqRpt214/ManualQuery",n=this;this.loading=!0,this.$http.post(a,t).then(function(t){if(t.data.success)e(t);else{if("没有数据"==t.data.msg)return n.$message.error("没有查询到符合条件的数据");console.log(t.data.msg),n.$message.error("服务端程序异常")}n.loading=!1}).catch(function(t){console.log(t),n.$message.error("网络异常"),n.loading=!1})},handleManualQueryClick:function(){var t=this;if(!this.manualLotQueryStr)return this.$message.error("请输入需要查询的LotID");var e=this.manualPeriod,a=void 0,n=void 0;if(e)a=getDateStr(e[0]),n=getDateStr(e[1]);else{n=getCurDate();var r=new Date;r.setDate(r.getDate()-10),a=getDateStr(r)}var o={lot:this.manualLotQueryStr,startDate:a,endDate:n};this.queryFun(o,function(e){t.manualTitle="Lot:"+e.data.LotStr+";From:"+e.data.StartDate+" To:"+e.data.EndDate,t.manualTableData=e.data.RowEntities})},handleAutoQueryClick:function(){var t=this,e=this.autoPeriod,a=void 0,n=void 0;if(e)a=getDateStr(e[0]),n=getDateStr(e[1]);else{n=getCurDate();var r=new Date;r.setDate(r.getDate()-10),a=getDateStr(r)}var o={lot:"*",startDate:a,endDate:n};this.queryFun(o,function(e){t.autoTitle="From:"+e.data.StartDate+" To:"+e.data.EndDate,t.autoTableData=e.data.RowEntities})},handleClear:function(){this.lotID=[],this.operName=[],this.route=""}},created:function(){for(var t=1;t<26;t++)this.allWaferID.push(t<10?"#0"+t:"#"+t);Array.prototype.distinct=function(){for(var t=[],e=0;e<this.length;e++)for(var a=e+1;a<this.length;)this[e]===this[a]?t.push(this.splice(a,1)[0]):a++;return t}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseLayout",[a("BaseContainer",[a("template",{slot:"header"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{lg:7,md:12}},[a("div",[a("el-switch",{attrs:{"active-text":"Manual","inactive-text":"Auto","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.manualInput,callback:function(e){t.manualInput=e},expression:"manualInput"}})],1)]),t._v(" "),a("el-col",{attrs:{lg:10,md:12}},[t.manualInput?a("div",{staticClass:"eda-inline-manual"},[a("el-input",{attrs:{placeholder:"请输入LotID，支持逗号隔开，*模糊匹配"},model:{value:t.manualLotQueryStr,callback:function(e){t.manualLotQueryStr=e},expression:"manualLotQueryStr"}}),t._v(" "),a("div",{staticClass:"eda-inline-date-query"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"开始日期,00:00:00","end-placeholder":"结束日期,23:59:59"},model:{value:t.manualPeriod,callback:function(e){t.manualPeriod=e},expression:"manualPeriod"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.loading},on:{click:t.handleManualQueryClick}})],1)],1):a("div",{staticClass:"eda-inline-auto"},[a("div",{staticClass:"eda-inline-date-query"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"开始日期,00:00:00","end-placeholder":"结束日期,23:59:59"},model:{value:t.autoPeriod,callback:function(e){t.autoPeriod=e},expression:"autoPeriod"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.loading},on:{click:t.handleAutoQueryClick}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleClear}},[t._v("重置")])],1),t._v(" "),a("div",{staticClass:"eda-inline-select-group"},[a("el-autocomplete",{attrs:{placeholder:"请输入Route","fetch-suggestions":t.querySearch},model:{value:t.route,callback:function(e){t.route=e},expression:"route"}}),t._v(" "),a("el-select",{attrs:{multiple:"",placeholder:"请选择Oper Name"},model:{value:t.operName,callback:function(e){t.operName=e},expression:"operName"}},t._l(t.allOperName,function(t,e){return a("el-option",{key:e,attrs:{value:t}})}),1),t._v(" "),a("el-select",{attrs:{multiple:"",placeholder:"请选择LotID"},model:{value:t.lotID,callback:function(e){t.lotID=e},expression:"lotID"}},t._l(t.allLotId,function(t,e){return a("el-option",{key:e,attrs:{value:t}})}),1)],1)])]),t._v(" "),a("el-col",{attrs:{lg:4,offset:2,md:8,sm:12}},[a("BaseHeaderCard",{attrs:{project:"RPT000214",coder:"戴新亚（0607）",user:"姜兆涛（0102）"}})],1)],1)],1),t._v(" "),a("template",{slot:"main"},[t.manualInput&&t.showTable?a("BaseTableContainer",{attrs:{title:t.manualTitle,tableData:t.manualTableData,fileName:"EDA_PhotoDetail.xls"},scopedSlots:t._u([{key:"table",fn:function(e){return a("div",{staticClass:"eda-table-div"},[a("table",{staticClass:"table table-responsive table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("No")]),t._v(" "),a("th",[t._v("Lot ID")]),t._v(" "),a("th",[t._v("Foup ID")]),t._v(" "),a("th",[t._v("Qty")]),t._v(" "),a("th",[t._v("Route ID")]),t._v(" "),a("th",[t._v("Oper ID")]),t._v(" "),a("th",[t._v("Oper No.")]),t._v(" "),a("th",[t._v("Oper Name")]),t._v(" "),a("th",[t._v("Eqp Type")]),t._v(" "),a("th",[t._v("Eqp ID")]),t._v(" "),a("th",[t._v("Recipe ID")]),t._v(" "),t._l(t.allWaferID,function(e){return a("th",{key:"h"+e,domProps:{textContent:t._s(e)}})}),t._v(" "),a("th",[t._v("Oper Start Time")]),t._v(" "),a("th",[t._v("Oper Complete Time")]),t._v(" "),a("th",[t._v("Run Hrs")]),t._v(" "),a("th",[t._v("User ID")]),t._v(" "),a("th",[t._v("User Full Name")]),t._v(" "),a("th",[t._v("User Department")])],2)]),t._v(" "),a("tbody",t._l(e.datas,function(e,n){return a("tr",{key:n},[a("td",{domProps:{textContent:t._s(n+1)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.LotID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.FoupID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.Qty)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.RouteID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OperID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OperNo)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OperName)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.EqpType)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.EqpID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.RecipeID)}}),t._v(" "),t._l(t.allWaferID,function(n,r){return a("td",{key:"s"+n,domProps:{textContent:t._s(e.WaferValue[r])}})}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OpeStartTime)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OpeCompleteTime)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.RunHrs)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.UserID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.UserFullName)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.UserDept)}})],2)}),0)])])}}],null,!1,1963548365)}):t._e(),t._v(" "),!t.manualInput&&t.showTable?a("BaseTableContainer",{attrs:{title:t.autoTitle,tableData:t.filteredAutoTableData,fileName:"EDA_PhotoDetail.xls"},scopedSlots:t._u([{key:"table",fn:function(e){return a("div",{staticClass:"eda-table-div"},[a("table",{staticClass:"table table-responsive table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("No")]),t._v(" "),a("th",[t._v("Lot ID")]),t._v(" "),a("th",[t._v("Foup ID")]),t._v(" "),a("th",[t._v("Qty")]),t._v(" "),a("th",[t._v("Route ID")]),t._v(" "),a("th",[t._v("Oper ID")]),t._v(" "),a("th",[t._v("Oper No.")]),t._v(" "),a("th",[t._v("Oper Name")]),t._v(" "),a("th",[t._v("Eqp Type")]),t._v(" "),a("th",[t._v("Eqp ID")]),t._v(" "),a("th",[t._v("Recipe ID")]),t._v(" "),t._l(t.viewWaferID,function(e){return a("th",{key:"h"+t.allWaferID[e],domProps:{textContent:t._s(t.allWaferID[e])}})}),t._v(" "),a("th",[t._v("Oper Start Time")]),t._v(" "),a("th",[t._v("Oper Complete Time")]),t._v(" "),a("th",[t._v("Run Hrs")]),t._v(" "),a("th",[t._v("User ID")]),t._v(" "),a("th",[t._v("User Full Name")]),t._v(" "),a("th",[t._v("User Department")])],2)]),t._v(" "),a("tbody",t._l(e.datas,function(e,n){return a("tr",{key:n},[a("td",{domProps:{textContent:t._s(n+1)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.LotID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.FoupID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.Qty)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.RouteID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OperID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OperNo)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OperName)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.EqpType)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.EqpID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.RecipeID)}}),t._v(" "),t._l(t.viewWaferID,function(n){return a("td",{key:"s"+t.allWaferID[n],domProps:{textContent:t._s(e.WaferValue[n])}})}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OpeStartTime)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.OpeCompleteTime)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.RunHrs)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.UserID)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.UserFullName)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.UserDept)}})],2)}),0)])])}}],null,!1,3432642059)}):t._e()],1)],2)],1)},staticRenderFns:[]};var g=a("VU/8")(b,y,!1,function(t){a("2N0i")},null,null).exports;n.default.use(i.a);var I=new i.a({routes:[{path:"/",name:"HelloWorld",component:g}]}),P=a("mtWM"),k=a.n(P);n.default.config.productionTip=!1,n.default.use(o.a),n.default.prototype.$http=k.a,n.default.prototype.URL_PREFIX="..",new n.default({el:"#app",router:I,components:{App:s},template:"<App/>"})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3ebc99a1cfe3d0abf0f1.js.map