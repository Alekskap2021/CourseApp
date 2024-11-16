import { Suspense } from "react";
import type { FC } from "react";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Router } from "./providers/Router/Router";

export const App: FC = () => {
  return (
    <main>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <Router />
        </div>
      </Suspense>
    </main>
  );
};
