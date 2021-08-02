import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";

function Stories() {
   const [users, setUsers] = useState([]);

   const getUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      const result = data.results.map((user) => ({
         id: user.login.uuid,
         firstname: user.name.first,
         lastname: user.name.last,
         src: user.picture.large,
         profile: user.picture.thumbnail,
      }));
      setUsers(result);
   };

   useEffect(() => {
      getUsers();
   }, []);

   return <div>{users && <StoryCard users={users} />}</div>;
}

export default Stories;
