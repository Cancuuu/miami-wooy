import { DefaultLayout } from "@wooy/react-components";
// import { BottomNav } from "lib/components/Layout/BottomNav";
// import { Footer } from "lib/components/Layout/Footer";
import { PageHeader } from "./PageHeader";
import { SideNav } from "./SideNav";

const Layout = (props) => (
  <DefaultLayout
    banner={null}
    header={<PageHeader />}
    content={props.children}
    sideNav={<SideNav />}
    // bottomNav={<BottomNav />}
    // footer={<Footer />}
  />
);

export default Layout;
