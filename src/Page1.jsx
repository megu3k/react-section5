import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      <Outlet />
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
