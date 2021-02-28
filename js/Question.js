class Question{
    constructor(){
       // this.input1, this.input2;
        this.title = createElement('h2');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.question = createElement('h3');

        this.input1 = createInput("Enter Your Name Here");
        this.input2 = createInput("Enter Your Option No.");
       // this.greeting = createElement('h2');
    }

    hide(){
         this.option1.hide();
         this.option2.hide();
         this.option3.hide();
         this.option4.hide();
         this.question.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question: Which planet has the most gravity?");
        this.question.position(250,80);

        this.option1.html("1. Earth");
        this.option1.position(150,120);
        this.option2.html("2. Jupitar");
        this.option2.position(150,150);
        this.option3.html("3. Saturn");
        this.option3.position(150,180);
        this.option4.html("4. The Sun");
        this.option4.position(150, 210);
        
       this.input1.position(150,280);
       this.input2.position(400, 280);
    }
}