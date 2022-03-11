async function createToken(authorizationEndpoint, client, clientSecret, scopes) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", client);
    urlencoded.append("client_secret", clientSecret);
    urlencoded.append("scope", scopes);

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };

    var response = await fetch(authorizationEndpoint, requestOptions);

    return response.json();
}
