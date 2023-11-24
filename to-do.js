const task1 = {
  name: 'fazer café',
  isDone: false,
};

const task2 = {
  name: 'lavar a louça',
  isDone: false,
};

const task3 = {
  name: 'guardar a louça',
  isDone: false,
};

let taskList = []


function addTask(task) {
  let id = 1

  if (taskList.length > 0)
    id = taskList[taskList.length - 1].id + 1

  taskList.push({
    id: id,
    name: task.name,
    isDone: task.isDone,
  });
};

addTask(task1);
addTask(task2);
addTask(task3);

addTask({
  name: 'estudar',
  isDone: false,
});

const task4 = {
  name: 'praticar a lição',
  isDone: false,
};

const task5 = {
  name: 'assistir aula',
  isDone: false,
};


addTask(task5)
addTask(task4)

//----------------------------------------------------------------------------

// Editar

function editTask(id, task) {
  for (let i = 0; i < taskList.length; i++) {
    if(taskList[i].id == id){
      taskList[i].name = task.name;
      taskList[i].isDone = task.isDone;
    }
    
  };

 };

editTask(5,{
  name: 'estudar javaScript',
  isDone: false
})

editTask(4,{
  name: 'treinar',
  isDone: true,
})

//---------------------------------------------------------------------------------------

//Remover

function removeTask(id){
  let index = taskList.findIndex(item => item.id == id);
  taskList.splice(index, 1)
}

removeTask(3)

console.log(taskList)
