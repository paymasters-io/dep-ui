
import Plugins from "@/components/Plugins/Plugins";
import { ReactElement } from "react";

export const getStaticProps = () => {
  return {
    props: {
      isDark: true,
    },
  };
};

export default function PluginsPage() {
  return (
    <div>
      <Plugins />
    </div>
  );
}


