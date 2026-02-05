class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesTotal();
  }

  //Public Methods
  addMeal(meal){
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  //Private Methods
  _displayCaloriesTotal(){
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _render() {
    this._displayCaloriesTotal();
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
}//this is the end of Workout class

//init tracker
const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const lunch = new Meal('Lunch', 350);
tracker.addMeal(lunch);



const lift = new Workout('Lift Weights', 300);
tracker.addWorkout(lift);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);


