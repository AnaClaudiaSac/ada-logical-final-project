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
  taskList.push(task);
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







console.log(taskList)
