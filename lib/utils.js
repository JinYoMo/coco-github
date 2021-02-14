import moment from 'moment'
export function getLastUpdated (time) {
  return moment(time).fromNow() //转变为 '一分钟之前'
}