//create a database file
const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "database.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    db.run(
      `CREATE TABLE recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT, 
            category TEXT,
            ingredients TEXT,
            steps TEXT)`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          var insert_recipes =
            "INSERT INTO recipes (name, category, ingredients, steps) VALUES (?,?,?,?)";
          db.run(insert_recipes, [
            "Easy Pancake",
            "free",
            JSON.stringify([
              { entry: "100g plain flour", type: "flour" },
              { entry: "2 large eggs", type: "eggs" },
              { entry: "300ml milk", type: "milk" },
              { entry: "1 tbsp sunflower oil", type: "sunflour oil" },
            ]),
            JSON.stringify([
              {
                Steps_id: 1,
                text: "Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter",
              },
              {
                Steps_id: 2,
                text: "Set aside for 30 mins to rest if you have time, or start cooking straight away.",
              },
              {
                Steps_id: 3,
                text: "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.",
              },
              {
                Steps_id: 4,
                text: "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.",
              },
              {
                Steps_id: 5,
                text: "Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.",
              },
            ]),
          ]);
          db.run(insert_recipes, [
            "Baked ham hock pots",
            "premium",
            JSON.stringify([
              { entry: "250ml double cream", type: "cream" },
              { entry: "1 egg, beaten", type: "eggs" },
              {
                entry: "large handful of chives, finely chopped",
                type: "nutmeg",
              },
              { entry: "100g cooked ham hock, chopped", type: "ham" },
            ]),
            JSON.stringify([
              {
                Steps_id: 1,
                text: "Mix the double cream, egg and chives together in a medium bowl, and season with a generous grating of nutmeg, a pinch of salt and plenty of ground black pepper.",
              },
              {
                Steps_id: 2,
                text: "Divide the ham hock pieces and chopped potatoes between four ramekins, then top up with the egg and cream mixture. Will keep chilled for up to two days.",
              },
              {
                Steps_id: 3,
                text: "Heat the oven to 180C/160C fan/gas 4. Sprinkle over the grated cheese, then transfer the ramekins to a baking tray. Bake for 15-17 mins until golden and set with a slight wobble in the middle. Serve with crusty bread for dunking, if you like.",
              },
            ]),
          ]);
          db.run(insert_recipes, [
            "Mushroom soup",
            "free",
            JSON.stringify([
              { entry: "90g butter", type: "butter" },
              { entry: "2 medium onions, roughly chopped", type: "onions" },
              {
                entry: "1 garlic clove, crushed",
                type: "garlic",
              },
              {
                entry:
                  "500g mushrooms, finely chopped (chestnut or button mushrooms work well)",
                type: "mushrooms",
              },
            ]),
            JSON.stringify([
              {
                Steps_id: 1,
                text: "Heat the butter in a large saucepan and cook the onions and garlic until soft but not browned, about 8-10 mins.",
              },
              {
                Steps_id: 2,
                text: "Add the mushrooms and cook over a high heat for another 3 mins until softened. Sprinkle over the flour and stir to combine. Pour in the chicken stock, bring the mixture to the boil, then add the bay leaf and simmer for another 10 mins.",
              },
              {
                Steps_id: 3,
                text: "Remove and discard the bay leaf, then remove the mushroom mixture from the heat and blitz using a hand blender until smooth. Gently reheat the soup and stir through the cream (or, you could freeze the soup at this stage – simply stir through the cream when heating). Scatter over the parsley, if you like, and serve.",
              },
            ]),
          ]);
          db.run(insert_recipes, [
            "Potted ham",
            "free",
            JSON.stringify([
              { entry: "250g pack unsalted butter", type: "butter" },
              { entry: "500g cooked ham", type: "ham" },
              {
                entry: "bunch curly parsley,leaves picked and finely chopped",
                type: "parsley",
              },
              {
                entry: "small pinch ground cloves",
                type: "cloves",
              },
              {
                entry: "pinch yellow mustard seeds",
                type: "mustard",
              },
            ]),
            JSON.stringify([
              {
                Steps_id: 1,
                text: "Gently melt the butter in a small pan and leave it to settle. Slowly pour the clear yellow fat from the melted butter into a small bowl or jug, leaving the milky liquid in the pan. Discard the milky bit. Pull apart and shred the ham as finely as possible into stringy strips use a knife to help if you need to.",
              },
              {
                Steps_id: 2,
                text: "Mix the ham with the parsley, spices, vinegar, two-thirds of the butter and a little crunchy sea salt. Divide between 8 small ramekins or pots. Press down and flatten the surface with your fingers, then spoon or pour over the remaining butter. Chill until butter is solid, then wrap in cling film. Will freeze for up to 3 months.",
              },
              {
                Steps_id: 3,
                text: "To serve, defrost the pots overnight in the fridge if frozen. Serve with toast, cornichons and chutney, or dip pots briefly in a bowl of hot water and turn the potted ham out onto plates first.",
              },
            ]),
          ]);
          db.run(insert_recipes, [
            "Easy chicken curry",
            "premium",
            JSON.stringify([
              { entry: "2 tbsp sunflower oil", type: "sunflower oil" },
              { entry: "1 onion, thinly sliced", type: "onion" },
              {
                entry: "2 garlic cloves, crushed",
                type: "garlic",
              },
              {
                entry: "400g can chopped tomatoes",
                type: "tomatoes",
              },
              {
                entry: "100g Greek yogurt",
                type: "yogurt",
              },
            ]),
            JSON.stringify([
              {
                Steps_id: 1,
                text: "Chop the chicken into chunky 3cm pieces, add to the pan and fry for 5 mins before stirring through the spice paste and tomatoes, along with 250ml water. Bring to the boil, lower to a simmer and cook on a gentle heat uncovered for 25-30 mins or until rich and slightly reduced. Stir though the yogurt, coriander and ground almonds, season and serve with warm naan or fluffy basmati rice.",
              },
              {
                Steps_id: 2,
                text: "Mix the ham with the parsley, spices, vinegar, two-thirds of the butter and a little crunchy sea salt. Divide between 8 small ramekins or pots. Press down and flatten the surface with your fingers, then spoon or pour over the remaining butter. Chill until butter is solid, then wrap in cling film. Will freeze for up to 3 months.",
              },
            ]),
          ]);
          db.run(insert_recipes, [
            "Easy bread rolls",
            "premium",
            JSON.stringify([
              {
                entry: "500g strong white bread flour, plus extra for dusting",
                type: "flour",
              },
              { entry: "1 onion, thinly sliced", type: "onion" },
              {
                entry: "7g sachet fast action yeast",
                type: "yeast",
              },
              {
                entry: "1 tsp white caster sugar",
                type: "sugar",
              },
              {
                entry:
                  "1 tsp sunflower oil, plus extra for the work surface and bowl",
                type: "sunflower oil",
              },
            ]),
            JSON.stringify([
              {
                Steps_id: 1,
                text: "Tip the flour, yeast, sugar, salt and oil into a bowl. Pour over 325ml warm water, then mix (with a spatula or your hand), until it comes together as a shaggy dough. Make sure all the flour has been incorporated. Cover and leave for 10 mins.",
              },
              {
                Steps_id: 2,
                text: "Lightly oil your work surface and tip the dough onto it. Knead the dough for at least 10 mins until it becomes tighter and springy – if you have a stand mixer you can do this with a dough hook for 5 mins. Pull the dough into a ball and put in a clean, oiled bowl. Leave for 1 hr, or until doubled in size.",
              },
              {
                Steps_id: 3,
                text: "Tip the dough onto a lightly floured surface and roll into a long sausage shape. Halve the dough, then divide each half into four pieces, so you have eight equal-sized portions. Roll each into a tight ball and put on a dusted baking tray, leaving some room between each ball for rising. Cover with a damp tea towel and leave in a warm place to prove for 40 mins-1 hr or until almost doubled in size.",
              },
              {
                Steps_id: 4,
                text: "Heat the oven to 230C/210C fan/gas 8. When the dough is ready, dust each ball with a bit more flour. (If you like, you can glaze the rolls with milk or beaten egg, and top with seeds.) Bake for 25-30mins, until light brown and hollow sounding when tapped on the base. Leave to cool on a wire rack.",
              },
            ]),
          ]);
        }
      }
    );
  }
});

module.exports = db;
