import { CustomerSchema } from "@/schema/index.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useCustomerCreate } from "@/hooks/use-customer-create-sheet";
import { ProfileImageDropzone } from "../common/profile-image-dropzone";
import PhoneInputComponent from "../common/phone-number-input";

type Props = {};

const formSchema = CustomerSchema
type formSchemaType = z.infer<typeof formSchema>

const CustomerCreationForm = ({ }: Props) => {

    const { onClose } = useCustomerCreate()
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false)

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (values: formSchemaType) => {

    }

    return (
        <Form {...form}>
            <form className=" flex flex-col w-full gap-5 py-5" onSubmit={form.handleSubmit(onSubmit)}>
                <div className=" w-full flex justify-center py-5">
                    <ProfileImageDropzone
                        width={150}
                        height={150}
                        value={file}
                        onChange={(file) => {
                            setFile(file);
                        }}
                    />
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className=" space-y-2 w-full">
                        <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">Basic Information</h1>
                    </div>
                    <div className=" grid grid-cols-2 gap-3 px-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Enter the Customer name..."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Enter Customer Email.."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone No.</FormLabel>
                                    <FormControl>
                                        <PhoneInputComponent
                                            phone={field.value || ""}
                                            onChange={(phone) => {
                                                field.onChange(phone || "");
                                            }}
                                            disabled={loading}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className=" space-y-2 w-full">
                        <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">Company Information</h1>
                    </div>
                    <div className=" grid grid-cols-2 gap-3 px-1">
                        <FormField
                            control={form.control}
                            name="company_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Enter the Customer name..."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company_domain"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Enter Customer Email.."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company_info"
                            render={({ field }) => (
                                <FormItem className=" col-span-2">
                                    <FormLabel>Company Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Location"
                                            {...field}
                                            disabled={loading}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className=" space-y-2 w-full">
                        <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">Location</h1>
                    </div>
                    <div className=" grid grid-cols-2 gap-3 px-1">
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className=" col-span-2">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Location"
                                            {...field}
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="pincode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pincode</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Pincode.."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Pincode.."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Pincode.."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="h-8"
                                            placeholder="Pincode.."
                                            {...field}
                                            type="text"
                                            disabled={loading}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className=" w-full flex justify-center items-center gap-5 pt-5 px-1">
                    <Button variant="outline" className=" w-full" type="button"
                        onClick={onClose}
                    >
                        Back
                    </Button>
                    <Button className=" w-full">
                        Save
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CustomerCreationForm;