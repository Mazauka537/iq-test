import type {TQuestion} from "@/types/question";
import geometryImage from "@/assets/images/questions/geometry-image.webp"
import humanFigure from "@/assets/images/questions/human-fugure.webp"
import numberStar from "@/assets/images/questions/number-star.webp"

export const questions: TQuestion[] = [{
    type: 'select',
    question: 'Ваш пол:',
    answers: [{
        value: 1,
        label: 'Мужчина',
    }, {
        value: 2,
        label: 'Женщина',
    }]
}, {
    type: 'select',
    question: 'Укажите ваш возраст:',
    answers: [{
        value: 1,
        label: 'До 18',
    }, {
        value: 2,
        label: 'От 18 до 28',
    }, {
        value: 3,
        label: 'От 29 до 35',
    }, {
        value: 4,
        label: 'От 36',
    }]
}, {
    type: 'select',
    question: 'Выберите лишнее:',
    answers: [{
        value: 1,
        label: 'Дом',
    }, {
        value: 2,
        label: 'Шалаш',
    }, {
        value: 3,
        label: 'Бунгало',
    }, {
        value: 4,
        label: 'Скамейка',
    }, {
        value: 5,
        label: 'Хижина',
    }]
}, {
    type: 'select',
    question: 'Продолжите числовой ряд: 18  20  24  32',
    answers: [{
        value: 1,
        label: '62',
    }, {
        value: 2,
        label: '48',
    }, {
        value: 3,
        label: '74',
    }, {
        value: 4,
        label: '57',
    }, {
        value: 5,
        label: '60',
    }, {
        value: 6,
        label: '77',
    }]
}, {
    type: 'color',
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [{
        value: 1,
        label: '#A8A8A8',
    }, {
        value: 2,
        label: '#0000A9',
    }, {
        value: 3,
        label: '#00A701',
    }, {
        value: 4,
        label: '#F60100',
    }, {
        value: 5,
        label: '#FDFF19',
    }, {
        value: 6,
        label: '#A95403',
    }, {
        value: 7,
        label: '#000000',
    }, {
        value: 8,
        label: '#850068',
    }, {
        value: 9,
        label: '#46B2AC',
    }]
}, {
    type: 'color',
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [{
        value: 1,
        label: '#A8A8A8',
    }, {
        value: 2,
        label: '#46B2AC',
    }, {
        value: 3,
        label: '#A95403',
    }, {
        value: 4,
        label: '#00A701',
    }, {
        value: 5,
        label: '#000000',
    }, {
        value: 6,
        label: '#F60100',
    }, {
        value: 7,
        label: '#850068',
    }, {
        value: 8,
        label: '#FDFF19',
    }, {
        value: 9,
        label: '#0000A9',
    }]
}, {
    type: 'select',
    question: 'Какой из городов лишний?',
    answers: [{
        value: 1,
        label: 'Вашингтон',
    }, {
        value: 2,
        label: 'Лондон',
    }, {
        value: 3,
        label: 'Париж',
    }, {
        value: 4,
        label: 'Нью-Йорк',
    }, {
        value: 5,
        label: 'Москва',
    }, {
        value: 6,
        label: 'Оттава',
    }]
}, {
    type: 'image-number',
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    imageUrl: humanFigure,
    options: {
        imageSize: 'md'
    },
    answers: [{
        value: 1,
        label: '1',
    }, {
        value: 2,
        label: '2',
    }, {
        value: 3,
        label: '3',
    }, {
        value: 4,
        label: '4',
    }]
}, {
    type: 'select',
    question: 'Вам привычнее и важнее:',
    answers: [{
        value: 1,
        label: 'Наслаждаться каждой минутой проведенного времени',
    }, {
        value: 2,
        label: 'Быть устремленными мыслями в будущее',
    }, {
        value: 3,
        label: 'Учитывать в ежедневной практике прошлый опыт',
    }]
}, {
    type: 'image-select',
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    imageUrl: geometryImage,
    options: {
        imageSize: 'sm'
    },
    answers: [{
        value: 1,
        label: 'Оно остроконечно',
    }, {
        value: 2,
        label: 'Оно устойчиво',
    }, {
        value: 3,
        label: 'Оно-находится в состоянии равновесия',
    }]
}, {
    type: 'image-number',
    question: 'Вставьте подходящее число',
    imageUrl: numberStar,
    options: {
        withLine: true,
        imageSize: 'lg'
    },
    answers: [{
        value: 1,
        label: '34',
    }, {
        value: 2,
        label: '36',
    }, {
        value: 3,
        label: '53',
    }, {
        value: 4,
        label: '44',
    }, {
        value: 5,
        label: '66',
    }, {
        value: 6,
        label: '42',
    }]
}]