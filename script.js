let tasks = [];

function addTask(name) {
    if (!name.trim()) {
        console.log(`"Название задачи не может быть пустым."`);
        return;
    }
    tasks.push({ name: name, completed: false });
    console.log(`Задача "${name}" добавлена в список`);
}

function completeTask(name) {
    const task = tasks.find(task => task.name === name);
    if (!task) {
        console.log(`Задача с названием "${name}" не найдена.`);
        return;
    }
    task.completed = true;
    console.log(`Задача "${name}" отмечена как выполненная`);
}

function deleteTask(name) {
    const taskIndex = tasks.findIndex(task => task.name === name);
    if (taskIndex === -1) {
        console.log(`Задача с названием "${name}" не найдена.`);
        return;
    }
    tasks.splice(taskIndex, 1);
    console.log(`Задача "${name}" удалена из списка.`);
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log(`"Список задач пуст."!`);
        return;
    }
    console.log("Список задач:");
    tasks.forEach(task => {
        const status = task.completed ? "Выполнена" : "Не выполнена";
        console.log(`- ${task.name}: ${status}`);
    });
}

displayTasks();
addTask("Встать в 7:00");
addTask("Покормить собаку");
addTask("Выучить JavaScript");
addTask("Сделать домашнее задание");
addTask("Купить продукты");
displayTasks();
completeTask("Встать в 7:00");
completeTask("Выучить JavaScript");
displayTasks();
deleteTask("Сделать домашнее задание");
deleteTask("Купить продукты");
completeTask("Покормить собаку");
displayTasks();
console.log(tasks);







