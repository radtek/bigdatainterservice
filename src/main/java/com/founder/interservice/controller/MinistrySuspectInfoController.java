package com.founder.interservice.controller;

import com.founder.interservice.qgzyfw.action.CallDygabxxfw;
import com.founder.interservice.qgzyfw.domain.GabConfig;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MinistrySuspectInfoController {
    @Autowired
    private GabConfig gabConfig;

    @RequestMapping("/queryMinistrySuspectInfo")
    @ResponseBody
    public List<Map<String,Object>> queryMinistrySuspectInfo(String sfzh){//ZHFZXYR_CYZJ_ZJHM 查询资源所需的条件  513624198110310011  510211198301103713  510218198208064953
        List<Map<String,Object>> resultList = new ArrayList<Map<String, Object>>();
        //通过身份证号调取案事件编号list（asjbhList）
        CallDygabxxfw call = new CallDygabxxfw();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("ZHFZXYR_CYZJ_ZJHM", sfzh);
        JSONArray jsonArray = new JSONArray();
        jsonArray.add(jsonObject);
        Object[] os = jsonArray.toArray();
        Map<String,Object> mapQg = new HashMap<String, Object>();
        mapQg = call.getGabZyInfoByJyaq("fzxyr",os,gabConfig);
        List<Map<String,Object>> asjbhList = (List<Map<String,Object>>)mapQg.get("dataResult");

        //通过案事件编号调取案事件信息resultList
        for (Map<String,Object> asjbh:asjbhList) {
            CallDygabxxfw c = new CallDygabxxfw();
            JSONObject jsonObject1 = new JSONObject();
            jsonObject.put("ASJBH", asjbh);
            JSONArray jsonArray1 = new JSONArray();
            jsonArray1.add(jsonObject1);
            Object[] objects = jsonArray1.toArray();
            Map<String,Object> m = new HashMap<String, Object>();
            m = (Map<String,Object>)((Map<String, Object>) call.getGabZyInfoByJyaq("asj",objects,gabConfig).get("dataResult")).get(0);
            resultList.add(m);
            System.out.println("------------------案事件信息map------------------------"+m);
        }
        System.out.println("------------------返回list------------------------"+resultList);
        return resultList;
    }

}
