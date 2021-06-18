const quiz = [
    {question : '（第一問）このサイトを作ったのはだれ？',
    answers : [
      'エチガワ・ユウキ',
      'ドミニク・トレット',
      'ブライアン・オコナー',
      'レティ・オルティス'
    ],
    correct : 'エチガワ・ユウキ'
    },
    {question : '（第二問）安倍総理と誕生日が一緒で09/21が誕生日の兵庫県出身の男性と言えば？',
    answers : [
        '越川雄貴',
        'ドミニク・トレット',
        'ブライアン・オコナー',
        'レティ・オルティス'
      ],
      correct : '越川雄貴'
    },
    {question : '（第三問）もはや足が速い＝といえば？',
    answers : [
        '越川雄貴',
        'ドミニク・トレット',
        'ブライアン・オコナー',
        'レティ・オルティス'
      ],
      correct : '越川雄貴'},
    {question : '（第四問）モンスターエナジーカオスといえば？',
    answers : [
        '越川雄貴',
        'ドミニク・トレット',
        'ブライアン・オコナー',
        'レティ・オルティス'
      ],
      correct : '越川雄貴'},
    {question : '（第五問）最近ワイルドスピードに再度ハマった人物は？',
    answers : [
        '越川雄貴',
        'ドミニク・トレット',
        'ブライアン・オコナー',
        'レティ・オルティス'
      ],
      correct : '越川雄貴'},
    {question : '（第六問）ECHIGAWAといえば？',
    answers : [
        '越川雄貴',
        'ドミニク・トレット',
        'ブライアン・オコナー',
        'レティ・オルティス'
      ],
      correct : '越川雄貴'},
    {question : '（第七問）でもやっぱり選ぶのは？',
    answers : [
        '越川雄貴',
        'ドミニク・トレット',
        'ブライアン・オコナー',
        'レティ・オルティス'
      ],
      correct : '越川雄貴'},
    {question : '（第八問）さっき越川って選んだ？',
    answers : [
        'はい',
        'はい',
        'はい',
        'はい'
      ],
      correct : 'はい'},
    {question : '（第九問）最初に観に行った映画は？',
    answers : [
        '花束みたいな恋をした',
        'ドアロック',
        'ワイルドスピード',
        'ムシキング'
      ],
      correct : '花束みたいな恋をした'},
    {question : '（第十問）これ楽しかったですね。',
    answers : [
        'はい',
        'はい',
        'はい',
        'いいえ'
      ],
      correct : 'いいえ'}
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