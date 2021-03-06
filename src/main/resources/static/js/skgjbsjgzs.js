$(".content_box").css("minHeight",$(window).height()-174);
$(window).resize(function() {
    $(".content_box").css("minHeight",$(window).height()-174);
})
var jq22 = {
    _default:6, //默认显示个数
    _loading:6, //每次点击按钮后加载的个数
    page:0, //页码
    init:function(taskId){
        var param = {
            "page":0,
            "size":6,
            "taskId":taskId
        }
        $.ajax({
            type:"POST",
            data:param,
            url:"/getTogetherTaskResults",
            beforeSend:beforeSendFn(true),
            success:function(data) {
                $("#content_box0 div.more").show();
                $("#content_box0 ul.list").hide();
                if (null != data && data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var ryzpStr = "";
                        var name = data[i].name==null?"":data[i].name;
                        var age =  data[i].age==null?"":data[i].age;
                        var zjhm = data[i].zjhm==null?"":data[i].zjhm;
                        var csrq = data[i].csrq==null?"":data[i].csrq;
                        var sjhm = data[i].sjhm==null?"":data[i].sjhm;
                        var xzzDzmc = data[i].xzzDzmc==null?"":data[i].xzzDzmc;
                        if (null != data[i].ryzp && "" != data[i].ryzp) {
                            ryzpStr = "<img src=\"data:image/gif;base64," + data[i].ryzp + "\"/>";
                        } else {
                            ryzpStr = "<img src=\"/images/timg.jpg\" style = \"height:121px;width:100px;\"/>";
                        }

                        $("#content_box0 div[class='result']").append("<div class='float-div'>" +
                            "<div class='xx-box'>" +
                            "<div class='lf-img'>" + ryzpStr + "</div>" +
                            "<div class='rg-xx'>" +
                            "<div class='xx-line'><span class='xx-xm'>" + name + "</span><span>" + age + "</span><i class='fa fa-external-link'></i><i class='fa fa-folder-open-o'></i><span class='c125'></span></div>" +
                            "<div class='xx-line'><i class='fa fa-id-card orange' title='身份证号'></i><span>" + zjhm + "</span></div>" +
                            "<div class='xx-line'><i class='fa fa-user yellow' title='出生日期'></i><span>" + csrq + "</span></div>" +
                            "<div class='xx-line'><i class='fa fa-phone' title='电话号码'></i><span>" + sjhm + "</span></div>" +
                            "<div class='xx-line'><i class='fa fa-map-marker green' title='现住址'></i><span>" + xzzDzmc + "</span></div>" +
                            "<div class='xx-line over'><span class='label'>前科人员</span><span class='label'>高危人员</span><span class='label'>刑侦关注人员</span></div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                    }
                    jq22.page = jq22.page + 1;
                } else {
                    $("#content_box0 div.result").append("<div style = \"text-align: center;clear: both;color: #f11f05;height:100%;\"><img src='/images/nodata.png' class='nodata'/></div>");
                    $("#content_box0 div.more").hide();
                }
            }
        });
    },
    loadMore:function(taskId){
        var page = jq22.page;
        var param = {
            "page":page,
            "size":6,
            "taskId":taskId
        }
        $.ajax({
            type:"POST",
            data:param,
            url:"/getTogetherTaskResults",
            beforeSend:beforeSendFn(false),
            success:function(data) {
                $("#content_box0 div.more").show();
                $("#content_box0 ul.list").hide();
                if (null != data && data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var ryzpStr = "";
                        var name = data[i].name==null?"":data[i].name;
                        var age =  data[i].age==null?"":data[i].age;
                        var zjhm = data[i].zjhm==null?"":data[i].zjhm;
                        var csrq = data[i].csrq==null?"":data[i].csrq;
                        var sjhm = data[i].sjhm==null?"":data[i].sjhm;
                        var xzzDzmc = data[i].xzzDzmc==null?"":data[i].xzzDzmc;
                        if (null != data[i].ryzp && "" != data[i].ryzp) {
                            ryzpStr = "<img src=\"data:image/gif;base64," + data[i].ryzp + "\"/>";
                        } else {
                            ryzpStr = "<img src=\"/images/timg.jpg\" style = \"height:121px;width:100px;\"/>";
                        }

                        $("#content_box0 div[class='result']").append("<div class='float-div'>" +
                            "<div class='xx-box'>" +
                            "<div class='lf-img'>" + ryzpStr + "</div>" +
                            "<div class='rg-xx'>" +
                            "<div class='xx-line'><span class='xx-xm'>" + name + "</span><span>" + age + "</span><i class='fa fa-external-link'></i><i class='fa fa-folder-open-o'></i><span class='c125'></span></div>" +
                            "<div class='xx-line'><i class='fa fa-id-card orange' title='身份证号'></i><span>" + zjhm + "</span></div>" +
                            "<div class='xx-line'><i class='fa fa-user yellow' title='出生日期'></i><span>" + csrq + "</span></div>" +
                            "<div class='xx-line'><i class='fa fa-phone' title='电话号码'></i><span>" + sjhm + "</span></div>" +
                            "<div class='xx-line'><i class='fa fa-map-marker green' title='现住址'></i><span>" + xzzDzmc + "</span></div>" +
                            "<div class='xx-line over'><span class='label'>前科人员</span><span class='label'>高危人员</span><span class='label'>刑侦关注人员</span></div>" +
                            "</div>" +
                            "</div>" +
                            "</div>");
                    }
                    jq22.page = jq22.page + 1;
                } else {
                    $("#content_box0 div[class='result']").append("<div style = \"margin-left: 48%;clear: both;color: #f11f05;\">已加载全部数据</div>");
                    $("#content_box0 div.more").hide();

                }
            }
        });
    }
}
function beforeSendFn(ifInit){
    if(ifInit){
        $("#content_box0 ul.list").show();
    }else{
        $("#content_box0 div.more").hide();
        $("#content_box0 ul.list").show();
    }
}
