
export function getData() {
    // 获取字符串
    let result = fetch('/api/1',{
        credentials:'_include_',
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    })

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })
}
//post请求
export function postData(){
    let result = fetch('/api/post',{
        method:'POST',
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:"a=100&b=200"
    });

    result.then(res => {
        return res.json()
    }).then(json=>{
        console.log(json)
    })
}