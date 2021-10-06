function GetName(name: string) {
    var response = `Hello ${name}. Seja bem vindo!`
    console.log(response);

    return response;
}

export { GetName }