import Image from "next/image";

type Props = {};

const DashboardPage = ({ }: Props) => {
    return (
        <div className=" h-full w-full overflow-auto">
            <div className="bg-[#F6FAFD] p-5 px-8 flex gap-2 items-center">
                <Image
                    src="/icons/dashboard.svg"
                    width={22}
                    height={22}
                    alt="Asset Logo"
                />
                <h1 className=" font-semibold text-xl ">Dashboard</h1>
            </div>
            <div className=" p-8">

                1. Need be Design
            </div>
        </div>
    );
};

export default DashboardPage;