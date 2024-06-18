"use strict";
// 1. Definujte Enumy a Typy:
// Vytvořte enum Role s hodnotami: Student, ClassRep (Class Representative), a Prefect.
// Definujte typ Subject, který může být buď "Math", "Science", "History", nebo "Language".
var Role;
(function (Role) {
    Role["Student"] = "Student";
    Role["ClassRep"] = "ClassRepresenttative";
    Role["Prefect"] = "Prefect";
})(Role || (Role = {}));
// 3. Vytvořte Pole pro Uložení Studentů:
// Deklarujte konstantu students, což je pole Student a inicializujte ji jako prázdné pole.
const students = [];
// 4. Funkce:
// Implementujte addStudent(student: Student): Funkce pro přidání studenta do pole students.
// Implementujte getStudentDetails(id: number): Funkce pro získání detailů studenta podle jeho id z pole students.
// Implementujte calculateAverageGrade(grades: Grade[]): Funkce pro výpočet průměrné známky z pole grades.
const addStudent = (student) => students.push(student);
const getStudentDetails = (id) => students.find((student) => student.id === id);
const calculateAverageGrade = (grades) => {
    // let total = 0
    // grades.forEach((item): Grade => {
    //   total += item.score
    // })
    // return total/grades.length
    const total = grades.reduce((sum, item) => sum + item.score, 0);
    return grades.length > 0 ? (total / grades.length) : 0;
};
// 5. Přidejte Vzorové Studentky:
// Vytvořte objekt Student s názvem student1 s vhodnými detaily, včetně seznamu známek a neznámého extraInfo.
// Vytvořte další objekt Student s názvem student2 s různými detaily a známkami.
const student1 = {
    id: 0,
    firstName: 'Ema',
    lastName: 'Šťastná',
    age: 20,
    role: Role.Student,
    grades: [{ subjekt: 'History', score: 90 }, { subjekt: 'Math', score: 80 }],
    extraInfo: 'Má pihy.',
};
// 6. Manipulace s Daty:
// Použijte addStudent pro přidání student1 a student2 do pole students.
// Získejte detaily student1 pomocí getStudentDetails a vypište je do konzole.
// Vypočítejte a vypište průměrnou známku známek student1 pomocí calculateAverageGrade.
addStudent(student1);
const getStudentDetail = getStudentDetails(1);
const averageGrade = calculateAverageGrade(student1.grades);
console.log(averageGrade);
