function GetName(name: string) {
    var response = `Hello ${name}. Seja bem vindo ao teste de pacote!`
    console.log(response);

    return response;
}

export { GetName }