# Redux Feedback Loop



### SETUP
 For this assignment, you will need to create a SQL dataBase by following the directions found in the `data.sql` file. 

### Next you will need to start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> Your application will open to the first of Five page views. You will have a question asking how you are feeling, an input field with a suggested prompt of a 1-5 scale (will only accept numbers) and a `NEXT` button. 
> On click of the `NEXT` button you will be directed to the next view, which will be identical to the first, however, it has a new question. Etc.

 When the form is complete, a `SUBMIT` button, once clicked, will send the completed form data to the `prime_feedback` database and will redirect the user to the beginning of the form. The user will see a submission success page.

### DISPLAY FEEDBACK

All of the existing feedback will be displayed in a table at the route `/admin`. There is a `DELETE` button on each row that will allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.
