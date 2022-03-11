async function createToken(authorizationEndpoint, client, clientSecret, scopes) {
    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    body.append("client_id", client);
    body.append("client_secret", clientSecret);
    body.append("scope", scopes);

    var requestOptions = {
        credentials: "omit",
        mode: "same-origin",
        method: "POST",
        body,
    };

    var response = await fetch(authorizationEndpoint, requestOptions);
    var result = await response.text();

    return result;
}
