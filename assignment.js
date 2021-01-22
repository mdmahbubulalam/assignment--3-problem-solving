// https://github.com/mdmahbubulalam/assignment--3-problem-solving

// Convert Kilometer to Meter

function kilometerToMeter(kilometer) {

    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        return "Distance cannot be negative or empty";
    }
}


// Calculate total budget

function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0) {
        var totalWatchPrice = watch * 50;
    } else {
        return "Quantity cannot be negative or empty";
    }
    if (phone >= 0) {
        var totalPhonePrice = phone * 100;
    } else {
        return "Quantity cannot be negative or empty";
    }
    if (laptop >= 0) {
        var totalLaptopPrice = laptop * 500;
    } else {
        return "Quantity cannot be negative or empty";
    }

    var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalPrice;
}


// Calculate Total Hotel Cost

function hotelCost(days) {
    var totalCost = 0;

    if (days >= 0) {
        if (days <= 10) {
            totalCost = days * 100;

        } else if (days <= 20) {
            var firstTenDays = 10 * 100;
            var remaining = days - 10;
            var secondTenDays = remaining * 80;
            totalCost = firstTenDays + secondTenDays;

        } else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining = days - 20;
            var afterTwentyDays = remaining * 50;
            totalCost = firstTenDays + secondTenDays + afterTwentyDays;
        }

    } else {
        return "Days count cannot be negative or empty";
    }

    return totalCost;
}


// Find longest name

function megaFriend(name) {
    var nameLength = 0;
    var longestName;

    if (name != undefined && name.length > 0 && name != "") {
        for (var i = 0; i < name.length; i++) {
            if (name[i].length > nameLength) {
                nameLength = name[i].length;
                longestName = name[i];
            }
        }

    } else {
        return 'Name should not be empty';
    }

    return longestName;
}