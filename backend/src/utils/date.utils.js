export const normalizeDate = (date)=>{
    const d = new Date(date);
    if(isNaN(d.getTime())){
        throw new Error("Invalid date provided to normalizer");
    }
    d.setUTCDate(0,0,0,0);
    return d;
}

