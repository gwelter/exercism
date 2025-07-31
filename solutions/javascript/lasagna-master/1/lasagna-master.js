/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === 0) return 'Lasagna is done.';
  if (!time) return 'You forgot to set the timer.';

  return 'Not done, please wait.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

const portion = {
  noodles: 50,
  sauce: 0.2,
}
export function quantities(layers) {
  return layers.reduce((acc, cur) => {
    if (cur !== 'noodles' && cur !== 'sauce') return acc;
    return {
      ...acc,
      [cur]: acc[cur] + portion[cur]
    }
  }, { noodles: 0, sauce: 0.0})
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length -1]);
}

export function scaleRecipe(recipe, scale) {
  return Object.entries(recipe).reduce((acc, [ingredient, portion]) => {
	return {
		...acc,
		[ingredient]: portion / 2 * scale
	}
}, {})
}