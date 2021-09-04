export async function getScheduleDataByTeam(teamIndentifier) {
    const response = await fetch(`/api/schedule/${teamIndentifier}`)
    if(!response.ok) {
        return {}
    } else {
        return await response.json()
    }
}

export async function saveScheduleData(scheduleId, data) {
    await fetch(`/api/schedule/${scheduleId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}