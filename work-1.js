// * 이 파일은 함수 연습 파일임.
// * 목적은 함수를 조금 더 이해하려고 함.
// * 매개변수가 객체인 경우가 아래에 작성될 예정임.

function workOne (a,b) {
  // todo 지역변수로 객체를 초기화, 매개변수 a,b두 개가 객체의 키이름과 값 리터럴이 되었음 좋겠음.
  let localValue = {};
  localValue[a] = a;
  localValue[b] = b;
  // for(let i = 0; i < arg[i]; i++){
  //   localValue[i] = arg;
  // }
  return localValue;
}

console.log(workOne('name','hoyeong'));