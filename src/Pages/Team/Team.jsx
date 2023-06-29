import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Helmet } from "react-helmet";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showActiveMembers, setShowActiveMembers] = useState(false);
  const [showPendingMembers, setShowPendingMembers] = useState(false);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const activeMembers = selectedMembers.filter(
    (user) => user.status === "active"
  );
  const pendingMembers = selectedMembers.filter(
    (user) => user.status === "pending"
  );
  const teamName = useParams();

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.checked = true;
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.checked = false;
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const user = users.find((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedUser(user);
    setIsInputEmpty(value.trim() === "");
  };

  const handleActiveClick = () => {
    setShowActiveMembers(true);
    setShowPendingMembers(false);
  };

  const handlePendingClick = () => {
    setShowActiveMembers(false);
    setShowPendingMembers(true);
  };

  return (
    <>
      <Helmet>
        <title>Team | Moskot</title>
      </Helmet>
      <div className="my-container pt-8 min-h-[calc-(100vh-100px)] bg-[#FFF9F9]">
        <header className="">
          <div className="md:flex grid md:justify-between gap-2 justify-start items-start">
            <h2 className="md:text-[32px] text-xl capitalize font-bold">
              team ({teamName?.id})
            </h2>
            <div className="flex mr-auto md:mr-0  items-center gap-3">
              <button className="blue-btn-sec">Assign a group</button>
              <button
                className="blue-btn"
                onClick={() => openModal("my_modal_9")}>
                Add members
              </button>
            </div>
          </div>
          <div className="grid items-center justify-start  gap-3">
            <div className="flex items-center gap-3">
              {activeMembers.length > 0 ? (
                <button
                  onClick={handleActiveClick}
                  className="blue-btn-dis border-[#4C54F8]  text-[#4C54F8] hover:bg-[#cacdfc] ">
                  Active Members (0{activeMembers.length})
                </button>
              ) : (
                <button className="blue-btn-dis border-[#a4a7d6]  cursor-not-allowed  text-[#a4a7d6] ">
                  Active Members (00)
                </button>
              )}
              {pendingMembers.length > 0 ? (
                <button
                  onClick={handlePendingClick}
                  className="blue-btn-dis blue-btn-dis border-[#4C54F8]  text-[#4C54F8] hover:bg-[#cacdfc] ">
                  Pending (0{pendingMembers.length})
                </button>
              ) : (
                <button className="blue-btn-dis blue-btn-dis border-[#a4a7d6]  cursor-not-allowed text-[#a4a7d6] ">
                  Pending (0{pendingMembers.length})
                </button>
              )}
            </div>
            <>
              {showActiveMembers ? (
                <div className="mt-4 flex ">
                  {showActiveMembers === true &&
                    activeMembers.map((member) => (
                      <div
                        key={member._id}
                        className="-mr-4 border-2 p-[1px] rounded-full">
                        <img
                          className="w-[58px] rounded-full z-10"
                          src={member?.img}
                          alt=""
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <div className="mt-4 flex ">
                  {showPendingMembers === true &&
                    pendingMembers.map((member) => (
                      <div
                        key={member._id}
                        className="-mr-4 border-2 p-[1px] rounded-full">
                        <img
                          className="w-[58px] rounded-full z-10"
                          src={member?.img}
                          alt=""
                        />
                      </div>
                    ))}
                </div>
              )}
            </>
          </div>
        </header>

        {/* modal 1 */}
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
              <li>Set clear goals</li>
            </ol>

            <div className="flex md:justify-between gap-3 mt-9">
              <label className="modal-backdrop z-10" htmlFor="my_modal_9">
                <div className="hover:shadow-2xl border border-[#000000] flex justify-center items-center rounded-full text-[#000000] md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                  Cancel
                </div>
              </label>

              <label
                className="bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]"
                onClick={() => {
                  closeModal("my_modal_9");
                  openModal("my_modal_10");
                }}>
                Continue
              </label>
            </div>
          </div>
        </div>

        {/* modal 2 */}
        <input type="checkbox" id="my_modal_10" className="modal-toggle" />
        <div className="modal bg-white">
          <div className="modal-box  border p-8 border-[#A5ECD7] shadow shadow-[#A5ECD7]">
            <h3 className="text-2xl mb-5 font-bold">
              Who do you want to add as a new member?
            </h3>
            <h4 className="text-[#AEB7B4]  text-xl">
              Add a new member to join the group
            </h4>
            <div className="form-control mt-2">
              <input
                type="text"
                name="title"
                placeholder="Type a name to assign a group member"
                className="input rounded-md border-[1.5px] text-[#0A6AF6] border-[#0A6AF6]"
                onChange={handleSearch}
              />
            </div>
            {searchedUser && (
              <div className="flex gap-6 mt-8 items-center ">
                <img
                  className="w-[60px] rounded-full"
                  src={searchedUser.img}
                  alt="user"
                />
                <div>
                  <h4 className="text-xl font-medium">{searchedUser.name}</h4>
                  <p className="text-[#6C7172] text-xl mt-1">
                    {searchedUser.email}
                  </p>
                </div>
              </div>
            )}
            <div className="flex md:justify-between gap-3 mt-9">
              <label className="modal-backdrop z-20" htmlFor="my_modal_10">
                <div className="hover:shadow-2xl border border-[#000000] flex justify-center items-center rounded-full text-[#000000] md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                  Cancel
                </div>
              </label>

              <label
                className={`bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px] ${
                  isInputEmpty || !searchedUser
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                onClick={() => {
                  if (!isInputEmpty && searchedUser) {
                    // Only add member if the input field is not empty and a user is found
                    closeModal("my_modal_10");
                    setSelectedMembers([...selectedMembers, searchedUser]);
                  }
                }}>
                Add member
              </label>
            </div>
          </div>
        </div>

        {showActiveMembers === true || showPendingMembers === true ? (
          <div className="overflow-x-auto mt-10 p-10 bg-white border  border-[#4C54F8] rounded-lg">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="text-2xl text-[#202020]">
                  <th className="w-[60px]"></th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Role</th>
                </tr>
              </thead>
              {showActiveMembers === true ? (
                <tbody className=" ">
                  {activeMembers.map((member) => (
                    <tr key={member._id} className="border rounded-lg hover">
                      <td>
                        <div className=" w-[58px] relative border-2 p-[1px] h-[58px] flex justify-center items-center rounded-full">
                          <div className=" flex justify-center items-center text-[#3267B1] rounded-full">
                            {member.name.split(" ").map((namePart, index) => (
                              <div key={index} className="text-base font-bold">
                                {namePart.charAt(0)}
                              </div>
                            ))}
                          </div>
                          <img
                            className="absolute right-[1px] bottom-[1px]"
                            src="https://i.postimg.cc/8P3gCzBD/Subtract.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold text-2xl">
                            {member.name}
                          </div>
                          <div className="text-base opacity-50">
                            {member.email}
                          </div>
                        </div>
                      </td>
                      <td className="text-base opacity-50 capitalize">
                        {member.title}
                      </td>
                      <td className="text-base opacity-50 capitalize">
                        {member.status}
                      </td>
                      <td className="text-base opacity-50 capitalize">
                        <div className="flex items-center gap-1">
                          <span>{member.role}</span>
                          <BsChevronDown className="ml-auto" />
                          <RxCross1 className="ml-4 mr-2" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody className=" ">
                  {pendingMembers.map((member) => (
                    <tr key={member._id} className="border rounded-lg">
                      <td>
                        <div className=" w-[58px] relative border-2 p-[1px] h-[58px] flex justify-center items-center rounded-full">
                          <div className=" flex justify-center items-center text-[#3267B1] rounded-full">
                            {member.name.split(" ").map((namePart, index) => (
                              <div key={index} className="text-base font-bold">
                                {namePart.charAt(0)}
                              </div>
                            ))}
                          </div>
                          <img
                            className="absolute right-[1px] bottom-[1px]"
                            src="https://i.postimg.cc/8P3gCzBD/Subtract.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="font-bold text-2xl">
                            {member.name}
                          </div>
                          <div className="text-base opacity-50">
                            {member.email}
                          </div>
                        </div>
                      </td>
                      <td className="text-base opacity-50 capitalize">
                        {member.title}
                      </td>
                      <td className="text-base opacity-50 capitalize">
                        {member.status}
                      </td>
                      <td className="text-base opacity-50 capitalize">
                        <div className="flex items-center gap-1">
                          <span>{member.role}</span>
                          <BsChevronDown className="ml-auto" />
                          <RxCross1 className="ml-4 mr-2" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        ) : (
          <div className="mt-10">
            <img src="https://i.postimg.cc/RZYGRd7c/image-1.png" alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default Team;
