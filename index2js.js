var number = Number(prompt("What is your lucky number?"));

var quote = [
            "Well, um, actually a pretty nice little Saturday, we’re going  to go to Home Depot. Yeah, buy some wallpaper, maybe get some  flooring, stuff like that. Maybe Bed, Bath, & Beyond, I don’t know, I don’t know if we’ll have enough time. - Frank, Old School.",
            'As the wise man once said, "so?" - Ron Burgundy',
            "I swear, I’m so pissed off at my mom. As soon as she’s of age,  I’m putting her in a home. - Brenna Huff, Step Brothers",
            'Personal philosophy? Clothing Optional. - Chazz, Blades of Glory',
            "Here's the deal I'm the best there is. Plain and simple. I wake up in the morning and I piss excellence - Ricky Bobby",
            "You better not close your eyes, because as soon as you do, I'm  gonna punch your square in the face! - Brenna, Step Brothers",
            "For just one night let's not be co-workers. Let's be co-people.  - Ron Burgundy",
            "I'm going to climb over that anger wall of your someday and it's going to be glorious - Allen, The Other Guys",
            'How many sarcastic pills you taking this morning? - Phil, Kicking & Screaming',
            'Absolutely ma-am, I would love to sign your baby. - Ricky  Bobby',
            'We elves try to stick to the four main food groups, candy, candy cain, candy corn, and syrup - Buddy Elf',
        ];

if (number >= 0) {
    var end_quote = (number) % 10;
    document.write("<br>" + "The message on your t-shirt will be: " +
        "<br>" + quote[end_quote]) + "<br>";
} else {
    alert("Your lucky number must be greater than or equal to zero.");
}
