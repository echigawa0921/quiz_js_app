const quiz = [
    {question : '（第一問）越川がゲーム好きにおすすめするゲームはどれ？',
    answers : [
      'アンチャーテッド',
      'ラストオブアス',
      'モンスターハンター',
      'ストリートファイター'
    ],
    correct : 'ラストオブアス'},
    {question : '（第二問）越川が漫画好きにおすすめする漫画はどれ？',
    answers : [
      '家庭教師ヒットマンリボーン',
      'ハンターハンター',
      'ワンピース',
      '呪術廻戦'
    ],
    correct : 'ハンターハンター'},
    {question : '（第三問）越川が一番飲む飲料はどれ？',
    answers : [
      'モンスターエナジー',
      '炭酸水（無糖）',
      '爽健美茶',
      'オレンジジュース'
    ],
    correct : 'モンスターエナジー'},
    {question : '（第四問）',
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