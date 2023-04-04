
import AccessContol from "@/components/AceessControl/AccessControl";
import { ReactElement } from "react";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

export default function AccessControlPage() {
  return (
    <div>
      <AccessContol />
    </div>
  );
}


