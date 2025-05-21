import { Customer } from "@/type/index.type";
import Image from "next/image";
import CustomerDataTable from "./_components/customer-data-table";

type Props = {};

const data: Customer[] = [
    {
        id: "1",
        name: "Hitesh Solanki",
        email: "hiteshsolanki4623@gmail.com",
        phone: "+919004713782",
        address: "B/710, Riddhi Siddhi Apt",

        tags: ["Tech", "health-care"],

        city: "Mumbai",
        country: "India",
        state: "Maharashtra",
        company_name: "Solanki's",
        company_domain: "solanki.com",
        company_info: "World Best Company with the largest target Audience"
    },
    {
        id: "2",
        name: "Niraj Solanki",
        email: "nirajsolanki729@gmail.com",
        phone: "+919930032332",
        address: "B/710, Riddhi Siddhi Apt",

        tags: ["CA", "health-care"],

        city: "Mumbai",
        country: "India",
        state: "Maharashtra",
        company_name: "Solanki's",
        company_domain: "solanki.com",
        company_info: "World Best Company with the largest target Audience"
    }
]

const CustomerPage = ({ }: Props) => {
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
                    Customers
                </h1>
            </div>
            <CustomerDataTable
                data={data}
            />
        </div>
    );
};

export default CustomerPage;