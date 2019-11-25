window.onload = function () {
    class API {
        constructor(url) {
            this.apiBaseUrl = url;
        }

        changeUrl(newUrl) {
            this.apiBaseUrl = newUrl;
        }

        async post() {
            this.method = 'POST';
            this.uri = '/json';
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
            this.response = await fetch(this.apiBaseUrl + this.uri, {
                method: this.method,
                description: this.description
            })
            this.result = await this.response.json();
            console.log(JSON.stringify(this.result));
        }

        async put() {
            //creating Init object to use with Fetch
            this.putHeaders = new Headers();
            this.putHeaders.append('Accept','application/json')
            this.uri = '/json/2';
            this.putInit = {
                method: 'PUT',
                headers: this.putHeaders,
            }
            this.putRequest = new Request(this.apiBaseUrl + this.uri, this.putInit);
            this.response = await fetch(this.putRequest);
            this.result = await this.response.json();
            console.log(JSON.stringify(this.result));
        }

        async search() {
            this.uri = '/search';
            this.searchInit = {
                method: 'GET'
            }
            this.searchUrl = new URL(this.apiBaseUrl + this.uri);
            this.searchUrl.searchParams.append('q','anyquery');
            this.searchRequest = new Request(this.searchUrl, this.searchInit);
            this.response = await fetch(this.searchRequest);
            this.result = await this.response.text();
            console.log(this.result);
        }
    }
    const testAPI = new API('https://78jqd.mocklab.io');
    testAPI.post();
    testAPI.get();
    testAPI.put();
    testAPI.search();



}

