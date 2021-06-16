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
  {question : '（第二問）おぼうさんが木魚を叩く意味は何でしょう？',
  answers : [
    'お経にリズムをつけるため',
    '亡くなった人が天国に逝けるように',
    '眠くならないように',
    '悪い霊を寄せ付けないため'
  ],
  correct : '眠くならないように'
  },
  {question : '（第三問）世界最大と呼ばれるアメリカのIT企業4社を「GAFA」と呼びますが、そのGAFAではない1社はどれ？',
  answers : [
    'amazon',
    'Google',
    'Yahoo',
    'Apple'
  ],
  correct : 'Yahoo'},
  {question : '（第四問）「シルバー人材センター」など、高齢者を表す色というイメージがある「銀（シルバー）」高齢者を表す言葉として定着した由来は何でしょうか？',
  answers : [
    '銀座',
    '優先座席',
    '銀歯',
    '白髪'
  ],
  correct : '優先座席'},
  {question : '（第五問）ある高級ブランドがサッカーボールを作ったことがあります。どのブランドでしょうか？',
  answers : [
    'ルイヴィトン',
    'エルメス',
    'プラダ',
    'ロレックス'
  ],
  correct : 'ルイヴィトン'},
  {question : '（第六問）ことわざの「いそがば回れ」の語原となったのはどこでしょうか？',
  answers : [
    '富士山',
    '鳥取砂丘',
    '清水寺',
    '琵琶湖'
  ],
  correct : '琵琶湖'},
  {question : '（第七問）「地震・雷・火事・親父」と怖いものを順に並べた言葉があります。この「親父」は元々自然災害を表していたという説がありますが、それは一体何でしょう？',
  answers : [
    '津波',
    '台風',
    '火山の噴火',
    '雪崩'
  ],
  correct : '台風'},
  {question : '（第八問）日本で人気のファストフードのとあるメニューは、ドイツでは「ポメス」と呼ばれます。そのファストフードは何でしょう？',
  answers : [
    'ハンバーガー',
    'チキンナゲット',
    'フライドポテト',
    'アイスクリーム'
  ],
  correct : 'フライドポテト'},
  {question : '（第九問）お寿司屋さんでは、醤油のことをある色の名前で呼びます。何と呼ぶでしょうか？',
  answers : [
    'アカ',
    'ミドリ',
    'ムラサキ',
    'クロ'
  ],
  correct : 'ムラサキ'},
  {question : '（第十問）ラー油のラーはどんな意味でしょうか？',
  answers : [
    '辛い',
    '香ばしい',
    '赤い',
    '美味しい'
  ],
  correct : '辛い'}
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