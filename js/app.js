class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }

  //Public method
  addMeal(meal){
    this._meals.push(meal);
    this._totalCalories += meal.calores;
  }

  addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalories -= workout.calores;
  }
}//this is the end of CalorieTracker class

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}//This is the end of Meal class

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}//this is the end Workout class

