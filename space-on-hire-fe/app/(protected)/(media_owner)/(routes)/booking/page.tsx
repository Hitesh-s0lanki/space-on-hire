import Image from "next/image";
import BookingDataTable from "./_components/booking-data-table";

type Props = {};

const CustomerPage = ({ }: Props) => {
    return (
        <div className=" h-full w-full overflow-auto">
            <div className="bg-[#F6FAFD] p-5 px-8 flex gap-2 items-center">
                <Image
                    src="/icons/booking.svg"
                    width={22}
                    height={22}
                    alt="Booking Logo"
                />
                <h1 className=" font-semibold text-xl ">
                    Bookings
                </h1>
            </div>
            <BookingDataTable data={[]} />
        </div>
    );
};

export default CustomerPage;