import { z } from "zod";

export const OrganisationalSchema = z.object({
    name: z.string().optional(),
    org_name: z.string().optional(),
    email: z.string().email().optional(),
    type: z.string().optional(),
    about: z.string().optional(),
    phone: z.string().optional(),
})

export const AudienceSchema = z.object({
    male: z.string().optional(),
    female: z.string().optional(),

    age_18_less: z.string().optional(),
    age_18_24: z.string().optional(),
    age_25_34: z.string().optional(),
    age_median: z.string().optional(),
    age_45_54: z.string().optional(),
    age_55_older: z.string().optional(),

    race_black: z.string().optional(),
    race_white: z.string().optional(),
    race_asian: z.string().optional(),
    race_other: z.string().optional(),

    median_household_income: z.string().optional(),
    per_capita_income: z.string().optional(),
    below_poverty_line: z.string().optional(),
    population: z.string().optional(),
    housing_units: z.string().optional(),

    high_school: z.string().optional(),
    bachelor_degree: z.string().optional(),
});

export const AssetSchema = z.object({
    code: z.string().optional(),
    location: z.string(),
    width: z.string(),
    height: z.string(),
    unit: z.string().optional(),
    zone: z.string().optional(),
    area: z.string().optional(),
    total_area: z.string().optional(),
    screen_type: z.enum(["LED", "STATIC"]).optional(),
    screen_no: z.string().optional(),
    screen_time: z.string().optional(),

    media_file: z.string().optional(),

    media_type: z.literal("BILLBOARD").optional(),
    category: z.enum(["A", "B", "C"]).optional(),
    trf: z.string().optional(),
    facing: z.string().optional(),
    zipcode: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    state: z.string().optional(),
    remark: z.string().optional(),
    description: z.string().optional(),
    rating: z.number().optional(),
    availability: z.boolean().optional(),
    price: z.string().optional(),

    note: z.string().optional(),

    audience: AudienceSchema.optional()
});

export const UpdateAssetSchema = z.object({
    code: z.string().optional(),
    location: z.string().optional(),
    width: z.string().optional(),
    height: z.string().optional(),
    unit: z.string().optional(),
    zone: z.string().optional(),
    area: z.string().optional(),
    total_area: z.string().optional(),
    screen_type: z.enum(["LED", "STATIC"]).optional(),
    screen_no: z.string().optional(),
    screen_time: z.string().optional(),

    media_file: z.string().optional(),

    media_type: z.literal("BILLBOARD").optional(),
    category: z.enum(["A", "B", "C"]).optional(),
    trf: z.string().optional(),
    facing: z.string().optional(),
    zipcode: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    state: z.string().optional(),
    remark: z.string().optional(),
    description: z.string().optional(),
    rating: z.number().optional(),
    availability: z.boolean().optional(),
    price: z.string().optional(),

    note: z.string().optional(),

    audience: AudienceSchema.optional()
});

export const CustomerSchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string().optional(),

    tags: z.array(z.string()).optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    state: z.string().optional(),
    pincode: z.string().optional(),

    company_name: z.string().optional(),
    company_domain: z.string().optional(),
    company_info: z.string().optional()
})

export const BookingSchema = z.object({
    customer_name: z.string(),
    customer_email: z.string(),
    customer_phone: z.string(),
    customer_company_name: z.string(),
    customer_company_domain: z.string(),
})