function GetName(name: string) {
    var response = `Hello ${name}. Seja bem vindo e testamos o package`
    console.log(response);

    return response;
}

export { GetName }