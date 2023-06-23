// function cal(num1,num2){
//     function setNum1(input1){
//         return this.num1=input1;
//     }
//     function setNum2(input2){
//         return this.num2=input2;
//     }
// 	return {
// 		num1,
// 		num2,
// 		setNum1,
//         setNum2,
//         soma,
//         subtracao,
// 	}
// }
// const calculator=cal()
// export default calculator
// function createCalculator(...func){
// 	const calculo=cal()
//     let [sum,sub] = func
// 	return Object.assign(calculo,{
//         sum,sub
// 	})
// }
/* ***************************** */
class Task{
    constructor() {
        this.title,
        this.description,
        this.color,
        this.date,
        this.check=false
    }
    setParameters=(newName,newDescription,newColor,newDate)=>{
        return (
            this.name=newName,
            this.description=newDescription,
            this.check=newColor,
            this.date=newDate
        )
    }
}
class ToDo extends Task{
    constructor(){
        super();
        this.toDoName
        this.toDoTaskList=Array[""]
    }
    addTask(){

    }
    set toDoName(input){
        this.toDoName=input
    }
}
class App extends ToDo{
    constructor(addTaskBtn,taskInput){
        super();
        this.addTaskBtn=addTaskBtn;
        if(taskInput){
            this.taskTitle=taskInput.taskTitle;
            this.taskDescription=taskInput.taskDescription;
            this.taskColor=taskInput.taskColor;
            this.taskDate=taskInput.taskDate;
        }
        this.addTaskBtn.addEventListener('click',this.addTask(this.setParameters(
            this.taskColor,
            this.taskDescription,
            this.taskColor,
            this.taskDate
        )));
    }
} 
export default App;