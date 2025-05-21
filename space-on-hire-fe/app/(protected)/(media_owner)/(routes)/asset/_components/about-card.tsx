"use client";

import { UpdateAssetSchema } from "@/schema/index.schema";
import { Asset } from "@/type/index.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
} from "@/components/ui/form"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import InputEditableField from "@/components/editable/input-editable-field";
import TextareaEditableField from "@/components/editable/textarea-editable-field";
import Image from "next/image";

type Props = {
    data: Asset
};

const formSchema = UpdateAssetSchema
type formSchemaType = z.infer<typeof formSchema>

const AboutCard = ({
    data
}: Props) => {

    const [basic, setBasic] = useState(true) // basic information disabled
    const [location, setLocation] = useState(true) // location information disabled
    const [other, setOther] = useState(true) // Other information disabled
    const [image, setImage] = useState(true) // Image information disabled
    // const [other, setOther] = useState(true) // Other information disabled

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: data
    })

    const onSubmit = (values: formSchemaType) => {

    }

    return (
        <Form {...form}>
            <form className=" w-full grid grid-cols-3 gap-5 pt-2 px-1">
                <div className=" col-span-2 flex flex-col gap-5">
                    <div className=" w-full space-y-4">
                        <div className=" w-full flex justify-between items-center bg-[#F0FAFF] py-2 px-2">
                            <h1 className=" text-md font-semibold  ">Basic Information</h1>
                            {basic && <button
                                onClick={() => setBasic(false)}
                                className="p-0"
                            >
                                <Edit className=" size-5" />
                            </button>}
                            {!basic && <div className=" flex gap-1 items-center">
                                <Button
                                    variant="outline"
                                    onClick={() => setBasic(true)}
                                    className="py-1 px-3 h-6 text-xs rounded-sm "
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="py-1 px-3 h-6 text-xs rounded-sm"
                                >
                                    Save
                                </Button>
                            </div>}
                        </div>
                        <div className=" grid grid-cols-5 gap-2 px-1">
                            <InputEditableField
                                name="code"
                                form={form}
                                label="Asset Code"
                                disabled={basic}
                            />
                            <InputEditableField
                                name="height"
                                form={form}
                                label="Height"
                                disabled={basic}
                            />
                            <InputEditableField
                                name="width"
                                form={form}
                                label="Width"
                                disabled={basic}
                            />
                            <InputEditableField
                                name="total_area"
                                form={form}
                                label="Total Area"
                                disabled={basic}
                            />
                            <InputEditableField
                                name="unit"
                                form={form}
                                label="Unit"
                                disabled={basic}
                            />
                        </div>
                    </div>
                    <div className=" w-full space-y-4">
                        <div className=" w-full flex justify-between items-center bg-[#F0FAFF] py-2 px-2">
                            <h1 className=" text-md font-semibold  ">Location Information</h1>
                            {location && <button
                                onClick={() => setLocation(false)}
                                className="p-0"
                            >
                                <Edit className=" size-5" />
                            </button>}
                            {!location && <div className=" flex gap-1 items-center">
                                <Button
                                    variant="outline"
                                    onClick={() => setLocation(true)}
                                    className="py-1 px-3 h-6 text-xs rounded-sm "
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="py-1 px-3 h-6 text-xs rounded-sm bg-[#111827]"
                                >
                                    Save
                                </Button>
                            </div>}
                        </div>
                        <div className="grid grid-cols-3 gap-2 px-1">
                            <div className=" col-span-2">
                                <InputEditableField
                                    name="location"
                                    form={form}
                                    label="Location"
                                    disabled={location}
                                />
                            </div>
                            <InputEditableField
                                name="zone"
                                form={form}
                                label="Zone"
                                disabled={location}
                            />
                            <InputEditableField
                                name="area"
                                form={form}
                                label="Area"
                                disabled={location}
                            />
                            <InputEditableField
                                name="zipcode"
                                form={form}
                                label="Zipcode"
                                disabled={location}
                            />
                            <InputEditableField
                                name="facing"
                                form={form}
                                label="Facing"
                                disabled={location}
                            />
                        </div>
                    </div>
                    <div className=" w-full space-y-4">
                        <div className=" w-full flex justify-between items-center bg-[#F0FAFF] py-2 px-2">
                            <h1 className=" text-md font-semibold  ">Other Information</h1>
                            {other && <button
                                onClick={() => setOther(false)}
                                className="p-0"
                            >
                                <Edit className=" size-5" />
                            </button>}
                            {!other && <div className=" flex gap-1 items-center">
                                <Button
                                    variant="outline"
                                    onClick={() => setOther(true)}
                                    className="py-1 px-3 h-6 text-xs rounded-sm "
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="py-1 px-3 h-6 text-xs rounded-sm bg-[#111827]"
                                >
                                    Save
                                </Button>
                            </div>}
                        </div>
                        <div className=" grid grid-cols-3 gap-2 px-1">
                            <div className=" col-span-3 grid grid-cols-4 gap-2">
                                <InputEditableField
                                    name="media_type"
                                    form={form}
                                    label="Media Type"
                                    disabled={other}
                                />
                                <InputEditableField
                                    name="screen_type"
                                    form={form}
                                    label="Screen Type"
                                    disabled={other}
                                />
                                <InputEditableField
                                    name="screen_no"
                                    form={form}
                                    label="No of Screen"
                                    disabled={other}
                                />
                                <InputEditableField
                                    name="screen_time"
                                    form={form}
                                    label="Screen Time"
                                    disabled={other}
                                />
                            </div>
                            <div className=" col-span-3 grid grid-cols-4 gap-2">
                                <InputEditableField
                                    name="category"
                                    form={form}
                                    label="Category"
                                    disabled={other}
                                />
                                <InputEditableField
                                    name="price"
                                    form={form}
                                    label="Price"
                                    disabled={other}
                                />
                                <div className=" col-span-2">
                                    <InputEditableField
                                        name="remark"
                                        form={form}
                                        label="Remark"
                                        disabled={other}
                                    />
                                </div>
                            </div>
                            <div className=" col-span-3">
                                <TextareaEditableField
                                    name="description"
                                    form={form}
                                    label="Description"
                                    disabled={other}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className=" w-full space-y-4">
                        <div className=" w-full flex justify-between items-center bg-[#F0FAFF] py-2 px-2">
                            <h1 className=" text-md font-semibold  ">Images</h1>
                            {image && <button
                                onClick={() => setImage(false)}
                                className="p-0"
                            >
                                <Edit className=" size-5" />
                            </button>}
                            {!image && <div className=" flex gap-1 items-center">
                                <Button
                                    variant="outline"
                                    onClick={() => setImage(true)}
                                    className="py-1 px-3 h-6 text-xs rounded-sm "
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="py-1 px-3 h-6 text-xs rounded-sm bg-[#111827]"
                                >
                                    Save
                                </Button>
                            </div>}
                        </div>
                        <div className=" grid grid-cols-2 gap-1">
                            <Image
                                src="/sample.jpeg"
                                alt="sample"
                                height={80}
                                width={160}
                                className=" rounded-lg w-full "
                            />
                            <Image
                                src="/sample.jpeg"
                                alt="sample"
                                height={80}
                                width={160}
                                className=" rounded-lg w-full"
                            />

                        </div>
                    </div>
                    <div className=" w-full space-y-4">
                        <div className=" w-full flex justify-between items-center bg-[#F0FAFF] py-2 px-2">
                            <h1 className=" text-md font-semibold  ">Media</h1>
                            {image && <button
                                onClick={() => setImage(false)}
                                className="p-0"
                            >
                                <Edit className=" size-5" />
                            </button>}
                            {!image && <div className=" flex gap-1 items-center">
                                <Button
                                    variant="outline"
                                    onClick={() => setImage(true)}
                                    className="py-1 px-3 h-6 text-xs rounded-sm "
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="py-1 px-3 h-6 text-xs rounded-sm bg-[#111827]"
                                >
                                    Save
                                </Button>
                            </div>}
                        </div>
                        <div className=" grid grid-cols-2 gap-1">
                            <Image
                                src="/sample.jpeg"
                                alt="sample"
                                height={80}
                                width={160}
                                className=" rounded-lg w-full "
                            />
                            <Image
                                src="/sample.jpeg"
                                alt="sample"
                                height={80}
                                width={160}
                                className=" rounded-lg w-full"
                            />

                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default AboutCard;