import Link from "next/link";

const DashboardFooter = () => {
  return (
    <footer className=" dashboard-footer">
      <div className="wrapper ">
        <div className="text">© 2023 Snow</div>
        <ul className="links">
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Support</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default DashboardFooter;
