// import React from "react";

// API call testing
/**
 * //file: __tests__/recipes.test.js
 
// import the functions to test
import { findRecipe, getIngredients } from "./recipes.js"; 
 
// async API call
test("Get the full recipe for Pesto", async () => {
    // testing logic for findRecipe() omitted...
}, 10000);
// ^^ longe time allowance for API call
 
test("Get only the ingredients list for Pesto", () => {
    // testing logic for getIngredients() omitted...
});
 * 
 */

/**
 * // This time we'll use the `done` parameter
test("get the full recipe for pesto", (done) => {
  //arrange
  const dish = "pesto";
  const expectedRecipe = {
    'Basil': '2 cups',
    'Pine Nuts': '2 tablespoons',
    'Garlic': '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups'
  };
 
  //act  
  findRecipe(dish, (actualRecipe) => {
    //assertion
    try {
      expect(actualRecipe).toEqual(expectedRecipe);
      done();
    } catch (error) {
      done(error);
    }   
  });
});

test("get the full recipe for pesto", async () => {
  //arrange
  const dish = "Pesto"
  const expectedRecipe = {
    'Basil': '2 cups',
    'Pine Nuts': '2 tablespoons',
    'Garlic': '2 cloves',
    'Olive Oil': '0.5 cups',
    
    'Grated Parmesan': '0.5 cups'
  }
 
  //act  
  const actualRecipe = await findRecipe(dish);
 
  //assertion
  expect(actualRecipe).toEqual(expectedRecipe);
});
 */

// test();