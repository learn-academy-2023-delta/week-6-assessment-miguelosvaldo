# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The name of the foreign key is cohort_id followed by a integer. You can fix the mistake by adding it to the migration file. The key would be in the cohort model. 

Researched answer: You can run the command rake db:rollback, then go to migration and edit foreign key.

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Update, Create, Destroy. Because these routes target a specific instance in the database, and id will target the correct instance.

Researched answer: The Create Route requires parameters to pass the data needed to create the resource. Update Route, requires parameters to pass the data that needs to be updated. Delete Route requires parameters to indicate the specific resource that should be deleted.

3. Name three rails generator commands. What is created by each?

Your answer: Rails db:create, will create the database for the rails app. Rails s, will open and run the server, and Rails db:migrate, will migrates files made to the corresponding route. 

Researched answer: rails server command launches a web server named Puma which comes bundled with Rails.  Running bin/rails generate by itself gives a list of available generators. Rails destroy will figure out what generate did, and undo it.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students/index

    -This controller will access all the instances made.

action: "POST" location: /students/create

    -This controller will create an instance in the database.

action: "GET" location: /students/new

    -This controller will work in the views, and bring up a form.

action: "GET" location: /students/2/show

    -This controller will show one instance.

action: "GET" location: /students/2/edit

    -This controller will work in the views, and bring up a form.


action: "PATCH" location: /students/2/update

    -This controller will update an instance in the database.

action: "DELETE" location: /students/2/destroy

    -This controller will delete an instance in the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

User Stories for a Restaurant 

-As a new owner of a Italian restaurant, I want to have a backend model for Main Dishes, Appetizers, Wine, Softdrinks, Desserts, Location, Prices, most ordered, Ingridients in each Dish.
-create a rails app for this restaurant.
-Create a database with the information provided
-Add ten main dishes
-Add the ingridients of the main dishes
-List the dishes from highest price to lowest price
-List most ordered desserts to less ordered
-Update a new main dish
-Remove the least sold type of wine from the menu
-Create a new model for dress code
