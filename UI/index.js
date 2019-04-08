
console.log('work.getPhotoPosts(10,10, {author: \'Иванов Дима\'})');
console.log('work.getPhotoPosts(10,10)');
console.log('work.getPhotoPost(5)');
console.log('work.removePhotoPost(12)');

let photoPosts = [
      {

          id: '1',

          descriprion: 'Хочешь научиться спорить – приходи в клуб дебатов БГУ ',

          createdAt: new Date('2018-02-20t23:00:00'),

          author: 'Иванов Иван',

          photoLink: 'https://pp.userapi.com/c845021/v845021532/1d3099/PutCu8cPi20.jpg'

      },
       {

           id: '2',

           descriprion: 'Четырнадцать китайских студентов БГУ награждены благодарностью Министерства образования Беларуси',

           createdAt: new Date('2018-02-19t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c854216/v854216088/2fe8/jshmJ2dP4EQ.jpg'

       },
       {

           id: '3',

           descriprion: 'Не забудьте принять участие в общеуниверситетском on-line конкурсе “География БГУ”',

           createdAt: new Date('2018-02-18t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c853428/v853428784/2c7f/-OBS_HiOXVM.jpg'

       },
       {

           id: '4',

           descriprion: 'Первичная профсоюзная организация студентов БГУ проводит карьерный семинар-тренинг',

           createdAt: new Date('2018-02-17t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c847221/v847221532/1c2a7e/UQh8WgErPgk.jpg'

       },
       {

           id: '5',

           descriprion: 'Расписание занятий для студентов БГУ стало доступным в один «клик»',

           createdAt: new Date('2018-02-16t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://sun9-14.userapi.com/c846523/v846523641/1c4eb3/vbYcpiXhIJg.jpg'

       },
       {

           id: '6',

           descriprion: 'Тренинг для волонтеров II Европейских игр 2019',

           createdAt: new Date('2018-02-15t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c848536/v848536317/150d66/fasVsdNhEf4.jpg'

       },

       {

           id: '7',

           descriprion: 'Чемпионат «Business Case Student Competition 2019» впервые пройдет в БГУ',

           createdAt: new Date('2018-02-01t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c850724/v850724638/dbd5d/i72MGa0OWvE.jpg'

       },
       {

           id: '8',

           descriprion: 'Фото с любимым университетом',

           createdAt: new Date('2018-02-02t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c856024/v856024453/d22/ChYSBFias84.jpg'

       },
       {

           id: '9',

           descriprion: 'Международная научно-практическая конференция «Слова ў кантэксце часу» откроется в БГУ',

           createdAt: new Date('2018-02-03t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c853516/v853516983/e3d/4MZ5IfuObNI.jpg'

       },
       {

           id: '10',

           descriprion: 'Золото Открытого первенства Московского района по гиревому спорту завоевала команда военного факультета БГУ',

           createdAt: new Date('2018-02-04t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c851136/v851136983/e0ecf/-hmD91xrkb4.jpg'

       },
       {

           id: '11',

           descriprion: 'БГУ представит 18 научно-технических разработок на XV Петербургской технической ярмарке',

           createdAt: new Date('2018-02-05t23:00:00'),

           author: 'Иванов Дима',

           photoLink: 'https://pp.userapi.com/c856132/v856132245/12b/RCallbRW1JM.jpg'

       },
       {

           id: '12',

           descriprion: 'Делегация Посольства Республики Армения в Беларуси посетила БГУ',

           createdAt: new Date('2018-02-06t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c846416/v846416036/1c4d26/2h9r0MkRGEQ.jpg'

       },
       {

           id: '13',

           descriprion: 'Кабинет греческой филологии в БГУ',

           createdAt: new Date('2018-02-07t23:00:00'),

           author: 'Иванов Дима',

           photoLink: 'https://pp.userapi.com/c850436/v850436245/d74c0/K3AEKFtIcbo.jpg'

       },
       {

           id: '14',

           descriprion: 'С БГУ всё становится возможным!',

           createdAt: new Date('2018-02-08t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c850724/v850724483/cfa4d/snj94zHE1Uo.jpg'

       },
       {

           id: '15',

           descriprion: 'Открыт набор на участие в Моделировании ООН на Факультете международных отношений !',

           createdAt: new Date('2018-02-09t23:00:00'),

           author: 'Иванов Женя',

           photoLink: 'https://pp.userapi.com/c849532/v849532598/14ad79/xTfu4EbxYwM.jpg'

       },
       {

           id: '16',

           descriprion: 'СНИЛ "ГИС-лаборатория" и HERE приглашают студентов к участию в HERE Community Challenge 2019!',

           createdAt: new Date('2018-02-10t23:00:00'),

           author: 'Иванов Дима',

           photoLink: 'https://pp.userapi.com/c851536/v851536436/d1f9d/tPnmm4VHAeY.jpg'

       },
       {

           id: '17',

           descriprion: 'Неудача',

           createdAt: new Date('2018-02-11t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c849328/v849328177/14b3fd/cUPeVLMDkLo.jpg'

       },
       {

           id: '18',

           descriprion: 'Что нужно человеку для счастья?',

           createdAt: new Date('2018-02-12t23:00:00'),

           author: 'Иванов Дима',

           photoLink: 'https://pp.userapi.com/c845120/v845120594/1c1920/l20fBzfswGI.jpg'

       },
       {

           id: '19',

           descriprion: 'МАСТЕР-КЛАСС по видеорекаламе',

           createdAt: new Date('2018-02-13t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c851536/v851536601/dec0d/VmiqpriwpoM.jpg'

       },
       {

           id: '20',

           descriprion: 'Уникальная возможность продолжить обучение во Франции!',

           createdAt: new Date('2018-02-14t23:00:00'),

           author: 'Иванов Иван',

           photoLink: 'https://pp.userapi.com/c848416/v848416633/14209f/R1jKc7r_oUY.jpg'

       },

    ];

class MyClass {
    constructor(photoPosts = []) {
        this._photoPosts = photoPosts;
    }
    getPhotoPosts(skip, amountToTake, filterConfig) 
    {
        if (skip >= 0 && amountToTake >= 0 && skip + amountToTake <= this._photoPosts.length) {
            let arrRes = [];
            let arr = [];
            for (let i = skip; i < skip + amountToTake; i++) {
                arrRes.push(this._photoPosts[i]);
            }
            arrRes.sort(function (a, b) {
                return b.createdAt - a.createdAt;
            });
            if (typeof filterConfig != 'undefined') {
                arrRes.forEach(item => {
                    if (item.author == filterConfig.author) {
                        arr.push(item);
                    }
                })
                arrRes = [];
                arr.forEach(item=>arrRes.push(item));
            }
            return arrRes;
        }
        else {
            console.log('error, bad function parameters');
        }
    }
    getPhotoPost(id) {
        for (let i = 0; i < this._photoPosts.length; i++) {
            if (this._photoPosts[i].id == id) {
                return this._photoPosts[i];
            }
        }
    }
    validatePhotoPost(photoPost) {
        let res = false;
        if (typeof photoPost.id == 'string'
            && typeof photoPost.descriprion == 'string'
            && typeof photoPost.createdAt == 'object'
            && typeof photoPost.author == 'string'
            && typeof photoPost.photoLink == 'string') {
            res = true;
        }
        return res;
    }
    addPhotoPost(photoPost) {
        if (this.validatePhotoPost(photoPost)) {
            this._photoPosts.push(photoPost);
            return true;
        } else {
            return false;
        }
    }
    editPhotoPost(id, photoPost) {
        let forChanges = getPhotoPost(id);
        if (validatePhotoPost(forChanges)) {
            if (typeof photoPost.descriprion == 'string') {
                forChanges.descriprion = photoPost.descriprion;
            }
            if (typeof photoPost.createdAt == 'object') {
                forChanges.createdAt = photoPost.createdAt;
            }
            if (typeof photoPost.author == 'string') {
                forChanges.author = photoPost.author;
            }
            if (typeof photoPost.photoLink == 'string') {
                forChanges.photoLink = photoPost.photoLink;
            }
        }
        return true;
    }
    removePhotoPost(id) {
        let ind = -1;
        for (let i = 0; i < this._photoPosts.length; i++) {
            if (this._photoPosts[i].id == id) {
                ind = i;
                break;
            }
        }
        if (ind == -1) {
            console.log('Error, bad id');
        } else {
            this._photoPosts.splice(ind, 1);
        }
        return true;
    }
    }

let work = new MyClass();

for (let i = 0; i < photoPosts.length; i++) {
    work.addPhotoPost(photoPosts[i]);
}

