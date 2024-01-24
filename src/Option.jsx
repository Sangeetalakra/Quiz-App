
const Option=({option,index,selected,correctAnswer,optionClick})=>{
    //console.log(selected)
    //console.log(correctAnswer)
    const isCorrect = selected !== null && index === correctAnswer 
    const inCorrect = selected === index && selected  !== correctAnswer
   

    return(
        <div className={isCorrect ? "green" :
                        inCorrect? "red" :
                        "white"}
        onClick={() =>optionClick(index)}>{option}</div>
    )
}
export default Option