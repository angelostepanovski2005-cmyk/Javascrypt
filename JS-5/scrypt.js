const students = [
  {
    name: "Ана",
    surname: "Петрова",
    avg: 9.2,
    city: "Скопје",
    print: function () {
      console.log(
        `Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`,
      );
    },
  },
  {
    name: "Марко",
    surname: "Ристов",
    avg: 7.5,
    city: "Битола",
    print: function () {
      console.log(
        `Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`,
      );
    },
  },
  {
    name: "Сара",
    surname: "Јовева",
    avg: 8.8,
    city: "Охрид",
    print: function () {
      console.log(
        `Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`,
      );
    },
  },
  {
    name: "Лука",
    surname: "Димов",
    avg: 6.1,
    city: "Скопје",
    print: function () {
      console.log(
        `Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`,
      );
    },
  },
  {
    name: "Ема",
    surname: "Николова",
    avg: 9.8,
    city: "Струга",
    print: function () {
      console.log(
        `Studentot so ime ${this.name}, i prezime ${this.surname} ima prosek ${this.avg} i moze da aplicira za stipenidja`,
      );
    },
  },
];

students[0].print();

students.forEach((student) => student.print());
