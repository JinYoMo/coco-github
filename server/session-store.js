function getRedisSessionId(sid){
  return `ssid:${sid}`
}
class RedisSessionStore{
  constructor(client){
    this.client=client
  }
  //获取redis中存储的session数据
  async get(sid){
    console.log('get session',sid)
    const id=getRedisSessionId(sid); //转换id 避免重复
    const data=await this.client.get(id)  //获取到redis下此key值的value
    if(!data){
      return null
    }
    try{
      const result=JSON.parse(data);
      return result
    }catch(err){
      console.err(err)
    }
  }
  //存储session数据到redis ttl为设置的过期时间
  async set(sid,sess,ttl){
    console.log('set session',sid)
    const id=getRedisSessionId(sid);
    if(typeof ttl==='number'){
      ttl=Math.ceil(ttl/1000)  //存储到redis中的是秒
    } 
    try{
      const sessStr=JSON.stringify(sess)
      if(ttl){
        await this.client.setex(id,ttl,sessStr)  //包含过期时间setex
      }else{
        await this.client.set(id,sessStr)  //不包含过期时间set
      }
    }catch(err){
      console.err(err)
    }
  }
  //从redis当中删除某个session
  async destroy(sid) {
    console.log('destroy session',sid)
    const id=getRedisSessionId(sid);
    await this.client.del(id)
  }
}

module.exports=RedisSessionStore