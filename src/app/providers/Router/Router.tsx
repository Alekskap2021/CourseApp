import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "./routerConfig";

export const Router = () => {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        {Object.values(routerConfig).map(({ path, element, ...otherProps }) => (
          <Route
            key={path}
            path={path}
            element={<section className="pageWrapper">{element}</section>}
            {...otherProps}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
