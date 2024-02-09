function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "please provide a valid number";
    }

    const ticketCost = 120;
    const guardCost = 500;
    const staffLunch = 8 * 50;
    const totalCost = guardCost + staffLunch;
    const totalEarn = ticketSale * ticketCost;
    const finalEarn = totalEarn - totalCost;

    return finalEarn;
}





function checkName(name) {
    if (typeof name === "string") {
        const words = ["a", "y", "i", "e", "o", "u", "w"];
        const nameLowerCase = name.toLowerCase();

        for (let character of words) {
            if (nameLowerCase.endsWith(character)) {
                return "Good Name";
            }
        }
        return "Bad Name";
    } else {
        return "invalid";
    }
}








function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Hi This is a Invaild Array";
    }

    const validNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !Number.isNaN(array[i])) {
            validNumbers.push(array[i]);
        }
    }

    return validNumbers;
}






