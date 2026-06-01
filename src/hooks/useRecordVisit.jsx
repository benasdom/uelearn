// hooks/useRecordVisit.js
import { useEffect } from 'react'
import { fetchWithAuth,domain } from '../menu/authfetch'
import { getFromLocalStorage,setToLocalStorage } from '../menu/fromlocal'

const useRecordVisit = () => {
  useEffect(() => {
    const storeddata = getFromLocalStorage("userInfo", {})
    const accessToken = storeddata?.accessToken
    const refreshToken = storeddata?.refreshToken

    if (!accessToken || !refreshToken) return

    fetchWithAuth(
      domain + '/api/v1/user/streak',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
      refreshToken
    )
      .then((data) => {
        // Sync fresh streak values into localStorage so Dashboard reads them correctly
        const updated = {
          ...storeddata,
          streakScore: data?.streakScore ?? storeddata.streakScore,
          highestStreakScore: data?.highestStreakScore ?? storeddata.highestStreakScore,
          lastActiveDate: data?.lastActiveDate ?? storeddata.lastActiveDate,
        }
        setToLocalStorage("userInfo", updated)
      })
      .catch((err) => console.error("Visit record failed:", err))
  }, []) // fires once on app mount
}

export default useRecordVisit