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
    setTaskTitle=(title)=>{
        this.title=title
    }
    setTaskDescription=(taskInput)=>{
        this.title=taskInput
    }
    setTaskColor=(taskInput)=>{
        this.title=taskInput
    }
    setTaskDate=(taskInput)=>{
        this.title=taskInput
    }
    setTaskCheck=(taskInput)=>{
        this.title=taskInput
    }
}
class ToDo extends Task{
    constructor(){
        super();
        this.toDoName=""
        this.toDoTaskList=[]
    }
    addTask=()=>{
        this.toDoTaskList.push({
            title : this.title,
            description : this.description,
            color: this.color,
            date: this.date,
            // check: this.check
        })
    }
}
export default ToDo