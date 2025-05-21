import Image from "next/image";

type Props = {};

const CustomerIdPage = ({ }: Props) => {
    return (
        <div className=" h-full w-full overflow-auto">
            <div className="bg-[#F6FAFD] p-5 px-8 flex gap-2 items-center">
                <Image
                    src="/icons/customer.svg"
                    width={22}
                    height={22}
                    alt="Customer Logo"
                />
                <h1 className=" font-semibold text-xl ">
                    Customer
                </h1>
            </div>
        </div>
    );
};

export default CustomerIdPage;