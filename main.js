const countDownValues = document.querySelectorAll('.item-value')

const disCountDate = new Date(2022, 8, 24, 24)


const oneDay = 24*60*60*1000
const oneHour = 60*60*1000
const oneMin = 60*1000
const oneSecond = 1000

setInterval(() => {
    let today = new Date()
    let timeRemain = disCountDate.getTime() - today.getTime()
    let dayLeft = Math.floor(timeRemain/oneDay)
    let hourLeft = Math.floor((timeRemain-dayLeft*oneDay)/oneHour)
    let minLeft = Math.floor((timeRemain-dayLeft*oneDay-hourLeft*oneHour)/oneMin)
    let secondeLeft = Math.floor((timeRemain-dayLeft*oneDay-hourLeft*oneHour-minLeft*oneMin)/oneSecond)
    let timeLeft = [dayLeft, hourLeft, minLeft, secondeLeft]
    
    countDownValues.forEach((item, i) => {
        item.innerText = formatTime(timeLeft[i])
    })
    
},1000)

function formatTime(time) {
    if (time < 10) {
        time = '0'+ time
    }
    return time
} 