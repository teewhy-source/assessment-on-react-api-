import React, { useState, useEffect } from 'react';

const Table = () => {
  const [data, setData] = useState("table");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  //then i used a useeffect
  useEffect(() => {  //

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
   
      <table style={{backgroundColor:"green", color:"white"}}>
        <thead>
          <tr>
            <th>sn</th>
            {/* <th>fullname
              <th>phone number</th>
              <th>email address</th>
              <th>street</th>
              
            </th> */}
          </tr>
        </thead>
      {data && (
          data.map((item,index) => (
              <tr>
                <td>{index +1}</td>
                <td key={item.id}>{item.username} </td>
                <td key={item.id}>{item.email} </td>
                <td key={item.id}>{item.address[0]} </td>
                <td key={item.id}>{item.phone} </td>
              </tr>
           
            ))
            )}
            </table>
    </div>
  );
};

export default Table;
