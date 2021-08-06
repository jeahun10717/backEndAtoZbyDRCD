const { normalize } = require('path');
const path = require('path');

// * POSIX (UNIX : mac, Linux): 'Users/temp/myfile.html'
// * WINDOWS : 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname : 해당 파일의 디렉토리 네임을 return 해줌
console.log(path.dirname);

// extention : 해당파일의 확장자를 return 해줌
console.log(path.extname(__filename));


// parse : 파일 경로를 분리하여 json 형태로 출력
const parsed = path.parse(__filename);

console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute : 입력값이 절대주소일 때 true, 상대경로일 때 false;
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize : 파일경로에 이상한 문자열들이나 잘못된 경로가 입력되었을 때 수정해 줌
console.log(path.normalize('./folder//////////////sub'));

// join : 기본적으로 경로를 생성하게 될 때 직접 생성하게 되면 운영체제마다 다르게 적용될 수 있기 때문애
//        join, path.sep 을 쓰는 것을 추천한다.
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));