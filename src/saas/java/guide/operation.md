---
title: 基本操作
type: java-guide
order: 2
---

## Controller添加示例

``` java

@Autowired
    private IUserService userService;

/**
     * 超管--获取公司级别的用户
     * @param page 页码
     * @param size 每页条数
     * @param condition 自定义查询条件
     * @param order 自定义排序条件
     * @return 当页记录
     */
@GetMapping
    public BasePageResponse getUsers(@RequestParam Integer page, @RequestParam Integer size, @RequestParam String condition, @RequestParam String order){
        if(page == null || size == null)
            throw new ErrorCodeException(ResultCode.PARAMS_ERROR);

        return userService.getUsers(condition, order, page, size);
    }
```  

## IService添加示例

``` java
BasePageResponse getUsers(String condition, String order, Integer page, Integer size);
```  

## Service添加示例
``` java
private final IUserServiceBusiness userServiceBusiness;
@Override
    public BasePageResponse getUsers(String condition, String order, Integer page, Integer size) {
        QueryWrapper wrapper = QueryWrapperUtil.getWholeWrapper(condition, order);
        List<UserDO> records = userServiceBusiness.selectUserList(wrapper);

        Page<UserDO> pageObj = new Page(page, size);
        pageObj.setRecords(records);

        return new BasePageResponse(records.size(), pageObj.getRecords(), page, size);
    }
```  

## IBusinessService添加示例
``` java
List<UserDO> selectUserList(Wrapper wrapper);
```  

## BusinessService添加示例
``` java
 private final QueryMapper queryMapper;
 @Override
    public List<UserDO> selectUserList(Wrapper wrapper) {
        List<UserPO> userPOList = queryMapper.selectUserList(wrapper);
        return UserConverter.INSTANCE.userPOListToUserDOList(userPOList);
    }
```  

## QueryMapper.java添加示例
``` java
List<UserPO> selectUserList(@Param(Constants.WRAPPER) Wrapper wrapper);
```  

## QueryMapper.xml添加示例
``` xml
<select id="selectUserList" resultType="xingmin.op.devframework.data.po.user.UserPO">
    select * from auth_user m ${ew.customSqlSegment}
</select>
```  

## 实体映射工具
本框架使用MapStruct实体映射工具，详情可参见[MapStruct官网](https://mapstruct.org/)。    
<br>
* 本框架中如何引入？

``` xml
    <dependency>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct</artifactId>
    </dependency>
```  
<br>
* 如何使用？
``` java
@Mapper
public interface UserConverter {
    UserConverter INSTANCE = Mappers.getMapper(UserConverter.class);

    UserDO addUserRequestToUserDO(AddUserRequest addRequest);

    @Mappings({
            @Mapping(source = "userName", target = "loginName")
    })
    UserDO baseUserInfoToUser(BaseUserInfoDTO base);
}
``` 


