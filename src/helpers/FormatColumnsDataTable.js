export const formatColumns = (data) => {
    
    const keys = Object.keys(data[0]);
    const obj = [];

    keys.forEach((value) => {
        obj.push({
            name: value,
            selector: row => { return row[value] },
            sortable: true 
        });
    });

    return obj;
}