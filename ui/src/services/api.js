export async function getScheduleDataByTeam(teamId) {
    const response = await fetch(`/api/schedule/${teamId}`)
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