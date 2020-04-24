---
title: 其他
type: java-tenantsystem
order: 4
---
## 注意事项

1. **乐观锁使用时需要注意：** 
* 在每个业务数据表的PO实体中，version字段需要加上如下注解： *
    ``` java
        /**
        * 版本号
        */
        @TableField(fill = FieldFill.INSERT)
        @Version
        private Integer version;
    ```
* 每次新增时，version字段会自动填充，但在每次更新数据记录之前，都需要接收当前数据版本号，并手动判断版本号是否和当前数据库中记录的版本号相同，否则无法更新。
    ```java
        UserDO existedUserDO = userServiceBusiness.selectUserById(userId, true);
        if(existedUserDO == null){
            throw new ErrorCodeException(ResultCode.RESOURCE_NOT_EXIST);
        }

        //判断版本号
        if (!existedUserDO.getVersion().equals(updateRequest.getVersion())) {
            throw new ErrorCodeException(ResultCode.RESOURCE_CHANGE);
        }
    ```


## 问题解答

1. **在启用租户模式的情况下，不想被多租户过滤怎么办？**
>在Mapper.js的方法前加上@SqlParser(filter = true) 
``` java
@SqlParser(filter = true)
List<UserPO> selectUserList(@Param(Constants.WRAPPER) Wrapper wrapper);
```

<br>
2. **多租户模式下，哪些数据库操作会在sql后自动追加多租户字段的过滤？**        
> 1. 查询数据时会根据当前登录用户的多租户id自动过滤，只查询出当前租户下的数据；
  2. 新增时会根据当前登录用户的租户id自动填充新增记录的租户id；
  3. 更新、删除操作不会再sql后追加租户id的自动填充



