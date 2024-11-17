export interface Register {
    firstName: string;
    lastName: string;
    knowAs: string;
    dateOfBirth: Date;
    gender: string;
    country: string;
    state: string;
    city: string;
    email: string;
    pass: string;
}

export interface Verify {
    email: string;
    code: string;
}