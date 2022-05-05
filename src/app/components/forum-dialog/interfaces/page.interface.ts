export interface Page<T> {
   
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    content: T[];
    first: boolean;
    last: boolean;
    number: number;
   
}