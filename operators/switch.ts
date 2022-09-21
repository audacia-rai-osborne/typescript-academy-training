enum QuestionAnswer{
    No = 100,
    Non = 200,
    Yes = 300,
    Si = 400,
    NotApplicable = 500
}

let answer: QuestionAnswer = 300;

switch(answer){
    case QuestionAnswer.No:
    case QuestionAnswer.Non:
        console.log("Answer is no");
        break;
    case QuestionAnswer.Yes:
    case QuestionAnswer.Si:
        console.log("Answer is Yes")
        break;
    case QuestionAnswer.NotApplicable:
        console.log("Answer is not possible")
        break;
    default:
        console.log("Please answer")
        break;
}