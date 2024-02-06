import React, { useEffect, useState } from "react";

// 
//   const [userData, setUserData] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("Checking for token...");

//     const storedToken = window.localStorage.getItem("token");
//     console.log("Stored Token:", storedToken);

//     if (!storedToken) {
//       alert("Token not found. Please log in.");
//       window.location.href = "./sign-in";
//       return;
//     }

//     fetch("http://localhost:5000/userData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         token: storedToken,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userData");

//         setUserData(data.data);
//         setLoading(false);

//         if (data.data === "token expired") {
//           alert("Token expired. Please log in again.");
//           window.localStorage.clear();
//           window.location.href = "./sign-in";
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//         setLoading(false);
//         // Handle error as needed
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!userData) {
//     return <p>No user data found.</p>;
//   }
const UserDetails = () => {
  return (
    <div>
      <p>Name: aesfdgfhytjuy</p>
      <p>Email: sdfvgbnhjki</p>
    </div>
  );
};

export default UserDetails;
