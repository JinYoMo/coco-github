
const GITHUB_OAUTH_URL="https://github.com/login/oauth/authorize"
const SCOPE='user'  //权限
const client_id='712e1044d8e0fa3b5bbf'

module.exports={
  github:{
    request_token_url:'https://github.com/login/oauth/access_token',
    client_id,
    client_secret:'456d1dfc7fefa1456b346af0644e894207b1afcc'
  },
  GITHUB_OAUTH_URL,
  OAUTH_URL:`${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`
}