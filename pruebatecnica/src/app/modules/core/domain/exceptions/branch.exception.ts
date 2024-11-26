export default class BranchException extends Error{
    detail: string = this.message;    
    constructor(message: string){                
        super(message);
    }
}