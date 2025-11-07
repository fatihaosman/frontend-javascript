
// Assuming Director and Teacher classes already exist from Task 5

// 1. Type predicate to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// 2. Execute work depending on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage:
console.log(executeWork(createEmployee(200)));   // "Getting to work"
console.log(executeWork(createEmployee(1000)));  // "Getting to director tasks"

