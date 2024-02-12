export default {

    name:'place',
    type:'document',
    title:'Place',
    fields:[
        {
            name:'id',
            type:'number',
            title:'ID'
        },
        {
            name:'title',
            type:'string',
            title:'title of place'
        },
        {
            name:'slug',
            type:'slug',
            title:'slug of card',
            options:{
                source:'title'
            }
        },
        {
            name:'image',
            type:'image',
            title:'Image'
        },
        {
            name:'smalldesc',
            type:'text',
            title:'Small Descripiton'
        },
        
        {
            name:'description',
            type:'text',
            title:'Description'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block',
                }
            ]
        },
    ]
        
}