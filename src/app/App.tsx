import cn from "classnames";
import { Suspense } from "react";
import type { FC } from "react";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import "./styles/index.scss";
import { useTheme } from "@/shared/hooks/useTheme";
import { Router } from "./providers/Router/Router";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <section className={cn("app", theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <Router />
        </div>
      </Suspense>
    </section>
  );
};
