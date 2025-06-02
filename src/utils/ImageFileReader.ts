export const ImageFileReaderP = (file: File): Promise<[File, string]> => {
    console.log(`ImageFileReaderP -  file: `, file)

    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            const result = e.target?.result
            console.log(`ImageFileReaderP -  e.target: `, e.target)
            if (result && typeof result === 'string') {
                resolve([file, result])
            } else {
                reject([file, new Error('imageFileReaderP - can not read image file')])
            }
        }
        fileReader.onerror = () => {
            reject([file, new Error('Error reading file')])
        }
        // File type객체를 읽어서 string으로 변환하는데, 이 내용은 base64로 변환된다.
        fileReader.readAsDataURL(file)
    })
}

// File
// File {
//  handle: FileSystemFileHandle,
//  path: './strawberry-cake-picture-1106.jpg',
//  relativePath: './strawberry-cake-picture-1106.jpg',
//  name: 'strawberry-cake-picture-1106.jpg',
//  lastModified: 1730869620332
//  lastModifiedDate: "2024-11-06T05:07:00.332Z"
//  type: "image/jpeg"
// }

const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('Failed to read file.'));
        reader.readAsDataURL(file);
    });
};

export default readFileAsDataURL;