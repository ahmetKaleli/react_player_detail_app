import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const [players, setPlayers] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const url = "https://strapidevelopment.onrender.com/api/sports"

    axios(url)
    .then((res)=> setPlayers(res.data))
    .catch(error => console.error('error :', error));
  },[])

  return (
    <div className='home'>
      {
        players?.data?.map((player)=>(
          <table key={player.id}>
            <tbody>
              <tr>
                <td onClick={()=>navigate(`/detail/${player.id}`)}> 
                  {player?.attributes?.name}
                </td>
              </tr>
            </tbody>
          </table>
        ))
      }
    </div>
  )
}
