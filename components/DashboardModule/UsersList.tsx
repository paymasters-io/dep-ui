import Image from "next/image";
import _3dofImg from "../../assets/icons/3D05.png";
import { useState } from "react";

const UsersList = () => {
  const userslist: string[] = [
    // "1A1zP1eP5QGefi2DMPTfTL5SL...",
    // "1A1zP1eP5QGefrefisd2DMPTfTL5SL...",
    // "1A1zP1eP5QGefire2eDMPTfTL5SL...",
    // "1A1zP1eP5QGefi2excwDMPTfTL5SL...",
    // "1A1zP1eP5QGefi2DewsMPTfTL5SL...",
    // "1A1zP1eP5QGefi2DdMPTfTL5SL...",
    // "1A1zP1eP5QGefi2DMfwePTfTL5SL...",
    // "1A1zP1eP5QGefisdfhrtsf2DMPTfTL5SL...",
    // "1A1zP1eP5QGefisfdg32DMPTfTL5SL...",
    // "1A1zP1eP5QGefi2DMgeg2423PTfTL5SL...",
  ];
  const [noToShow, setNoToShow] = useState(4);
  const handleShowMore = () => {
    if (noToShow < userslist.length) setNoToShow((value) => value + 4);
  };
  return (
    <aside className="sidebar users-section">
      <div className="wrapper !pr-4">
        <header className="users-section-header mb-4">
          <h2 className="text-lg font-semibold">Top Users</h2>
        </header>

        {userslist.length > 0 ? (
          <>
            <ul className="users-list">
              {userslist.splice(0, noToShow).map((user) => (
                <li key={user} className="user flex items-center gap-2">
                  <figure className="img-cont shrink-0">
                    <Image src={_3dofImg} width={24} height={24} alt="img" />
                  </figure>
                  <p className="overflow-clip text-ellipsis text-[#FFFFFF66]">
                    {user}
                  </p>
                </li>
              ))}
            </ul>

            <button
              className="cta w-full !bg-[#7D0CC11A] mt-6"
              onClick={handleShowMore}
            >
              View more
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center h-32">
            <p className="text-[#FFFFFF66]">No users found</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default UsersList;
