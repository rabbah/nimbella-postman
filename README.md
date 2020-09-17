# From APIs to Serverless Cloud Applications in Minutes
This is a hands-on project to support [a joint Nimbella and Postman webinar on September 23rd, 2020](https://www.postman.com/webinars/nimbella/). You are welcome to follow along during the webinar, and once the webinar is done we'll post the link to the video here so that anyone can continue to learn how to deploy serverless APIs to the cloud using Postman and Nimbella.

## Base Requirements
To be able to get hands on with this project you will need two things:

- [Postman](https://www.postman.com/) - You will need to have signed up and downloaded Postman.
- [Nimbella](https://nimbella.com/signup) - You will need to have signed up for Nimbella and downloaded the CLI.

**Authenticate**: `nim auth login <your token>` (Available after you login with Nimbella)

**Install Postman Plugin:** `nim plugins add postman`

**Postman Key**: [From sYour Account](https://go.postman.co/integrations/services/pm_pro_api)

Now that you have Postman and Nimbella installed, are authenticated, and added the Postman plugin you should be ready to deploy your serverless API tot he cloud.

## Deploying Serverless API
You can choose from three separate types of APIs to deploy a serverless API from Postman using Nimbella, or use your Postman collection.

### Products
A simple products API using the Schema.org products object--click to run in your Postman.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5c58b258f4940254570b)

**Create Project**: `nim project create -s postman -i Products --language js`

**Deploy Project**: `nim project deploy .`

You should see your project created locally on your machine, and in the root there is a Postman collection--go ahead an import into Postman, and you should be able to use your new API.

### Persons
A simple products API using the Schema.org products object--click to run in your Postman.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/89cc94a608f66bee4b1e)

**Create Project**: `nim project create -s postman -i Persons --language js`

**Deploy Project**: `nim project deploy .`

You should see your project created locally on your machine, and in the root there is a Postman collection--go ahead an import into Postman, and you should be able to use your new API.

### Blogs
A simple products API using the Schema.org products object--click to run in your Postman.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/706da016ef0fae61a664)

**Create Project**: `nim project create -s postman -i Blogs --language js`

**Deploy Project**: `nim project deploy .`

You should see your project created locally on your machine, and in the root there is a Postman collection--go ahead an import into Postman, and you should be able to use your new API.

## Finishing Touches
Your API should work, returning the sample data available in the collection, but you will need to do the work to connect your API to a database, and customize how it works. When ready, after you have made each change, go ahead and run `nim project deploy .` again to publish your API.

## Testing Your APIs
Once you have your API published to the cloud using Postman and Nimbella, and imported the resulting Postman collection, you can begin adding tests to each of the requests, to verify that your API is always working as expected. You can add these scripts using the "tests" tab for each request in your collection.

### Check for 201 HTTP Status on POST
We want to make sure a 201 status code is returned for our POST.
```
// Begin Test - 201 Status
pm.test(test_name, function () {
     pm.response.to.have.status(201);
});
// End Test
```

### Check for 200 HTTP Status on GET
We want to make sure a 200 status code is returned for our GET requests.
```
// Begin Test - 200 Status
pm.test(test_name, function () {
    pm.response.to.have.status(200);
});
// End Test
```

### Check for 204 HTTP Status on PUT and DELETE
We want to make sure a 201 status code is returned for our PUT and DELETE.
```
// Begin Test - 204 Status
pm.test(test_name, function () {
    pm.response.to.have.status(204);
});
// End Test
```

### Check for No Body HTTP Status on POST, PUT and DELETE
For our POST, PUT, and DELETE we want to make sure an empty body is returned.
```
// Begin Test - No Body
var test_name = 'No Body?';
pm.test(test_name, function () {
    pm.response.to.not.have.jsonBody("");
});
// Begin Test
```

### Check for valid JSON on our GET requests
Both the the GET requests should always return valid JSON.
```
// Begin Test - Valid JSON
var test_name = 'Is valid JSON?';
contract_tests[date_stamp][request_name][test_name] = false;
pm.test(test_name, function () {
    pm.response.to.be.json;
    contract_tests[date_stamp][request_name][test_name] = true;
});
// End Test
```

This provides us with the foundation of our API testing, of course we can go further, checking for specific values within the JSON, but this should demonstrate what is possible.

## Monitoring Your APIs
Now that we have our APIs up and running, and a collection that will test each of the individual paths, we can run our collection on a schedule as a Postman monitor. Just click on the ... action to the right of your collection, and you will be given a configuration screen for your monitor.
![Image of Postman monitor](https://kinlane-productions.s3.amazonaws.com/postman-tutorials/nimbella/nimbella-postman-monitor.png)

## Support
If you have any questions feel free to submit a GitHub issue for this repository, and we will try and support you in any way we can. Thanks for tuning in, hopefully it helps you see the potential of deploying APIs using Postman and Nimbella.
