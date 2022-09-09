export function base64ToFile(base64Image: string): Blob {
    const split = base64Image.split(',');
    const type = split[0].replace('data:', '').replace(';base64', '');
    const byteString = Buffer.from(split[1], 'base64');
    const byteArray = Uint8Array.from(byteString);

    return new Blob([byteArray], {type});
}