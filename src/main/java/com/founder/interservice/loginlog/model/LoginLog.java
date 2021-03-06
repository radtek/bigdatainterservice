package com.founder.interservice.loginlog.model;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@DynamicUpdate
@Data
@Table(name = "TB_ST_LOGINLOG")
public class LoginLog {
    @Id
    private String xxzjbh;//信息主键编号
    private String asjbh; //案事件编号
    private String cxrJh;//查询人警号
    private String cxrSfzh;//查询人身份证号
    private String cxrXm;//查询人姓名
    private String cxrLxdh;//查询人联系电话
    private String dldwdm; //登录单位代码
    private String dldwmc; //登录单位名称
    @Transient
    private int begin;
    @Transient
    private int end;
    @Transient
    private String cxrKssj;
    @Transient
    private String cxrJssj;

    @Column(insertable = false)
    private Date cxrDlsj;//登陆时间

}
