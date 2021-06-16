const quiz = [
  {question : '（第一問）ゲーム市場、最も売れたゲーム機は次のうちどれ？',
  answers : [
    'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
  ],
  correct : 'ニンテンドーDS'
  },
  {question : '（第二問）こんにちはいうのはいつ？',
  answers : [
    '朝5時',
    '夜2時',
    '夜20時',
    '昼11時'
  ],
  correct : '昼11時'
  },
  {question : '（第三問）GAFAじゃないのは次のうちどれ？',
  answers : [
    'amazon',
    'Google',
    'Yahoo',
    'Apple'
  ],
  correct : 'Yahoo'}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文・選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct ===  e.target.textContent){
    window.alert('正解！！');
    score++;
  } else {
    window.alert('不正解・・・');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // まだあればこちら実行
    setupQuiz();
  } else{
    // 問題なければこちら実行する
    window.alert('終了！\nあなたの正解数は' + score + '/' + quizLength +'です！');
  }
};
// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < $button.length) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}