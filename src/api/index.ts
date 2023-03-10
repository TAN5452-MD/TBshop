import hyRequest from "@/service";
import hyRequest2 from "@/service/service2";

type Result = {
    data:any,
    message:string,
    code:number
}

export const userLoginForname = (data:any) => hyRequest.post<Result>({
    url:'/audit/member/user/userLogin',
    data
})

export const userRegister = (data:any) => hyRequest.post<Result>({
    url:'/audit/member/user/createUser',
    data
})

export const selectOrderItem = (data:any) => hyRequest.post<Result>({
    url:'/audit/project/order/selectOrderItem',
    data
})

//查询商品
export const selectGoodsInfoByUser = (data:any) => hyRequest.post<Result>({
    url:'/audit/project/goodsInfo/selectGoodsInfoByUser',
    data
})

//查询商品详情
export const selectSingleGoods = (data:any) => hyRequest.post<Result>({
    url:`/audit/project/goodsInfo/selectSingleGoods`,
    data
})
//购买商品
export const buyGoods = (data:any) => hyRequest.post<Result>({
    url:`/audit/project/goodsInfo/buyGoods`,
    data
})
//支付
export const pay = (data:any) => hyRequest2.get<Result>({
    url:`/audit/project/alipay/pay?subject=${data.spuName}&traceNo=${data.orderSn}&totalAmount=${data.totalAmount}`,
    data
})




//购物车
//查询购物车
export const selectShoppingCart = () => hyRequest.get<Result>({
    url:`audit/project/shoppingCart/selectShoppingCart`,
})

//加入购物车
export const addShoppingCart = (data:any) => hyRequest.post<Result>({
    url:`/audit/project/shoppingCart/addShoppingCart`,
    data
})

//删除购物车
export const deleteShoppingCart = (id:string) => hyRequest.delete<Result>({
    url:`/audit/project/shoppingCart/deleteShoppingCart/${id}`,
})



//个人模块
//编辑个人信息
export const updateUser = (data:any) => hyRequest.put<Result>({
    url:`/audit/member/user/updateUser`,
    data
})
//查询个人信息
export const selectUserDetail = (id:string) => hyRequest.get<Result>({
    url:`/audit/member/user/selectUserDetail?userId=${id}`,
})

//申请经销商身份
export const applyDealer = (data:any) => hyRequest.put<Result>({
    url:`/audit/member/user/applyDealer`,
    data
})

//退出登录
export const userLogout = () => hyRequest.post<Result>({
    url:`/audit/member/user/userLogout`,
})


//政策查询
export const selectPolicy = (data:any) => hyRequest.post<Result>({
    url:`/audit/project/policy/selectPolicy`,
    data
})