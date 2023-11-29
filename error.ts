function checkValueFinally(value:number){
    if(value==-1){
        throw new Error(`値が -1 なのでエラーです`);
    }
}

try{
    checkValueFinally(-1);
}catch(error){
    console.log(error.message);
}