export const FILE_DATA = 'FILE_DATA'
export const FIELD_DATA = 'FIELD_DATA'
export const filedata = (file)=>({
    type:FILE_DATA ,
    payload:file
})
export const fielddata = (field) =>({
    type:FIELD_DATA,
    payload:field
})