export type TQuestionType = 'select' | 'color' | 'image-number' | 'image-select'
export type TQuestionAnswer = {
    value: number,
    label: string
}

export type TQuestionGeneral = {
    type: TQuestionType
    question: string
    answers: TQuestionAnswer[]
}

export type TQuestionImage = TQuestionGeneral & {
    imageUrl: string
    options?: {
        withLine?: boolean
        imageSize?: 'sm' | 'md' | 'lg'
    }
}

export type TQuestionSelect = TQuestionGeneral & {
    type: 'select'
}

export type TQuestionColor = TQuestionGeneral & {
    type: 'color'
}

export type TQuestionImageNumber = TQuestionImage & {
    type: 'image-number'
}

export type TQuestionImageSelect = TQuestionImage & {
    type: 'image-select'
}

export type TQuestion = TQuestionSelect | TQuestionColor | TQuestionImageNumber | TQuestionImageSelect
