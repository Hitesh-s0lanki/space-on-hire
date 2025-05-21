"use client";

import { cn } from "@/lib/utils";
import { OrganisationalSchema } from "@/schema/index.schema";
import { Check } from "lucide-react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const font = Raleway({
    weight: "600",
    subsets: ["latin"],
});

const formSchema = OrganisationalSchema
type formSchemaType = z.infer<typeof formSchema>

const OrganisationCreationForm = ({ }: Props) => {

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (values: formSchemaType) => {

    }

    return (
        <div className=" h-full w-full overflow-auto grid grid-cols-2">
            <div className="bg-[#F6FCFF] h-full w-full flex flex-col justify-center items-center gap-10 py-20">
                <h1 className=" font-semibold text-4xl text-center w-1/2">Why Space on Hire for Media Management?</h1>
                <p className=" text-muted-foreground text-xl  w-1/2 text-center">AI-Based Solution for Outdoor Advertising Made Easy & Measurable</p>
                <div className=" bg-[#16418F33] p-5 w-1/2 rounded-md shadow-sm">
                    <ul className=" flex flex-col gap-2">
                        <li className=" flex gap-2 items-center">
                            <Check className=" text-green-500 size-4" />
                            OOH inventory from over 1,600+ media owners
                        </li>
                        <li className=" flex gap-2 items-center">
                            <Check className=" text-green-500 size-4" />
                            10x faster execution and 15% savings on average
                        </li>
                        <li className=" flex gap-2 items-center">
                            <Check className=" text-green-500 size-4" />
                            Precise measurement to quantify the impact of OOH
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" h-full w-full shadow-md flex flex-col gap-5 justify-center items-center">
                <div className="flex items-center">
                    <div className="relative h-10 w-10">
                        <Image
                            fill
                            alt="logo"
                            src="/logo-color.svg"
                        />
                    </div>
                    <h1 className={cn("text-4xl font-bold relative z-20", font.className)}>Space On Hire</h1>
                </div>
                <h1>Create your Organisational space</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" w-1/2">
                        <div className="flex flex-col gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Your Name" {...field} />
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
                                        <FormLabel>Business Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter business email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="org_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter business email" {...field} />
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
                                        <FormLabel>Phone no.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter business phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="rounded-full  w-full mt-5"
                                variant="premium"
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className=" mt-2 text-center text-muted-foreground text-sm flex items-center justify-center">
                            Already have an account?
                            <Button
                                type="button"
                                variant="link" className=" text-[#16418F] px-1" asChild>
                                <Link href="/home">
                                    Log in
                                </Link>
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default OrganisationCreationForm;