import { Suspense, useEffect } from "react";
import type { FC } from "react";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Router } from "./providers/Router/Router";

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
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
