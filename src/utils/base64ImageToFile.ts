const base64ImageToFile = (base64: string, filename: string): File => {
    const base64Image = base64 as string;
    // Base64 문자열을 Blob으로 변환
    const byteString = atob(base64Image?.split(',')[1]); // Base64에서 데이터 부분만 가져오기
    const mimeString = base64Image?.split(',')[0].split(':')[1].split(';')[0]; // MIME 타입 추출
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    
    const blob = new Blob([ab], { type: mimeString }); // Blob 생성
    return new File([blob], filename, { type: mimeString }); // File 객체 생성
};

export default base64ImageToFile;
