import Navbar from "./navbar";
import Footer from "./footer";

function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl flex flex-col min-h-screen md:px-4">
      <Navbar />
      <main className="flex-1 mx-4 md:mx-8">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
