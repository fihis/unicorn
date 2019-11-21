window.onload = function () {
    class API {
        constructor(url) {
            this.apiBaseUrl = url;
            this.postEndpoint = {
                method: 'POST',
                uri: '/json',
                description: 'Match a JSON POST on the request body',
            }
        }
        changeUrl(newUrl) {
            this.apiBaseUrl = newUrl;
        }
        async post() {
            this.method = 'POST';
            this.uri = '/json';
            //this.description = 'Match a JSON POST on the request body';
            this.body = '{  "id": 12345,  "value": "abc-def-ghi" }';
            this.response = await fetch(this.apiBaseUrl + this.uri, {
                method: this.method,
                body: this.body
            })
            this.result = await this.response.json();
            console.log(JSON.stringify(this.result));

        }
        async get() {
            this.method = 'GET';
            this.uri = '/json/1'
            //this.description = 'GET a JSON resource';
            this.response = await fetch(this.apiBaseUrl + this.uri, {
                method: this.method,
                description: this.description
            })
            this.result = await this.response.json();
            console.log(JSON.stringify(this.result));
        }

        //not working
        async put() {
            this.putHeaders = new Headers();
            this.putHeaders['Content-Type'] = 'application/json';
            this.uri = '/json/2';
            console.log(this.putHeaders);
            this.putInit = {
                method: 'PUT',
                headers: this.putHeaders,
                description: 'Only match if Accept header is for application / json',
            }
            this.putRequest = new Request(this.apiBaseUrl + this.uri, this.putInit);
            // this.method = 'PUT';
            // this.description = 'Only match if Accept header is for application / json';
            // this.header = 'application/json';


            //this.response = await fetch(this.putRequest);


            this.response = await fetch(this.apiBaseUrl + this.uri, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            this.result = await this.response.json();
            console.log(JSON.stringify(this.result));

        }

        //not working
        async search() {
            this.uri = '/search';
            this.searchInit = {
                method: 'GET'
                
            }
            this.searchUrl = new URL(this.apiBaseUrl + this.uri);
            this.params = {
                query: 'q'
            }
            this.searchUrl.searchParams.append('query', 'q');
            //Object.keys(this.params).forEach((key, value) => { this.searchUrl.searchParams.append(key, value) });
            this.searchRequest = new Request(this.searchUrl, this.searchInit);
            this.response = await fetch(this.searchRequest);
            this.result = await this.response.json();
            console.log(JSON.stringify(this.result));


            // this.response = await fetch(this.apiBaseUrl + this.uri, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

        }
    }
    const testAPI = new API('https://78jqd.mocklab.io');
    //testAPI.post();
    //testAPI.get();
    //testAPI.put();
    testAPI.search();



}


// apiBaseUrl: http://78jqd.mocklab.io
// endpoints:

// method: PUT
// uri: /json/2
// description: Only match if Accept header is for application / json

// method: GET
// uri: /search
// description: Only match if query parameter is present and in the correct format
// queryParameterName: q
// queryRestrictions: [A - Za - z0 - 9] *
