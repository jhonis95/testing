const addTaskBtn= document.getElementById("add-task-btn")

const taskNameInp= document.getElementById("task-title")
const taskDescriptionInp= document.getElementById("task-description")
const taskColorInp= document.getElementById("task-color")
const taskDateInp= document.getElementById("task-date")

const taskInputs={
    taskNameInp,
    taskDescriptionInp,
    taskColorInp,
    taskDateInp
}
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
        console.log(this.title)
    }
    setTaskDescription=(taskInput)=>{
        this.description=taskInput
        console.log(this.description)
    }
    setTaskColor=(taskInput)=>{
        this.color=taskInput
        console.log(this.color)
    }
    setTaskDate=(taskInput)=>{
        this.date=taskInput
        console.log(this.date)
    }
    setTaskCheck=(taskInput)=>{
        this.check=taskInput
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
            check: this.checkgit 
        })
    }
}
class ToApp extends ToDo{
    constructor(addTaskBtn,taskInput){
        super();
        this.listOfToDo=[]
        this.addTaskBtn=addTaskBtn;
        if(taskInput){
            this.taskInputTitle=taskInput.taskNameInp
            this.taskInputDescription=taskInput.taskDescriptionInp
            this.taskInputColor=taskInput.taskColorInp
            this.taskInputDate=taskInput.taskDateInp
        }

        this.taskInputTitle.addEventListener('change',(event)=>{
            this.setTaskTitle(event.target.value)
        })
        this.taskInputDescription.addEventListener('change',(event)=>{
            this.setTaskDescription(event.target.value)
        })
        this.taskInputColor.addEventListener('change',(event)=>{
            this.setTaskColor(event.target.value)
        })
        this.taskInputDate.addEventListener('change',(event)=>{
            this.setTaskDate(event.target.value)
        })
        this.addTaskBtn.addEventListener('click',this.addTask)
    }
    printToDoList(){
        console.log(this.listOfToDo)
    }
}
const myApp= new ToApp(addTaskBtn,taskInputs)

console.log("app.js loaded",myApp)