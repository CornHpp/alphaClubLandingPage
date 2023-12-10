// 计算时间差值
export function getTimeRemaining(targetDate: string) {
  const now = new Date()
  let toLocalDate = new Date(targetDate)

  const target = new Date(toLocalDate)

  // 计算时间差值（以毫秒为单位）
  const timeDifference = Math.max(0, Number(target) - Number(now))

  // 计算小时、分钟
  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0")
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0")
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0")

  return {
    hours,
    minutes,
    seconds,
  }
}
