const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Карина",
            "id_3": "Алисия",
            "id_4": "Софья",
            "id_5": "Валерия",
            "id_6": "Капитолина",
            "id_7": "Вероника",
            "id_8": "Любовь",
            "id_9": "Дарья",
            "id_10": "Ксения"
        }
    }`,
    maleWork: `{
       "count": 5,
       "list": {
            "id_1": "пажарный",
            "id_2": "военный",
            "id_3": "полицейский",
            "id_4": "Нефтянник",
            "id_5": "Лесоруб"
       }
    }`,

    femaleWork: `{
        "count": 5,
        "list": {
             "id_1": "парикмахер",
             "id_2": "ветеринар",
             "id_3": "швея",
             "id_4": "учитель",
             "id_5": "уборщица"
        }
     }`,
 

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    randomGender: function() {
        return Math.floor (Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
},

     randomSurname: function() {
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a'; 
        }
    },

    randomBirthYear : function (min, max){
        min = 1940;
        max = 2007;
        return Math.floor(Math.random() * (max - min +1)) + min; 
    },

    randomFather: function (){
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstNameMaleJson) + 'ович';
        } else {
            return this.randomValue(this.firstNameMaleJson) + 'овна';
        }
    },
    randomWork: function(){
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.maleWork);
        } else {
            return this.randomValue(this.femaleWork);
        }
    },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.dirth = this.randomBirthYear();
        this.person.father = this.randomFather();
        this.person.work = this.randomWork();
        return this.person;
    }
};
