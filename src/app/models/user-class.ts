export class UserClass {
    public showDescription: boolean;
    constructor(public name: string, public bio: string, public created_at: string, public repos_url: string, public avatar_url: string, public completeDate: Date){
    this.showDescription=false;
    }
}

