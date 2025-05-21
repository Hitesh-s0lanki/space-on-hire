import BookingCreationForm from "@/components/form/booking-creation-form";
import Image from "next/image";

type Props = {};

const BookingCreatePage = ({ }: Props) => {
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
                    Create Booking
                </h1>
            </div>
            <BookingCreationForm />
        </div>
    );
};

export default BookingCreatePage;