import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  
  const [playerDetail, setPlayerDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://strapidevelopment.onrender.com/api/sports/${id}`;

    axios(url)
      .then((res) => setPlayerDetail(res.data))
      .catch((error) => console.error('error :', error));
  }, [id]);

  return (
    <div >
      <table className='detail'>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{playerDetail?.data?.attributes?.name}</td>
          </tr>
          <tr>
            <th>Birth Day</th>
            <td>{playerDetail?.data?.attributes?.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>{playerDetail?.data?.attributes?.nationality}</td>
          </tr>
          <tr>
            <th>Position</th>
            <td>{playerDetail?.data?.attributes?.position}</td>
          </tr>
          <tr>
            <th>Foot</th>
            <td>{playerDetail?.data?.attributes?.preferredFoot}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{playerDetail?.data?.attributes?.height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{playerDetail?.data?.attributes?.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}