/**  
*
This is the main entry endpoint to my application
*
*/
const express = require("express");
const { ROLE, users } = require("./data");
const { authUser, authRole } = require("./basicAuth");
const db = require("./database.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//setup express app
const app = express();
//setup cookieParser
app.use(cookieParser());
//setup port number
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(setUser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//FT01 list recipes for FREE Tier
app.get("/recipes", (req, res) => {
  const sql =
    "SELECT name, ingredients, steps FROM recipes WHERE category ='free'";
  const recipes = [];
  db.serialize(() => {
    db.each(
      sql,
      recipes,
      (err, row) => {
        recipes.push(row);
        if (err) return console.log(err.message);
      },
      () => {
        //Print recipes
        res.send(recipes);
      }
    );
  });
});

//FT02 overview of steps for FREE Tier
app.get("/recipes/:recipes_id", (req, res) => {
  const sql =
    "SELECT name, ingredients, steps FROM recipes WHERE id = ? AND category = 'free'";
  const recipes_id = [];
  req.params.recipes_id,
    db.serialize(() => {
      db.each(
        sql,
        req.params.recipes_id,
        (err, row) => {
          recipes_id.push(row);
          if (err) return console.log(err.message);
        },
        () => {
          if (recipes_id[0] === undefined) {
            res.send("Recipes not found");
          } else {
            //Count the steps in the recipe
            const count_steps = JSON.parse(recipes_id[0].steps);
            const step_count = count_steps.length;
            //Print the recipe steps
            res.json({
              name: recipes_id[0].name,
              category: recipes_id[0].category,
              ingredients: JSON.parse(recipes_id[0].ingredients),
              step_count: step_count,
            });
          }
        }
      );
    });
});

//FT03 Detail steps
app.get("/recipes/:recipes_id/all", (req, res) => {
  const sql =
    "SELECT name, ingredients, steps FROM recipes WHERE id = ? AND category = 'free'";
  const recipes_id = [];
  req.params.recipes_id,
    db.serialize(() => {
      db.each(
        sql,
        req.params.recipes_id,
        (err, row) => {
          recipes_id.push(row);
          if (err) return console.log(err.message);
        },
        () => {
          //Check if results are undefined
          if (recipes_id[0] === undefined) {
            res.send("Recipes not found");
          } else {
            //Print results of all steps
            res.json({
              name: recipes_id[0].name,
              category: recipes_id[0].category,
              ingredients: JSON.parse(recipes_id[0].ingredients),
              steps: JSON.parse(recipes_id[0].steps),
            });
          }
        }
      );
    });
});

//FT04 Single steps
app.get("/recipes/:recipes_id/:step_id", (req, res) => {
  const sql = "SELECT steps FROM recipes WHERE id = ? AND category = 'free'";
  const recipes_id = [];
  //request recipe Id and step Id
  req.params.recipes_id,
    req.params.step_id,
    db.serialize(() => {
      db.each(
        sql,
        req.params.recipes_id,
        (err, row) => {
          recipes_id.push(row);
          if (err) return console.log(err.message);
        },
        () => {
          //If result is empty
          if (recipes_id[0] === undefined) {
            res.send("Recipes not found");
          } else {
            //Make new arry to find singel steps
            const arr = JSON.parse(recipes_id[0].steps);
            var single_step = arr.filter(function (value) {
              return value.Steps_id == req.params.step_id;
            });
            //Print result of singel steps
            res.json({
              steps: single_step,
            });
          }
        }
      );
    });
});

//PT 01 - Premium token
app.get("/premium/", authUser, authRole(ROLE.PREMIUM), (req, res) => {
  res.send("You are logged in as Premium User");
});

//PT 02 search by ingredient THIS CODE DONT WORK !!!!!!!!!!!!!!!
app.get("/search/:ingredients", (req, res) => {
  const sql = "SELECT id, ingredients FROM recipes";
  const params = [];
  req.params.ingredients,
    db.serialize(() => {
      db.each(
        sql,
        params,
        (err, row) => {
          params.push(row);
          if (err) return console.log(err.message);
        },
        () => {
          // for (let i = 0; i < params.length; i++) {
          //   console.log(JSON.parse(params[i].ingredients));
          res.cookie(`Ingredients`, params),
            res.send("Cookie have been saved successfully");
          // }
          // res.json({
          //   search: `${req.params.ingredients}`,
          //   result: JSON.parse(params[0].ingredients),
          // });
        }
      );
    });
});

// get the cookie incoming request
app.get("/getcookie", (req, res) => {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
});

//PT03 - Search Helper
app.get("/ingredients", authUser, authRole(ROLE.PREMIUM), (req, res) => {
  const sql = "SELECT ingredients FROM recipes";
  const params = [];
  db.serialize(() => {
    db.each(
      sql,
      params,
      (err, row) => {
        params.push(row);
        if (err) return console.log(err.message);
      },
      () => {
        res.json({
          results: params,
        });
      }
    );
  });
});

//PT04 Minimum number of premium recipes
app.get("/premium/recipes", authUser, authRole(ROLE.PREMIUM), (req, res) => {
  const sql =
    "SELECT name, category, ingredients, steps FROM recipes WHERE category ='premium'";
  const params = [];
  db.serialize(() => {
    db.each(
      sql,
      params,
      (err, row) => {
        params.push(row);
        if (err) return console.log(err.message);
      },
      () => {
        //Print recipe only width category "premium"
        res.send(params);
      }
    );
  });
});

//AT01 administrator token
app.get("/admin/", authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send("You are logged in as Administrator");
});

//AT02 - Add recipe
app.post("/admin/add", (req, res) => {
  let name = req.body.name;
  let category = req.body.category;
  let ingredients = req.body.ingredients;
  let steps = req.body.steps;

  const new_steps = JSON.stringify(steps);
  const new_ingredients = JSON.stringify(ingredients);

  db.run(
    "INSERT INTO recipes (name, category, ingredients, steps) VALUES ('" +
      name +
      "',  '" +
      category +
      "',  '" +
      new_ingredients +
      "',  '" +
      new_steps +
      "');",
    function (err) {
      if (err) throw err;
      res.send("Recipes added successful");
      res.status(200).end(); // successful post
    }
  );
});

//AT03 - Update recipe
app.patch("/recipe/:id", (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let category = req.body.category;
  let ingredients = req.body.ingredients;
  let steps = req.body.steps;

  const new_steps = JSON.stringify(steps);
  const new_ingredients = JSON.stringify(ingredients);

  const sql =
    "UPDATE recipes SET name=?, category=? , ingredients=?, steps=? WHERE id =?";
  db.run(sql, [name, category, new_ingredients, new_steps, id], function (err) {
    if (err) return console.log(err.message);
  });
  res.send(`Recipe widt id:${id} is updated`);
});

//AT04 -Replace Recipe
app.put("/recipe/:recipe_id", (req, res) => {
  let id = req.params.recipe_id;
  let name = req.body.name;
  let category = req.body.category;
  let ingredients = req.body.ingredients;
  let steps = req.body.steps;

  //stringify the results
  const new_steps = JSON.stringify(steps);
  const new_ingredients = JSON.stringify(ingredients);

  const sql =
    "UPDATE recipes SET name=?, category=? , ingredients=?, steps=? WHERE id =?";
  db.run(sql, [name, category, new_ingredients, new_steps, id], function (err) {
    if (err) return console.log(err.message);
  });
  res.send(`Recipe widt id:${id} is updated`);
});

//AT05 - Delete recipes
app.delete("/recipe/:recipe_id", (req, res) => {
  db.serialize(() => {
    db.run(
      "DELETE FROM recipes WHERE id=?",
      req.params.recipe_id,
      function (err) {
        if (err) {
          res.send("Error encountered while deleting recipe");
          return console.log(err.message);
        }
        res.send(`Recipe widt id:${req.params.recipe_id} is deleted`);
        res.status(200).end(); //Successful delete
      }
    );
  });
});

//AT01 - Administrator token
function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
