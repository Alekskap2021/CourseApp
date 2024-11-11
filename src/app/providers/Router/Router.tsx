import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "@/widgets/PageLoader";
import { routerConfig } from "./routerConfig";

export const Router = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element, ...otherProps }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <section className="pageWrapper">{element}</section>{" "}
            </Suspense>
          }
          {...otherProps}
        />
      ))}
    </Routes>
  );
};
