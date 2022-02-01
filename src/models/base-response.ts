
export class PaginatedRequest<T> {
    pageIndex: number;
    pageSize: number;
    filter: T
}

export class PaginatedResponse<T> {
    data: T[];
    totalCount: number;
    filteredCount: number;
    pageIndex: number;
    pageSize: number;
}

interface Type1 {
    name: string;
    surname: string;
}

const r1: PaginatedResponse<Type1> = {
    data: [
        {
            name: "ja",
            surname: "ci"
        }
    ],
    totalCount: 1,
    filteredCount: 1,
    pageIndex: 1,
    pageSize: 1
}