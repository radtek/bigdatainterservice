package com.founder.interservice.recordLog.service;

import com.founder.interservice.recordLog.model.Querylog;

/**
 * @ClassName： RecordLogService
 * @Auther： 罗启豪
 * @Description: java类作用描述
 * @CreateDate： 2018-10-17
 * @Version: 1.0
 */
public interface RecordLogService {
    public void saveQueryLog(Querylog querylog) throws Exception;

}
