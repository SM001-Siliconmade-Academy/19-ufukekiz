import { NextPage } from "next";
import React from "react";
import { api } from "~/utils/api";

const Users: NextPage = () => {
  const users = api.users.getAll.useQuery();

  return (
    <div>
      {users.data?.map((user) => (
        <div key={user.id}>{user.name} - {user.email} </div>
      ))}
    </div>
  );
};

export default Users;
