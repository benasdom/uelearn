import React, { useEffect, useState } from 'react'
import { domain, fetchWithAuth } from './authfetch'
import coins from '/imgs/coin.png'
import { getFromLocalStorage, setToLocalStorage } from './fromlocal'
import VerifyOTP from './reverfifyotp'

const Dashboard = () => {
  const [userscore, setuserscore] = useState(null)
  const [maxscore, setmaxscore] = useState(0)
  const [earning, setearning] = useState(null)
  const [storedval, setstoredval] = useState(null)
  const [showprofile, setshowprofile] = useState(false)
  const [showVerify, setShowVerify] = useState(false)

  const streakUrl = domain + '/api/v1/user/streak'
  const walletUrl = domain + '/api/v1/user/wallet'

  useEffect(() => {
    const storeddata = getFromLocalStorage("userInfo", {})
    setstoredval(storeddata)

    // Show cached values immediately while fetching
    setuserscore(storeddata?.streakScore ?? 0)
    setmaxscore(storeddata?.highestStreakScore ?? 0)

    const accessToken = storeddata?.accessToken
    const refreshToken = storeddata?.refreshToken

    if (!accessToken || !refreshToken) return

    // POST to record today's visit.
    // Backend is idempotent — safe to call on every app load.
    // No body needed; backend derives everything from the user's lastActiveDate.
    fetchWithAuth(
      streakUrl,
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
        const score = data?.streakScore ?? 0
        const highest = data?.highestStreakScore ?? 0

        setuserscore(score)
        setmaxscore(highest)

        // Sync localStorage with authoritative server values
        const updated = {
          ...storeddata,
          streakScore: score,
          highestStreakScore: highest,
          lastActiveDate: data?.lastActiveDate ?? storeddata.lastActiveDate,
        }
        setToLocalStorage("userInfo", updated)
        setstoredval(updated)
      })
      .catch((err) => {
        // Network failure — cached values already shown above, just log the error
        console.error("Streak update failed:", err)
      })

    // Fetch wallet balance independently
    fetchWithAuth(walletUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((data) => setearning(data?.balance ?? null))
      .catch((err) => {
        console.error("Error fetching wallet:", err)
        setearning(null)
      })
  }, []) // Runs once on mount

  return (
    showprofile
      ? <div className="userlevel flex-col">
          <div className="rbackdrop2" style={{ opacity: .2 }}></div>
          <div className="profilehead">
            <span className="profilebtn" onClick={() => setshowprofile(false)}>
              <div className="fnav"><i className="fa fa-user"></i></div>
              <div className="profiletxt">View profile details</div>
            </span>
          </div>
          <div className="levelitem">
            <div className="litem">
              <div className="hint-top">level</div>
              <div className="hint-top">badge</div>
            </div>
            <div className="litem">
              <div className="hintitems"><div className="mtext">Rookie level</div></div>
              <div className="hintitems"><div className="pic">🥈</div></div>
            </div>
          </div>
          <div className="scrollx">
            <div className="levelitem2 dboard">
              <div className="streak">⚡STREAK⚡</div>
              <div className="streaka">
                <div className="hint">streak score</div>
                <div className="hint">Highest streak</div>
              </div>
              <div className="streaks">
                <div className="hint streaknumbs">{userscore != null ? userscore : 0}</div>
                <div className="hint streaknumbs">{maxscore != null ? maxscore : 0}</div>
              </div>
              <div className="streak">{"⭐".repeat(10)}</div>
            </div>
            <div className="earndiv">
              <div className="earntext"><div className="fnav">💰</div>Earned</div>
              <img src={coins} className="backdrop" />
              <div className="earnval">GHS: {earning == null ? "_____" : earning}</div>
            </div>
          </div>
        </div>

      : <div className="userlevel flex-col">
          {showVerify && (
            <VerifyOTP
              onSuccess={() => {
                setShowVerify(false)
                const updated = {
                  ...getFromLocalStorage("userInfo", {}),
                  isVerified: true,
                }
                setToLocalStorage("userInfo", updated)
                setstoredval(updated)
              }}
              onClose={() => setShowVerify(false)}
            />
          )}
          <div className="profilehead">
            <span className="profilebtn" onClick={() => setshowprofile(true)}>
              <div className="fnav"><i className="fa fa-user"></i></div>
              <div className="profiletxt">User Wallet and streak</div>
            </span>
          </div>
          <div className="rbackdrop2" style={{ opacity: .3 }}></div>
          <div className="profilebox">

            <div className="profileleft">
              <fieldset>
                <legend>
                  <div className="ptitleinfo">
                    <div className="iconb"><i className="fa fa-plus"></i></div>Extras
                  </div>
                </legend>
                <div className="pinfoboxitemfirst">
                  <div className="pitop">
                    <div className="labelicon">
                      <div className="iconb"><i className="fa fa-check"></i></div>
                    </div>
                    <div className="labelbox">
                      <div className="fstlabel">User Status:</div>
                      <div className="fstname">
                        {storedval?.isVerified
                          ? <div className="otpsuccess">OTP Verified</div>
                          : <div className="otpfailed">Not Verified</div>}
                        {!storedval?.isVerified
                          ? <div className="verify" onClick={() => setShowVerify(true)}>verify</div>
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pinfoboxitemfirst">
                  <div className="pitop">
                    <div className="labelicon">
                      <div className="iconb"><i className="fa fa-calendar-check"></i></div>
                    </div>
                    <div className="labelbox">
                      <div className="fstlabel">Last Active:</div>
                      <div className="fstname">
                        {storedval?.lastActiveDate
                          ? new Date(storedval.lastActiveDate).toLocaleDateString()
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pinfoboxitemfirst">
                  <div className="pitop">
                    <div className="labelicon">
                      <div className="iconb"><i className="fa fa-calendar"></i></div>
                    </div>
                    <div className="labelbox">
                      <div className="fstlabel">Date Created:</div>
                      <div className="fstname">
                        {storedval?.dateCreated
                          ? new Date(storedval.dateCreated).toLocaleDateString()
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="profileright">
              <div className="pinfohead">
                <div className="pinfotop">
                  <div className="iconb"><i className="fa fa-user"></i></div>
                  <div className="ptitleinfo">Profile details</div>
                </div>
              </div>
              <div className="pinfobox1">
                <div className="pinfoboxitem">
                  <div className="pinfoboxitemfirst">
                    <div className="pitop">
                      <div className="labelicon">
                        <div className="fnav"><i className="fa fa-person"></i></div>
                      </div>
                      <div className="labelbox">
                        <div className="fstlabel">First Name</div>
                        <div className="fstname">{storedval?.firstName ?? ""}</div>
                      </div>
                    </div>
                  </div>
                  <div className="pinfoboxitemfirst">
                    <div className="pitop">
                      <div className="labelicon">
                        <div className="fnav"><i className="fa fa-person"></i></div>
                      </div>
                      <div className="labelbox">
                        <div className="fstlabel">Last Name</div>
                        <div className="fstname">{storedval?.lastName ?? ""}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pinfoboxitem">
                  <div className="pinfoboxitemsecond">
                    <div className="fnav"><i className="fa fa-envelope"></i></div>
                    <div className="labelbox">
                      <div className="fstlabel">Email:</div>
                      <div className="fstname">{storedval?.email ?? ""}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pinfohead">
                <div className="pinfotop">
                  <div className="fnav"><i className="fa fa-zap"></i></div>
                  <div className="ptitleinfo">User Credits</div>
                </div>
              </div>
              <div className="pinfobox1">
                <div className="pinfoboxitem">
                  <div className="pinfoboxitemsecond">
                    <div className="pitop">
                      <div className="labelicon">
                        <div className="fnav"><i className="fa fa-zap"></i></div>
                      </div>
                      <div className="labelbox">
                        <div className="fstlabel">Remaining Credits:</div>
                        <div className="fstname">{storedval?.credits ?? 0}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pinfohead">
                <div className="pinfotop">
                  <div className="fnav"><i className="fa fa-phone"></i></div>
                  <div className="ptitleinfo">Phone</div>
                </div>
              </div>
              <div className="pinfobox1">
                <div className="pinfoboxitem">
                  <div className="pinfoboxitemsecond">
                    <div className="pitop">
                      <div className="labelicon">
                        <div className="fnav"><i className="fa fa-phone"></i></div>
                      </div>
                      <div className="labelbox">
                        <div className="fstlabel">Contact Number:</div>
                        <div className="fstname">{storedval?.msisdn ?? ""}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
  )
}

export default Dashboard