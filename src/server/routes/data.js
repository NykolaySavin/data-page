
export function getFile(context) {
    const file = require(`../../resources/${context.params.fileName}`);
    context.body=file;
}