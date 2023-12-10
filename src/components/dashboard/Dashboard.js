import React, {useState, useEffect} from 'react'

function Dashboard() {
const [user, setUser] = useState("");

    useEffect((e) => {
        const user = localStorage.getItem("user");
        setUser(user);
    }, []);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard