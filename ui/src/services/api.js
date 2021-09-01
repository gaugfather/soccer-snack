export async function getTeamData(teamId) {
    const response = await fetch(`/api/team/${teamId}`)
    if(!response.ok) {
        return {}
    } else {
        return await response.json()
    }
}