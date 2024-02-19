export default {

    name:'homeContent',
    type:'document',
    title:'Home Content',
    fields:[
        {
            name:'id',
            type:'number',
            title:'ID'
        },
        {
            name:'title',
            type:'string',
            title:'title'
        },
        {
            name:'url',
            type:'string',
            title:'url'
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
       
        {
            name:'image',
            type:'image',
            title:'Image'
        },
    ]
}