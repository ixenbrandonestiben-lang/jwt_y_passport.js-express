export class CredencialesDTO {
    
    constructor(data = {}){
        this.username = String(data.username ?? "").trim().toLocaleLowerCase();

        this.password = String(data.password ?? "");
    }
}