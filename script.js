let taskList = []
console.log(taskList.length);

function liAdd(task){
	const list = document.querySelector(".toDoList");
	const newTask = document.createElement('li');
	newTask.setAttribute('class', 'task')
	newTask.innerText = task;
	list.append(newTask);
	console.log(list)
}

function display(){
	for(let i=0; i<taskList.length; i++){liAdd(taskList[i])};
}

display();

function add() {
	const input = document.querySelector(".taskInput").value;
	console.log(input);
	if (input != ""){
		taskList.push(input)
		liAdd(input);
		document.querySelector(".taskInput").value = '';
	}

}


const tasksToBeRemoved = [];
document.querySelector(".toDoList").addEventListener('click', function(e){

	const task = e.target.innerText;
	if (tasksToBeRemoved.includes(task)){
		tasksToBeRemoved.splice(tasksToBeRemoved.indexOf(task),1);
		e.target.classList.remove('highlight');
	} else {
		tasksToBeRemoved.push(task);
		e.target.classList.add('highlight');
		console.log(tasksToBeRemoved);

		console.log(taskList);

	}

})



function remove(){
	console.log("clicked")
	for(let i=0; i<tasksToBeRemoved.length; i++){
		taskList.splice(taskList.indexOf(tasksToBeRemoved[i]),1);
		console.log(tasksToBeRemoved);
		console.log(taskList);
	};
	tasksToBeRemoved.length = 0;
	refresh();

}

function refresh(){
	const list = document.querySelector(".toDoList");
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
	display();
}