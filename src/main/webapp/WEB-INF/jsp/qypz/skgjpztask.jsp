<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.atg.com/taglibs/json" prefix="json" %>
<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>区域碰撞任务列表</title>
	<link rel="stylesheet" type="text/css" href="/css/easyui-new.css">
	<link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/css/bjzycx.css">
    <link rel="stylesheet" type="text/css" href="/css/skgj.css">
</head>
<body>
<div id="nipic_search">
	<div id="header">		
		<h5 class="h_title4"></h5>
	</div>	
	<!--内容-->
	<div id="content_box0" class="content_box">
		<!--查询条件-->
		<div class="condition">
			<h6 class="cx_t">查询条件</h6>
			<table style="width:100%;border-collapse: collapse;background-color: rgba(255,255,255,0.75);text-align:left;" class="cx_table_tj">
				<tr>
					<td class="td_r" style="width:10%;">案件编号：</td>
		            <td style="width:20%;"><input id = "asjbh" name = "asjbh" type="text"/></td>
		            <td style="width:60%;">
		            	<a href="javascript:queryTasks();" class="btn_cx" style="margin-left:200px;">查询</a>
						<a href="javascript:clearZwbz();" class="btn_qkcxtj">重置</a>
		            </td>
				</tr>
			</table>
		</div>
		<!--查询结果 table-->
		<div class="result" style="padding-bottom:30px;">
			<table class="easyui-datagrid" id="taskTable" style="border-top:1px dashed #ccc;" width="100%">
                <tbody>
                </tbody>
			</table>
		</div>
	</div>
</div>
<script type="text/javascript" src="/js/jquery-1.11.3.js"></script>
<script type="text/javascript" src="/js/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/js/easyui-lang-zh_CN.js"></script>
<script type="text/javascript">
function queryTasks(){
        var table_title = [
            {title:"任务编号",field:"taskId",align:'center',width:'20%',formatter : function(val,row,index){
                    return "<a onclick=\"showTaskResults('"+row.taskId+"')\" title='点击查看任务推荐结果'>"+row.taskId+"</a>";
                }
			},
            {title:"案件编号",field:"taskCaseId",align:'center',width:'20%'},
            {title:"任务名称",field:"taskName",align:'center',width:'15%'},
            {title:"碰撞表达式",field:"expression",align:'center',width:'10%'},
            {title:"区域个数",field:"qyCount",align:'center',width:'10'},
            {title:"任务状态",field:"state",align:'center',width:'10%'},
            {title:"登记时间",field:"djsj",align:'center',width:'10%'}
        ];
        var  param= {
            "asjbh":$("#asjbh").val()
        };
        console.log(JSON.stringify(param));
        $("#taskTable").datagrid({
            url: "/queryTasksByAsjbh",
            columns : [table_title],
            queryParams:param,
            striped: true,
            fitColumns: true,
            singleSelect: false,
            pagination: true,
            nowrap: false, //设置是否换行  false换行 true表示不换行
            pageSize: 20,
            pageList: [10, 20, 50, 100, 150, 200],
            showFooter: true,
            pageNumber:1,
            loadFilter: function(data){
                console.log(JSON.stringify(data));
                return data;
            }
        });
}
function showTaskResults(taskId){
    var url="/getTaskResults?taskId="+taskId;
    window.open(url);
}
</script>
</body>
</html>