export default {
    get(url){
        return new Promise((resolve) => {
            wx.request({
                url,
                success : (res) => {
                    console.log(res.data)
                    resolve(res.data)
                }
            })
        })
    }
}