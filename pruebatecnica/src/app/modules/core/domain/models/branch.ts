

export class Branch {
    static ENABLE = 1;
    static DISABLE = 2;
    static DELETE = 99;
    static ISCORPORATIVE = 1;
    static ISNOTCORPORATIVE = 2;
    static DEFAULT_QUERY_ROWS_SEARCH_SIZE = 9999;



    static statuses = [
        {key: 1, description: 'Habilitado'},
        {key: 2, description: 'Deshabilitado'},
        {key: 99, description: 'Eliminado'},
    ]

    constructor(  
		public idBranch: number | null, 
        public name: string, 
        public businessName: string,
		public status: number,
        public configurationInterest: number,
        public commissionConfiguration: number,
        public isCorporate: number,
        public idBranchBusinessUnit: number,
        public outdoorNumber: string,
        public interiorNumber: number,
        public reference: string,
        public streetName: string,
        public postalCode: number,
        public state: string,
        public city: string,
        public suburbName: string,
    ) {}

}