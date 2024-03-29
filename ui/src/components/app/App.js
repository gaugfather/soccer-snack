import React from 'react'
import Header from '../header/Header'
import Body from '../body/Body'
import Error from '../error/Error'
import { useEffect } from 'react'
import { getScheduleDataByTeam } from '../../services/api'
import LinearProgress from '@material-ui/core/LinearProgress'


function App() {

  async function loadTeamData() {
    setLoading(true)
    const pathname = window.location.pathname
    const teamId = pathname.substring(1)
    const teamData = await getScheduleDataByTeam(teamId)
    setTeamData(teamData)
    setLoading(false)
  }

  useEffect(() => {
    loadTeamData()
    return () => {}   
  }, [])

  const [teamData, setTeamData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  return (
    <div id="app">
      {loading ? (<LinearProgress />): <Header teamData={teamData} />}
      {!loading && teamData && teamData.length ? <Body teamData={teamData} /> : null}
      {!loading && (!teamData || !teamData.length) ? <Error /> : null}
    </div>
  );
}

export default App
