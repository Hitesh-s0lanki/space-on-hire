import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import CustomerCreationForm from "../form/customer-creation-form";
import { useCustomerCreate } from "@/hooks/use-customer-create-sheet";

const CreateCustomerSheet = () => {

    const { isOpen, onClose } = useCustomerCreate()

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className=" min-w-[700px] rounded-l-xl h-full overflow-auto">
                <SheetHeader>
                    <SheetTitle className=" text-customBlue">Add Customer</SheetTitle>
                </SheetHeader>
                <CustomerCreationForm />
            </SheetContent>
        </Sheet>
    );
};

export default CreateCustomerSheet;