"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const UserListForm = () => {
  const [userList, setUserList] = useState<any>([]);
  const callAPI = async () => {
    try {
      const res = await fetch(`https://reqres.in/api/users`);
      const data = await res.json();
      let allUserList = [];
      if (data.total_pages >= 1) {
        for (let i = 1; i <= data.total_pages; i++) {
          const res = await fetch(`https://reqres.in/api/users?page=${i}`);
          const data = await res.json();
          allUserList.push(...data?.data);
        }
      }
      const filterUserList = allUserList.filter(
        (x: any) =>
          x.first_name?.charAt(0) === "G" || x.last_name?.charAt(0) === "W"
      );
      const addedFieldUserList = filterUserList.map((user: any) => {
        return {
          ...user,
          isShowEmail: false,
        };
      });
      setUserList([...addedFieldUserList]);
    } catch (err) {}
  };
  function onClickShowEmail(user: any, index: number) {
    let tempUserList = [...userList];
    tempUserList[index].isShowEmail = !user.isShowEmail;
    setUserList([...tempUserList]);
  }
  function maskEmailFn(email: string): string {
    let maskid = "";
    const prefix = email.substring(0, email.lastIndexOf("@"));
    const postfix = email.substring(email.lastIndexOf("@"));

    for (let i = 0; i < prefix.length; i++) {
      if (i == 0 || i == prefix.length - 1) {
        maskid = maskid + prefix[i].toString();
      } else {
        maskid = maskid + "*";
      }
    }
    maskid = maskid + postfix;
    return maskid;
  }
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h2>User List Table</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 ? (
            userList.map((user: any, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={user.avatar} />
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    {user.isShowEmail ? user.email : maskEmailFn(user.email)}
                  </td>
                  <td>
                    <Button
                      className="button-action button-normal"
                      onClick={() => onClickShowEmail(user, index)}
                      label={user.isShowEmail ? `Hide Email` : `Show Email`}
                      datatestid={`showEmailButton_${index}`}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <>
              <tr>
                <td colSpan={5}>No record found.</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserListForm;
