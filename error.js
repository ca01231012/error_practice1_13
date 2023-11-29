function checkValueFinally(value) {
    if (value == -1) {
        throw new Error("\u5024\u304C -1 \u306A\u306E\u3067\u30A8\u30E9\u30FC\u3067\u3059");
    }
}
try {
    checkValueFinally(-1);
}
catch (error) {
    console.log(error.message);
}
