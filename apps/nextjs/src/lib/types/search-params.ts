export type SearchParams<
	SearchBy extends string | undefined = undefined,
	SortBy extends string | undefined = undefined,
	GroupBy extends string | undefined = undefined,
> = {
	searchBy?: SearchBy;
	searchTerm?: string;
	sortBy?: SortBy;
	groupBy?: GroupBy;
	page?: string;
	dateFrom?: string;
	dateTo?: string;
};

export interface ParsedSearchParams<
	SearchBy extends string | undefined = undefined,
	SortBy extends string | undefined = undefined,
	GroupBy extends string | undefined = undefined,
> {
	page: number;
	searchBy?: SearchBy;
	searchTerm?: string;
	sortBy?: SortBy;
	groupBy?: GroupBy;
}
