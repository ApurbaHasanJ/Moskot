import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Team = () => {
    const [users, setUsers]= useState([])
    useEffect(() => {
        fetch("/public/users.json")
          .then((res) => res.json())
          .then((data) => {
            setUsers(data);
            console.log(data);
          });
      }, []);
      console.log(users);

      const activeUsers = users.filter(user => user.status === "active");
      const pendingUsers = users.filter(user => user.status === "pending");
      console.log(pendingUsers);


  const teamName = useParams();
  console.log(teamName?.id);
  return (
    <div className="my-container mt-8">
      <header className="md:flex grid md:justify-between gap-2 justify-start items-start">
        <div>
          <h2 className="md:text-[32px] text-xl capitalize font-bold">
            team ({teamName?.id})
          </h2>

          <div className="flex items-center mt-5 gap-3">
            <button className="blue-btn-dis">Active Members (0{activeUsers.length})</button>
            <button className="blue-btn-dis">Pending (0{pendingUsers.length})</button>
          </div>
        </div>
        <div className="flex mr-auto md:mr-0  items-center gap-3">
          <button className="blue-btn-sec">Assign a group</button>
          <label htmlFor="my_modal_9" className="blue-btn">
            Add members
          </label>
        </div>
      </header>

      <div className="mt-10">
        <img src="https://i.postimg.cc/RZYGRd7c/image-1.png" alt="" />
      </div>

      <>
        <input type="checkbox" id="my_modal_9" className="modal-toggle" />

        <div className="modal bg-white">
          <div className="modal-box  border p-8 border-[#A5ECD7] shadow shadow-[#A5ECD7]">
            <h3 className="text-2xl mb-5 font-bold">Assign new member</h3>
            <h4 className="text-[#AEB7B4] font-bold text-xl">
              Group member can
            </h4>

            <ol className="list-decimal mt-2 ml-4">
              <li>Identify skills needed</li>
              <li>Define clear roles</li>
              <li>Assign a leader</li>
              <li>Seat clear goals</li>
            </ol>

            <div className="flex md:justify-between gap-3 mt-9">
              <label className="modal-backdrop z-10" htmlFor="my_modal_9">
                <div className="hover:shadow-2xl border border-[#000000] flex justify-center items-center rounded-full text-[#000000] md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                  Cancel
                </div>
              </label>
              <div className="continue-button">
                <div className="bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                  Continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Team;
