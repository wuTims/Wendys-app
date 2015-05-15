/**
 * Created by Timmy on 5/14/2015.
 */
app.controller('MainController', ['$scope', function($scope) {
    $scope.foodItems = [
        {
            name: 'Jr. Cheeseburger Deluxe',
            icon: '../img/deluxe-cheeseburger.png',
            calories: 350,
            price: 1.19,
            count: 0
        },
        {
            name: 'Jr. Cheeseburger',
            icon: '../img/cheeseburger.png',
            calories: 290,
            price: 0.99,
            count: 0
        },
        {
            name: 'Crispy Chicken Sandwich',
            icon: '../img/crispy-chicken.png',
            calories: 350,
            price: 1.29,
            count: 0
        },
        {
            name: 'Monterray Ranch Crispy Chicken',
            icon: '../img/ranch-crispy-chicken.png',
            calories: 370,
            price: 1.29,
            count: 0
        },
        {
            name: '5-Piece Spicy Chicken Nuggets',
            icon: '../img/five-piece-nuggets.png',
            calories: 230,
            price: 0.99,
            count: 0
        },
        {
            name: 'Crispy Chicken Caesar Wrap',
            icon: '../img/chicken-wrap.png',
            calories: 410,
            price: 1.59,
            count: 0
        },
        {
            name: 'Value Fries',
            icon: '../img/value-fries.png',
            calories: 220,
            price: 0.99,
            count: 0
        },
        {
            name: 'Small Frosty',
            icon: '../img/sm-frosty.png',
            calories: 340,
            price: 0.99,
            count: 0
        },
        {
            name: 'Value Coca-Cola',
            icon: '../img/value-cola.png',
            calories: 130,
            price: 0.99,
            count: 0
        }
    ]
}]);