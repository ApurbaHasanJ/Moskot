import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Agile = ({ closeModal }) => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showActiveMembers, setShowActiveMembers] = useState(false);
  const [showPendingMembers, setShowPendingMembers] = useState(false);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const activeMembers = users.filter((user) => user.status === "active");
  const pendingMembers = users.filter((user) => user.status === "pending");

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
      <div className="my-container pt-8 min-h-[calc-(100vh-100px)] bg-[#FFF9F9]">
        <header className="">
          <div className="md:flex grid md:justify-between gap-2 justify-start items-start">
            <h2 className="md:text-[32px] text-xl capitalize font-bold">
              team (Agile3)
            </h2>
            <div className="flex mr-auto md:mr-0  items-center gap-3">
              <button className="blue-btn-sec">Assign a group</button>
              <button className="blue-btn">Add members</button>
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
      {isModalOpen && (
        <>
          <input type="checkbox" id="my_modal_9" className="modal-toggle" />
          <div className="modal bg-white">
            <div className="modal-box  border p-8 border-[#A5ECD7] shadow shadow-[#A5ECD7]">
              <h3 className="text-2xl mb-5 ">
                You have received a team invitation from{" "}
                <span className="font-bold">Agile3 Team</span>
              </h3>
              <h4 className="text-[#6C7172]  text-xl">
                Join the Agile3 team as a new team member
              </h4>

              <div className="flex gap-6 mt-8 items-center ">
                <div className="w-[58px] h-[58px] border-2 p-[1px] bg-[#DEDEDE] flex justify-center items-center rounded-full">
                  <p className=" flex justify-center items-center text-[#000000] rounded-full">
                    L
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Agile3 Team (CEO)</h4>
                  <p className="text-[#6C7172] text-xl mt-1">
                    info@agile3team.com
                  </p>
                </div>
              </div>

              <div className="flex md:justify-between gap-3 mt-9">
                <label className="modal-backdrop z-10" htmlFor="my_modal_9">
                  <div
                    onClick={closeModal}
                    className="hover:shadow-2xl border border-[#000000] flex justify-center items-center rounded-full text-[#000000] md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                    Reject
                  </div>
                </label>

                <label
                  className="bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}>
                  Accept
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Agile;
