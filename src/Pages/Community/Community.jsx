import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Community = () => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamTitle, setTeamTitle] = useState("");
  const [nameError, setNameError] = useState("");
  const [titleError, setTitleError] = useState("");

  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        console.log(data);
      });
  }, []);

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
    setNameError("");
  };

  const handleTeamTitleChange = (e) => {
    setTeamTitle(e.target.value);
    setTitleError("");
  };

  const handleOpenModal1 = () => {
    if (teamName) {
      console.log("Modal 1 opened");
    } else {
      setNameError("Please enter a team name");
    }
  };

  const handleOpenModal2 = () => {
    if (teamTitle) {
      console.log("Modal 2 opened");
    } else {
      setTitleError("Please enter a team title");
    }
  };

  const handleCreateTeam = () => {
    if (!teamName) {
      setNameError("Please enter a team name");
      return;
    }
    if (!teamTitle) {
      setTitleError("Please enter a team title");
      return;
    }
    // Proceed with creating the team
    // Add your logic here to create the team with the entered name and title
    console.log("Team created:", teamName, teamTitle);
  };

  return (
    <>
      <Helmet>
        <title>Community | Moskot</title>
      </Helmet>
      <div className="my-container mt-8">
        <header className="flex justify-between items-start">
          <div>
            <h2 className="md:text-[32px] text-xl capitalize font-bold">
              team creation management system
            </h2>
            <p className="text-gray-400 md:text-base text-xs font-semibold mt-3">
              Existing Team
            </p>
          </div>
          <label
            htmlFor="my_modal_7"
            className="flex flex-nowrap ml-auto items-center justify-center lg:text-base  text-xs  md:px-4 px-3  py-3 tracking-wide  lg:py-2 mb-3 font-medium transition  rounded-md drop-shadow-2xl border border-[#5242F0]  text-[#5242F0]  hover:text-white hover:bg-[#5242F0] duration-700 gap-1">
            <span>+</span>
            <p>Create a team</p>
          </label>
        </header>
        {/* modal 1 */}
        <>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box border p-8 border-[#A5ECD7] shadow shadow-[#A5ECD7]">
              <h3 className="text-2xl mb-5 font-bold">Create a new team</h3>
              <h4 className="text-[#AEB7B4] font-bold text-xl">Team name</h4>
              <div className="form-control mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Type your team name"
                  className="input rounded-md border-[1.5px] text-[#0A6AF6] border-[#0A6AF6]"
                  value={teamName}
                  onChange={handleTeamNameChange}
                />
                {nameError && <p className="text-red-500 mt-1">{nameError}</p>}
              </div>
              <div className="flex md:justify-between gap-3 mt-8">
                <label className="modal-backdrop z-10" htmlFor="my_modal_7">
                  <div className="hover:shadow-2xl border border-[#000000] flex justify-center items-center rounded-full text-[#000000] md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                    Cancel
                  </div>
                </label>
                {teamName ? (
                  <label htmlFor="my_modal_8">
                    <div
                      className={
                        "bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]"
                      }
                      onClick={handleOpenModal2}>
                      Continue
                    </div>
                  </label>
                ) : (
                  <label onClick={handleOpenModal1}>
                    <div
                      className={`${
                        teamName
                          ? "bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg"
                          : "bg-gray-400 cursor-not-allowed"
                      } flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]`}>
                      Continue
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>
        </>

        {/* modal 2 */}
        <>
          <input type="checkbox" id="my_modal_8" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box border p-8 border-[#A5ECD7] shadow shadow-[#A5ECD7]">
              <h3 className="text-2xl mb-5 font-bold">Team category</h3>
              <h4 className="text-[#AEB7B4] font-bold text-xl">Team title</h4>
              <div className="form-control mt-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Type your team title"
                  className="input rounded-md border-[1.5px] text-[#0A6AF6] border-[#0A6AF6]"
                  value={teamTitle}
                  onChange={handleTeamTitleChange}
                />
                {titleError && (
                  <p className="text-red-500 mt-1">{titleError}</p>
                )}
              </div>
              <div className="flex md:justify-between gap-3 mt-8">
                <label className="modal-backdrop z-10" htmlFor="my_modal_8">
                  <div className="hover:shadow-2xl border border-[#000000] flex justify-center items-center rounded-full text-[#000000] md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]">
                    Cancel
                  </div>
                </label>
                {teamTitle ? (
                  <Link to={`/team/${teamName}`}>
                    <div
                      className={
                        "bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]"
                      }
                      onClick={handleCreateTeam}>
                      Create Team
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`${
                      teamTitle
                        ? "bg-[#0A6AF6] hover:bg-[#0358d6] hover:shadow-lg"
                        : "bg-gray-400 cursor-not-allowed"
                    } flex justify-center items-center rounded-full text-white md:w-[215px] w-28 text-base md:text-xl font-medium md:font-bold h-10 md:h-[55px]`}>
                    Create Team
                  </div>
                )}
              </div>
            </div>
          </div>
        </>

        {/* body */}
        <div className="grid md:grid-cols-3 mt-20 gap-10">
          {teams.map((team, index) => (
            <div key={index}>
              <div className="flex flex-col h-full justify-start p-10 border rounded-md border-[#4C54F8]">
                <img className="w-[83px]" src={team?.logo} alt="" />
                <div className=" mt-[6px]">
                  <h2 className="mt-[6px] font-extrabold text-[32px]">
                    {team?.name}
                  </h2>
                  <h3 className="mt-[6px] font-medium text-2xl">
                    {team?.title}
                  </h3>
                </div>
                <p className="text-base mt-4">{team?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Community;
