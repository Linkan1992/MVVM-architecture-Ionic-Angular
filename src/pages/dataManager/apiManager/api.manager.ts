export interface ApiService {
    login(): void;
    getAvailableJobList(): void;
    getCityList(): void;
    getJobPositionList(): void;
    getAppliedJobList(): void;
}