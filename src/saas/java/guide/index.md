---
title: 介绍
type: java-guide
order: 1
---

## OP框架 是什么

**OP(Open Platform): 公共框架。**  

包括前台、后台开发框架。部门内部的新项目都可以基于该框架为基础，可以节省新项目搭建的时间，统一部门内部框架的风格，让不同项目的开发人员在切换项目时不需要重新学习新的框架，即可快速上手。


## 框架层级
### 项目结构目录

```
op
├── commons                 // 通用方法模块
├── data                    // 数据模块
|   ├──dto
|   ├──entity
|   ├──po
|   ├──enums
├── generator                // 代码生成模块
├── service                  // 业务服务模块
|   ├──java
|   |   ├──application service
|   |   ├──business service
|   |   ├──converter
|   |   ├──exception
|   |   ├──mapper
|   |   |  ├──Mapper
|   |   |  ├──QueryMapper
|   |   ├──properties
|   |   ├──shiro
|   |   ├──utils
|   ├──resources
|   |   ├──mapper              
├── shiro                      // 权限过滤模块
├── web                        // RESTfull API
├── .gitignore                 // git 忽略项
└── pom.xml                    // pom文件
```    

### service
> application service: 应用层数据服务。这里的方法基本和Controller相对应。原则上在Controller内不处理业务逻辑。
>
> business service：逻辑层服务。这里存放一些供application service调用的基础方法，或通用方法。
>
>mapper: 分为QueryMapper和Mapper两部分。由于公司大部分的平台业务都涉及到表的条件查询，现将表的条件查询抽象出来，所有的查询相关的操作都写在QueryMapper, 其他业务操作写在Mapper.
>
>resources/mapper：存放java/mapper所对应的静态文件。

### data
> dto: 应用层数据实体。用于controller和application service之间、controller和调用者之间传输的数据类型。
>
> entity:  业务层数据实体，用于business service层。
>
> po:  与数据表结构相对应的数据实体。
>
> enums:  枚举类型。

## 请求流程    
后台请求流程图请查看 [后台请求流程图](https://www.processon.com/view/link/5dde0e7de4b0129173459750)

## OP框架模块依赖图
![alt op框架模块依赖图](/images/op-depends.png)


## 配置
这里所解释的是web模块application.yml中的部分配置。Shiro权限配置用于限制调用者的访问权限，数据权限配置用于限制调用者的数据权限。
### Shiro权限配置
``` xml
shiro:
  encryptionStrategy: SHA_256
  hashIterations: 1
  filters:
    - /test/token = anon
    - /account/login = authc
    - /test/article = jwt["permissive"]
    - /logout = logout
    - /** = jwt
```  
<br>  

| 配置名称 | 含义 |
|  ----  | ----  |
| encryptionStrategy  | 加密策略(默认SHA_256)：NONE,MD5,SHA_1,SHA_256 |
| hashIterations  | 加密迭代次数(默认1) |
| filters  | 访问权限过滤规则 |


| filter类型  | 含义  |
|  ----  | ----  |
| anon  | 表示资源或接口无需验证也可以访问 |
| authc  | 使用authc验证过滤，本框架中即为账号密码验证 |
| jwt  | 使用jwt拦截器过滤 |
| jwt["permissive"]  | 使用jwt拦截器过滤,但是失败时也允许通过。对于支持游客模式的接口可以使用此配置 |



### 数据权限配置

``` xml
permission:
  placeholder:
    #角色占位符
    roles: "@{roles}"
  tenant:
    enable: true
    column: corp_id
    tables: auth_role,auth_org,auth_user,pb_car,pb_car_structure,sys_log

    menu:
    enable: true
    # 菜单过滤表达式
    expression: "exists (select menu_id from auth_role_menu rm where rm.menu_id = m.menu_id and rm.role_id in (${permission.placeholder.roles}))"

    car:
    enable: false
    # 车辆过滤表达式
    expression: "1=1"
```  

<br>  

| 配置名称 | 含义 |
|  ----  | ----  |
| placeholder  | sql占位符,过滤表达式中的占位符将被替换成实际值 |
| tenant  | 多租户相关配置 |
<br> 

| tenant配置名称 | 含义 |
|  ----  | ---------  |
| enable  | 是否启动多租户过滤 | 
| column  | 多租户字段 | 
| tables  | 需要启动多租户过滤的表名 | 
| menu  | 是否启动菜单过滤及其过滤表达式 | 
| car  | 是否启用车辆过滤及其过滤表达式 | 

