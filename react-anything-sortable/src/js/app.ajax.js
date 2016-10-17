;app.ajax=function( url , settings ,method ){
    //var ajax=( url , settings )=>{
        let token=hb.Cookies.getJSON('hb_shop_token');
        if(token){
            return $.ajax({
                url:url,
                data:settings,
                headers:{Authorization:`Bearer ${token}`},
                method:method,
            }).then((res)=>{
                if(res.iRet==-1){
                    window.location.href=res.data+encodeURIComponent(window.location.href)
                    return res
                }else{
                    return res
                }
            },(res)=>{
                return res
            });
        }else{
            var deferred = $.Deferred();
            window.location.href='/login';
            return deferred.promise();
        }
    //}
    //return ajax;
};


