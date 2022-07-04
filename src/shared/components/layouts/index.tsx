import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { FC } from "react";

import { Header } from "./Header";

const Background = dynamic(() => import("./background"), { ssr: false });

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Background />
      <div
        id="root"
        className="relative z-10"
        // TODO: #3 スクロールバーの色を変える
        // className="relative h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full"
      >
        <Header />
        <motion.div
          key={router.pathname}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
