// 1. Принять от пользователя имена людей для набора в команду. Имена принять и сохранить в новом массиве. Количество имён должно соответсвовать количеству должностей. Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].
// 2. Создать объект team в котором будут храниться новые объекты-сотрудники с параметрами name и position, данные для этих свойств добавляем из массивов.
// 3. Добавить сотрудникам зарплаты (свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
// если в должности есть слово "junior" сумма будет от 500 до 1000;
// если в должности есть слово "middle" сумма будет от 1500 до 2000;
// если в должности есть слово "senior" сумма будет от 2500 до 3000;
// для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска'). Например:
//    var name = 'Junior developer';
//    name.indexOf('Junior');
//    //в данном случае вернет 0, если такая строка отсутсвует вернет -1.
//    //Регистр имеет значение, по этому строка "junior" вернет -1
// 4. Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию о пользователе (например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").
// 5. Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках в консоль в формате: "John - Project manager. Зарплата - 4863$."*
// Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций в логическом порядке. Например:

// getNames();
// createTeam();
// setSalary();
// создание цикла для установки метода tellAboutYourSelf();
// создание team.showTeam = function() {...};
// вызов метода showTeam();

let usersTeam = [];
let professions = [
   'Junior developer',
   'Middle developer',
   'Senior developer',
   'Junior QA',
   'Middle QA',
   'Senior QA',
   'Project manager'
];

let getNames = function () {
   for (let i = 0; i < professions.length; i++) {
      let userName = prompt(`Введіть ім'я того хто займає посаду ${professions[i]}:`);
      usersTeam.push(userName);
   }
   return usersTeam;
}

let setSalary = function (a, b) {
   return Math.round(Math.random() * (b - a + 1) + a);
};

const team = {
   employees: []
};

getNames();
setSalary();

for (let i = 0; i < professions.length; i++) {
   let salary;
   let employeeTeam = professions[i].toLowerCase();
   if (employeeTeam.indexOf('junior') === 0) {
      salary = setSalary(500, 1000)
   } else if (employeeTeam.indexOf('middle') === 0) {
      salary = setSalary(1500, 2000)
   } else if (employeeTeam.indexOf('senior') === 0) {
      salary = setSalary(2500, 3000)
   } else {
      salary = setSalary(4000, 4500)
   };

   const employee = {
      name: usersTeam[i],
      position: professions[i],
      salary: salary,
      tellAboutYourSelf: function () {
         console.log(`Меня зовут ${this.name} и я - ${this.position}. Я зарабатываю ${this.salary}$.`);

      }
   };
   team.employees.push(employee);
};

team.showTeam = function () {
   for (let i = 0; i < this.employees.length; i++) {
      console.log(`${this.employees[i].name} - ${this.employees[i].position}. Зарплата - ${this.employees[i].salary}$.`);
   }
};

team.showTeam();