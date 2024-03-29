import homeIcon from "../../assets/icons/home.svg";
import recieptIcon from "../../assets/icons/receipt_long.svg";
import walletIcon from "../../assets/icons/account_balance_wallet.svg";
import toggleIcon from "../../assets/icons/toggle_off.svg";
import extensionIcon from "../../assets/icons/extension.svg";
import sidebarIcon from "../../assets/icons/Sidebar.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter();

  const activeRoute = router.pathname;
  const isRouteActive = (route: string) => activeRoute == route;

  const links = [
    {
      name: "Home",
      path: "/dashboard",
      icon: homeIcon,
    },
    {
      name: "Transactions",
      path: "/dashboard/transactions",
      icon: recieptIcon,
    },
    {
      name: "Plugins",
      path: "/dashboard/plugins",
      icon: extensionIcon,
    },
    {
      name: "Wallet",
      path: "/dashboard/wallet",
      icon: walletIcon,
    },
    {
      name: "Access control",
      path: "/dashboard/access-control",
      icon: toggleIcon,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="wrapper">
        <button className="sidebar-btn">
          <Image
            src={sidebarIcon}
            width={24}
            height={24}
            alt="icon"
            className="icon justify-items-end"
          />
        </button>
        <ul className="links">
          {links.map(({ path, icon, name }) => (
            <li key={path} className="link-item">
              <Link href={path} className={isRouteActive(path) ? "active" : ""}>
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  className="icon"
                  alt="icon"
                />
                <span className="text">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
