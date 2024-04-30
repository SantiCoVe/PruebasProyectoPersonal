class User {
    email: string;
    nombres: string;
    apellidos: string;
    password: string;
    documento: string;
    constructor(
        email: string, nombres: string,
        apellidos: string, password: string,
        documento: string,
    ) {
        this.email = email;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.password = password;
        this.documento = documento;
    }
}

export default User;