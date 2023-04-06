import Image from "next/image";
import logoIMG from "assets/img/paymaster-logo.svg";
import Link from "next/link";

const SiteLogo = () => {
  return (
    <Link href={"/"}>
      <div className="site-logo">
        <Image src={logoIMG} width={28} height={28} alt="Paymaster Logo" />
        <span className="logo-text dark:text-white">Paymasters</span>
      </div>
    </Link>
  );
};

export default SiteLogo;
