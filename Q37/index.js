function make_shirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love Typescript'; }
    console.log('creating a ${size} shirt with the message : ${text}');
}
make_shirt();
make_shirt('Medium');
