// 架空の立候補者データベース
// 将来的にはボートマッチサイトのAPIから取得する想定

export const candidates = [
  {
    id: "yamada_taro",
    name: "山田太郎",
    party: "国民民主党",
    district: "東京都第5区",
    age: 45,
    occupation: "元IT企業経営者",
    profile: "IT企業を20年経営後、政界入り。デジタル改革と教育の充実を訴える。",
    image: null, // 将来的に画像URLを追加
    // ボートマッチ形式の政策回答（5段階: 1=反対, 2=やや反対, 3=中立, 4=やや賛成, 5=賛成）
    policy_answers: {
      economy: {
        consumption_tax: { answer: 2, comment: "消費税は8%に減税すべき。特に食料品は5%に" },
        minimum_wage: { answer: 5, comment: "最低賃金1500円を目指す。段階的引き上げで中小企業支援も並行" },
        corporate_tax: { answer: 3, comment: "大企業には応分の負担を求めつつ、中小企業は減税" }
      },
      social: {
        same_sex_marriage: { answer: 5, comment: "同性婚は法的に認めるべき。多様性ある社会の実現を" },
        selective_surname: { answer: 5, comment: "選択的夫婦別姓は早急に導入すべき" },
        gender_equality: { answer: 5, comment: "女性管理職比率30%以上を義務化" }
      },
      education: {
        free_education: { answer: 5, comment: "大学までの教育完全無償化。給付型奨学金の大幅拡充" },
        teacher_workstyle: { answer: 5, comment: "教員の働き方改革、部活動の地域移行を推進" },
        digital_education: { answer: 5, comment: "プログラミング教育の必修化と1人1台端末の完全整備" }
      },
      security: {
        defense_budget: { answer: 3, comment: "現状維持。ただしサイバー防衛には重点投資" },
        us_alliance: { answer: 4, comment: "日米同盟は基軸としつつ、対等な関係構築を" },
        constitutional_amendment: { answer: 2, comment: "9条改正には慎重。まず議論を深めるべき" }
      },
      environment: {
        nuclear_power: { answer: 2, comment: "原発依存度を下げ、再エネ比率50%を目指す" },
        carbon_neutral: { answer: 5, comment: "2040年カーボンニュートラル達成を目標に" },
        ev_promotion: { answer: 5, comment: "2030年までに新車販売の50%をEV化" }
      }
    },
    key_policies: [
      "教育の完全無償化（幼稚園から大学まで）",
      "IT人材育成プログラムの創設",
      "スタートアップ支援税制の拡充",
      "デジタル庁の権限強化",
      "子育て世帯への月5万円給付"
    ]
  },
  {
    id: "suzuki_hanako",
    name: "鈴木花子",
    party: "立憲民主党",
    district: "神奈川県第3区",
    age: 38,
    occupation: "元弁護士・NPO代表",
    profile: "人権派弁護士として活動後、子どもの貧困問題に取り組むNPOを設立。社会的弱者の支援を訴える。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 1, comment: "消費税5%への減税を即時実施。逆進性の解消を" },
        minimum_wage: { answer: 5, comment: "最低賃金1500円を早期に実現" },
        corporate_tax: { answer: 5, comment: "法人税率を引き上げ、富の再分配を強化" }
      },
      social: {
        same_sex_marriage: { answer: 5, comment: "同性婚の法制化は人権問題。即時実現を" },
        selective_surname: { answer: 5, comment: "選択的夫婦別姓は当然の権利" },
        gender_equality: { answer: 5, comment: "クオータ制導入で政治分野の男女格差解消を" }
      },
      education: {
        free_education: { answer: 5, comment: "教育は権利。完全無償化と給食費無料化を" },
        teacher_workstyle: { answer: 5, comment: "教員増員と残業規制の厳格化" },
        digital_education: { answer: 4, comment: "デジタル教育は重要だが格差解消が前提" }
      },
      security: {
        defense_budget: { answer: 1, comment: "防衛費GDP2%は過剰。社会保障に回すべき" },
        us_alliance: { answer: 3, comment: "対等な日米関係を。地位協定の改定を" },
        constitutional_amendment: { answer: 1, comment: "9条改正には明確に反対。平和憲法を守る" }
      },
      environment: {
        nuclear_power: { answer: 1, comment: "原発ゼロを2030年までに実現" },
        carbon_neutral: { answer: 5, comment: "気候危機対策を最優先に" },
        ev_promotion: { answer: 4, comment: "EV推進と同時に公共交通の充実を" }
      }
    },
    key_policies: [
      "子どもの貧困対策強化（児童手当倍増）",
      "ジェンダー平等基本法の制定",
      "原発ゼロ・再エネ100%社会の実現",
      "最低賃金全国一律1500円",
      "消費税5%への減税"
    ]
  },
  {
    id: "tanaka_ichiro",
    name: "田中一郎",
    party: "自由民主党",
    district: "大阪府第2区",
    age: 58,
    occupation: "元経産省官僚",
    profile: "経産省で30年勤務。産業政策のスペシャリスト。経済成長と安全保障の両立を訴える。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 4, comment: "財政健全化のため現状維持が必要" },
        minimum_wage: { answer: 3, comment: "急激な引き上げは中小企業に打撃。慎重に" },
        corporate_tax: { answer: 2, comment: "国際競争力維持のため法人税は据え置き" }
      },
      social: {
        same_sex_marriage: { answer: 3, comment: "議論は必要だが、慎重に検討すべき" },
        selective_surname: { answer: 2, comment: "家族の一体感を重視。旧姓使用の拡大で対応" },
        gender_equality: { answer: 3, comment: "女性活躍は推進するが、数値目標には慎重" }
      },
      education: {
        free_education: { answer: 3, comment: "高等教育無償化は財源確保が課題" },
        teacher_workstyle: { answer: 4, comment: "教員の負担軽減は必要" },
        digital_education: { answer: 5, comment: "デジタル人材育成は国家戦略として推進" }
      },
      security: {
        defense_budget: { answer: 5, comment: "GDP2%は必要最低限。国民を守る責任" },
        us_alliance: { answer: 5, comment: "日米同盟の深化が安全保障の基軸" },
        constitutional_amendment: { answer: 5, comment: "自衛隊明記で国防を明確化すべき" }
      },
      environment: {
        nuclear_power: { answer: 4, comment: "原発は重要なベースロード電源。新増設も検討" },
        carbon_neutral: { answer: 4, comment: "2050年カーボンニュートラルを着実に" },
        ev_promotion: { answer: 4, comment: "EV普及と同時に全固体電池など技術開発を" }
      }
    },
    key_policies: [
      "防衛力の抜本的強化",
      "経済安全保障の推進",
      "原発再稼働・新増設",
      "デジタル田園都市構想の推進",
      "中小企業の生産性向上支援"
    ]
  },
  {
    id: "sato_yuki",
    name: "佐藤由紀",
    party: "日本維新の会",
    district: "大阪府第7区",
    age: 42,
    occupation: "元大阪府議会議員",
    profile: "大阪府議を3期務め、行政改革を推進。徹底した無駄削減と規制緩和を訴える。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 2, comment: "消費税は軽減税率廃止の上で8%に" },
        minimum_wage: { answer: 4, comment: "地域の実情に応じた引き上げを" },
        corporate_tax: { answer: 2, comment: "法人税減税で企業誘致、雇用創出を" }
      },
      social: {
        same_sex_marriage: { answer: 4, comment: "同性婚は認める方向で。ただし国民的議論を" },
        selective_surname: { answer: 4, comment: "選択的夫婦別姓は個人の自由として認めるべき" },
        gender_equality: { answer: 4, comment: "結果の平等より機会の平等を重視" }
      },
      education: {
        free_education: { answer: 5, comment: "教育無償化は維新の一丁目一番地" },
        teacher_workstyle: { answer: 4, comment: "民間人材の登用で教育の質向上を" },
        digital_education: { answer: 5, comment: "プログラミング必修化と起業家教育を" }
      },
      security: {
        defense_budget: { answer: 4, comment: "必要な防衛力は確保すべき" },
        us_alliance: { answer: 4, comment: "日米同盟は重要。自主防衛力も強化" },
        constitutional_amendment: { answer: 5, comment: "憲法改正で自衛隊明記と緊急事態条項を" }
      },
      environment: {
        nuclear_power: { answer: 3, comment: "安全が確認された原発は再稼働。将来的には依存度低下" },
        carbon_neutral: { answer: 4, comment: "技術革新でカーボンニュートラル達成を" },
        ev_promotion: { answer: 4, comment: "規制緩和でEV普及を加速" }
      }
    },
    key_policies: [
      "身を切る改革（議員報酬3割カット）",
      "教育無償化の全国展開",
      "規制改革・岩盤規制の打破",
      "道州制の実現",
      "社会保険料の抜本改革"
    ]
  },
  {
    id: "watanabe_kenji",
    name: "渡辺健二",
    party: "れいわ新選組",
    district: "比例代表",
    age: 35,
    occupation: "元介護士・労働組合活動家",
    profile: "介護現場で10年勤務後、労働者の権利向上を訴えて政界入り。消費税廃止と積極財政を主張。",
    image: null,
    policy_answers: {
      economy: {
        consumption_tax: { answer: 1, comment: "消費税は廃止。財源は国債発行と累進課税強化で" },
        minimum_wage: { answer: 5, comment: "最低賃金1500円は通過点。将来的に2000円を" },
        corporate_tax: { answer: 5, comment: "大企業・富裕層への課税強化で再分配を" }
      },
      social: {
        same_sex_marriage: { answer: 5, comment: "同性婚は基本的人権。即時法制化を" },
        selective_surname: { answer: 5, comment: "選択的夫婦別姓は当然。戸籍制度自体の見直しも" },
        gender_equality: { answer: 5, comment: "あらゆる差別の撤廃を" }
      },
      education: {
        free_education: { answer: 5, comment: "教育は完全無償化。奨学金は給付型のみに" },
        teacher_workstyle: { answer: 5, comment: "教員を大幅増員、少人数学級の実現を" },
        digital_education: { answer: 4, comment: "デジタル教育も重要だが、人間教育が基本" }
      },
      security: {
        defense_budget: { answer: 1, comment: "防衛費倍増は不要。外交努力で平和を" },
        us_alliance: { answer: 2, comment: "対米従属からの脱却。自主外交を" },
        constitutional_amendment: { answer: 1, comment: "憲法9条は世界に誇る平和条項。守り抜く" }
      },
      environment: {
        nuclear_power: { answer: 1, comment: "原発即時停止。被災者支援の継続を" },
        carbon_neutral: { answer: 5, comment: "グリーンニューディールで雇用と環境を両立" },
        ev_promotion: { answer: 4, comment: "EV推進と同時に公共交通の無料化を" }
      }
    },
    key_policies: [
      "消費税廃止",
      "最低賃金全国一律1500円以上",
      "奨学金チャラ（債務免除）",
      "原発即時停止",
      "介護・保育士の賃金月10万円アップ"
    ]
  }
];

// 政策カテゴリの定義（日本語ラベル）
export const policyCategories = {
  economy: {
    label: "経済・財政",
    questions: {
      consumption_tax: "消費税の扱い",
      minimum_wage: "最低賃金の引き上げ",
      corporate_tax: "法人税の扱い"
    }
  },
  social: {
    label: "社会・人権",
    questions: {
      same_sex_marriage: "同性婚の法制化",
      selective_surname: "選択的夫婦別姓",
      gender_equality: "ジェンダー平等施策"
    }
  },
  education: {
    label: "教育",
    questions: {
      free_education: "教育無償化",
      teacher_workstyle: "教員の働き方改革",
      digital_education: "デジタル教育の推進"
    }
  },
  security: {
    label: "安全保障・外交",
    questions: {
      defense_budget: "防衛費の増額",
      us_alliance: "日米同盟の強化",
      constitutional_amendment: "憲法改正（9条）"
    }
  },
  environment: {
    label: "環境・エネルギー",
    questions: {
      nuclear_power: "原発政策",
      carbon_neutral: "カーボンニュートラル",
      ev_promotion: "EV普及促進"
    }
  }
};

export default candidates;
