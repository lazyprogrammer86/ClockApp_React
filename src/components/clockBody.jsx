import React, { useState } from 'react';

function Clock() {
    const now = new Date();
    const [time, setTime] = useState({
        month: now.getMonth(),
        day: now.getDate(),
        year: now.getFullYear(),
        day: now.toLocaleDateString('locale', { weekday: 'long' }),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    });
    let updateTime = () => {
        let updatedTime = new Date();
        return setTime({
            month: now.getMonth(),
            day: now.getDate(),
            year: now.getFullYear(),
            day: now.toLocaleDateString('locale', { weekday: 'long' }),
            hours: updatedTime.getHours(),
            minutes: updatedTime.getMinutes(),
            seconds: updatedTime.getSeconds()
        })
    }
    setTimeout(updateTime, 1000)
    return (
        <div className="clockBody">
            <h3>{time.month} : {time.day} : {time.year}</h3>
            <h2>{time.day}</h2>
            <h1>{time.hours} : {time.minutes} : {time.seconds}</h1>
            <button>LAP</button>
        </div>
    )
}
export default Clock;