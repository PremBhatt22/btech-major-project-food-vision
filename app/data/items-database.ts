// Here we have list of items and their information required for our details/[itemSLug] page
export interface NutritionalValue {
  protein_g: number | null;
  sugar_g: number | null;
  carbs_g: number | null;
  fats_g: number | null;
}

export interface FoodItem {
  id: number;
  title: string;
  imageUrl: string | null;
  description: string | null;
  nutrition: NutritionalValue;
  is_healthy_percentage: number | null;
  recommended_daily_intake_qty: string | null;
}
// As our project grows, more and more food items will be added to the list
export const food101Data: FoodItem[] = [
  {
    id: 1,
    title: "apple_pie",
    imageUrl:
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg",
    description:
      "A dessert pie with a filling of sliced apples, often spiced with cinnamon.",
    nutrition: { protein_g: 2.1, sugar_g: 14.2, carbs_g: 34.1, fats_g: 11.4 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 slice (approx 125g)",
  },
  {
    id: 2,
    title: "baby_back_ribs",
    imageUrl:
      "https://images.pexels.com/photos/10091392/pexels-photo-10091392.jpeg",
    description:
      "Pork ribs from the top of the rib cage, known for being tender and lean.",
    nutrition: { protein_g: 25.0, sugar_g: 9.0, carbs_g: 10.0, fats_g: 18.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "100g",
  },
  {
    id: 3,
    title: "baklava",
    imageUrl:
      "https://images.pexels.com/photos/8741300/pexels-photo-8741300.jpeg",
    description:
      "A rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.",
    nutrition: { protein_g: 7.2, sugar_g: 23.2, carbs_g: 60.8, fats_g: 17.4 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 piece (approx 60g)",
  },
  {
    id: 4,
    title: "beef_carpaccio",
    imageUrl:
      "https://images.pexels.com/photos/8963286/pexels-photo-8963286.jpeg",
    description:
      "An Italian appetizer of thinly sliced raw beef, often served with a lemon-oil dressing, capers, and Parmesan.",
    nutrition: { protein_g: 20.0, sugar_g: 0.1, carbs_g: 1.0, fats_g: 8.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "100g",
  },
  {
    id: 5,
    title: "beef_tartare",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Classic_steak_tartare.jpg",
    description:
      "A dish of finely chopped raw beef, often served with onions, capers, and a raw egg yolk.",
    nutrition: { protein_g: 19.0, sugar_g: 1.0, carbs_g: 2.0, fats_g: 17.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "100g",
  },
  {
    id: 6,
    title: "beet_salad",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Beet_salad.jpg",
    description:
      "A refreshing mix of roasted beets, feta, and greens rich in fiber and antioxidants.",
    nutrition: { protein_g: 4, sugar_g: 9, carbs_g: 15, fats_g: 5 },
    is_healthy_percentage: 88,
    recommended_daily_intake_qty: "1 bowl (150g)",
  },
  {
    id: 7,
    title: "beignets",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Beignets_from_Caf%C3%A9_du_Monde_in_New_Orleans.jpg",
    description:
      "French-style deep-fried pastries dusted with powdered sugar — crispy outside, soft inside.",
    nutrition: { protein_g: 5, sugar_g: 22, carbs_g: 36, fats_g: 12 },
    is_healthy_percentage: 35,
    recommended_daily_intake_qty: "2 pieces (100g)",
  },
  {
    id: 8,
    title: "bibimbap",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Korean.cuisine-Bibimbap-09.jpg",
    description:
      "A Korean rice bowl topped with vegetables, egg, and spicy gochujang sauce.",
    nutrition: { protein_g: 12, sugar_g: 6, carbs_g: 55, fats_g: 10 },
    is_healthy_percentage: 82,
    recommended_daily_intake_qty: "1 bowl (300g)",
  },
  {
    id: 9,
    title: "bread_pudding",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Bread_pudding.jpg",
    description:
      "Warm baked dessert made from bread soaked in milk, eggs, and sugar.",
    nutrition: { protein_g: 8, sugar_g: 25, carbs_g: 48, fats_g: 12 },
    is_healthy_percentage: 45,
    recommended_daily_intake_qty: "1 cup (150g)",
  },
  {
    id: 10,
    title: "breakfast_burrito",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Breakfast_burritos_1.jpg",
    description:
      "A hearty wrap filled with scrambled eggs, cheese, and veggies or meat.",
    nutrition: { protein_g: 20, sugar_g: 4, carbs_g: 35, fats_g: 15 },
    is_healthy_percentage: 70,
    recommended_daily_intake_qty: "1 burrito (250g)",
  },
  {
    id: 11,
    title: "bruschetta",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Tomato_and_basil_bruschetta_%284925749658%29.jpg",
    description:
      "Toasted bread topped with tomatoes, basil, olive oil, and garlic — a light Italian appetizer.",
    nutrition: { protein_g: 6, sugar_g: 3, carbs_g: 20, fats_g: 7 },
    is_healthy_percentage: 84,
    recommended_daily_intake_qty: "3 slices (120g)",
  },
  {
    id: 12,
    title: "caesar_salad",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/A_Caesar_salad_with_chicken.jpg",
    description:
      "Classic salad with romaine lettuce, parmesan, and creamy dressing.",
    nutrition: { protein_g: 10, sugar_g: 2, carbs_g: 12, fats_g: 14 },
    is_healthy_percentage: 75,
    recommended_daily_intake_qty: "1 bowl (180g)",
  },
  {
    id: 13,
    title: "cannoli",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Cannolo_siciliano_with_chocolate_squares.jpg",
    description:
      "Crispy Italian pastry shells filled with sweet ricotta cream and chocolate chips.",
    nutrition: { protein_g: 6, sugar_g: 23, carbs_g: 30, fats_g: 16 },
    is_healthy_percentage: 40,
    recommended_daily_intake_qty: "1 piece (100g)",
  },
  {
    id: 14,
    title: "caprese_salad",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Insalata_caprese.jpg",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with olive oil and balsamic glaze.",
    nutrition: { protein_g: 8, sugar_g: 4, carbs_g: 10, fats_g: 10 },
    is_healthy_percentage: 88,
    recommended_daily_intake_qty: "1 plate (200g)",
  },
  {
    id: 15,
    title: "carrot_cake",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/A_carrot_cake_with_white_icing.jpg",
    description:
      "Moist spiced cake made with grated carrots and creamy frosting.",
    nutrition: { protein_g: 5, sugar_g: 26, carbs_g: 42, fats_g: 14 },
    is_healthy_percentage: 52,
    recommended_daily_intake_qty: "1 slice (120g)",
  },
  {
    id: 16,
    title: "ceviche",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ceviche_at_Peru.jpg",
    description:
      "A citrus-marinated seafood dish with lime, onion, and cilantro — light and tangy.",
    nutrition: { protein_g: 22, sugar_g: 2, carbs_g: 8, fats_g: 4 },
    is_healthy_percentage: 90,
    recommended_daily_intake_qty: "1 bowl (150g)",
  },
  {
    id: 17,
    title: "cheesecake",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/New_York-style_cheesecake_with_fruit.jpg",
    description:
      "Rich and creamy dessert with a biscuit crust and smooth cheese filling.",
    nutrition: { protein_g: 7, sugar_g: 25, carbs_g: 32, fats_g: 18 },
    is_healthy_percentage: 46,
    recommended_daily_intake_qty: "1 slice (130g)",
  },
  {
    id: 18,
    title: "cheese_plate",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Cheese_platter.jpg",
    description:
      "Assorted cheeses served with fruits, nuts, and crackers — a savory delight.",
    nutrition: { protein_g: 18, sugar_g: 4, carbs_g: 10, fats_g: 22 },
    is_healthy_percentage: 68,
    recommended_daily_intake_qty: "1 plate (150g)",
  },
  {
    id: 19,
    title: "chicken_curry",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chicken_Curry_North_Indian_Style.jpg",
    description:
      "Tender chicken simmered in spiced curry sauce — rich in protein and flavor.",
    nutrition: { protein_g: 28, sugar_g: 5, carbs_g: 15, fats_g: 12 },
    is_healthy_percentage: 80,
    recommended_daily_intake_qty: "1 bowl (250g)",
  },
  {
    id: 20,
    title: "chicken_quesadilla",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Chicken_quesadilla.jpg",
    description:
      "Grilled tortilla stuffed with chicken, cheese, and veggies — Mexican classic.",
    nutrition: { protein_g: 25, sugar_g: 3, carbs_g: 35, fats_g: 14 },
    is_healthy_percentage: 72,
    recommended_daily_intake_qty: "1 quesadilla (220g)",
  },
  {
    id: 21,
    title: "chicken_wings",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Chicken_Wings%2C_2013_%2801%29.jpg",
    description: "Crispy fried chicken wings coated with spicy or tangy sauce.",
    nutrition: { protein_g: 20, sugar_g: 6, carbs_g: 12, fats_g: 16 },
    is_healthy_percentage: 60,
    recommended_daily_intake_qty: "6 wings (180g)",
  },
  {
    id: 22,
    title: "chocolate_cake",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Chocolate_cake_with_chocolate_frosting.jpg",
    description:
      "Rich, moist chocolate cake layered with frosting — a dessert classic.",
    nutrition: { protein_g: 6, sugar_g: 28, carbs_g: 45, fats_g: 15 },
    is_healthy_percentage: 44,
    recommended_daily_intake_qty: "1 slice (120g)",
  },
  {
    id: 23,
    title: "chocolate_mousse",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Chocolate_mousse_with_chocolate_sauce_and_chocolate_plu-ot.jpg",
    description:
      "Smooth, airy dessert made with whipped cream and melted chocolate.",
    nutrition: { protein_g: 5, sugar_g: 20, carbs_g: 25, fats_g: 18 },
    is_healthy_percentage: 50,
    recommended_daily_intake_qty: "1 cup (100g)",
  },
  {
    id: 24,
    title: "churros",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Churros_with_chocolate_at_Valor_Madrid.jpg",
    description:
      "Crispy fried dough sticks coated with cinnamon sugar, often served with chocolate dip.",
    nutrition: { protein_g: 4, sugar_g: 24, carbs_g: 36, fats_g: 12 },
    is_healthy_percentage: 38,
    recommended_daily_intake_qty: "3 pieces (120g)",
  },
  {
    id: 25,
    title: "clam_chowder",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Clam_chowder_in_a_bread_bowl.jpg",
    description:
      "Creamy soup made with clams, potatoes, and celery — hearty and flavorful.",
    nutrition: { protein_g: 12, sugar_g: 4, carbs_g: 20, fats_g: 10 },
    is_healthy_percentage: 68,
    recommended_daily_intake_qty: "1 bowl (250g)",
  },
  {
    id: 26,
    title: "club_sandwich",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Club-sandwich.jpg",
    description:
      "Triple-layer sandwich with turkey, bacon, lettuce, and tomato.",
    nutrition: { protein_g: 22, sugar_g: 6, carbs_g: 32, fats_g: 14 },
    is_healthy_percentage: 74,
    recommended_daily_intake_qty: "1 sandwich (220g)",
  },
  {
    id: 27,
    title: "crab_cakes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Crab_cakes_at_a_restaurant.jpg",
    description:
      "Pan-fried patties made from crab meat and breadcrumbs — savory and rich.",
    nutrition: { protein_g: 18, sugar_g: 2, carbs_g: 14, fats_g: 10 },
    is_healthy_percentage: 82,
    recommended_daily_intake_qty: "2 cakes (160g)",
  },
  {
    id: 28,
    title: "creme_brulee",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Cr%C3%A8me_br%C3%BBl%C3%A9e_1.jpg",
    description:
      "Silky custard topped with a crisp layer of caramelized sugar.",
    nutrition: { protein_g: 6, sugar_g: 24, carbs_g: 26, fats_g: 16 },
    is_healthy_percentage: 48,
    recommended_daily_intake_qty: "1 bowl (120g)",
  },
  {
    id: 29,
    title: "croque_madame",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Croque-madame_01.jpg",
    description:
      "French toasted sandwich with ham, cheese, and fried egg on top.",
    nutrition: { protein_g: 24, sugar_g: 3, carbs_g: 30, fats_g: 20 },
    is_healthy_percentage: 70,
    recommended_daily_intake_qty: "1 sandwich (250g)",
  },
  {
    id: 30,
    title: "cupcakes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Chocolate_cupcakes_with_frosting_and_red_sprinkles.jpg",
    description:
      "Mini cakes topped with frosting — sweet, colorful, and perfect for parties.",
    nutrition: { protein_g: 4, sugar_g: 28, carbs_g: 40, fats_g: 14 },
    is_healthy_percentage: 40,
    recommended_daily_intake_qty: "1 cupcake (100g)",
  },
  {
    id: 31,
    title: "Avocado Toast",
    description:
      "Whole-grain toast topped with mashed avocado, olive oil, and a sprinkle of chili flakes — a creamy, nutrient-rich breakfast option.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Avocado_toast_with_eggs_%2828508171495%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 6, carbs_g: 22, fats_g: 16 },
    is_healthy_percentage: 88,
    recommended_daily_intake_qty: "1 or 2 slices",
  },
  {
    id: 32,
    title: "Chicken Caesar Salad",
    description:
      "Grilled chicken breast served over romaine lettuce with parmesan, croutons, and Caesar dressing.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/A_Caesar_salad_with_chicken.jpg",
    nutrition: { sugar_g: 1, protein_g: 30, carbs_g: 12, fats_g: 18 },
    is_healthy_percentage: 80,
    recommended_daily_intake_qty: "1 medium bowl",
  },
  {
    id: 33,
    title: "Paneer Tikka",
    description:
      "Chunks of cottage cheese marinated in spiced yogurt and grilled to smoky perfection — a protein-packed Indian appetizer.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Paneer_tikka%2C_as_served_in_a_restaurant_in_Goa%2C_India.jpg",
    nutrition: { sugar_g: 1, protein_g: 22, carbs_g: 6, fats_g: 20 },
    is_healthy_percentage: 78,
    recommended_daily_intake_qty: "4 or 5 cubes",
  },
  {
    id: 34,
    title: "Grilled Salmon",
    description:
      "Fresh salmon fillet grilled with lemon and herbs, providing omega-3s and lean protein.",
    imageUrl:
      "https://images.pexels.com/photos/376369/pexels-photo-376369.jpeg",
    nutrition: { sugar_g: 1, protein_g: 34, carbs_g: 0, fats_g: 24 },
    is_healthy_percentage: 92,
    recommended_daily_intake_qty: "150g fillet",
  },
  {
    id: 35,
    title: "Berry Smoothie Bowl",
    description:
      "A blend of mixed berries, yogurt, and granola topped with banana slices — sweet and antioxidant-rich.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Mango_berry_smoothie_bowl_.jpg",
    nutrition: { sugar_g: 1, protein_g: 8, carbs_g: 42, fats_g: 7 },
    is_healthy_percentage: 85,
    recommended_daily_intake_qty: "1 small bowl",
  },
  {
    id: 36,
    title: "Beetroot Hummus",
    description:
      "Creamy chickpea hummus blended with roasted beetroot — earthy, colorful, and rich in plant protein.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Homemade_Beetroot_Hummus.jpg",
    nutrition: { sugar_g: 1, protein_g: 6, carbs_g: 18, fats_g: 9 },
    is_healthy_percentage: 89,
    recommended_daily_intake_qty: "2 or 3 tbsp",
  },
  {
    id: 37,
    title: "Egg Fried Rice",
    description:
      "Fluffy rice stir-fried with scrambled eggs, peas, and soy sauce for a quick, satisfying meal.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Egg_Fried_rice.jpg",
    nutrition: { sugar_g: 1, protein_g: 12, carbs_g: 55, fats_g: 13 },
    is_healthy_percentage: 72,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 38,
    title: "Greek Yogurt Parfait",
    description:
      "Layers of Greek yogurt, honey, and fresh fruits — high in protein and probiotics.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Greek_yogurt_parfait_with_fruit_and_granola.jpg",
    nutrition: { sugar_g: 1, protein_g: 10, carbs_g: 25, fats_g: 7 },
    is_healthy_percentage: 90,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 39,
    title: "Quinoa Pilaf",
    description:
      "A hearty pilaf made with quinoa, vegetables, and mild spices — a gluten-free complete meal.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Quinoa_pilaf_with_vegetables.jpg",
    nutrition: { sugar_g: 1, protein_g: 9, carbs_g: 45, fats_g: 7 },
    is_healthy_percentage: 87,
    recommended_daily_intake_qty: "1 medium bowl",
  },
  {
    id: 40,
    title: "Banana Pancakes",
    description:
      "Soft, fluffy pancakes made with mashed bananas and whole wheat flour — naturally sweet and fiber-rich.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Banana_Pancakes_Pk021.jpg",
    nutrition: { sugar_g: 1, protein_g: 8, carbs_g: 58, fats_g: 6 },
    is_healthy_percentage: 75,
    recommended_daily_intake_qty: "2 medium pancakes",
  },
  {
    id: 41,
    title: "Vegetable Soup",
    description:
      "A light broth packed with carrots, beans, and cabbage — hydrating and full of vitamins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Vegetable_soup_%2831727855304%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 4, carbs_g: 18, fats_g: 3 },
    is_healthy_percentage: 93,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 42,
    title: "Spinach Omelette",
    description:
      "Fluffy omelette loaded with spinach, onions, and a pinch of pepper — simple yet nutritious.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Omelette_with_spinach_and_cheese.jpg",
    nutrition: { sugar_g: 1, protein_g: 16, carbs_g: 2, fats_g: 16 },
    is_healthy_percentage: 88,
    recommended_daily_intake_qty: "1 large omelette",
  },
  {
    id: 43,
    title: "Lentil Curry (Dal)",
    description:
      "A hearty Indian lentil stew cooked with turmeric and cumin — packed with protein and comfort.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Red_Lentil_Dal_%28Tadka_Dal%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 13, carbs_g: 28, fats_g: 6 },
    is_healthy_percentage: 91,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 44,
    title: "Tofu Stir-Fry",
    description:
      "Crispy tofu tossed with colorful vegetables in light soy sauce — high in plant protein and low in fat.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tofu_stir-fry_with_broccoli_and_peppers.jpg",
    nutrition: { sugar_g: 1, protein_g: 18, carbs_g: 15, fats_g: 14 },
    is_healthy_percentage: 89,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 45,
    title: "Pasta Primavera",
    description:
      "Whole-grain pasta tossed with sautéed vegetables and olive oil — a balanced Italian classic.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Pasta_Primavera_in_a_white_bowl.jpg",
    nutrition: { sugar_g: 1, protein_g: 12, carbs_g: 52, fats_g: 11 },
    is_healthy_percentage: 80,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 46,
    title: "Oatmeal Bowl",
    description:
      "Creamy oats cooked in milk and topped with nuts and fruits — a wholesome start to your day.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Oatmeal_with_berries.jpg",
    nutrition: { sugar_g: 1, protein_g: 9, carbs_g: 38, fats_g: 7 },
    is_healthy_percentage: 90,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 47,
    title: "Veg Burrito",
    description:
      "A Mexican-style wrap with beans, rice, and salsa — hearty, flavorful, and full of fiber.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Veggie_Burrito_Nuremberg.jpg",
    nutrition: { sugar_g: 1, protein_g: 14, carbs_g: 60, fats_g: 14 },
    is_healthy_percentage: 78,
    recommended_daily_intake_qty: "1 burrito",
  },
  {
    id: 48,
    title: "Shrimp Tacos",
    description:
      "Grilled shrimp wrapped in soft tortillas with slaw and lime crema — light yet indulgent.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Shrimp_Tacos_%288161987260%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 22, carbs_g: 26, fats_g: 12 },
    is_healthy_percentage: 83,
    recommended_daily_intake_qty: "2 tacos",
  },
  {
    id: 49,
    title: "Falafel Wrap",
    description:
      "Crispy chickpea falafels rolled in pita with tahini and veggies — a Mediterranean favorite.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Falafel_wrap_in_Amman.jpg",
    nutrition: { sugar_g: 1, protein_g: 12, carbs_g: 46, fats_g: 16 },
    is_healthy_percentage: 81,
    recommended_daily_intake_qty: "1 wrap",
  },
  {
    id: 50,
    title: "Peanut Butter Smoothie",
    description:
      "A creamy protein shake made with banana, milk, and peanut butter — energy-boosting and filling.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Peanut_Butter_Banana_Smoothie.jpg",
    nutrition: { sugar_g: 1, protein_g: 14, carbs_g: 30, fats_g: 18 },
    is_healthy_percentage: 82,
    recommended_daily_intake_qty: "1 glass",
  },
  {
    id: 51,
    title: "Stuffed Bell Peppers",
    description:
      "Bell peppers baked with quinoa, vegetables, and light cheese — colorful, hearty, and full of nutrients.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Stuffed_bell_peppers_Karnataka_DSC0001.jpg",
    nutrition: { sugar_g: 1, protein_g: 10, carbs_g: 32, fats_g: 10 },
    is_healthy_percentage: 86,
    recommended_daily_intake_qty: "1 or 2 pieces",
  },
  {
    id: 52,
    title: "Mushroom Risotto",
    description:
      "Creamy Italian risotto infused with mushrooms and parmesan — comforting and rich.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Mushroom_risotto_with_truffle_oil.jpg",
    nutrition: { sugar_g: 1, protein_g: 12, carbs_g: 58, fats_g: 14 },
    is_healthy_percentage: 77,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 53,
    title: "Fruit Salad",
    description:
      "A refreshing mix of tropical fruits like mango, apple, and papaya — natural sugar with vitamins.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/A_fruit_salad.jpg",
    nutrition: { sugar_g: 1, protein_g: 2, carbs_g: 38, fats_g: 1 },
    is_healthy_percentage: 95,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 54,
    title: "Grilled Cheese Sandwich",
    description:
      "Classic butter-grilled sandwich with melted cheese — golden, crisp, and comforting.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Classic_Grilled_Cheese_Sandwich_%2825791331763%29_%28cropped%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 12, carbs_g: 28, fats_g: 22 },
    is_healthy_percentage: 68,
    recommended_daily_intake_qty: "1 sandwich",
  },
  {
    id: 55,
    title: "Cucumber Lemon Detox Water",
    description:
      "Infused water with cucumber, mint, and lemon — hydrating and cleansing.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Infused_water_with_cucumber%2C_lemon_and_mint.jpg",
    nutrition: { sugar_g: 1, protein_g: 0, carbs_g: 2, fats_g: 0 },
    is_healthy_percentage: 99,
    recommended_daily_intake_qty: "2 or 3 glasses",
  },
  {
    id: 56,
    title: "Chicken Soup",
    description:
      "A light, flavorful broth with shredded chicken and vegetables — soothing and nutritious.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Chicken_noodle_soup.jpg",
    nutrition: { sugar_g: 1, protein_g: 18, carbs_g: 8, fats_g: 10 },
    is_healthy_percentage: 88,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 57,
    title: "Chickpea Salad",
    description:
      "A protein-packed salad with chickpeas, cucumber, and olive oil dressing — fiber-rich and filling.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Chickpea_salad_w-_lambs_lettuce%2C_flax_seeds%2C_oregano_and_balsamic_vinegar_%288005908417%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 11, carbs_g: 30, fats_g: 9 },
    is_healthy_percentage: 91,
    recommended_daily_intake_qty: "1 medium bowl",
  },
  {
    id: 58,
    title: "Egg Muffins",
    description:
      "Mini baked omelettes with vegetables and cheese — great for breakfast or snacks.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Egg-muffin_%2849218808517%29.jpg",
    nutrition: { sugar_g: 1, protein_g: 10, carbs_g: 3, fats_g: 15 },
    is_healthy_percentage: 85,
    recommended_daily_intake_qty: "2 muffins",
  },
  {
    id: 59,
    title: "Ragi Dosa",
    description:
      "A South Indian crepe made from finger millet flour — gluten-free and rich in calcium.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ragi_Dosa.jpg",
    nutrition: { sugar_g: 1, protein_g: 8, carbs_g: 30, fats_g: 7 },
    is_healthy_percentage: 90,
    recommended_daily_intake_qty: "2 dosas",
  },
  {
    id: 61,
    title: "lobster_roll_sandwich",
    imageUrl:
      "https://images.pexels.com/photos/3927389/pexels-photo-3927389.jpeg",
    description:
      "A sandwich native to New England, made with lobster meat, (often butter- or mayo-based sauce), served in a hot dog-style bun.",
    nutrition: { protein_g: 14.0, sugar_g: 3.0, carbs_g: 20.0, fats_g: 15.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 roll",
  },
  {
    id: 62,
    title: "macaroni_and_cheese",
    imageUrl:
      "https://images.pexels.com/photos/1729013/pexels-photo-1729013.jpeg",
    description:
      "A dish of cooked macaroni pasta and a cheese sauce, typically cheddar. A classic comfort food.",
    nutrition: { protein_g: 5.0, sugar_g: 2.0, carbs_g: 20.0, fats_g: 12.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 cup (approx 200g)",
  },
  {
    id: 63,
    title: "macarons",
    imageUrl:
      "https://images.pexels.com/photos/2067405/pexels-photo-2067405.jpeg",
    description:
      "A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring.",
    nutrition: { protein_g: 9.0, sugar_g: 50.0, carbs_g: 55.0, fats_g: 20.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "2-3 pieces",
  },
  {
    id: 64,
    title: "miso_soup",
    imageUrl:
      "https://images.pexels.com/photos/9546051/pexels-photo-9546051.jpeg",
    description:
      "A traditional Japanese soup consisting of a dashi stock into which softened miso paste is mixed, often with tofu and seaweed.",
    nutrition: { protein_g: 2.0, sugar_g: 1.5, carbs_g: 4.0, fats_g: 1.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 bowl (approx 240g)",
  },
  {
    id: 65,
    title: "mussels",
    imageUrl:
      "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg",
    description:
      "A type of bivalve mollusc, commonly steamed in wine and garlic or served with various sauces.",
    nutrition: { protein_g: 24.0, sugar_g: 1.0, carbs_g: 7.0, fats_g: 4.5 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving (approx 150g)",
  },
  {
    id: 66,
    title: "nachos",
    imageUrl:
      "https://images.pexels.com/photos/4959049/pexels-photo-4959049.jpeg",
    description:
      "A dish consisting of tortilla chips covered with melted cheese or cheese sauce, often with toppings like jalapeños and salsa.",
    nutrition: { protein_g: 12.0, sugar_g: 2.0, carbs_g: 35.0, fats_g: 20.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 plate (approx 150g)",
  },
  {
    id: 67,
    title: "omelette",
    imageUrl:
      "https://images.pexels.com/photos/5916531/pexels-photo-5916531.jpeg",
    description:
      "A dish made from beaten eggs, fried with butter or oil in a frying pan. Often folded with fillings like cheese, or vegetables.",
    nutrition: { protein_g: 13.0, sugar_g: 0.8, carbs_g: 1.0, fats_g: 15.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 omelette (approx 120g)",
  },
  {
    id: 68,
    title: "onion_rings",
    imageUrl:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
    description:
      "A side dish made from cross-sectional 'rings' of onion dipped in batter or breadcrumbs and then deep-fried.",
    nutrition: { protein_g: 4.0, sugar_g: 5.0, carbs_g: 40.0, fats_g: 20.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving (approx 85g)",
  },
  {
    id: 69,
    title: "oysters",
    imageUrl:
      "https://images.pexels.com/photos/103120/pexels-photo-103120.jpeg",
    description:
      "A type of bivalve mollusc, often eaten raw on the half-shell with lemon juice or hot sauce.",
    nutrition: { protein_g: 7.0, sugar_g: 0.5, carbs_g: 4.0, fats_g: 2.5 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "6 oysters",
  },
  {
    id: 70,
    title: "pad_thai",
    imageUrl:
      "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    description:
      "A stir-fried rice noodle dish from Thailand, commonly made with noodles, shrimp or chicken, tofu, peanuts, and a sweet-savory sauce.",
    nutrition: { protein_g: 7.0, sugar_g: 5.0, carbs_g: 18.0, fats_g: 6.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 plate (approx 300g)",
  },
  {
    id: 71,
    title: "paella",
    imageUrl:
      "https://images.pexels.com/photos/159293/paella-pan-rice-food-159293.jpeg",
    description:
      "A Spanish rice dish from Valencia, traditionally cooked in a large pan with saffron, vegetables, chicken, and/or seafood.",
    nutrition: { protein_g: 10.0, sugar_g: 1.5, carbs_g: 20.0, fats_g: 5.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving (approx 250g)",
  },
  {
    id: 72,
    title: "pancakes",
    imageUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    description:
      "A flat cake, often thin and round, prepared from a batter and cooked on a hot surface. Often served with syrup or fruit.",
    nutrition: { protein_g: 6.0, sugar_g: 6.0, carbs_g: 28.0, fats_g: 10.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "3 pancakes",
  },
  {
    id: 73,
    title: "panna_cotta",
    imageUrl:
      "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg",
    description:
      "An Italian dessert of sweetened cream thickened with gelatin and molded. Often topped with a fruit coulis.",
    nutrition: { protein_g: 3.0, sugar_g: 18.0, carbs_g: 19.0, fats_g: 15.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 ramekin (approx 120g)",
  },
  {
    id: 74,
    title: "peking_duck",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Peking_duck_in_Beijing.jpg",
    description:
      "A famous duck dish from Beijing, prized for its thin, crisp skin. Often served with pancakes, scallions, and hoisin sauce.",
    nutrition: { protein_g: 19.0, sugar_g: 0.5, carbs_g: 3.0, fats_g: 34.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving (approx 100g)",
  },
  {
    id: 75,
    title: "pho",
    imageUrl:
      "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
    description:
      "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat (usually beef or chicken).",
    nutrition: { protein_g: 4.0, sugar_g: 1.0, carbs_g: 8.0, fats_g: 2.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 large bowl (approx 500g)",
  },
  {
    id: 76,
    title: "pizza",
    imageUrl:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
    description:
      "An Italian dish of a flat, round base of dough topped with tomatoes, cheese, and various other ingredients.",
    nutrition: { protein_g: 11.0, sugar_g: 4.0, carbs_g: 33.0, fats_g: 10.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "2 slices",
  },
  {
    id: 77,
    title: "pork_chop",
    imageUrl: "https://www.freepik.com/free-photos-vectors/grilled-pork-chops",
    description:
      "A cut of pork taken perpendicular to the spine, often containing a rib or part of a vertebra. Usually grilled, fried, or baked.",
    nutrition: { protein_g: 29.0, sugar_g: 0.0, carbs_g: 0.0, fats_g: 15.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 chop (approx 150g)",
  },
  {
    id: 78,
    title: "poutine",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Poutine.jpg",
    description:
      "A Canadian dish of french fries and cheese curds topped with a brown gravy.",
    nutrition: { protein_g: 6.0, sugar_g: 1.0, carbs_g: 20.0, fats_g: 14.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 small bowl (approx 200g)",
  },
  {
    id: 79,
    title: "prime_rib",
    imageUrl:
      "https://images.pexels.com/photos/13529944/pexels-photo-13529944.jpeg",
    description:
      "A rich roast beef cut from the primal rib, known for its tender meat and high (but flavorful) fat content.",
    nutrition: { protein_g: 24.0, sugar_g: 0.0, carbs_g: 0.0, fats_g: 25.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 slice (approx 170g)",
  },
  {
    id: 80,
    title: "pulled_pork_sandwich",
    imageUrl:
      "https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg",
    description:
      "A sandwich made with slow-cooked, shredded pork, mixed with barbecue sauce and served on a bun.",
    nutrition: { protein_g: 10.0, sugar_g: 7.0, carbs_g: 20.0, fats_g: 7.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 sandwich",
  },
  {
    id: 81,
    title: "ramen",
    imageUrl:
      "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg",
    description:
      "A Japanese noodle soup, with a rich-flavored broth, noodles, and toppings like pork, a soft-boiled egg, and scallions.",
    nutrition: { protein_g: 5.0, sugar_g: 2.0, carbs_g: 14.0, fats_g: 3.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 bowl (approx 500g)",
  },
  {
    id: 82,
    title: "ravioli",
    imageUrl:
      "https://images.pexels.com/photos/1484674/pexels-photo-1484674.jpeg",
    description:
      "A type of pasta comprising a filling (like cheese or meat) enveloped in thin pasta dough.",
    nutrition: { protein_g: 8.0, sugar_g: 2.0, carbs_g: 25.0, fats_g: 6.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 cup (approx 150g)",
  },
  {
    id: 83,
    title: "red_velvet_cake",
    imageUrl:
      "https://images.pexels.com/photos/3026283/pexels-photo-3026283.jpeg",
    description:
      "A striking red or reddish-brown layered cake with a cream cheese icing.",
    nutrition: { protein_g: 4.0, sugar_g: 40.0, carbs_g: 55.0, fats_g: 20.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 slice (approx 100g)",
  },
  {
    id: 84,
    title: "risotto",
    imageUrl:
      "https://images.pexels.com/photos/12842263/pexels-photo-12842263.jpeg",
    description:
      "An Italian rice dish cooked with broth until it reaches a creamy consistency. Often mixed with butter, cheese, and other ingredients.",
    nutrition: { protein_g: 5.0, sugar_g: 1.0, carbs_g: 20.0, fats_g: 4.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 cup (approx 200g)",
  },
  {
    id: 85,
    title: "samosa",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Samosa-and-Chatni.jpg",
    description:
      "A fried or baked South Asian pastry with a savory filling, such as spiced potatoes, onions, peas, or meat.",
    nutrition: { protein_g: 5.0, sugar_g: 2.0, carbs_g: 32.0, fats_g: 17.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "2 pieces",
  },
  {
    id: 86,
    title: "sashimi",
    imageUrl:
      "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg",
    description:
      "A Japanese delicacy of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce.",
    nutrition: { protein_g: 25.0, sugar_g: 0.0, carbs_g: 0.0, fats_g: 3.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "100g",
  },
  {
    id: 87,
    title: "scallops",
    imageUrl:
      "https://images.pexels.com/photos/793740/pexels-photo-793740.jpeg",
    description:
      "A type of bivalve mollusc, where the adductor muscle is the part most often eaten. Often pan-seared.",
    nutrition: { protein_g: 17.0, sugar_g: 0.0, carbs_g: 2.5, fats_g: 0.5 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "100g",
  },
  {
    id: 88,
    title: "seaweed_salad",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Chuka-Wakame-Salat_2011.jpg",
    description:
      "A Japanese salad made with various types of seaweed, often seasoned with sesame oil, soy sauce, and vinegar.",
    nutrition: { protein_g: 3.0, sugar_g: 4.0, carbs_g: 17.0, fats_g: 6.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 cup (approx 100g)",
  },
  {
    id: 89,
    title: "shrimp_and_grits",
    imageUrl:
      "https://images.pexels.com/photos/5639603/pexels-photo-5639603.jpeg",
    description:
      "A traditional dish from the Southern United States consisting of grits (ground corn) and shrimp.",
    nutrition: { protein_g: 9.0, sugar_g: 2.0, carbs_g: 12.0, fats_g: 8.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 bowl (approx 250g)",
  },
  {
    id: 90,
    title: "spaghetti_bolognese",
    imageUrl:
      "https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg",
    description:
      "A pasta dish consisting of spaghetti served with a meat-based sauce originating from Bologna, Italy.",
    nutrition: { protein_g: 8.0, sugar_g: 4.0, carbs_g: 20.0, fats_g: 5.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving (approx 200g)",
  },
  {
    id: 91,
    title: "spaghetti_carbonara",
    imageUrl:
      "https://images.pexels.com/photos/1256873/pexels-photo-1256873.jpeg",
    description:
      "An Italian pasta dish from Rome made with eggs, hard cheese (Pecorino or Parmesan), cured pork (guanciale), and pepper.",
    nutrition: { protein_g: 12.0, sugar_g: 1.0, carbs_g: 30.0, fats_g: 15.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving (approx 200g)",
  },
  {
    id: 92,
    title: "spring_rolls",
    imageUrl:
      "https://images.pexels.com/photos/4033668/pexels-photo-4033668.jpeg",
    description:
      "A savory snack, typically a thin pastry wrapper filled with minced vegetables or meat, rolled and deep-fried.",
    nutrition: { protein_g: 4.0, sugar_g: 3.0, carbs_g: 25.0, fats_g: 10.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "3 pieces",
  },
  {
    id: 93,
    title: "steak",
    imageUrl:
      "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg",
    description:
      "A cut of meat (usually beef) sliced perpendicular to the muscle fibers, typically grilled, pan-fried, or broiled.",
    nutrition: { protein_g: 29.0, sugar_g: 0.0, carbs_g: 0.0, fats_g: 15.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 steak (approx 200g)",
  },
  {
    id: 94,
    title: "strawberry_shortcake",
    imageUrl: "https://images.pexels.com/photos/34300/pexels-photo.jpg",
    description:
      "A dessert consisting of a sweet biscuit or cake, layered with fresh strawberries and whipped cream.",
    nutrition: { protein_g: 3.0, sugar_g: 20.0, carbs_g: 35.0, fats_g: 10.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 serving",
  },
  {
    id: 95,
    title: "sushi",
    imageUrl:
      "https://images.pexels.com/photos/1132040/pexels-photo-1132040.jpeg",
    description:
      "A Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood or vegetables.",
    nutrition: { protein_g: 9.0, sugar_g: 6.0, carbs_g: 28.0, fats_g: 4.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "6-8 pieces (1 roll)",
  },
  {
    id: 96,
    title: "tacos",
    imageUrl:
      "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg",
    description:
      "A traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling.",
    nutrition: { protein_g: 12.0, sugar_g: 2.0, carbs_g: 20.0, fats_g: 14.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "2 tacos",
  },
  {
    id: 97,
    title: "takoyaki",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Takoyaki_in_Taiwan.jpg",
    description:
      "A ball-shaped Japanese snack made of a wheat flour-based batter and cooked in a special molded pan, filled with octopus.",
    nutrition: { protein_g: 5.0, sugar_g: 2.0, carbs_g: 15.0, fats_g: 7.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "6 pieces",
  },
  {
    id: 98,
    title: "tiramisu",
    imageUrl:
      "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg",
    description:
      "A coffee-flavoured Italian dessert made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese.",
    nutrition: { protein_g: 6.0, sugar_g: 20.0, carbs_g: 30.0, fats_g: 18.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 slice (approx 120g)",
  },
  {
    id: 99,
    title: "tuna_tartare",
    imageUrl:
      "https://images.pexels.com/photos/8991475/pexels-photo-8991475.jpeg",
    description:
      "A dish made from finely chopped raw tuna, often mixed with avocado, onions, and a soy-based dressing.",
    nutrition: { protein_g: 24.0, sugar_g: 1.0, carbs_g: 3.0, fats_g: 7.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "100g",
  },
  {
    id: 100,
    title: "waffles",
    imageUrl:
      "https://images.pexels.com/photos/128846/pexels-photo-128846.jpeg",
    description:
      "A dish made from leavened batter or dough that is cooked between two plates, patterned to give a characteristic size, shape, and surface impression.",
    nutrition: { protein_g: 8.0, sugar_g: 10.0, carbs_g: 45.0, fats_g: 10.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "2 waffles",
  },
  {
    id: 101,
    title: "foie_gras",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Foie_gras_de_canard_cuit_au_torchon_par_Fr%C3%A9d%C3%A9ric_Anton.jpg",
    description:
      "A luxury food product made of the liver of a duck or goose that has been specially fattened.",
    nutrition: { protein_g: 11.0, sugar_g: 2.0, carbs_g: 4.0, fats_g: 44.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "1 slice (approx 50g)",
  },
  {
    id: 101,
    title: "macarons",
    imageUrl:
      "https://images.pexels.com/photos/2067405/pexels-photo-2067405.jpeg",
    description:
      "A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring.",
    nutrition: { protein_g: 9.0, sugar_g: 50.0, carbs_g: 55.0, fats_g: 20.0 },
    is_healthy_percentage: null,
    recommended_daily_intake_qty: "2-3 pieces",
  },
  {
    id: 102,
    title: "cup_cakes",
    imageUrl: null,
    description:
      "Small individual cakes baked in a thin paper or aluminum cup, often topped with frosting.",
    nutrition: { protein_g: 4.5, sugar_g: 30.0, carbs_g: 50.0, fats_g: 18.0 },
    is_healthy_percentage: 28,
    recommended_daily_intake_qty: "1 cupcake",
  },
  {
    id: 103,
    title: "deviled_eggs",
    imageUrl: null,
    description:
      "Hard-boiled eggs, shelled, cut in half, and filled with the egg yolk mixed with mayonnaise and mustard.",
    nutrition: { protein_g: 13.0, sugar_g: 1.0, carbs_g: 1.2, fats_g: 15.0 },
    is_healthy_percentage: 72,
    recommended_daily_intake_qty: "2 halves",
  },
  {
    id: 104,
    title: "donuts",
    imageUrl: null,
    description:
      "A type of fried dough. Sweet, often glazed, frosted, or filled.",
    nutrition: { protein_g: 5.0, sugar_g: 28.0, carbs_g: 45.0, fats_g: 25.0 },
    is_healthy_percentage: 22,
    recommended_daily_intake_qty: "1 donut",
  },
  {
    id: 105,
    title: "dumplings",
    imageUrl: null,
    description:
      "A broad class of dishes that consist of pieces of dough wrapped around a filling (e.g., meat, vegetables).",
    nutrition: { protein_g: 10.0, sugar_g: 2.0, carbs_g: 25.0, fats_g: 8.0 },
    is_healthy_percentage: 63,
    recommended_daily_intake_qty: "4-5 pieces",
  },
  {
    id: 106,
    title: "edamame",
    imageUrl: null,
    description:
      "Immature soybeans in the pod, found in cuisines with origins in East Asia. Often boiled or steamed.",
    nutrition: { protein_g: 12.0, sugar_g: 2.2, carbs_g: 10.0, fats_g: 5.0 },
    is_healthy_percentage: 89,
    recommended_daily_intake_qty: "1 cup (in pods)",
  },
  {
    id: 107,
    title: "eggs_benedict",
    imageUrl: null,
    description:
      "An American breakfast dish: two halves of an English muffin, topped with Canadian bacon, a poached egg, and hollandaise sauce.",
    nutrition: { protein_g: 12.0, sugar_g: 1.5, carbs_g: 15.0, fats_g: 18.0 },
    is_healthy_percentage: 58,
    recommended_daily_intake_qty: "1 serving",
  },
  {
    id: 108,
    title: "escargots",
    imageUrl: null,
    description:
      "A dish of cooked land snails, usually served as an appetizer in French cuisine, often with garlic butter.",
    nutrition: { protein_g: 15.0, sugar_g: 1.0, carbs_g: 2.0, fats_g: 10.0 },
    is_healthy_percentage: 67,
    recommended_daily_intake_qty: "6-8 snails",
  },
  {
    id: 109,
    title: "falafel",
    imageUrl: null,
    description:
      "A deep-fried ball or patty made from ground chickpeas, fava beans, or both.",
    nutrition: { protein_g: 13.0, sugar_g: 3.0, carbs_g: 32.0, fats_g: 18.0 },
    is_healthy_percentage: 61,
    recommended_daily_intake_qty: "3-4 pieces",
  },
  {
    id: 110,
    title: "filet_mignon",
    imageUrl: null,
    description:
      "A steak cut of beef taken from the smaller end of the tenderloin, known for its tenderness.",
    nutrition: { protein_g: 28.0, sugar_g: 0.0, carbs_g: 0.0, fats_g: 20.0 },
    is_healthy_percentage: 74,
    recommended_daily_intake_qty: "1 steak (approx 170g)",
  },
  {
    id: 111,
    title: "fish_and_chips",
    imageUrl: null,
    description:
      "A hot dish consisting of fried battered fish and hot chips (french fries).",
    nutrition: { protein_g: 10.0, sugar_g: 1.0, carbs_g: 25.0, fats_g: 15.0 },
    is_healthy_percentage: 46,
    recommended_daily_intake_qty: "1 serving",
  },
  {
    id: 112,
    title: "french_fries",
    imageUrl: null,
    description:
      "Batonnet or allumette-cut deep-fried potatoes, often served as a side dish.",
    nutrition: { protein_g: 3.4, sugar_g: 0.3, carbs_g: 41.0, fats_g: 15.0 },
    is_healthy_percentage: 25,
    recommended_daily_intake_qty: "1 medium portion",
  },
  {
    id: 113,
    title: "french_onion_soup",
    imageUrl: null,
    description:
      "Soup based on onions and beef stock, served with croutons and melted cheese on top.",
    nutrition: { protein_g: 5.0, sugar_g: 3.0, carbs_g: 8.0, fats_g: 4.0 },
    is_healthy_percentage: 68,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 114,
    title: "french_toast",
    imageUrl: null,
    description:
      "Sliced bread soaked in beaten eggs and typically milk, then pan-fried.",
    nutrition: { protein_g: 7.0, sugar_g: 7.0, carbs_g: 25.0, fats_g: 12.0 },
    is_healthy_percentage: 45,
    recommended_daily_intake_qty: "2 slices",
  },
  {
    id: 115,
    title: "fried_calamari",
    imageUrl: null,
    description:
      "Battered, deep-fried squid (calamari), often served with a lemon wedge or marinara sauce.",
    nutrition: { protein_g: 18.0, sugar_g: 1.0, carbs_g: 18.0, fats_g: 18.0 },
    is_healthy_percentage: 53,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 116,
    title: "fried_rice",
    imageUrl: null,
    description:
      "A dish of cooked rice that has been stir-fried in a wok or a frying pan, mixed with eggs, vegetables, and often meat or seafood.",
    nutrition: { protein_g: 5.0, sugar_g: 1.0, carbs_g: 30.0, fats_g: 5.0 },
    is_healthy_percentage: 59,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 117,
    title: "frozen_yogurt",
    imageUrl: null,
    description:
      "A frozen dessert made with yogurt and sometimes other dairy and non-dairy products.",
    nutrition: { protein_g: 4.0, sugar_g: 22.0, carbs_g: 25.0, fats_g: 4.0 },
    is_healthy_percentage: 52,
    recommended_daily_intake_qty: "1/2 cup",
  },
  {
    id: 118,
    title: "garlic_bread",
    imageUrl: null,
    description:
      "Bread topped with garlic and olive oil or butter, then baked or broiled.",
    nutrition: { protein_g: 8.0, sugar_g: 2.0, carbs_g: 45.0, fats_g: 15.0 },
    is_healthy_percentage: 40,
    recommended_daily_intake_qty: "2 slices",
  },
  {
    id: 119,
    title: "gnocchi",
    imageUrl: null,
    description:
      "Italian potato dumplings, often served with a sauce (e.g., pesto, tomato, or butter-sage).",
    nutrition: { protein_g: 4.0, sugar_g: 1.0, carbs_g: 35.0, fats_g: 0.5 },
    is_healthy_percentage: 62,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 120,
    title: "greek_salad",
    imageUrl: null,
    description:
      "A salad made with tomatoes, cucumbers, onion, feta cheese, and olives, seasoned with salt, oregano, and olive oil.",
    nutrition: { protein_g: 5.0, sugar_g: 4.0, carbs_g: 7.0, fats_g: 12.0 },
    is_healthy_percentage: 88,
    recommended_daily_intake_qty: "1 bowl",
  },
  {
    id: 121,
    title: "grilled_cheese_sandwich",
    imageUrl: null,
    description:
      "A hot sandwich made by heating sliced cheese between slices of bread, often buttered, on a griddle or in a pan.",
    nutrition: { protein_g: 12.0, sugar_g: 4.0, carbs_g: 30.0, fats_g: 18.0 },
    is_healthy_percentage: 46,
    recommended_daily_intake_qty: "1 sandwich",
  },
  {
    id: 122,
    title: "grilled_salmon",
    imageUrl: null,
    description:
      "A fillet of salmon cooked on a grill, known for its rich omega-3 fatty acids.",
    nutrition: { protein_g: 25.0, sugar_g: 0.0, carbs_g: 0.0, fats_g: 15.0 },
    is_healthy_percentage: 90,
    recommended_daily_intake_qty: "1 fillet (150g)",
  },
  {
    id: 123,
    title: "guacamole",
    imageUrl: null,
    description:
      "An avocado-based dip, spread, or salad, typically made with mashed avocado, onion, cilantro, salt, and lime juice.",
    nutrition: { protein_g: 2.0, sugar_g: 1.0, carbs_g: 9.0, fats_g: 15.0 },
    is_healthy_percentage: 85,
    recommended_daily_intake_qty: "1/4 cup",
  },
  {
    id: 124,
    title: "gyoza",
    imageUrl: null,
    description:
      "Japanese pan-fried dumplings, typically filled with ground meat and vegetables.",
    nutrition: { protein_g: 9.0, sugar_g: 2.0, carbs_g: 28.0, fats_g: 10.0 },
    is_healthy_percentage: 64,
    recommended_daily_intake_qty: "5 pieces",
  },
  {
    id: 125,
    title: "hamburger",
    imageUrl: null,
    description:
      "A sandwich consisting of a cooked patty of ground meat (usually beef) placed inside a sliced bread roll or bun.",
    nutrition: { protein_g: 13.0, sugar_g: 5.0, carbs_g: 30.0, fats_g: 14.0 },
    is_healthy_percentage: 49,
    recommended_daily_intake_qty: "1 hamburger",
  },
  {
    id: 126,
    title: "hot_and_sour_soup",
    imageUrl: null,
    description:
      "A Chinese soup with ingredients that make it both spicy and sour, often containing mushrooms, tofu, and egg.",
    nutrition: { protein_g: 3.0, sugar_g: 2.0, carbs_g: 7.0, fats_g: 2.0 },
    is_healthy_percentage: 80,
    recommended_daily_intake_qty: "1 cup",
  },
  {
    id: 127,
    title: "hot_dog",
    imageUrl: null,
    description:
      "A cooked sausage served in a sliced bun, often with condiments.",
    nutrition: { protein_g: 10.0, sugar_g: 4.0, carbs_g: 25.0, fats_g: 15.0 },
    is_healthy_percentage: 35,
    recommended_daily_intake_qty: "1 hot dog",
  },
  {
    id: 128,
    title: "huevos_rancheros",
    imageUrl: null,
    description:
      "A traditional Mexican breakfast dish consisting of eggs served on tortillas with a tomato-chili sauce, beans, and cheese.",
    nutrition: { protein_g: 10.0, sugar_g: 4.0, carbs_g: 20.0, fats_g: 15.0 },
    is_healthy_percentage: 66,
    recommended_daily_intake_qty: "1 serving",
  },
  {
    id: 129,
    title: "hummus",
    imageUrl: null,
    description:
      "A Middle Eastern dip made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
    nutrition: { protein_g: 8.0, sugar_g: 1.0, carbs_g: 14.0, fats_g: 10.0 },
    is_healthy_percentage: 84,
    recommended_daily_intake_qty: "2 tablespoons",
  },
  {
    id: 130,
    title: "ice_cream",
    imageUrl: null,
    description:
      "A sweetened frozen food typically eaten as a snack or dessert, made from milk or cream.",
    nutrition: { protein_g: 4.0, sugar_g: 21.0, carbs_g: 24.0, fats_g: 12.0 },
    is_healthy_percentage: 29,
    recommended_daily_intake_qty: "1/2 cup",
  },
  {
    id: 131,
    title: "lasagna",
    imageUrl: null,
    description:
      "A dish made with several layers of wide, flat pasta, sauce (usually meat-based), and cheese.",
    nutrition: { protein_g: 12.0, sugar_g: 5.0, carbs_g: 25.0, fats_g: 10.0 },
    is_healthy_percentage: 58,
    recommended_daily_intake_qty: "1 square",
  },
  {
    id: 132,
    title: "lobster_bisque",
    imageUrl: null,
    description:
      "A rich, creamy, and smooth soup of French origin, based on a strained broth of crustaceans (lobster).",
    nutrition: { protein_g: 5.0, sugar_g: 3.0, carbs_g: 8.0, fats_g: 15.0 },
    is_healthy_percentage: 65,
    recommended_daily_intake_qty: "1 cup",
  },
];
