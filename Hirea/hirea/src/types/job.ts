
export type Job = {
    postedAgo: string;
    title: string;
    company: string;
    location: string;
    logoUrl: string;
};

export interface JobsState {
    jobs : Job[]
}