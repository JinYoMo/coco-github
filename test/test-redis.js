async function test(){
  const Redis = require('ioredis');

  //连接redis
  const redis = new Redis({
    port:6378,
    password:123456
  })
  
  //获取redis数据
  await redis.set('c',123)
  await redis.setex('d',10,456)
  await redis.del('b')
  const keys = await redis.keys('*');
  console.log(keys)
  console.log(await redis.get('d'))
}
test()