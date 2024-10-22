import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-2">{children}</main>
    </div>
  );
};

export default Layout;
