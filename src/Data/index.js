const data = {
    subjects: {
        '1': { id: '1', name: 'Life Skills' },
        '2': { id: '2', name: 'Life Orientation' },
        '3': { id: '3', name: 'Software Development' },
        '4': { id: '4', name: 'Information Systems' },
        '5': { id: '5', name: 'Business Applications' },
        '6': { id: '6', name: 'Sofware Applications' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: "Subjects",
            subjectId: ['1', '2', '3', '4', '5', '6']
        },
        'column-2': {
            id: 'column-2',
            title: 'Primary School',
            subjectId: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Secondary School',
            subjectId: [],
        }
    },
    columnsort: ['column-1', 'column-2', 'column-3']
}
export default data;