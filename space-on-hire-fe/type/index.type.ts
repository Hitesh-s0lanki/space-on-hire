export type Asset = {
    id: string;
    code: string;

    width: string;
    height: string;
    unit?: string;
    zone?: string;
    total_area?: string;
    screen_type?: "LED" | "STATIC"
    media_type?: "BILLBOARD";
    category?: "A" | "B" | "C",
    trf?: string;

    remark?: string;
    description?: string;
    rating?: number;

    facing?: string;
    location: string;
    area?: string;
    zipcode?: string;
    city?: string,
    country?: string,
    state?: string;

    audience?: Audience
    availability?: boolean

    org_id?: string; // relationship ID
}

export type Audience = {
    id: string;

    male: string;
    female: string;

    age_18_less: string;
    age_18_24: string;
    age_25_34: string;
    age_median: string;
    age_45_54: string;
    age_55_older: string;

    race_black: string;
    race_white: string;
    race_asian: string;
    race_other: string;

    median_household_income: string// Median Household Income
    per_capita_income: string// Per Capita Income
    below_poverty_line: string// Persons Below Poverty Line
    population: string// Population
    housing_units: string// Housing Units

    high_school: string// High School Grad Or Highe
    bachelor_degree: string// Bachelor's Degree
}

export type Customer = {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;

    tags: string[];

    city: string;
    country: string;
    state: string;
    pincode?: string;

    company_name: string;
    company_domain: string;
    company_info: string;
}

export type Booking = {
    id: string;
    customer_id: string;
    customer: Customer;

    created_at: Date

}