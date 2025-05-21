"use client";

import { AssetSchema } from "@/schema/index.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  MultiImageDropzone,
  type FileState,
} from "../common/multi-image-selector";
import {
  MultiFileDropzone,
  type FileState as MediaFileState,
} from "../common/multi-file";

type Props = {};

const formSchema = AssetSchema;
type formSchemaType = z.infer<typeof formSchema>;

const AssetCreationForm = ({}: Props) => {
  const [loading, setLoading] = useState(false);
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [mediaFileStates, setMediaFileStates] = useState<MediaFileState[]>([]);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      screen_no: "1",
      screen_time: "0",
    },
  });

  const onSubmit = (values: formSchemaType) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full p-5 px-3 flex gap-5">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className=" w-full flex gap-1 justify-start border-2 bg-white">
            <TabsTrigger
              value="about"
              className=" data-[state=active]:font-bold data-[state=active]:text-[#16418F]  data-[state=active]:border-b-2 data-[state=active]:border-[#16418F] data-[state=active]:shadow-none rounded-none">
              About
            </TabsTrigger>
            <Separator orientation="vertical" className=" h-5" />
            <TabsTrigger
              value="audience"
              className=" data-[state=active]:font-bold data-[state=active]:text-[#16418F]  data-[state=active]:border-b-2 data-[state=active]:border-[#16418F] data-[state=active]:shadow-none rounded-none">
              Audience
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <div className=" w-full grid grid-cols-3 gap-5 pt-2 px-1">
              <div className=" col-span-2 flex flex-col gap-5">
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Basic Information
                    </h1>
                  </div>
                  <div className=" grid grid-cols-5 gap-2 px-1">
                    <FormField
                      control={form.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asset Code</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Asset Code"
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
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Height"
                              {...field}
                              type="number"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="width"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Width</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Width"
                              {...field}
                              type="number"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="total_area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Area</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="123 SQFT"
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
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Unit"
                              type="number"
                              {...field}
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Location Information
                    </h1>
                  </div>
                  <div className="grid grid-cols-3 gap-2 px-1">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem className=" col-span-2">
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Location"
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
                      name="zone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zone</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Zone"
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
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Area"
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
                      name="zipcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zipcode</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Zipcode"
                              {...field}
                              type="number"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="facing"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facing</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-8">
                                <SelectValue placeholder="North" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="North">North</SelectItem>
                              <SelectItem value="South">South</SelectItem>
                              <SelectItem value="East">East</SelectItem>
                              <SelectItem value="West">West</SelectItem>
                              <SelectItem value="North-West">
                                North-West
                              </SelectItem>
                              <SelectItem value="South-West">
                                South-West
                              </SelectItem>
                              <SelectItem value="North-East">
                                North-East
                              </SelectItem>
                              <SelectItem value="South-East">
                                South-East
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Other Information
                    </h1>
                  </div>
                  <div className=" grid grid-cols-3 gap-2 px-1">
                    <div className=" col-span-3 grid grid-cols-4 gap-2">
                      <FormField
                        control={form.control}
                        name="media_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Media Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-8">
                                  <SelectValue placeholder="billboard" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="BILLBOARD">
                                  Billboard
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="screen_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Screen Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={"Static"}>
                              <FormControl>
                                <SelectTrigger className="h-8">
                                  <SelectValue placeholder="billboard" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Static">Static</SelectItem>
                                <SelectItem value="LED">LED</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="screen_no"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>No of Screen</FormLabel>
                            <FormControl>
                              <Input
                                className="h-8"
                                placeholder="Number of Add at a time"
                                {...field}
                                type="number"
                                disabled={loading}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="screen_time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Screen Time</FormLabel>
                            <FormControl>
                              <Input
                                className="h-8"
                                placeholder="Screen time Out"
                                {...field}
                                type="number"
                                disabled={loading}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=" col-span-3 grid grid-cols-4 gap-2">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-8">
                                  <SelectValue placeholder="Category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input
                                className="h-8"
                                placeholder="Actual Price in Rupees"
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
                        name="remark"
                        render={({ field }) => (
                          <FormItem className=" col-span-2">
                            <FormLabel>Remark</FormLabel>
                            <FormControl>
                              <Input
                                className="h-8"
                                placeholder="remark"
                                {...field}
                                disabled={loading}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className=" col-span-3">
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              className="h-2xl"
                              placeholder="Give some description about the asset"
                              {...field}
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Images
                    </h1>
                  </div>
                  <div className="px-1">
                    <MultiImageDropzone
                      value={fileStates}
                      dropzoneOptions={{
                        maxFiles: 4,
                      }}
                      onChange={(files) => {
                        setFileStates(files);
                      }}
                      onFilesAdded={async (addedFiles) => {
                        setFileStates([...fileStates, ...addedFiles]);
                      }}
                    />
                  </div>
                </div>
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Media
                    </h1>
                  </div>
                  <div className=" px-1 flex flex-col gap-4">
                    <MultiFileDropzone
                      value={mediaFileStates}
                      onChange={(files) => {
                        setMediaFileStates(files);
                      }}
                      onFilesAdded={async (addedFiles) => {
                        setMediaFileStates([...mediaFileStates, ...addedFiles]);
                      }}
                      dropzoneOptions={{
                        maxFiles: 1,
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="media_file"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="Paste the link"
                              {...field}
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end px-2 py-5">
                  <Button type="submit">Add Asset</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="audience">
            <div className=" w-full grid grid-cols-3 gap-5 pt-2 px-1">
              <div className=" col-span-2 flex flex-col gap-5">
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Demographics
                    </h1>
                  </div>
                  <div className=" grid grid-cols-5 gap-2 px-1">
                    <FormField
                      control={form.control}
                      name="audience.male"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Male</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="52%"
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
                      name="audience.female"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Female </FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="52%"
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
                      name="audience.race_black"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Black</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="4.5%"
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
                      name="audience.race_white"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>White </FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="82%"
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
                      name="audience.race_asian"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asian</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="82%"
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
                      name="audience.race_other"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="82%"
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
                      name="audience.age_18_less"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age Below 18</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="48.9%"
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
                      name="audience.age_18_24"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age 18-24</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="48.9%"
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
                      name="audience.age_25_34"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age 25-34</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="48.9%"
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
                      name="audience.age_median"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age Median</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="48.9%"
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
                      name="audience.age_45_54"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age 45-54</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="48.9%"
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
                      name="audience.age_55_older"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age Above 55</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="48.9%"
                              {...field}
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Economics / Housing
                    </h1>
                  </div>
                  <div className=" grid grid-cols-5 gap-2 px-1">
                    <FormField
                      control={form.control}
                      name="audience.median_household_income"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Median Household Income</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="$45,965"
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
                      name="audience.per_capita_income"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Per Capita Income</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="$44,350"
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
                      name="audience.below_poverty_line"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Below Poverty Line</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="15.6%"
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
                      name="audience.population"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Population</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="20.5K"
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
                      name="audience.housing_units"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Housing Units</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="14.9K"
                              {...field}
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className=" w-full space-y-4">
                  <div className=" space-y-2 w-full">
                    <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                      Education
                    </h1>
                  </div>
                  <div className=" grid grid-cols-4 gap-2 px-1">
                    <FormField
                      control={form.control}
                      name="audience.high_school"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>High School Grad Or Higher</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="97.1%"
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
                      name="audience.bachelor_degree"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{"Bachelor's Degree"}</FormLabel>
                          <FormControl>
                            <Input
                              className="h-8"
                              placeholder="65.7%"
                              {...field}
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className=" w-full space-y-4">
                <div className="w-full flex justify-between items-center bg-[#F0FAFF] py-2 px-2">
                  <h1 className=" text-md font-semibold  ">Note</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem className=" col-span-3">
                        <FormControl>
                          <Textarea
                            className="h-2xl"
                            placeholder="Add a note"
                            {...field}
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full flex justify-end px-2 py-5">
                  <Button type="submit">Add Asset</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
};

export default AssetCreationForm;
