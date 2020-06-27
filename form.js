class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.amount = createInput("Amount :");
        this.question4 = createElement('h3', "Q4 Would you like to contribute to improve the facilities available in government schools?");
        this.radio3 = createRadio('h3');
        this.radio3.option('yes');
        this.radio3.option('No');
        this.question5 = createElement('h3',"Q4 In which facility would you like to contribute?");
        this.radio4 = createRadio();
        this.facility = createInput("Facility name:");
    }


    display() {
        this.input.position(500, 255)
        this.email.position(500, 165)
        this.button.position(530, 900)
        this.greeting.position(430, 105)
        this.text.position(430, 5)
        this.question1.position(330, 360)
        this.radio.position(430, 420)
        this.question2.position(330, 450)
        this.radio1.position(430, 510)
        this.question3.position(330, 540)
        this.radio2.position(430, 600)
        this.question4.position(330, 630)
        this.question5.position(330, 720)
        this.radio3.position(430, 690)
        this.radio4.position(430, 780)
        this.facility.position(600, 780)


        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}