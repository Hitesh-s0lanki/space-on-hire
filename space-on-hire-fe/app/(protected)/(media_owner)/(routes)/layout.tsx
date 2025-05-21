import SheetProviders from "@/providers/sheet-providers";
import { MainSidebar } from "./_components/sidebar";

type Props = {
    children: React.ReactNode
};

const Layout = ({
    children
}: Props) => {
    return (
        <div className=" flex h-full w-full">
            <SheetProviders />
            <MainSidebar />
            {children}
        </div>
    );
};

export default Layout;